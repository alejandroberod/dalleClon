import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const cache = globalThis._mongoose ?? (globalThis._mongoose = { conn: null, promise: null });

export default async function connectDB(url) {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    if (!url) throw new Error('MONGODB_URL is not set');

    cache.promise = mongoose
      .connect(url, { bufferCommands: false, serverSelectionTimeoutMS: 10000 })
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    cache.promise = null; // permite reintentar en la siguiente request
    throw error;
  }

  return cache.conn;
}