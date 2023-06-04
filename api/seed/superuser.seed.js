import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/user.model.js';

dotenv.config();

const seedSuperuser = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const superuser = new User({
      username: 'superuser',
      password: 'password123',
      savedArticles: [],
    });

    const savedUser = await superuser.save();
    console.log('Superuser saved:', savedUser);

    await mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error saving superuser:', error);
  }
};

seedSuperuser();

  