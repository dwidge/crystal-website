import React from "react";
import { ProductList } from "./ProductList.js";
import { ContactUs } from "./ContactUs.js";

export function Home() {
  return (
    <>
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

      <ProductList />

      <div className="padx center gap">
        <h3>personalised CRYSTAL GIFTS for every occasion</h3>
        <div>Quirky gifts to suit any taste and budget.</div>
      </div>

      <ContactUs />
    </>
  );
}
