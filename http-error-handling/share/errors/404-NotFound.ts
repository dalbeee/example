import { HttpException } from "./httpException";

export class NotFoundException extends HttpException {
  constructor(message: string = "Not Found") {
    super(message, 404);
  }
}
