import React from "react";
import { useGetOrders } from "../api/getOrders.js";

export function OrdersView() {
  const { busy, error, data } = useGetOrders();

  if (busy) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return data?.map(({ id, user: user }) => (
    <div key={id}>
      <p>{id}</p>
      <p>{user.name}</p>
      <br />
    </div>
  ));
}
