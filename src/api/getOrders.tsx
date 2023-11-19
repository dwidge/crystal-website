import { useEffect, useState } from "react";
import { useApi } from "./api.js";
import { Order } from "../types/Order.js";

export function useGetOrders(where: Partial<Order> = {}): {
  busy: boolean;
  error?: string;
  data?: Order[];
} {
  const baseUrl = useApi();
  const [busy, setBusy] = useState(false);
  const [data, setData] = useState<Order[]>();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    setBusy(true);
    fetch(baseUrl + "/orders", {
      method: "post",
      body: JSON.stringify(Order.partial().parse(where)),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((v) => setData(Order.array().parse(v)))
      .catch(setError)
      .then(() => setBusy(false));
  }, []);
  return { busy, error: error?.message, data: data };
}
