import React from "react";
import { BasketListView } from "./BasketListView.js";
import { BasketList } from "../types/BasketList.js";
import { State } from "../types/State.js";
import { Link } from "react-router-dom";

export const BasketPage: React.FC<{
  basket: State<BasketList>;
  valid: boolean;
  total: number;
}> = ({ basket, valid, total }) => {
  const [basketList] = basket;

  return (
    <div className="flex column gap pad">
      {BasketListView({ value: basket, total })}
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
