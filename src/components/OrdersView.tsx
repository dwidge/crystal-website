import React from "react";
import { getOrders } from "../api/getOrders.js";

export function OrdersView() {
  const { loading, error, data } = getOrders();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return data?.map(({ id, firstName }) => (
    <div key={id}>
      <p>{id}</p>
      <p>{firstName}</p>
      <br />
    </div>
  ));
}
