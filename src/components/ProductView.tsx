import React from "react";
import { Figure } from "./Figure.js";
import { Product } from "../types/Product.js";

export const ProductView: React.FC<{
  value: Product;
}> = ({ value }) => {
  return (
    <Figure
      href="#"
      {...{
        src: "images/" + value.imageId,
        title: value.name,
        text: value.description,
      }}
    />
  );
};
