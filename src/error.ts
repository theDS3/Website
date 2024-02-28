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

type VerificationErrorType = 'UNAUTHORIZED_ERROR' | 'INVALID_PARAMS';
export class VerificationError extends ErrorBase<VerificationErrorType> {}
