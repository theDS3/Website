import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!, { dbName: 'prod' });
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
