import mongoose from 'mongoose';

import { env } from '@/env/server.mjs';

export async function connectDB() {
  try {
    await mongoose.connect(env.MONGO_URI, { dbName: env.MONGO_DB });
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.info('MongoDB is connected 🟢');
    });

    connection.on('error', (err) => {
      console.error('MongoDB is not connected 🔴 \n', err);
      process.exit();
    });
  } catch (err) {
    console.error('MongoDB is not connected 💫 \n', err);
  }
}
