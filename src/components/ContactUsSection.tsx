import React from "react";
import { config } from "../config.js";

export function ContactUsSection() {
  return (
    <div className="semidark bgimage">
      <div className="padx center text-center gap">
        <div>
          <h2>Contact us</h2>
        </div>
        <div className="center">
          <div>{config.app.email}</div>
          <div>{config.app.phone}</div>
          <div>We deliver countrywide</div>
        </div>
      </div>
    </div>
  );
}
