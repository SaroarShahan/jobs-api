const { StatusCodes } = require('../constants/StatusCodes');
const CustomAPIError = require('./customError');

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
