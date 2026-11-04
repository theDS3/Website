import { NextResponse } from 'next/server';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/formResponse';

// TODO: replace with your form's real field ids (see below)
const EMAIL_FIELD = 'entry.0000000001';
const NAME_FIELD = 'entry.0000000002';

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

  const body = new URLSearchParams({
    [EMAIL_FIELD]: email.trim(),
    [NAME_FIELD]: name.trim(),
  });

  const res = await fetch(FORM_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
    redirect: 'manual',
  });

  // Google answers 200 or a redirect on success
  if (res.status === 200 || (res.status >= 300 && res.status < 400)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
}
