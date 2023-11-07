import React from "react";
import { Figure } from "./Figure.js";
import { Product } from "../types/Product.js";
import { config } from "../config.js";

export const ProductView: React.FC<{
  value: Product;
}> = ({ value }) => {
  const src = config.app.dataUrl + "/" + value.imageId;
  const title = value.name;
  const text = value.description;

  return <Figure {...{ href: src, src, title, text }} />;
};
