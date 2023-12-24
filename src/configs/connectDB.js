const mongoose = require('mongoose');

const connectDB = async (url, password) => {
  return await mongoose.connect(url.replace('<PASSWORD>', password));
};

module.exports = connectDB;
