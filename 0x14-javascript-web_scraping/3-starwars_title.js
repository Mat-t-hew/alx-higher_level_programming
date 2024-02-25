#!/usr/bin/node
const request = require('request');
const epId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/:id`;
request.get(apiUrl, (error, response, body) => {
  if (error) console.log(error);
  console.log(JSON.parse(body).title);
});
