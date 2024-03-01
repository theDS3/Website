import { faker } from '@faker-js/faker';
import { QRCodeCanvas } from '@loskir/styled-qr-code-node';
import { format } from 'date-fns/format';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant, {
  type ServiceGroupsToServiceNames,
} from '@/db/models/participant';
import { VerificationError } from '@/error';
import { generateQRCodeOptions, generateServices } from '@/utils';
import { isDate, isNumeric, verifyRequest } from '@/verify';

export async function POST(request: NextRequest) {
  try {
    verifyRequest(request.headers);

    // Collects the numOfParticipants, startDate, endDate, dayStep from the request
    const numOfParticipants = isNumeric(
      request.nextUrl.searchParams.get('numOfParticipants'),
      1,
      100,
      'numOfParticipants',
    );
    const startDate = isDate(
      request.nextUrl.searchParams.get('startDate') || '',
      'startDate',
    );
    const endDate = isDate(
      request.nextUrl.searchParams.get('endDate') || '',
      'endDate',
    );
    const dayStep = isNumeric(
      request.nextUrl.searchParams.get('dayStep') || '',
      1,
      3,
      'dayStep',
    );

    const mockServicesByDate: ServiceGroupsToServiceNames = {};
    let currentDate = new Date(startDate);

    // If the start date is after the end date, throw an error
    if (currentDate > new Date(endDate))
      throw new VerificationError({
        name: 'INVALID_QUERY_PARAMS',
        message: 'endDate must be after startDate',
        cause: `End Date: ${endDate} must be after Start Date: ${startDate}`,
      });

    // Generates a mock service schedule based on the start and end dates
    while (currentDate <= new Date(endDate)) {
      let mockServices: string[] = ['Check-In'];
      const maxNumServices = Math.floor(Math.random() * 10);
      for (let numServices = 0; numServices != maxNumServices; numServices++)
        mockServices.push(faker.commerce.productName());
      mockServicesByDate[format(currentDate, 'yyyy-MM-dd')] = mockServices;
      currentDate.setUTCDate(currentDate.getUTCDate() + dayStep);
    }

    const services = generateServices(mockServicesByDate);

    connectDB();

    await Participant.deleteMany({});

    // Updates the collection with a list of mock participants
    const participants = [];
    for (let i = 0; i < numOfParticipants; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const code = faker.string.uuid();

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
        code,
        qrcode: await new QRCodeCanvas(generateQRCodeOptions(code)).toDataUrl(
          'jpeg',
        ),
        services,
      });
    }

    await Participant.insertMany(participants);
    return NextResponse.json({ ...participants }, { status: 201 });
  } catch (error: any) {
    // Catches a VerificationError and returns a 400 error
    if (error instanceof VerificationError)
      return NextResponse.json({ ...error }, { status: 400 });

    // Catches any other errors and returns a 400 error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
