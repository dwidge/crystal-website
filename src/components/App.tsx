import React from "react";
import { Home } from "./Home.js";
import "../styles/reset.css";
import "../styles/home.css";
import { app } from "../config.js";

export function App() {
  return (
    <>
      <section className="row pad">
        <section>
          <h2>
            <a href=".">{app.title}</a>
          </h2>
        </section>
        <section>
          <nav role="navigation">
            <a href=".">Home</a>
          </nav>
        </section>
      </section>

      <Home />

      <section className="dark pad center">
        <section>
          <h2>
            <a href=".">{app.title}</a>
          </h2>
        </section>
        <section>© All rights reserved</section>
      </section>
    </>
  );
}
