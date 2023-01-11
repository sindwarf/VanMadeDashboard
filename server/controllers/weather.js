const axios = require('axios');
const models = require('../models');

exports.get = (req, res) => {
  axios.get('https://api.weather.gov/gridpoints/EWX/129,72/forecast')
    .then((response) => {
      const weatherObj = {
        updated: response.data.properties.updated,
        gridId: 'EWX',
        gridX: 129123,
        gridY: 72,
        forecast: response.data.properties.periods,
      };
      models.weather.save(weatherObj)
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((err) => {
          console.log('ERROR SAVING TO MONGOOSE', err.message);
        });
    })
    .catch((err) => {
      console.log('ERROR GETTING FROM WEATHER API', err.message);
      res.sendStatus(501);
    });
};

/*
{
  '@context': [
    'https://geojson.org/geojson-ld/geojson-context.jsonld',
    {
      '@version': '1.1',
      wx: 'https://api.weather.gov/ontology#',
      geo: 'http://www.opengis.net/ont/geosparql#',
      unit: 'http://codes.wmo.int/common/unit/',
      '@vocab': 'https://api.weather.gov/ontology#'
    }
  ],
  type: 'Feature',
  geometry: { type: 'Polygon', coordinates: [ [Array] ] },
  properties: {
    updated: '2023-01-11T05:24:34+00:00',
    units: 'us',
    forecastGenerator: 'BaselineForecastGenerator',
    generatedAt: '2023-01-11T07:12:15+00:00',
    updateTime: '2023-01-11T05:24:34+00:00',
    validTimes: '2023-01-10T23:00:00+00:00/P7DT5H',
    elevation: { unitCode: 'wmoUnit:m', value: 320.04 },
    periods: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
*/