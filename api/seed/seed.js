import axios from 'axios';
import dotenv from 'dotenv';
import Article from '../models/article.model.js';


dotenv.config();

// API KEY 
const apiKey = process.env.API_KEY;
const startYear = 1909;
const endYear = 1909;
const articlesPerMonth = 1;

async function getData(year, month) {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`);
    const articles = response.data.response.docs.slice(0, articlesPerMonth);
    return articles;
  } catch (error) {
    console.log(`Error retrieving articles for ${year}-${month}:`, error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function fetchAndLogData() {
  try {
    const allArticles = [];

    for (let year = startYear; year <= endYear; year++) {
      for (let month = 1; month <= 6; month++) {
        const articles = await getData(year, month);
        allArticles.push(...articles);
      }
    }

    console.log('Retrieved data:', allArticles);
    return allArticles;
  } catch (error) {
    console.log('Error:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function seedDatabase() {
  try {
    const data = await fetchAndLogData();

    const articleData = data.map((article) => {
      return {
        title: article.headline.main,
        date: article.pub_date,
        author: article.byline.original,
        summary: article.snippet,
        imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : '',
        webURL: article.web_url,
      };
    });

    await Article.insertMany(articleData);
    console.log('Database seeding completed.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();

export { seedDatabase };



