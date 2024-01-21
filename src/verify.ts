import { NextResponse } from 'next/server';

import { env } from './env/server.mjs';

export const verifyRequest = (headers: Headers) => {
  if (!headers.has('ds3-secret')) {
    return {
      isRequestValid: false,
      requestError: NextResponse.json(
        { type: 'UnauthorizedError', error: 'Missing Headers' },
        { status: 400 },
      ),
    };
  }

  if (headers.get('ds3-secret') !== env.VALIDATION_SECRET) {
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

export const verifyCode = (code: string) => {
  const UUIDRegex =
    '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}';

  if (code.length === 0)
    return {
      isCodeValid: false,
      codeError: { type: 'CodeError', error: 'No code provided' },
    };

  if (!code.match(UUIDRegex))
    return {
      isCodeValid: false,
      codeError: { type: 'CodeError', error: 'Code must be a valid UUID' },
    };

  return { isCodeValid: true, codeError: undefined };
};

export const verifyDate = (date: string) => {
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (date.length === 0)
    return {
      isDateValid: false,
      dateError: { type: 'DateError', error: 'No date provided' },
    };

  if (!date.match(dateFormatRegex))
    return {
      isDateValid: false,
      dateError: {
        type: 'DateError',
        error: 'Date must for the correct format (YYYY-MM-DD)',
      },
    };

  return { isDateValid: true, dateError: undefined };
};
