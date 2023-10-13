import React from "react";
import { BasketListView } from "./BasketListView.js";
import { BasketList } from "../types/BasketList.js";
import { State } from "../types/State.js";
import { Link } from "react-router-dom";
import { BasketTotals } from "./BasketTotals.js";

export const BasketPage: React.FC<{
  basketState: State<BasketList>;
  valid: boolean;
  total: number;
}> = ({ basketState, valid, total }) => {
  const [basketList] = basketState;

  if (!basketList.items.length) return <></>;
  return (
    <div className="flex column gap pad">
      <BasketListView {...{ value: basketState, total }} />
      <BasketTotals {...{ basket: basketList }} />
      {valid ? (
        <Link className="button text-center" to="/checkout">
          Checkout
        </Link>
      ) : (
        "⚠️ Please choose an image for each item"
      )}
    </div>
  );
};
