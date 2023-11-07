import { useEffect, useState } from "react";
import { config } from "../config.js";
import { Product } from "../types/Product.js";

const dataItems = fetch(config.app.dataUrl + "/samples.json")
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

export const samples: Promise<Product[]> = dataItems.then((v) =>
  v.map(({ src, title, text, price, weight }) => ({
    id: src,
    name: title,
    price: price ?? 1000,
    weight: weight ?? 500,
    description: text,
    imageId: src,
  }))
);

export function useSamples() {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    samples.then(setData);
  }, [samples]);
  return { data };
}
