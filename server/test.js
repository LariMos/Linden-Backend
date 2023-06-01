import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.API_KEY; //The apiKey is retrieved from the environment variable process.env.API_KEY.
console.log('ApiKey testing', apiKey);
const secret = process.env.SECRET;
console.log('Secret testing', secret);

// const year = 2023;
// const month = 5;


axios.get(`https://api.nytimes.com/svc/archive/v1/{year}/{month}.json?api-key=${apiKey}`, {
  headers: {
    'Authorization': `Bearer ${secret}`,
  },
})
  .then(response => response.data)
  .then(data => {
    // `data` contains the JSON data from the API response
    console.log(data);
    // Process the data further as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  });

