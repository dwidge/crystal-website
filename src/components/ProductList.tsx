import React from "react";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";
import { ProductView } from "./ProductView.js";
import { randId } from "../utils/randId.js";
import { products } from "./products.js";

export const ProductList: React.FC<{ value: State<BasketList> }> = ({
  value: [{ id, items, total }, setBasket],
}) => {
  return (
    <section className="grid gap pad">
      {products.map((product) => (
        <div className="flex column gap">
          {ProductView({ value: product })}
          {setBasket ? (
            <button
              onClick={() =>
                setBasket({
                  id,
                  items: items.concat([
                    {
                      id: randId(),
                      product,
                      image: Promise.resolve(undefined),
                      quantity: 1,
                      subtotal: 1,
                    },
                  ]),
                  total,
                })
              }
            >
              Add to basket
              <Chip>
                {items
                  .filter(({ product: { id } }) => id === product.id)
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
