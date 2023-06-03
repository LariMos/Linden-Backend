// Packages and modules
// import { seedDatabase } from '../BACK/seed/seed.js';
import express from 'express';
import connection from '../BACK/db/connections.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 4000;


// Import user routes and controllers
import userRouter from '../BACK/routes/user.routes.js';

// Import article routes and controllers
import router from '../BACK/routes/article.routes.js';

const app = express();
app.use(express.json());
app.use(cors());

// Connecting to routes
app.use('/', userRouter);
app.use('/', router);



app.listen(PORT, () => {
  console.log('Server is running');
})

//SHOW CONNECTION TO MONGODB 
connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});


  
// MongoDB connection event handlers TO SEED. COMMENT OUT
// connection.on('connected', async () => {
//   console.log(`Connected to MongoDB at ${connection.host}:${connection.port}`);
  
//   try {
//     // Call the seedDatabase function to populate the database
//     await seedDatabase();
//     console.log('Database seeding completed.');
  // } catch (error) {
  //   console.error('Error seeding database:', error);
  // }
// });





