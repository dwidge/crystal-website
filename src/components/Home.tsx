import React from "react";
import { Figure } from "./Figure.js";
import items from "../data/items.json";
import "../styles/home.css";
const { PUBLIC_TITLE = "", PUBLIC_EMAIL = "", PUBLIC_PHONE = "" } = process.env;

export function Home() {
  return (
    <>
      <section className="row pad">
        <section>
          <h2>
            <a href=".">{PUBLIC_TITLE}</a>
          </h2>
        </section>
        <section>
          <nav role="navigation">
            <a href="/home">Home</a>
          </nav>
        </section>
      </section>

      <div className="dark bgimage">
        <section className="padx center">
          <h5>
            <i>CAPTURE YOUR MEMORIES in LIGHT</i>
          </h5>
          <h5>
            <i>PERSONALISED 3D CRYSTAL PHOTOS AND AWARDS IN CRYSTAL GLASS</i>
          </h5>
          <p>It is inside not on top..</p>
        </section>
      </div>

      <section className="grid gap pad">
        {items.map(({ src, title, text }) => (
          <Figure href="#" {...{ src: "images/" + src, title, text }} />
        ))}
      </section>

      <div className="padx center gap">
        <h3>personalised CRYSTAL GIFTS for every occasion</h3>
        <div>Quirky gifts to suit any taste and budget.</div>
      </div>

      <div className="dark bgimage">
        <div className="padx center gap">
          <div>
            <h2>Contact us</h2>
          </div>
          <div className="center">
            <div>{PUBLIC_EMAIL}</div>
            <div>{PUBLIC_PHONE}</div>
            <div>We deliver countrywide</div>
          </div>

          <div className="button">
            <a href="store">Visit the store</a>
          </div>
        </div>
      </div>

      <section className="dark pad center">
        <section>
          <h2>
            <a href="./">{PUBLIC_TITLE}</a>
          </h2>
        </section>
        <section>© All rights reserved</section>
      </section>
    </>
  );
}
