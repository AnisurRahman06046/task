import { Schema, model } from "mongoose";
import { TProduct } from "./products.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    trim: true,
    required: [true, "Product name is required"],
  },
  size: {
    type: String,
    required: [true, "Size is required"],
    enum: ["M", "XL"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    default: 0,
  },
});

const Product = model<TProduct>("Product", productSchema);
export default Product;
