import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from '../mongodb/connect.js';
import postRoutes from '../routes/postRoutes.js';
import dalleRoutes from '../routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN ?? '*' }));
app.use(express.json({ limit: '50mb' }));

async function withDB(req, res, next) {
  try {
    await connectDB(process.env.MONGODB_URL);
    next();
  } catch (error) {
    next(error);
  }
}

app.use('/api/v1/post', withDB, postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ success: false, message: error?.message ?? 'Internal server error' });
});

export default app;
