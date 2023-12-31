const User = require('../models/User');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const { StatusCodes } = require('../constants/StatusCodes');

exports.register = async (req, res) => {
  const user = await User.create(req.body);

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: 'Registration successfull',
    user: { name: user.name },
    token,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  const token = user.createJWT();

  res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Login successfull', user: { name: user.name }, token });
};
