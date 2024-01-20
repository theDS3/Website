import { faker } from '@faker-js/faker';
import { QRCodeCanvas } from '@loskir/styled-qr-code-node';
import { format } from 'date-fns/format';
import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/db/config';
import Participant from '@/db/models/participant';
import {
  generateAvailableServices,
  generateQRCodeOptions,
  verifyRequest,
  type ServicesByDate,
} from '@/utils';

export async function POST(request: NextRequest) {
  try {
    // Authenticates Request to see if it comes from DS3
    const { isRequestValid, requestError } = verifyRequest(request);
    if (!isRequestValid) return requestError;

    connectDB();

    const numOfParticipants = parseInt(
      request.nextUrl.searchParams.get('participants') || '100',
    );

    const startDate =
      request.nextUrl.searchParams.get('startDate') || '2024-01-13';
    const endDate = request.nextUrl.searchParams.get('endDate') || '2024-01-20';
    const dateStep = parseInt(
      request.nextUrl.searchParams.get('dateStep') || '1',
    );

    const mockServicesByDate: ServicesByDate = {};
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      let mockServices: string[] = ['Check-In'];
      const maxNumServices = Math.floor(Math.random() * 10);
      for (let numServices = 0; numServices != maxNumServices; numServices++) {
        mockServices.push(faker.commerce.productName());
      }
      mockServicesByDate[format(currentDate, 'yyyy-MM-dd')] = mockServices;
      currentDate.setUTCDate(currentDate.getUTCDate() + dateStep);
    }

    const services = generateAvailableServices(mockServicesByDate);

    await Participant.deleteMany({});

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
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
