import dataItems from "../data/samples.json";
import { Product } from "../types/Product.js";

export const samples: Product[] = dataItems.map(
  ({ src, title, text, price, weight }) => ({
    id: src,
    name: title,
    price: price ?? 1000,
    weight: weight ?? 500,
    description: text,
    imageId: src,
  })
);
