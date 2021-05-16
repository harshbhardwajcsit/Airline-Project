const mongoose = require("mongoose");
const WeatherConditions = require("../enums/WeatherConditions");

const Schema = mongoose.Schema;

const WeatherSchema = new Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  weatherDeterminationRatio: { type: Number, required: true, default: 25 }, //Km upto which Flight is not allowed to operated
  isOk: { type: Boolean, required: true, default: true },
  condition: {
    type: String,
    enum: Object.values(WeatherConditions),
    required: true,
  },
});

module.exports = mongoose.model("Weather", WeatherSchema);
