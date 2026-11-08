import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, name, company } = await req.json().catch(() => ({}));

  // Honeypot filled in: pretend it worked
  if (company) return NextResponse.json({ ok: true });

  if (
    typeof email !== 'string' ||
    typeof name !== 'string' ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    name.trim().length < 2
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const key = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!key || !listId) {
    console.error('Mailchimp env vars are missing');
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  // The data center is the part after the dash in the API key, e.g. "us21"
  const dc = key.split('-').pop();
  const address = email.trim().toLowerCase();
  const hash = createHash('md5').update(address).digest('hex');
  const [first, ...rest] = name.trim().split(/\s+/);

  // PUT adds the person, or leaves them alone if they're already on the list
  const res = await fetch(
    `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${hash}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`ds3:${key}`).toString('base64')}`,
      },
      body: JSON.stringify({
        email_address: address,
        status_if_new: 'subscribed', // use 'pending' to send a confirmation email
        merge_fields: { FNAME: first, LNAME: rest.join(' ') },
      }),
    },
  );

  if (res.ok) return NextResponse.json({ ok: true });

  const err = await res.json().catch(() => ({}));
  console.error('Mailchimp error:', res.status, err.title, err.detail);

  if (res.status === 400) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
}
