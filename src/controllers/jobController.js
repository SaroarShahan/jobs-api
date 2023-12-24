const { StatusCodes } = require('../constants/StatusCodes');

exports.getAllJobs = async (req, res) => {
  res.status(StatusCodes.SUCCESS).json({
    success: true,
    message: 'Get all jobs',
    data: [],
  });
};

exports.getJob = async (req, res) => {
  res.status(StatusCodes.SUCCESS).json({
    success: true,
    message: 'Get a job',
    data: {},
  });
};

exports.createJob = async (req, res) => {
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Job created successfully',
    data: {},
  });
};

exports.updateJob = async (req, res) => {
  res.status(StatusCodes.SUCCESS).json({
    success: true,
    message: 'Job updated successfully',
    data: {},
  });
};

exports.deleteJob = async (req, res) => {
  res.status(StatusCodes.SUCCESS).json({
    success: true,
    message: 'Job deleted successfully',
    data: {},
  });
};
