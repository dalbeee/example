import { HttpException } from "./httpException";

export class InternalServerError extends HttpException {
  constructor(message: string = "Internal Server Error") {
    super(message, 500);
  }
}
