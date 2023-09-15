import React from "react";
import { BasketItem } from "../types/BasketItem.js";
import { ImageView } from "./ImageView.js";
import { State } from "../types/State.js";
import { ProductView } from "./ProductView.js";
import { app } from "../config.js";

export const BasketItemView: React.FC<{
  value: State<BasketItem>;
}> = ({ value: [value, setValue] }) => {
  return (
    <div className="basket-item semidark pad gap">
      <h3>{value.product.name}</h3>
      <div className="flex row gap">
        {ProductView({ value: value.product })}
        <ImageView
          value={[
            value.image,
            setValue ? (image) => setValue({ ...value, image }) : undefined,
          ]}
        />
      </div>
      <div className="grid2">
        <label htmlFor={value.id + "_quantity"}>Quantity</label>
        <div className="right">
          {setValue ? (
            <input
              id={value.id + "_quantity"}
              type="number"
              min={0}
              max={10000}
              value={value.quantity}
              onChange={(e) =>
                setValue({ ...value, quantity: +e.target.value })
              }
            />
          ) : null}
        </div>
        <div>Price</div>
        <div className="right">
          {value.quantity} * {app.currency}
          {value.product.price} = {app.currency}
          {value.product.price * value.quantity}
        </div>
        <div>Weight</div>
        <div className="right">
          {value.product.weight} * {value.quantity}
          {" = "}
          {value.product.weight * value.quantity}g
        </div>
      </div>
    </div>
  );
};
