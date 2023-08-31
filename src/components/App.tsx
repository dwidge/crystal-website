import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import "../styles/reset.css";
import "../styles/home.css";
import { app } from "../config.js";
import { BasketPage } from "./BasketPage.js";
import { BasketList } from "../types/BasketList.js";
import { CheckoutForm } from "./CheckoutForm.js";
import { products } from "./products.js";
import { UserData } from "../types/UserData.js";
import { randId } from "../utils/randId.js";
import { useIsValidBasket } from "./useIsValidBasket.js";
import { sum } from "../utils/sum.js";

export function App() {
  const submitted = useState<boolean>(false);
  const user = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const basket = useState<BasketList>({
    id: randId(6, 10),
    items: [
      // {
      //   product: products[0],
      //   id: "test1",
      //   image: Promise.resolve(undefined),
      //   quantity: 1,
      //   subtotal: 0,
      // },
      // {
      //   product: products[0],
      //   id: "test2",
      //   image: Promise.resolve(undefined),
      //   quantity: 1,
      //   subtotal: 0,
      // },
    ],
    total: 0,
  });

  useEffect(() => {
    submitted[1](false);
  }, [user[0], basket[0]]);
  const [basketList] = basket;
  const valid = useIsValidBasket(basketList);
  const total = basketList.items
    .map((value) => value.product.price * value.quantity)
    .reduce(sum, 0);

  return (
    <Router>
      <div className="light wide flex column shadow">
        <section className="dark pad row">
          <section>
            <h2>
              <Link to="/">{app.title}</Link>
            </h2>
          </section>
          <section>
            <nav role="navigation" className="row gap">
              <Link to="/">Products</Link>
              <Link to="/basket">Basket</Link>
              <Link to="/checkout">Checkout</Link>
            </nav>
          </section>
        </section>
        <Routes>
          <Route path="/" element={Home({ basket })} />
          <Route
            path="/basket"
            element={BasketPage({ valid, basket, total })}
          />
          <Route
            path="/checkout"
            element={CheckoutForm({ basket, user, valid, submitted, total })}
          />
        </Routes>
        <section className="flex dark pad center">© 2023 {app.title}</section>
      </div>
    </Router>
  );
}
