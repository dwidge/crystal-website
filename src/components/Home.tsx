import React from "react";
import { ProductList } from "./ProductList.js";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";
import { EveryOccasionSection } from "./EveryOccasionSection.js";
import { CaptureMemoriesSection } from "./CaptureMemoriesSection.js";
import { Product } from "../types/Product.js";

export const Home: React.FC<{
  basketState: State<BasketList>;
  items: Product[];
}> = ({ basketState: [basketList], items }) => {
  return (
    <>
      {CaptureMemoriesSection()}
      {ProductList({ basketState: [basketList], items })}
      {EveryOccasionSection()}
    </>
  );
};
