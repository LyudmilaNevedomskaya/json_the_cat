const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    const bodyData = JSON.parse(body);
    const data = bodyData[0];
    //console.log(data); // Print the HTML for the Google homepage.

    if (data === undefined) {
      console.log(`The Breed is Not Found`);
    }
    if (!error && data !== undefined) {
      console.log(data.name);
      console.log(data.description);
    }
    if (error) {
      console.log(error);
    }

  });
};


module.exports = {
  fetchBreedDescription
};