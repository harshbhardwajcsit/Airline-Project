const mongoose = require("mongoose");
const AirlineStatus = require("../enums/AirlineStatus");

const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  departureAirport: { type: String, require: true },
  departureTime: { type: Date, require: true },
  arrivalAirport: { type: String, require: true },
  arrivalTime: { type: Date, require: true },
  airlineCode: { type: String, require: true },
  company: { type: String, require: true },
  operationStatus: {
    status: {
      type: String,
      enum: Object.values(AirlineStatus),
      required: true,
    },
    reason: { type: String, require: false }, // Reason for Airline cancellation
  },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
