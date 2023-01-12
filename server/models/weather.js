const axios = require('axios');
const db = require('../database');

exports.get = () => (
  db.getCurrentWeather()
    .then((data) => {
      const ONE_HOUR = 60 * 60 * 1000;
      const currentTime = new Date();
      if ((currentTime - data[0].updated) > (ONE_HOUR * 12)) {
        console.log('it is more than 12 hour old');
        return (axios.get('https://api.weather.gov/gridpoints/EWX/129,72/forecast')
          .then((response) => {
            const weatherObj = {
              updated: response.data.properties.updated,
              gridId: 'EWX',
              gridX: 129,
              gridY: 72,
              forecast: response.data.properties.periods,
            };
            return (this.save(weatherObj)
              .then(() => ((weatherObj)))
              .catch((err) => {
                console.log('ERROR SAVING TO MONGOOSE', err.message);
              })
            );
          }));
      }
      return Promise.resolve(data[0]);
    })
);

exports.save = (weatherObj) => (db.updateWeather(weatherObj));
