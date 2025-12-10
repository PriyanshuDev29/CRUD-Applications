import mongoose from 'mongoose';

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database', error);
    throw error;
  }
};

export default Connection;
