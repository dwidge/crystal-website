import { Product } from "./Product.js";

export interface BasketItem {
  id: string;
  product: Product;
  image: Promise<Blob | undefined>;
  quantity: number;
  subtotal: number;
}
