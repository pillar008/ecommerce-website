const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // Define product schema fields
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
