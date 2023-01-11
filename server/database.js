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

const batterySchema = mongoose.Schema({
  date: { type: Date, default: Date.now()},
  voltage: Number, // mV
  current: Number, // mA
  temp: Number, // C
  iPower: Number, // watts
  consumed: Number, // mAh
  soc: Number, // %
  alarm: Boolean, // alarm condition active
});

const batteryModel = mongoose.model('batteryEntries', batterySchema);
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

exports.getRecentBatteryData = () => (
  batteryModel.find({}).sort('-date').limit(25)
);

// //

// let Repo = mongoose.model('Repo', repoSchema);
// module.exports.Repo = Repo;