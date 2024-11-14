import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';

import { VerificationError } from '@/error';
import { isNumeric, verifyRequest } from '@/verify';
import { authOptions } from '../../auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Participant, { IParticipant } from '@/db/models/participant';

// This endpoint is used to fetch all the participants from the db
export async function GET(request: NextRequest) {
  // Check if this session check works???
  const session = await getServerSession(authOptions);
  if (!session?.user.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    verifyRequest(request.headers);
    connectDB();

    const list: IParticipant[] = await Participant.find({}).select(['_id', 'firstName', 'lastName', 'email', 'code', 'status']);

    return NextResponse.json(list, { statusText: 'SUCCESS', status: 200 });
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
