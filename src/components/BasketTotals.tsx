import React from "react";
import { BasketList } from "../types/BasketList.js";
import { app } from "../config.js";
import { getTotalPrice, getTotalWeight } from "./getTotal.js";

export function BasketTotals(basket: BasketList) {
  if (!basket.items.length) return <></>;
  return (
    <div className="grid2">
      <div>Order</div>
      <div className="right">
        <b>#{basket.id}</b>
      </div>
      <div>Total Price</div>
      <div className="right">
        {app.currency}
        {getTotalPrice(basket.items).toFixed(2)}
      </div>
      <div>Total Weight</div>
      <div className="right">{getTotalWeight(basket.items)}g</div>
    </div>
  );
}
