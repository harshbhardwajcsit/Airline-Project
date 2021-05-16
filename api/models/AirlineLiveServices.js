const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AirlineLiveServicesSchema = new Schema({
  airline: {
    type: Schema.Types.ObjectId,
    ref: "Airline",
  },
  seats: [
    {
      code: { type: String, required: true },
      isAvailable: { type: Boolean, required: true, default: true },
    },
  ],

  meals: [
    {
      code: { type: Schema.Types.ObjectId, ref: "Meals" },
      isAvailable: { type: Boolean, required: true, default: true },
      countLeft: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model(
  "AirlineLiveServices",
  AirlineLiveServicesSchema
);
