import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant from '@/db/models/participant';

import { getAvailableServicesByDate, verifyCode, verifyRequest } from '@/utils';

export async function PATCH(request: NextRequest) {
  try {
    // Authenticates Request to see if it comes from DS3
    const { isRequestValid, requestError } = verifyRequest(request);
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

    const service = request.nextUrl.searchParams.get('service') || '';

    const participant = await Participant.findOne({ code });

    if (!participant)
      return NextResponse.json(
        {
          type: 'ParticipantError',
          error: `Participant with code: ${code} does not exist`,
        },
        { status: 400 },
      );

    if (participant.services.has(date)) {
      participant.services.get(date)[service] = {
        hasUsed: true,
        timestamp: Date.now(),
      };

      await participant.save();

      return NextResponse.json(
        {
          availableServices: getAvailableServicesByDate(
            participant.services,
            date,
          ),
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        type: 'ParticipantError',
        error: `Participant with code: ${code} does not have ${service} on ${date}`,
      },
      { status: 400 },
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
