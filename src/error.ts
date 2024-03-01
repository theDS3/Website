class ErrorBase<T extends string> extends Error {
  name: T;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: T;
    message: string;
    cause: any;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

type VerificationErrorType =
  | 'UNAUTHORIZED_ERROR'
  | 'INVALID_QUERY_PARAMS'
  | 'INVALID_BODY'
  | 'MISSING_BODY_PARAMS';
export class VerificationError extends ErrorBase<VerificationErrorType> {}

type QueryErrorType =
  | 'PARTICIPANT_DNE'
  | 'PARTICIPANT_EXISTS'
  | 'VOLUNTEER_EXISTS';
export class QueryError extends ErrorBase<QueryErrorType> {}
