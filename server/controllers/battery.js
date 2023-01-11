const models = require('../models');

exports.get = ((req, res) => {
  models.battery.get()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log('ERROR GETTING BATTERY DATA', err.message);
      res.sendStatus(501);
    });
});
