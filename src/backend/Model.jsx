// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  model: { type: String },
  price: { type: Number, required: true },
  new_price: { type: Number },
  disccount: { type: Number },
});

export default mongoose.model("Product", productSchema);
