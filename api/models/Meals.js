const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MealsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  veg: { type: Boolean, required: true, default: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Meals", MealsSchema);
