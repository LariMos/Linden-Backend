// Packages and modules
import { seedDatabase } from './seed/seed.js';
import db from './db/connections.js';

import express from 'express';
// import axios from 'axios';
// import { Configuration, OpenAIApi } from 'openai';

const app = express();

// Database and data
import Article from './models/article.model.js';

db.on('connected', async () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
  
  // Once MongoDB is connected, populate the database
  try {
    // Clean the Article collection before seeding
    await Article.deleteMany({});
    
    await seedDatabase(); // Call the seedDatabase function to populate the database

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
});



//TEST AI

// // Initialize OpenAI configuration
// const openaiConfig = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY, // Make sure to set your OpenAI API key in the environment variable
//   });
  
//   // Create OpenAI API client
//   const openai = new OpenAIApi(openaiConfig);
  
//   // API endpoint for chat interaction
//   app.post('/api/chat', async (req, res) => {
//     try {
//       const { message } = req.body;
  
//       // Call the OpenAI Chat API using Axios
//       const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//         model: 'text-davinci-003',
//         messages: [
//           { role: 'system', content: 'You are a helpful assistant.' },
//           { role: 'user', content: message },
//         ],
//       }, {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       });
  
//       // Extract assistant's reply from the response
//       const assistantReply = response.data.choices[0].message.content;
  
//       // Send the assistant's reply back to the client
//       res.json({ reply: assistantReply });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   // Start the server
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });


// // Packages and modules
// // import { seedDatabase, createArticleJSON } from './seed/seed.js'

// // // Database and data
// // import db from './db/connections.js'
// // // import article from '../data/articleRaw.json' assert {type: 'json'}


// // db.on('connected', async () => {
// //     console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
// //     // Once Mongo is connected, populate it
// //     if (article) {
// //         seedDatabase()
// //     }
// //     else {
// //         createArticleJSON() 
// //         .then((response) => seedDatabase())
// //     }
// // })

