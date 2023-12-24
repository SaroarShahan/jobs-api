const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route does not exits!',
  });
};

module.exports = notFoundHandler;
