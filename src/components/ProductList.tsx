import React from "react";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";
import { ProductView } from "./ProductView.js";
import { randId } from "../utils/randId.js";
import { Product } from "../types/Product.js";

export const ProductList: React.FC<{
  basketState: State<BasketList>;
  items: Product[];
}> = ({ basketState: [basket, setBasket], items }) => {
  return (
    <section className="grid gap pad">
      {items.map((item) => (
        <div className="flex column gap">
          <ProductView {...{ value: item }} />
          {setBasket ? (
            <button
              onClick={() =>
                setBasket({
                  ...basket,
                  items: basket.items.concat([
                    {
                      id: randId(),
                      product: item,
                      image: Promise.resolve(undefined),
                      quantity: 1,
                      subtotal: 1,
                    },
                  ]),
                })
              }
            >
              Add to basket
              <Chip>
                {basket.items
                  .filter(({ product: { id } }) => id === item.id)
                  .map(({ quantity }) => quantity)
                  .join("+")}
              </Chip>
            </button>
          ) : null}
        </div>
      ))}
    </section>
  );
};

export const Chip: React.FC<{ children: string }> = ({ children }) => {
  if (children) return <> ({children})</>;
};
