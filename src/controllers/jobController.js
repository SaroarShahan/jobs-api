const Job = require('../models/Job');
const { StatusCodes } = require('../constants/StatusCodes');

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');

  res.status(StatusCodes.OKUCCESS).json({
    success: true,
    message: 'Get all jobs',
    data: {
      jobs,
      totalCount: jobs.length,
    },
  });
};

exports.getJob = async (req, res) => {
  const job = await Job.findOne({ _id: req.params.id, createdBy: req.user.userId });

  res.status(StatusCodes.OKUCCESS).json({
    success: true,
    message: 'Get a job',
    data: job,
  });
};

exports.createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Job created successfully',
    data: job,
  });
};

exports.updateJob = async (req, res) => {
  const job = await Job.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user.userId },
    req.body,
    { new: true, runValidators: true },
  );

  res.status(StatusCodes.OKUCCESS).json({
    success: true,
    message: 'Job updated successfully',
    data: job,
  });
};

exports.deleteJob = async (req, res) => {
  await Job.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId });

  res.status(StatusCodes.OKUCCESS).json({
    success: true,
    message: 'Job deleted successfully',
    data: null,
  });
};
