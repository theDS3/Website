import { render } from '@react-email/render';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

import connectDB from '@/db/config';
import Participant, {
  EmailStatus,
  ParticipantStatus,
} from '@/db/models/participant';
import { env } from '@/env/server.mjs';
import ParticipantAcceptance from '@email/participant-acceptance';

interface EmailRequest {
  emails: string[];
}

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: NextRequest) {
  try {
    connectDB();

    const { emails }: EmailRequest = await request.json();

    if (emails.length === 0)
      return NextResponse.json(
        { type: 'InputError', error: 'Must provide a list of valid emails' },
        { status: 400 },
      );

    const status: Record<string, string> = {};

    for (let email of emails) {
      console.log(
        `Processing ${email} with Remaining: ${
          emails.length - 1 - Object.keys(status).length
        }`,
      );
      const participant = await Participant.findOne({ email });

      // Checks for Non-Existent Participants
      if (!participant) {
        status[email] = 'DNE';
        continue;
      }

      // Checks if Email has already been send
      if (
        participant.status === ParticipantStatus.EMAILED_ACCEPTANCE &&
        participant.emailStatus.get('participant-acceptance') ===
          EmailStatus.RECEIVED
      ) {
        status[email] = 'ALREADY RECEIVED';
        continue;
      }

      // Rendering the email for the participant
      const emailHTML = render(
        ParticipantAcceptance({
          fullName: `${participant.firstName} ${participant.lastName}`,
          imageSrc: env.EMAIL_BANNER_IMAGE_URL,
        }),
      );

      // Sending Email to participant
      const emailRequest = await transporter.sendMail({
        from: env.GMAIL_USER,
        to: participant.email,
        subject: `Welcome to DS3 Datathon 2024, ${participant.firstName} ${participant.lastName}!`,
        html: emailHTML,
      });

      participant.status = ParticipantStatus.EMAILED_ACCEPTANCE;

      // Verifies if the email has been received or not
      status[email] = emailRequest.response.includes('250 2.0.0 OK')
        ? EmailStatus.RECEIVED
        : EmailStatus.NOT_RECEIVED;
      participant.emailStatus?.set(
        'participant-acceptance',
        status[email] as EmailStatus,
      );

      // Update Participant Status and EmailStatus fields
      participant.save();
    }

    return NextResponse.json({ ...status }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
