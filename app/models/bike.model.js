const mongoose = require("mongoose");

const bikeschema = new mongoose.Schema({
  name: String,
  price: String,
  c_c: String,
  mfy: String,
});

module.exports = mongoose.model("Bike", bikeschema);
