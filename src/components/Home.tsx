import React from "react";
import { ProductList } from "./ProductList.js";
import { ContactUs } from "./ContactUs.js";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";

export const Home: React.FC<{ basket: State<BasketList> }> = ({ basket }) => {
  return (
    <>
      <div className="semidark bgimage">
        <section className="padx center text-center">
          <h5>
            <i>CAPTURE YOUR MEMORIES in LIGHT</i>
          </h5>
          <h5>
            <i>PERSONALISED 3D CRYSTAL PHOTOS AND AWARDS IN CRYSTAL GLASS</i>
          </h5>
          <p>It is inside not on top..</p>
        </section>
      </div>

      {ProductList({ value: basket })}

      <div className="flex padx center text-center gap">
        <h3>personalised CRYSTAL GIFTS for every occasion</h3>
        <div>Quirky gifts to suit any taste and budget.</div>
      </div>

      <ContactUs />
    </>
  );
};
