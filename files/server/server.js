const express = require("express");
const https = require('https');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

exports.apiHandler = async (event) => {
  try {
    const query = event.body.userData;
    const apiKey = "1533a067069e9baf8f0955e004133efb";
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

    return new Promise((resolve, reject) => {
      https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          const convertedData = JSON.parse(data);
          resolve({
            statusCode: 200,
            body: JSON.stringify(convertedData),
          });
        });

        response.on('error', (error) => {
          reject(error);
        });
      });
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};


