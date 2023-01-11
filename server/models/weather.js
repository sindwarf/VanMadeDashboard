const axios = require('axios');
const db = require('../database');

exports.get = () => (
  db.getCurrentWeather()
    .then((data) => {
      const ONE_HOUR = 60 * 60 * 1000;
      const currentTime = new Date();
      if ((currentTime - data.updated) < ONE_HOUR) {
        console.log('it is an hour old');
        return (axios.get('https://api.weather.gov/gridpoints/EWX/129,72/forecast')
          .then((response) => {
            const weatherObj = {
              updated: response.data.properties.updated,
              gridId: 'EWX',
              gridX: 129123,
              gridY: 72,
              forecast: response.data.properties.periods,
            };
            this.save(weatherObj)
              .then(() => (Promise.resolve(weatherObj)))
              .catch((err) => {
                console.log('ERROR SAVING TO MONGOOSE', err.message);
              });
          }));
      }
      return Promise.resolve(data);
    })
);

exports.save = (weatherObj) => (db.updateWeather(weatherObj));
