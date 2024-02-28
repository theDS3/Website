import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, { IParticipant } from '@/db/models/participant';

import { VerificationError } from '@/error';
import { getAvailableServicesByLabel } from '@/utils';
import { isDate, isUUID4, verifyRequest } from '@/verify';

export async function GET(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collects the code and date from the request
    const code = isUUID4(request.nextUrl.searchParams.get('code') || '');
    const date = isDate(request.nextUrl.searchParams.get('date') || '');

    connectDB();

    // Retrives a participant with a specific code and has services for a specific date
    const participant: IParticipant | null = await Participant.findOne({
      code,
      [`services.${date}`]: { $exists: true },
    });

    // If the participant does not exist or does not have services for the date, return a 400 error
    if (!participant || !participant.services)
      return NextResponse.json(
        {
          type: 'ParticipantError',
          error: `Participant with code ${code} does not exist and/or have services for ${date}`,
        },
        { status: 400 },
      );

    // If the participant does exist and has services for the date, return with all available services for the date
    return NextResponse.json(
      {
        firstName: participant.firstName,
        lastName: participant.lastName,
        school: participant.school,
        email: participant.email,
        dietaryRestrictions: participant.dietaryRestrictions,
        code: participant.code,
        availableServices: getAvailableServicesByLabel(
          participant.services,
          date,
        ),
      },
      { status: 200 },
    );
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
