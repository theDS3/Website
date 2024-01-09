import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant from '@/db/models/participant';

export async function POST(request: NextRequest) {
  try {
    connectDB();

    const numOfParticipants = parseInt(
      request.nextUrl.searchParams.get('participants') || '100',
    );

    await Participant.deleteMany({});

    const participants = [];
    for (let i = 0; i < numOfParticipants; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      participants.push({
        firstName,
        lastName,
        email: faker.internet.email({ firstName, lastName }),
        school: faker.helpers.arrayElement([
          'The University of Toronto St. George',
          'The University of Toronto Mississauga',
          'The University of Toronto Scarborough',
          'Other',
        ]),
        countryOfResidence: faker.location.country(),
        dietaryRestrictions: faker.helpers.arrayElement([
          'Vegetarian',
          'Vegan',
          'Kosher',
          'Halal',
          'Gluten-free',
          'None',
          'Other',
        ]),
        code: faker.string.uuid(),
      });
    }
    await Participant.insertMany(participants);
    return NextResponse.json({ participants }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
