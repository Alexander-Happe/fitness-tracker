const mongoose = require("mongoose");
const Workout = require("../models/fitnessModels");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
  useNewUrlParser: true
});

module.exports = connection;
