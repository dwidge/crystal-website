import React from "react";
import { UserData } from "../types/UserData.js";
import { UserDataView } from "./UserDataView.js";
import { State } from "../types/State.js";
import { BasketList } from "../types/BasketList.js";
import { Link } from "react-router-dom";
import { BasketTotals } from "./BasketTotals.js";

export const CheckoutForm: React.FC<{
  valid: boolean;
  submitted: State<boolean>;
  total: number;
  basketState: State<BasketList>;
  user: State<UserData>;
  onSubmit?: (userData: UserData, basket: BasketList) => void;
}> = ({
  valid,
  submitted: [submitted, setSubmitted],
  basketState: [basket],
  user: [userData, setUserData],
  onSubmit,
}) => {
  if (!setSubmitted) return;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        onSubmit?.(userData, basket);
      }}
      className="flex column pad gap checkout-form"
    >
      {BasketTotals(basket)}
      {UserDataView({ value: [userData, setUserData] })}
      {submitted ? (
        "Thank you. Your order is submitted. We will contact you shortly."
      ) : valid ? (
        <button type="submit">Submit Order</button>
      ) : (
        <>
          <div>⚠️ Basket not ready</div>
          <Link to="/basket" className="button text-center">
            View Basket
          </Link>
        </>
      )}
    </form>
  );
};
