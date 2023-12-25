import { TProduct } from "./products.interface";
import Product from "./products.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const productServices = { createProductIntoDb };
