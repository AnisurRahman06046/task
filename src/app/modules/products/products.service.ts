import { TProduct } from "./products.interface";
import Product from "./products.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProducts = async () => {
  const result = await Product.find({});
  return result;
};

export const productServices = { createProductIntoDb, getProducts };
