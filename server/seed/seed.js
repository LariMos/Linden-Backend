// PACKAGES AND MODULES
//axios for making API requests 
//fs for file system operations
//path for resolving file paths
import axios from 'axios';
import dotenv from 'dotenv';
import Article from '../models/article.model.js';
// The dotenv package is used to load environment variables from a .env file
dotenv.config();

// API KEY
const apiKey = process.env.API_KEY; //The apiKey is retrieved from the environment variable process.env.API_KEY.
const secret = process.env.SECRET;
console.log('ApiKey testing', apiKey);

// Seeding
export const seedDatabase = async () => {
  try {
    // Clean db before seeding
 
    // The API call is made to the New York Times Archive API using axios.get, and the response data is processed.
    await axios
      .get(`https://api.nytimes.com/svc/archive/v1/{year}/{month}.json?api-key=${apiKey}`, {
        headers: {
          'Authorization': `Bearer ${secret}`
        }
      })
      .then(response => response.data)
      .then((response) => {
        const articles = response.data.response.docs; //The articleData array is populated with the relevant article information extracted from the API response.
        const articleData = articles.map((article) => ({
          articleID: article._id,
          title: article.headline.main,
          date: article.pub_date,
          content: article.abstract,
          author: article.byline.original,
          category: article.section_name,
          summary: article.snippet,
          imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : '',
          year: year,
          month: month,
        }));

        return Article.create(articleData); //The Article.create method is used to create new documents in the Article collection based on the articleData array.
      })
      .catch((error) => console.error('Error fetching data from the New York Times API:', error)); //Error handling is implemented for catching any errors that may occur during the seeding process.

    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();

// seedDatabase(year,month); //The seedDatabase function is invoked at the end to trigger the seeding process.
//The function accepts the year and month parameters that are used in the API request URL to fetch articles for the specified year and month







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