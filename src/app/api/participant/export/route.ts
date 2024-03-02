import { json2csv } from 'json-2-csv';
import { NextResponse, type NextRequest } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, {
  type IParticipant,
  type Service,
} from '@/db/models/participant';

import { QueryError, VerificationError } from '@/error';
import { isDate, verifyRequest } from '@/verify';

export async function GET(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    const date = isDate(request.nextUrl.searchParams.get('date'));

    // Checks if there exists at least one participant with services for the date
    const participant: IParticipant | null = await Participant.findOne({
      [`services.${date}`]: { $exists: true },
    });

    if (!participant)
      throw new VerificationError({
        name: 'INVALID_QUERY_PARAMS',
        message: 'Invalid date',
        cause: `Services do not exist for ${date}`,
      });

    connectDB();

    // Retrieves all participants with services for the date
    const cursor = Participant.find({
      [`services.${date}`]: { $exists: true },
    }).cursor();

    // Transforms the participant into a CSV compatible object
    const transformer = (participant: IParticipant, date: string) => {
      let services: Record<string, 1 | 0> = {};

      if (participant.services?.has(date))
        for (const [service, usage] of Object.entries(
          participant.services?.get(date) as Service,
        ))
          services[service] = usage.status ? 1 : 0;

      return {
        'First Name': participant.firstName,
        'Last Name': participant.lastName,
        Email: participant.email,
        ...services,
      };
    };

    const data = [];

    for (
      let participant: IParticipant = await cursor.next();
      participant != null;
      participant = await cursor.next()
    )
      data.push(transformer(participant, date));

    await cursor.close();

    if (data.length === 0)
      throw new QueryError({
        name: 'PARTICIPANT_DNE',
        message: `No participants with services found for ${date}`,
        cause: 'Please verify database',
      });

    // Converts the JSON data to CSV
    const csv = await json2csv(data, {
      checkSchemaDifferences: true,
      emptyFieldValue: 'ERROR',
      expandNestedObjects: false,
      unwindArrays: true,
    });

    // Creates a CSV attachment
    const headers = new Headers();
    headers.set('Content-Type', 'text/csv');
    headers.set('Content-Disposition', `attachment; filename=${date}.csv`);

    return new NextResponse(csv, { status: 200, statusText: 'OK', headers });
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError || error instanceof QueryError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches a QueryError and returns a 500 error
    if (error instanceof QueryError)
      return NextResponse.json({ ...error }, { status: 500 });

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
