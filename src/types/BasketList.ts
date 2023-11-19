import z from "zod";
import { BasketItem } from "./BasketItem.js";

export const BasketList = z.object({
  id: z.string(),
  items: BasketItem.array(),
  total: z.number(),
});
export type BasketList = z.infer<typeof BasketList>;
