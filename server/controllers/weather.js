const axios = require('axios');
const models = require('../models');

exports.get = (req, res) => {
  axios.get('https://api.weather.gov/gridpoints/EWX/129,72/forecast')
    .then((response) => {
      console.log('response: ', response.data);
      res.status(201).send(response.data);
    })
    .catch((err) => {
      console.log('ERROR GETTING FROM WEATHER API', err.message);
      res.sendStatus(501);
    });
};
