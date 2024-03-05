import { formatISO } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, { type IParticipant } from '@/db/models/participant';

import { QueryError, VerificationError } from '@/error';
import { getAvailableServicesByLabel } from '@/utils';
import { isDate, isUUID4, verifyRequest } from '@/verify';

export async function PATCH(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collects the code, date, service from the request
    const code = isUUID4(request.nextUrl.searchParams.get('code'));
    const date = isDate(request.nextUrl.searchParams.get('date'));
    const serviceLabel = request.nextUrl.searchParams.get('serviceLabel') || '';

    if (!serviceLabel || serviceLabel.length === 0)
      throw new VerificationError({
        name: 'INVALID_QUERY_PARAMS',
        message: 'Service Label is required',
        cause: 'Service Label is required',
      });

    connectDB();

    // Retrieves a participant with a specific code and has the service for a specific date
    const participant: IParticipant | null = await Participant.findOne({
      code,
      [`services.${date}.${serviceLabel}`]: { $exists: true },
    });

    // If the participant does not exist or does not have services for the date, throw a QueryError
    if (!participant || !participant.services)
      throw new QueryError({
        name: 'PARTICIPANT_DNE',
        message: 'Participant does not exist',
        cause: `Participant with code ${code} does not exist and/or have services for ${date}`,
      });

    const service = participant.services.get(date);

    // If the participant does exist and has services for the date, update the service usage to USED
    if (service && !service[serviceLabel].status) {
      service[serviceLabel] = {
        status: true,
        timestamp: formatISO(new Date(), {
          representation: 'complete',
          format: 'extended',
        }),
      };

      await participant.save();
    } else {
      throw new QueryError({
        name: 'SERVICE_NOT_AVAILABLE',
        message: 'Service does not exist or has been used',
        cause: `Participant with code ${code} does not have service ${serviceLabel} for ${date}`,
      });
    }

    // If the participant does exist and has services for the date, return with all available services for the date
    return NextResponse.json(
      {
        availableServices: getAvailableServicesByLabel(
          participant.services,
          date,
        ),
      },
      { status: 200 },
    );
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError || error instanceof QueryError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}