import React from "react";
import { BasketList } from "../types/BasketList.js";
import { State } from "../types/State.js";
import { BasketItemView } from "./BasketItemView.js";

export const BasketListView: React.FC<{
  value: State<BasketList>;
  total: number;
}> = ({ value: [{ id, items }, setList], total }) => {
  return (
    <section className="flex column gap">
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
    </section>
  );
};
