import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Admin from '@/db/models/admin';
import { verifyRequest } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    // Authenticates Request to see if it comes from DS3
    const { isRequestValid, requestError } = verifyRequest(request.headers);
    if (!isRequestValid) return requestError;

    connectDB();

    const numOfAdmin = parseInt(
      request.nextUrl.searchParams.get('admins') || '5',
    );

    await Admin.deleteMany({});

    const admins = [];
    for (let i = 0; i < numOfAdmin; i++) {
      const email = faker.internet.email();
      const password = faker.internet.password();
      const hashedPassword = await hash(password, 10);
      admins.push({ email, password });

      await new Admin({ email, hashedPassword }).save();
    }

    return NextResponse.json({ ...admins }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
