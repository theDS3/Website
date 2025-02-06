import { render } from '@react-email/render';
import { formatISO } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, {
  ParticipantStatus,
  type IParticipant,
} from '@/db/models/participant';

import RejectionEmail from '@/components/Emails/rejection';
import { env } from '@/env/server.mjs';
import { VerificationError } from '@/error';
import { generateMailer } from '@/utils';
import { verifyEmails } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    const { emails }: { emails: string[] } = await request.json();

    verifyEmails(emails);

    const transporter = generateMailer(env.GMAIL_USER, env.GMAIL_PASSWORD);

    connectDB();

    // Cases to categorize each email
    const results: Record<string, string[]> = {
      PARTICIPANT_DNE: [],
      STILL_IN_REVIEW: [],
      ALREADY_REJECTED: [],
      REJECTED: [],
      ERROR: [],
    };

    let numEmailsProcessed = 0;

    for (let email of emails) {
      console.log(
        `Processing ${email} with Remaining: ${emails.length - 1 - numEmailsProcessed}`,
      );

      const participant: IParticipant | null = await Participant.findOne({
        email,
      });

      // Checks for Non-Existent Participants
      if (!participant) {
        results['PARTICIPANT_DNE'].push(email);
        continue;
      }

      // Check if participant is still in REVIEW
      if (participant.status === ParticipantStatus.IN_REVIEW) {
        results['STILL_IN_REVIEW'].push(email);
        continue;
      }

      // Check if participant has already been rejected
      if (
        participant.status === ParticipantStatus.REJECTED &&
        participant.contact?.get('rejection')
      ) {
        results['ALREADY_REJECTED'].push(email);
        continue;
      }

      // Rendering the rejection email for the participant
      const emailHTML = render(
        RejectionEmail({
          fullName: `${participant.firstName} ${participant.lastName}`,
        }),
      );

      // Sending Rejection Email to participant
      const emailRequest = await transporter.sendMail({
        from: env.GMAIL_USER,
        to: participant.email,
        subject: `Update on Your DS3 Datathon Application`,
        html: emailHTML,
      });

      participant.status = ParticipantStatus.REJECTED;

      // Verifies if the email has been received or not
      if (emailRequest.response.includes('250 2.0.0 OK')) {
        results['REJECTED'].push(email);

        participant.contact?.set('rejection', {
          status: true,
          timestamp: formatISO(new Date(), {
            representation: 'complete',
            format: 'extended',
          }),
        });

        // Update Participant Status and EmailStatus fields
        participant.save();
      } else {
        results['ERROR'].push(email);
      }

      numEmailsProcessed++;
    }

    return NextResponse.json({ ...results }, { status: 200 });
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

    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
