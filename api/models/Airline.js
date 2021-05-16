const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AirlineSchema = new Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  company: { type: String, required: true, unique: true },
  authorize: { type: Boolean, required: true, unique: true },
  metaDetails: { type: String, required: false },
  available: { type: Boolean, required: true, default: true },
  mealsSupplied: [
    {
      meal: { type: Schema.Types.ObjectId, ref: "Meals" },
      count: { type: Number, required: true },
      airLineSpecialPrice: { type: Number, required: true },
    },
  ],
  seatCount: { type: Number, required: true },
});

module.exports = mongoose.model("Airline", AirlineSchema);
