import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';
import { NextResponse, type NextRequest } from 'next/server';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';

import { QueryError, VerificationError } from '@/error';
import { verifyRequest, verifyEmails } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collect the volunteer emails
    const { emails }: { emails: string[] } = await request.json();

    verifyEmails(emails);

    connectDB();

    // Creates and Saves the Mock Volunteer accounts
    const results: Record<string, string> = {};

    for (const email of emails) {
      // Checks if email already exists
      if (await Volunteer.exists({ email }))
        throw new QueryError({
          name: 'VOLUNTEER_EXISTS',
          message: 'Volunteer with same email already exists',
          cause: `Duplicate Entry: ${email}`,
        });

      const password = faker.internet.password();

      await new Volunteer({
        email,
        hashedPassword: await hash(password, 10),
        isAdmin: false,
      }).save();

      results[email] = password;
    }

    return NextResponse.json({ type: 'SUCCESS', results }, { status: 201 });
  } catch (error: any) {
    // Invalid Body
    if (error instanceof SyntaxError)
      return NextResponse.json(
        {
          type: 'INVALID_BODY',
          message: 'Request Body does not match JSON format',
          cause: `${error.name}: ${error.message}`,
        },
        { status: 400 },
      );

    // Missing Headers
    if (error instanceof VerificationError || error instanceof QueryError)
      return NextResponse.json({ ...error }, { status: 400 });

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
