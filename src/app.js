require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');

const connectDB = require('./configs/connectDB');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFoundHandler');
const authMiddleware = require('./middleware/authencation');
const authRouter = require('./routes/authRouter');
const jobRouter = require('./routes/jobRouter');

const app = express();

// Middlewares
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(xss());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authMiddleware, jobRouter);

app.use(notFoundHandler);
app.use(errorHandler);

// Connect to Database and Start Server
const start = async () => {
  const PORT = process.env.PORT || 4000;

  try {
    await connectDB(process.env.DATABASE, process.env.DATABASE_PASSWORD);
    app.listen(PORT, () => console.log(`Server is running at ${process.env.BASE_URL}:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
