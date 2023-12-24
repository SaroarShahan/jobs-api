const { StatusCodes } = require('../constants/StatusCodes');
const CustomAPIError = require('./customError');

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
