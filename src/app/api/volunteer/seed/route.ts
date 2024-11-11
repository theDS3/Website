import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';

import { VerificationError } from '@/error';
import { isNumeric, verifyRequest } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collects the numOfVolunteers from the request
    const numOfVolunteers = isNumeric(
      request.nextUrl.searchParams.get('numOfVolunteers'),
      1,
      10,
      'numOfVolunteers',
    );

    connectDB();

    await Volunteer.deleteMany({});

    // Creates and Saves the Mock Volunteer accounts
    const volunteers = [];
    for (let i = 0; i < numOfVolunteers; i++) {
      const email = faker.internet.email();
      const password = faker.internet.password();
      volunteers.push({ email, password });

      await new Volunteer({
        email,
        hashedPassword: await hash(password, 10),
        isAdmin: false,
      }).save();
    }

    return NextResponse.json(
      { type: 'SUCCESS', results: volunteers },
      { status: 201 },
    );
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
