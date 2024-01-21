import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant from '@/db/models/participant';

import { getAvailableServicesByDate } from '@/utils';
import { verifyCode, verifyRequest } from '@/verify';

export async function GET(request: NextRequest) {
  try {
    // Authenticates Request to see if it comes from DS3
    const { isRequestValid, requestError } = verifyRequest(request.headers);
    if (!isRequestValid) return requestError;

    connectDB();

    const code = request.nextUrl.searchParams.get('code') || '';
    const { isCodeValid, codeError } = verifyCode(code);
    if (!isCodeValid)
      return NextResponse.json({ error: codeError }, { status: 400 });

    const date = request.nextUrl.searchParams.get('date') || '';
    // const { isDateValid, dateError } = verifyDate(date);
    // if (!isDateValid)
    //   return NextResponse.json({ error: dateError }, { status: 400 });

    const participant = await Participant.findOne({ code });

    if (!participant)
      return NextResponse.json(
        {
          type: 'ParticipantError',
          error: `Participant with code: ${code} does not exist`,
        },
        { status: 400 },
      );

    return NextResponse.json(
      {
        firstName: participant.firstName,
        lastName: participant.lastName,
        school: participant.school,
        email: participant.email,
        dietaryRestrictions: participant.dietaryRestrictions,
        code: participant.code,
        availableServices: getAvailableServicesByDate(
          participant.services,
          date,
        ),
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
