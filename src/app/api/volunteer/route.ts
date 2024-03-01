import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';
import { NextResponse, type NextRequest } from 'next/server';

import { connectDB } from '@/db/config';
import Volunteer from '@/db/models/volunteer';

import { QueryError, VerificationError } from '@/error';
import { verifyRequest } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    connectDB();

    // Collect the volunteer emails
    const { emails }: { emails: string[] } = await request.json();

    // Checks if emails exist
    if (!emails)
      throw new VerificationError({
        name: 'INVALID_BODY',
        message: 'Request Body is missing key: emails',
        cause: 'Include emails with a list of unique emails',
      });

    // Checks if they are an array of emails
    if (typeof emails !== 'object' || emails.length === 0)
      throw new VerificationError({
        name: 'INVALID_BODY',
        message: 'Request Body contains no emails',
        cause: 'Must contain a list of unique emails',
      });

    // Check if the emails are all unique
    if (emails.length !== new Set(emails).size)
      throw new VerificationError({
        name: 'INVALID_BODY',
        message: 'Request Body contains duplicate emails',
        cause: 'Remove duplicate emails from the request body',
      });

    // Creates and Saves the Mock Volunteer accounts
    const results: Record<string, string> = {};

    for (const email of emails) {
      // Checks for empty string email
      if (email.length === 0)
        throw new VerificationError({
          name: 'INVALID_BODY',
          message: 'Request Body contains empty email',
          cause: 'Remove empty emails from the request body',
        });

      // Checks if email is from UOFT
      if (!email.includes('@mail.utoronto.ca'))
        throw new VerificationError({
          name: 'INVALID_BODY',
          message: 'All emails must be @mail.utoronto.ca',
          cause: `${email} is not a valid email`,
        });

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
