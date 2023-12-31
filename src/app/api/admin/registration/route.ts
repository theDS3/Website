import Administrator, { type IAdministrator } from '@/db/models/administrator';
import { NextResponse, type NextRequest } from 'next/server';
import { connectDB } from '@/db/config';
import bcrypt from 'bcryptjs';

let submission: Omit<IAdministrator, 'code'> = {
  email: '',
  password: '',
};

export async function POST(request: NextRequest) {
  try {
    connectDB();

    submission = await request.json();

    const hashedPassword = await bcrypt.hash(submission.password, 10);

    submission.password = hashedPassword;

    // this creates and saves the admin user
    await new Administrator({ ...submission }).save();

    return NextResponse.json(
      {
        message: `${submission.email} created successfully!`,
      },
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
