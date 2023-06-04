//USING ARCHIVE API

// import axios from 'axios';
// import dotenv from 'dotenv';
// import Article from '../models/article.model.js';


// dotenv.config();

// // API KEY 
// const apiKey = process.env.API_KEY;
// const startYear = 1909;
// const endYear = 1909;
// const articlesPerMonth = 1;

// async function getData(year, month) {
//   try {
//     const response = await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`);
//     const articles = response.data.response.docs.slice(0, articlesPerMonth);
//     return articles;
//   } catch (error) {
//     console.log(`Error retrieving articles for ${year}-${month}:`, error);
//     throw error; // Rethrow the error to handle it in the calling code
//   }
// }

// async function fetchAndLogData() {
//   try {
//     const allArticles = [];

//     for (let year = startYear; year <= endYear; year++) {
//       for (let month = 1; month <= 6; month++) {
//         const articles = await getData(year, month);
//         allArticles.push(...articles);
//       }
//     }

//     console.log('Retrieved data:', allArticles);
//     return allArticles;
//   } catch (error) {
//     console.log('Error:', error);
//     throw error; // Rethrow the error to handle it in the calling code
//   }
// }

// async function seedDatabase() {
//   try {
//     const data = await fetchAndLogData();

//     const articleData = data.map((article) => {
//       return {
//         title: article.headline.main,
//         date: article.pub_date,
//         author: article.byline.original,
//         summary: article.snippet,
//         imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : '',
//         webURL: article.web_url,
//       };
//     });

//     await Article.insertMany(articleData);
//     console.log('Database seeding completed.');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// }

// // seedDatabase();

// export { seedDatabase };


//using SEARCH API
import axios from 'axios';
import dotenv from 'dotenv';
import Article from '../models/article.model.js';

dotenv.config();

// API KEY
const apiKey = process.env.API_KEY;
const startDate = '20190101';
const endDate = '20191231';
const articlesPerPage = 10;

async function getData(beginDate, endDate) {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_field=day_of_week&facet=true&begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`);
    const articles = response.data.response.docs.slice(0, articlesPerPage);
    return articles;
  } catch (error) {
    console.log(`Error retrieving articles for ${beginDate}-${endDate}:`, error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

async function fetchAndLogData() {
  try {
    const allArticles = [];

    const articles = await getData(startDate, endDate);
    allArticles.push(...articles);

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

// seedDatabase();

export { seedDatabase };


//USING SEARCH API FOR EACH MONTH

// import axios from 'axios';
// import dotenv from 'dotenv';
// import Article from '../models/article.model.js';

// dotenv.config();

// // API KEY
// const apiKey = process.env.API_KEY;
// const startYear = 1920;
// const endYear = new Date().getFullYear();
// const articlesPerMonth = 1;

// async function getData(beginDate, endDate) {
//   try {
//     const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?facet_field=day_of_week&facet=true&begin_date=${beginDate}&end_date=${endDate}&api-key=${apiKey}`);
//     const articles = response.data.response.docs.slice(0, articlesPerMonth);
//     return articles;
//   } catch (error) {
//     console.log(`Error retrieving articles for ${beginDate}-${endDate}:`, error);
//     throw error; // Rethrow the error to handle it in the calling code
//   }
// }

// async function fetchAndLogData() {
//   try {
//     const allArticles = [];

//     for (let year = startYear; year <= endYear; year++) {
//       for (let month = 1; month <= 12; month++) {
//         const beginDate = `${year}${month.toString().padStart(2, '0')}01`;
//         const endDate = `${year}${month.toString().padStart(2, '0')}31`;

//         const articles = await getData(beginDate, endDate);
//         if (articles.length > 0) {
//           allArticles.push(articles[0]);
//         }
//       }
//     }

//     console.log('Retrieved data:', allArticles);
//     return allArticles;
//   } catch (error) {
//     console.log('Error:', error);
//     throw error; // Rethrow the error to handle it in the calling code
//   }
// }

// async function seedDatabase() {
//   try {
//     const data = await fetchAndLogData();

//     const articleData = data.map((article) => {
//       return {
//         title: article.headline.main,
//         date: article.pub_date,
//         author: article.byline.original,
//         summary: article.snippet,
//         imageURL: article.multimedia.length > 0 ? article.multimedia[0].url : '',
//         webURL: article.web_url,
//       };
//     });

//     await Article.insertMany(articleData);
//     console.log('Database seeding completed.');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// }

// // seedDatabase();

// export { seedDatabase };
