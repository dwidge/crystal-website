import dataItems from "../data/items.json";
import { Product } from "../types/Product.js";

export const products: Product[] = dataItems.map(
  ({ src, title, text, price }) => ({
    id: src,
    name: title,
    price: price ?? 1000,
    description: text,
    imageId: src,
  })
);
