#!/usr/bin/node
const request = require('request');
const epId = process.argv[2];

// Check if movie ID argument is provided
if (!epId) {
  console.log('Usage: ./script.js <movie_id>');
  process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${epId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusMessage);
    process.exit(1);
  }

  const movie = JSON.parse(body);
  console.log(movie.title);
});
