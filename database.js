const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VanMadeDashboard', { useNewUrlParser: true, useUnifiedTopology: true });

const weatherSchema = mongoose.Schema({
  updated: Date,
  gridId: String,
  gridX: Number,
  gridY: Number,
  forecast: [],
});
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