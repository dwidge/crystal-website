import React from "react";
import { app } from "../config.js";

export function ContactUs() {
  return (
    <div className="semidark bgimage">
      <div className="padx center text-center gap">
        <div>
          <h2>Contact us</h2>
        </div>
        <div className="center">
          <div>{app.email}</div>
          <div>{app.phone}</div>
          <div>We deliver countrywide</div>
        </div>
      </div>
    </div>
  );
}
