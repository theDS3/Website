import { env } from './env/server.mjs';
import { VerificationError } from './error';

/**
 * Checks if the request is from a DS3 Application
 *
 * @param {Headers} headers Request Headers
 *
 * @throws {VerificationError} If the request is not from a DS3 Application
 */
export const verifyRequest = (headers: Headers) => {
  if (!headers.has('ds3-secret'))
    throw new VerificationError({
      name: 'UNAUTHORIZED_ERROR',
      message: 'Missing Headers',
      cause: 'Must include ds3-secret in request header',
    });

  if (headers.get('ds3-secret') !== env.VALIDATION_SECRET)
    throw new VerificationError({
      name: 'UNAUTHORIZED_ERROR',
      message: 'Invalid Headers',
      cause: 'Must include correct ds3-secret in request header',
    });
};

/**
 * Checks if the code is a valid UUID-4
 *
 * @param {string} code Participant `code` from the Database
 *
 * @returns {string} Valid `code`
 *
 * @throws {VerificationError} if the code is empty string or not a valid UUID-4
 */
export const isUUID4 = (code: string | null) => {
  const UUID4Regex =
    '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}';

  if (!code || code.length === 0)
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'No code provided',
      cause: 'Must include a UUID-4 code in request',
    });

  if (!code.match(UUID4Regex))
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'Non-UUID code provided',
      cause: 'Must include a UUID-4 code in request',
    });

  return code;
};

/**
 * Checks if the date follows the format: YYYY-MM-DD
 *
 * @param {string} date Date to be checked
 * @param {string} varName Variable name for error message. Defaults to `date`.
 *
 * @returns {string} - Valid date
 *
 * @throws {VerificationError} if the date is empty string or not of YYYY-MM-DD
 */
export const isDate = (date: string | null, varName = 'date') => {
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!date || date.length === 0)
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'No date provided',
      cause: `${varName} must for the correct format (YYYY-MM-DD)`,
    });

  if (!date.match(dateFormatRegex))
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'Date does not follow the format',
      cause: `${varName} must for the correct format (YYYY-MM-DD)`,
    });

  return date;
};

/**
 * Checks if the date follows the format: YYYY-MM-DD
 *
 * @param {string} num Number to be checked
 * @param {number} min Smallest possible value for `num`. Defaults to `Number.MIN_SAFE_INTEGER`.
 * @param {number} max Largest possible value for `num`. Defaults to `Number.MIN_SAFE_INTEGER`.
 * @param {string} varName Variable name for error message. Defaults to `num`.
 *
 * @returns {string} Valid number
 *
 * @throws {VerificationError} if the num is empty string or not a number between min and max
 */
export const isNumeric = (
  num: string | null,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  varName = 'num',
) => {
  const numRegex = /^[+-]?\d+$/;

  if (!num || num.length === 0)
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'No numeric value provided',
      cause: `${varName} must be digit between ${min} and ${max}`,
    });

  if (!num.match(numRegex))
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'No numeric value provided',
      cause: `${varName} must not contain any letters or special characters`,
    });

  const number = parseInt(num);

  if (
    (typeof min !== 'undefined' && number < min) ||
    (typeof max !== 'undefined' && number > max)
  )
    throw new VerificationError({
      name: 'INVALID_QUERY_PARAMS',
      message: 'Out of Range',
      cause: `${varName} must be between ${min} - ${max}`,
    });

  return number;
};

export const verifyEmails = (
  emails: string[],
  domains: string[] = [
    'gmail.com',
    'outlook.com',
    'utoronto.ca',
    'mail.utoronto.ca',
    'my.yorku.ca',
    'torontomu.ca',
    'ontariotechu.net',
    'uwo.ca',
    'uwaterloo.ca',
    'mylambton.ca',
    'mcmaster.ca',
    'humbermail.ca',
  ],
) => {
  const emailDomainRegex = new RegExp(`@(${domains.join('|')})$`);

  // Checks if emails exist
  if (!emails)
    throw new VerificationError({
      name: 'INVALID_BODY',
      message: 'Request Body is missing key: emails',
      cause: 'Include emails with a list of unique emails',
    });

  // Checks if they are an array of emails
  if (typeof emails !== 'object' || emails.length === 0)
    throw new VerificationError({
      name: 'INVALID_BODY',
      message: 'Request Body contains no emails',
      cause: 'Must contain a list of unique emails',
    });

  // Check if the emails are all unique
  if (emails.length !== new Set(emails).size)
    throw new VerificationError({
      name: 'INVALID_BODY',
      message: 'Request Body contains duplicate emails',
      cause: 'Remove duplicate emails from the request body',
    });

  emails.forEach((email) => {
    // Checks for empty string email
    if (email.length === 0)
      throw new VerificationError({
        name: 'INVALID_BODY',
        message: 'Request Body contains empty email',
        cause: 'Remove empty emails from the request body',
      });

    // Checks if email is from UOFT
    if (!emailDomainRegex.test(email))
      throw new VerificationError({
        name: 'INVALID_BODY',
        message: 'Each email must be from a valid domain',
        cause: `Acceptable domains: ${domains.join(', ')}`,
      });
  });
};
