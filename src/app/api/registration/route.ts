import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant from '@/db/models/participant';

interface FormSubmisson {
  firstName: string;
  lastName: string;
  email: string;
  dietaryRestrictions: string[];
}

let submission: FormSubmisson = {
  firstName: '',
  lastName: '',
  email: '',
  dietaryRestrictions: [],
};

let code = '';

connectDB();

export async function POST(request: NextRequest) {
  try {
    submission = await request.json();
    code = await crypto.randomUUID().toString();

    // Creates and Saves the User
    await new Participant({ ...submission, code }).save();

    return NextResponse.json(
      {
        message: `${submission.firstName} ${submission.lastName} with ${submission.email} created successfully!`,
      },
      { status: 201 },
    );
  } catch (error: any) {
    if (error instanceof SyntaxError) {
      // Invalid Submission
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    } else if (error.code === 11000) {
      // Duplicate Error
      if (error.keyValue.email === submission.email) {
        // Same Email Exists
        return NextResponse.json(
          {
            type: 'EmailError',
            error: `${submission.firstName} ${submission.lastName} with ${submission.email} already exists`,
          },
          { status: 400 },
        );
      } else if (error.keyValue.code === code) {
        // Same Code Exists
        return NextResponse.json(
          {
            type: 'CodeError',
            error: `${submission.firstName} ${submission.lastName} with ${submission.email} already exists`,
          },
          { status: 400 },
        );
      }
    }

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
