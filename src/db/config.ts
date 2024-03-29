import mongoose from 'mongoose';

import { env } from '@/env/server.mjs';

export default async function connectDB() {
  try {
    await mongoose.connect(env.MONGO_URI, { dbName: env.MONGO_DB });
  } catch (err) {
    console.error('MongoDB is not connected 💫 \n', err);
    throw err;
  }

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.info('MongoDB is connected 🟢');
  });

  connection.on('error', (err) => {
    console.error('MongoDB is not connected 🔴 \n', err);
    process.exit();
  });
}
