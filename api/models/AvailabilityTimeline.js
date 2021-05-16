const mongoose = require("mongoose");
const AirlineStatus = require("../enums/AirlineStatus");

const Schema = mongoose.Schema;

const AvailabilityTimeLineSchema = new Schema({
  departureAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
  arrivalAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
  from: { type: Date, require: true },
  to: { type: Date, require: true },
  availableAirlines: [
    {
      airline: { type: Schema.Types.ObjectId, ref: "Airline" },
      services: {
        type: Schema.Types.ObjectId,
        ref: "AirlineLiveServices",
      },
    },
  ],
});

module.exports = mongoose.model(
  "AvailabilityTimeLine",
  AvailabilityTimeLineSchema
);
