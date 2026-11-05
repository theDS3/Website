import { NextResponse } from 'next/server';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2-hoS0EmTDOii6JXt3ljkfPo8nuz1EdHfSy71FQuTMJhnCw/formResponse';

// Still placeholders until you paste the real ids from the pre-filled link
const EMAIL_FIELD = 'entry.0000000001';
const NAME_FIELD = 'entry.0000000002';

export async function POST(req: Request) {
  const { email, name, company } = await req.json().catch(() => ({}));

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

  console.log(
    'Google Forms responded:',
    res.status,
    res.headers.get('location'),
  );

  if (res.status === 200 || (res.status >= 300 && res.status < 400)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json(
    { error: 'Upstream error', googleStatus: res.status },
    { status: 502 },
  );
}
