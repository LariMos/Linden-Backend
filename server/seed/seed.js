import axios from 'axios';
import dotenv from 'dotenv';
import Article from '../models/article.model.js';
dotenv.config();

// API KEY
const apiKey = process.env.API_KEY;
console.log('ApiKey testing', apiKey);
let year = 1956;
let month = 1;
let articles;

async function getData() {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`);
    articles = response.data.response.docs.slice(0,3);
    return articles;
  } catch (error) {
    console.log('Error', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function fetchAndLogData() {
  try {
    const data = await getData();
    console.log('This is data', data);
    return data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function seedDatabase() {
  try {
    const data = await fetchAndLogData();

    console.log("this is test data",data);

    // Clean db before seeding
    // await Article.deleteMany({});

    const articleData = data.map((article) => {
        return {
              title: article.headline.main,
              date: article.pub_date,
              author: article.byline.original,
              category: article.section_name,
              summary: article.snippet,
              imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : ''
              }
        });

    // await Article.create(articleData);
    await Article.insertMany(articleData);
    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Call the function to fetch data and seed the database
seedDatabase();




//2 TEST

// PACKAGES AND MODULES
// import axios from 'axios';
// import dotenv from 'dotenv';
// import Article from '../models/article.model.js';
// dotenv.config();
// // import mongoose from 'mongoose';
// // const mongoose = require('mongoose');

// // API KEY
// const apiKey = process.env.API_KEY;
// console.log('ApiKey testing', apiKey);

// // Seeding
// export const seedDatabase = async () => {
//   try {
//     // Clean db before seeding
//     // await Article.deleteMany({}, { maxTimeMS: 30000 });
//     let year = 1956;
//     let month = 1;
//     const maxResults = 1; // Maximum number of articles to retrieve

//     // The API call is made to the New York Times Archive API using axios.get, and the response data is processed.
//     const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`);
//     const articles = response.data.response.docs.slice(0, maxResults); // Retrieve only the first 20 articles

//     const articleData = articles.map((article) => ({
//       articleID: article._id,
//       title: article.headline.main,
//       date: article.pub_date,
//       author: article.byline.original,
//       category: article.section_name,
//       summary: article.snippet,
//       imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : ''
//     }));

//     await Article.create(articleData);

//     console.log('Database seeding completed.');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };

// seedDatabase();

//3 TEST

// // PACKAGES AND MODULES
// import axios from 'axios';
// import dotenv from 'dotenv';
// import Article from '../models/article.model.js';
// dotenv.config();

// // API KEY
// const apiKey = process.env.API_KEY;
// console.log('ApiKey testing', apiKey);


// // Seeding
// export const seedDatabase = async () => {
//   try {
//     // Clean db before seeding
//     // await Article.deleteMany({}, { maxTimeMS: 30000 });
//     let year = 1956;
//     let month = 1;
//     const maxResults = 10;// Maximum number of articles to retrieve


//     // The API call is made to the New York Times Archive API using axios.get, and the response data is processed.
//     const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`);
//     // const articles = response.data.response.docs;
//     const articles = response.data.response.docs.slice(0, maxResults);
//     console.log(response.data.response.docs);

//     const articleData = articles.map((article) => ({
//       articleID: article._id, 
//       title: article.headline.main,
//       date: article.pub_date,
//     //   content: article.abstract,
//       author: article.byline.original,
//       category: article.section_name,
//       summary: article.snippet,
//       imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : ''
//     }));

//     await Article.create(articleData);

//     console.log('Database seeding completed.');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };

// seedDatabase();


// seedDatabase(year,month); //The seedDatabase function is invoked at the end to trigger the seeding process.
//The function accepts the year and month parameters that are used in the API request URL to fetch articles for the specified year and month


//OPEN AI TEST

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiAiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:",
//   temperature: 0.5,
//   max_tokens: 60,
//   top_p: 1.0,
//   frequency_penalty: 0.5,
//   presence_penalty: 0.0,
//   stop: ["You:"],
// });