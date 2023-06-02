import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

// Setup dotenv
dotenv.config();
const app = express();
app.use(express.json());

// Env variables
const ENVIRONMENT = process.env.ENVIRONMENT || 'prod';
const DATABASE_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

console.log(DATABASE_URI)
console.log(PORT)

// Setup database
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

// Connect to the specified MongoDB URI
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.listen(PORT, function(err) {
//   if (err) console.log('Error in server setup');
//   console.log('Server listening on Port', PORT);
// });

export default mongoose.connection;

