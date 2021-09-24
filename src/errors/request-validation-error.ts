import { ValidationError } from 'express-validator';
import  BaseError from './base-error';

export default class RequestValidationError extends BaseError {
  statusCode = 400;
  name = 'RequestValidationError';

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}
