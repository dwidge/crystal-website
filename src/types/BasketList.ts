import { BasketItem } from "./BasketItem.js";

export interface BasketList {
  id: string;
  items: BasketItem[];
  total: number;
}
