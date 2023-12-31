const { StatusCodes } = require('../constants/StatusCodes');
const CustomAPIError = require('./customError');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
