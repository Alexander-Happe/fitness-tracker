const express = require("express");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const db = require("./models/fitnessModels");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});