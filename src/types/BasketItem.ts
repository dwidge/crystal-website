import z from "zod";
import { Product } from "./Product.js";

export const BasketItem = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
  price: z.number(),
  product: Product.optional(),
  image: z.promise(z.instanceof(Blob).optional()).optional(),
});
export type BasketItem = z.infer<typeof BasketItem>;
