const models = require('../models');

exports.get = (req, res) => {
  models.weather.get()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log('ERROR IN CONTROLS: ', err.message);
      res.status(501);
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