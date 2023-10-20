import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import "../styles/reset.css";
import "../styles/home.css";
import * as config from "../config.js";
import { BasketPage } from "./BasketPage.js";
import { BasketList } from "../types/BasketList.js";
import { CheckoutForm } from "./CheckoutForm.js";
import { blanks } from "../utils/blanks.js";
import { samples } from "../utils/samples.js";
import { UserData } from "../types/UserData.js";
import { randId } from "../utils/randId.js";
import { useIsValidBasket } from "./useIsValidBasket.js";
import { sum } from "../utils/sum.js";
import { ProductList } from "./ProductList.js";
import { ContactUsSection } from "./ContactUsSection.js";
import { AdminPage } from "./AdminPage.js";

export function App() {
  const submitted = useState<boolean>(false);
  const userState = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const basketState = useState<BasketList>({
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

  const [basketList] = basketState;
  useEffect(() => {
    submitted[1](false);
  }, [userState[0], basketList]);
  const valid = useIsValidBasket(basketList);
  const total = basketList.items
    .map((value) => value.product.price * value.quantity)
    .reduce(sum, 0);

  return (
    <Router basename={config.app.root}>
      <div className="flex column light wide shadow">
        <section className="flex0 row spaced wrap dark pad">
          <section>
            <h2>
              <Link to="/">{config.app.title}</Link>
            </h2>
          </section>
          <section>
            <nav role="navigation" className="row gap wrap">
              <Link to="/">Gallery</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/basket">Basket</Link>
              <Link to="/checkout">Checkout</Link>
            </nav>
          </section>
        </section>
        <Routes>
          <Route
            path="/"
            element={<Home {...{ basketState, items: samples }} />}
          />
          <Route path="/admin" element={<AdminPage {...{}} />} />
          <Route
            path="/shop"
            element={<ProductList {...{ basketState, items: blanks }} />}
          />
          <Route
            path="/basket"
            element={<BasketPage {...{ valid, basketState, total }} />}
          />
          <Route
            path="/checkout"
            element={
              <CheckoutForm
                {...{
                  basketState,
                  user: userState,
                  valid,
                  submitted,
                  total,
                }}
              />
            }
          />
        </Routes>
        <ContactUsSection />
        <section className="flex0 dark pad center">
          © 2023 {config.app.title}
        </section>
      </div>
    </Router>
  );
}
