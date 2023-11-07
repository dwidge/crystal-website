import { useEffect, useState } from "react";
import { config } from "../config.js";
import { Product } from "../types/Product.js";

console.log(config.app.dataUrl + "/blanks.json");

const dataItems = fetch(config.app.dataUrl + "/blanks.json")
  .then((r) => r.json())
  .then(
    (v) =>
      v as {
        src: string;
        title: string;
        text: string;
        price: number;
        weight: number;
      }[]
  );

export const blanks: Promise<Product[]> = dataItems.then((v) =>
  v.map(({ src, title, text, price, weight }) => ({
    id: src,
    name: title,
    price: price ?? 1000,
    weight: weight ?? 500,
    description: text,
    imageId: src,
  }))
);

export function useBlanks() {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    blanks.then(setData);
  }, [blanks]);
  return { data };
}
