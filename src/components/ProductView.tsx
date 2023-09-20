import React from "react";
import { Figure } from "./Figure.js";
import { Product } from "../types/Product.js";
import { app } from "../config.js";

export const ProductView: React.FC<{
  value: Product;
}> = ({ value }) => {
  return (
    <Figure
      href="#"
      {...{
        src: app.root + "/data/" + value.imageId,
        title: value.name,
        text: value.description,
      }}
    />
  );
};
