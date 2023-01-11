const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VanMadeDashboard', { useNewUrlParser: true, useUnifiedTopology: true });

const weatherSchema = mongoose.Schema({
  id: Number,
  updated: Date,
  gridId: String,
  gridX: Number,
  gridY: Number,
  forecast: [],
});

const CurrentWeatherModel = mongoose.model('weather', weatherSchema);

exports.updateWeather = (weatherObj) => {
  weatherObj.id = 1;
  return CurrentWeatherModel.replaceOne({ id: 1 }, weatherObj, { upsert: true });
  // const currentWeather = new CurrentWeatherModel(weatherObj);
  // return currentWeather.save(weatherObj);
};

exports.getCurrentWeather = () => (
  CurrentWeatherModel.find({ id: 1 })
);
// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
//   //Think of this like were storing one parameter
//   id : {type : Number, unique : true},
//   username : String,
//   repoName : String,
//   description : String,
//   forkCount : Number, //filter by top 25
//   watchers : Number,
//   repoUrl : String
//   //some useful parameter to filter top 25 repos by
// });

// //

// let Repo = mongoose.model('Repo', repoSchema);
// module.exports.Repo = Repo;