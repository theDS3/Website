import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/db/config';
import { VerificationError } from '@/error';
import { verifyRequest } from '@/verify';
import { authOptions } from '../../auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import Participant, { IParticipant } from '@/db/models/participant';

// This endpoint is used to fetch all the participants from the db
export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    verifyRequest(request.headers);
    connectDB();

    const apps: IParticipant[] = await Participant.find({}).select([
      '_id',
      'firstName',
      'lastName',
      'school',
      'status',
      'createdAt',
      'updatedAt',
      'email',
    ]);

    return NextResponse.json({ apps, count: apps.length }, { statusText: 'SUCCESS', status: 200 });
  } catch (error: any) {
    if (error instanceof VerificationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH: Update participant status
export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {

    connectDB();

    let body;
    try {
      body = await request.json();
    } catch (err) {
      console.error('Error parsing JSON:', err);
      return NextResponse.json(
        { error: 'Invalid JSON body.' },
        { status: 400 },
      );
    }

    const { participantId, newStatus } = body;

    if (!participantId || !newStatus) {
      return NextResponse.json(
        { error: 'Participant ID and new status are required.' },
        { status: 400 },
      );
    }

    const validStatuses = ['ACCEPTED', 'IN REVIEW'];
    if (!validStatuses.includes(newStatus)) {
      return NextResponse.json(
        {
          error: `Invalid status. Allowed statuses: ${validStatuses.join(', ')}`,
        },
        { status: 400 },
      );
    }

    // Find the participant
    const participant = await Participant.findById(participantId);
    if (!participant) {
      return NextResponse.json(
        { error: 'Participant not found.' },
        { status: 404 },
      );
    }

    // Update the participant's status
    participant.status = newStatus;
    await participant.save();

    return NextResponse.json(
      {
        message: 'Status updated successfully.',
        participant: {
          _id: participant._id,
          firstName: participant.firstName,
          lastName: participant.lastName,
          email: participant.email,
          status: participant.status,
          updatedAt: participant.updatedAt,
        },
      },
      { statusText: 'SUCCESS', status: 200 });
    );
  } catch (error: any) {
    if (error instanceof VerificationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error('Unhandled error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
