import BaseError from "./base-error";

export default class NotFoundError extends BaseError {
  statusCode = 404;
  message = "Not Found";
  name = "NotFoundError";
  constructor() {
    super("Not Found");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}