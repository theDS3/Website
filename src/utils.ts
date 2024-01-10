import { env } from '@/env/server.mjs';
import { NextRequest, NextResponse } from 'next/server';

const availableServicesByDate: Record<string, string[]> = {
  '2023-12-30': ['Check-In', 'Snacks'],
  '2023-12-31': ['Check-In', 'Breakfast', 'Lunch', 'Dinner'],
};

export const allAvailableServices = Object.fromEntries(
  Object.entries(availableServicesByDate).map(([date, availableServices]) => [
    date,
    Object.fromEntries(
      availableServices.map((service) => [
        service,
        { hasUsed: false, timestamp: 0 },
      ]),
    ),
  ]),
);

export const verifyRequest = (request: NextRequest) => {
  if (!request.headers.has('ds3-secret')) {
    return {
      isRequestValid: false,
      requestError: NextResponse.json(
        { type: 'UnauthorizedError', error: 'Missing Headers' },
        { status: 400 },
      ),
    };
  }

  if (request.headers.get('ds3-secret') !== env.VALIDATION_SECRET) {
    return {
      isRequestValid: false,
      requestError: NextResponse.json(
        { type: 'UnauthorizedError', error: 'Invalid Request' },
        { status: 400 },
      ),
    };
  }

  return { isRequestValid: true, requestError: undefined };
};
