const db = require('../database');

exports.get = () => {
  // db.getCurrentWeather()
  //   .then((data) => {
  //     if(data){}
  //   });
};

exports.save = (weatherObj) => (db.updateWeather(weatherObj));
