import React from "react";
import { BasketListView } from "./BasketListView.js";
import { BasketList } from "../types/BasketList.js";
import { State } from "../types/State.js";
import { Link } from "react-router-dom";
import { BasketTotals } from "./BasketTotals.js";

export const BasketPage: React.FC<{
  basket: State<BasketList>;
  valid: boolean;
  total: number;
}> = ({ basket, valid, total }) => {
  const [basketList] = basket;

  return (
    <div className="flex column gap pad">
      {BasketTotals(basketList)}
      {BasketListView({ value: basket, total })}
      {BasketTotals(basketList)}
      {valid ? (
        <Link className="button text-center" to="/checkout">
          Checkout
        </Link>
      ) : (
        "Please choose an image for each item"
      )}
    </div>
  );
};
