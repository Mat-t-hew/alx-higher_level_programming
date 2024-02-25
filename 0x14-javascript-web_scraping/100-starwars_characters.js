#!/usr/bin/node
const request = require('request');

// Get the movie ID from command-line argument
const movieId = process.argv[2];

// Check if movie ID is provided
if (!movieId) {
  console.log('Usage: ./script.js <movie_id>');
  process.exit(1);
}

// API URL to fetch movie data
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  // Handle errors
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Check if the response is successful
  if (response.statusCode !== 200) {
    console.error('Error:', response.statusMessage);
    process.exit(1);
  }

  // Parse the JSON response body
  const movieData = JSON.parse(body);

  // Display the movie title
  console.log(`Characters of ${movieData.title}:`);

  // Iterate over each character URL and fetch their data
  movieData.characters.forEach(characterUrl => {
    request.get(characterUrl, (err, res, characterBody) => {
      if (err) {
        console.error('Error:', err);
      } else {
        // Parse the JSON character data
        const characterData = JSON.parse(characterBody);
        // Display the character's name
        console.log(characterData.name);
      }
    });
  });
});
