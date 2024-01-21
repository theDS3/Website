import { hash } from 'bcryptjs';
import { NextResponse, type NextRequest } from 'next/server';

import { connectDB } from '@/db/config';
import Admin from '@/db/models/admin';
import { verifyRequest } from '@/verify';

export async function POST(request: NextRequest) {
  let submission = { email: '', password: '' };

  try {
    // Authenticates request to see if it comes from DS3
    const { isRequestValid, requestError } = verifyRequest(request.headers);
    if (!isRequestValid) return requestError;

    connectDB();

    submission = await request.json();

    // Hashes the password before saving it
    const hashedPassword = await hash(submission.password, 10);

    // This creates and saves the admin user
    await new Admin({ email: submission.email, hashedPassword }).save();

    return NextResponse.json(
      { message: `${submission.email} created successfully!` },
      { status: 201 },
    );
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      // invalid submission
      return NextResponse.json(
        { type: 'UnauthorizedError', error: 'Invalid request' },
        { status: 400 },
      );
    } else if (error.code === 11000) {
      // duplicate error
      if (error.keyValue.email === submission.email) {
        // same email exists
        return NextResponse.json(
          {
            type: 'EmailError',
            error: `${submission.email} already exists`,
          },
          { status: 400 },
        );
      }
    }
    // other errors
    return NextResponse.json(
      { type: 'Error', error: error.message },
      { status: 400 },
    );
  }
}
