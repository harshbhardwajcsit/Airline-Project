const mongoose = require("mongoose");
const BookingStatus = require("../enums/BookingStatus");
const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  departureAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
  arrivalAirport: { type: Schema.Types.ObjectId, ref: "Airport" },
  departureTime: { type: Date, require: true },
  arrivalTime: { type: Date, require: true },
  airline: { type: Schema.Types.ObjectId, ref: "Airline" },
  seat: { type: Number, required: false },
  cost: { type: Number, require: true },
  status: {
    type: String,
    enum: Object.values(BookingStatus),
    default: BookingStatus.PENDING,
  },
  additionalServices: [
    {
      meals: [
        {
          meal: { type: Schema.Types.ObjectId, ref: "Meals" },
          paymentStatus: { type: String, require: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Bookings", BookingsSchema);
