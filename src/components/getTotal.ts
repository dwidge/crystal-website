import { sum } from "../utils/sum.js";
import { BasketItem } from "../types/BasketItem.js";

export function getTotalWeight(items: BasketItem[]) {
  return items.map((v) => v.quantity * v.product.weight).reduce(sum, 0);
}
export function getTotalPrice(items: BasketItem[]) {
  return items.map((v) => v.quantity * v.product.price).reduce(sum, 0);
}
