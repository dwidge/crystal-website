import React from "react";
import { Figure } from "./Figure.js";
import items from "../data/items.json";

export function ProductList() {
  return (
    <section className="grid gap pad">
      {items.map(({ src, title, text }) => (
        <Figure href="#" {...{ src: "images/" + src, title, text }} />
      ))}
    </section>
  );
}
