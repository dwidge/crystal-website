import React from "react";
import { ProductList } from "./ProductList.js";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";
import { EveryOccasionSection } from "./EveryOccasionSection.js";
import { CaptureMemoriesSection } from "./CaptureMemoriesSection.js";
import { Product } from "../types/Product.js";
import { Carousel } from "./Carousel.js";
import { app } from "../config.js";

export const Home: React.FC<{
  basketState: State<BasketList>;
  items: Product[];
}> = ({ basketState: [basketList], items }) => {
  return (
    <>
      {CaptureMemoriesSection()}
      {Carousel({
        imgs: items.map((item) => ({
          src: app.root + "/data/" + item.imageId,
          alt: item.name,
        })),
      })}
      {ProductList({ basketState: [basketList], items })}
      {EveryOccasionSection()}
    </>
  );
};
