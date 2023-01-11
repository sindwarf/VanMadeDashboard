const models = require('../models');

exports.get = (req, res) => {
  models.weather.get()
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      res.status(501).send(err.message);
    });
};
