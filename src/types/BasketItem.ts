import z from "zod";
import { Product } from "./Product.js";

export const BasketItem = z.object({
  id: z.string(),
  product: Product,
  image: z.promise(z.instanceof(Blob).optional()),
  quantity: z.number(),
  subtotal: z.number(),
});
export type BasketItem = z.infer<typeof BasketItem>;
