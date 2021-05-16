const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  name: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    operationalTime: {
      from: { type: Number, required: true },
      to: { type: Number, required: true },
    },
  },
  timezone: { type: String, required: true },
  available: { type: Boolean, required: true, default: true },
});

module.exports = mongoose.model("Airport", AirportSchema);
