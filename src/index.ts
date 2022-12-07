import mongoose from 'mongoose';

import { app } from './app';
import { savePollutionJob } from './jobs/savePollutionJob';

const start = async () => {
  require('dotenv').config();
  if (!process.env.IQAIR_API_KEY) {
    throw new Error('IQAir API key must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDb');
  } catch (error) {
    console.log(error);
  }

  savePollutionJob.start();
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
  });
};

start();
