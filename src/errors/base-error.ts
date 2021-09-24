export default abstract class BaseError extends Error {
  abstract name: string;
  abstract statusCode: number;

  constructor(public readonly message: string) {
    super(message);
    this.message = message;
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}