import React from "react";
import { BasketList } from "../types/BasketList.js";
import { State } from "../types/State.js";
import { BasketItemView } from "./BasketItemView.js";
import { app } from "../config.js";

export const BasketListView: React.FC<{
  value: State<BasketList>;
  total: number;
}> = ({ value: [{ id, items }, setList], total }) => {
  return (
    <section className="flex column gap">
      <h2>Your Basket</h2>
      {items.map((item, index) => (
        <BasketItemView
          key={index}
          value={[
            item,
            setList
              ? (item) =>
                  setList({
                    id,
                    total,
                    items: items.map((v) => (v.id === item.id ? item : v)),
                  })
              : undefined,
          ]}
        />
      ))}
      <p className="right">
        {app.currency}
        {total.toFixed(2)}
      </p>
    </section>
  );
};
