import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, { type IParticipant } from '@/db/models/participant';

import { QueryError, VerificationError } from '@/error';
import { getAvailableServicesByLabel } from '@/utils';
import { isDate, isUUID4, verifyRequest } from '@/verify';

export async function GET(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collects the code and date from the request
    const code = isUUID4(request.nextUrl.searchParams.get('code'));
    const date = isDate(request.nextUrl.searchParams.get('date'));

    connectDB();

    // Retrieves a participant with a specific code and has services for a specific date
    const participant: IParticipant | null = await Participant.findOne({
      code,
      [`services.${date}`]: { $exists: true },
    });

    // If the participant does not exist or does not have services for the date, throw a QueryError
    if (!participant || !participant.services)
      throw new QueryError({
        name: 'PARTICIPANT_DNE',
        message: 'Participant does not exist',
        cause: `Participant with code ${code} does not exist and/or have services for ${date}`,
      });

    // If the participant does exist and has services for the date, return with all available services for the date
    return NextResponse.json(
      {
        firstName: participant.firstName,
        lastName: participant.lastName,
        school: participant.school,
        email: participant.email,
        phoneNum: participant?.phoneNum,
        dietaryRestrictions: participant.dietaryRestrictions,
        code: participant.code,
        availableServices: getAvailableServicesByLabel(
          participant.services,
          date,
        ),
      },
      { status: 200 },
    );
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError || error instanceof QueryError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

/**
 * Endpoint to create a new participant and store in DB
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
  let submission: Pick<
    IParticipant,
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'phoneNum'
    | 'school'
    | 'countryOfResidence'
    | 'dietaryRestrictions'
  > = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: undefined,
    school: '',
    countryOfResidence: '',
    dietaryRestrictions: '',
  };

  let code = '';

  try {
    verifyRequest(request.headers);

    // Collect the registration from Google Sheets and generate unique code for participant
    submission = await request.json();
    code = await crypto.randomUUID().toString();

    connectDB();

    // Creates the participant and stores in the DB
    await new Participant({ ...submission, code }).save();

    return NextResponse.json(
      {
        type: 'SUCCESS',
        message: `${submission.firstName} ${submission.lastName} with ${submission.email} created successfully!`,
      },
      { status: 201 },
    );
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

    // Missing Body Parameters
    if (error.name === 'ValidationError')
      return NextResponse.json(
        {
          type: 'MISSING_BODY_PARAMS',
          message: 'One or more required parameters are missing',
          cause: `The following keys are required: ${Object.keys(
            error.errors,
          ).join(', ')}`,
        },
        { status: 400 },
      );

    // Duplicate Error
    if (error.code === 11000) {
      // Same Email Exists
      if (error.keyValue.email === submission.email)
        return NextResponse.json(
          {
            type: 'PARTICIPANT_EXISTS',
            message: 'Participant with same email already exists',
            cause: `Duplicate Entry: ${submission.email}`,
          },
          { status: 400 },
        );

      // Same Phone Number Exists
      if (error.keyValue.phoneNum === submission.phoneNum)
        return NextResponse.json(
          {
            type: 'PARTICIPANT_EXISTS',
            message: 'Participant with same phone number already exists',
            cause: `Duplicate Entry: ${submission.phoneNum}`,
          },
          { status: 400 },
        );
    }

    // Missing Headers
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
