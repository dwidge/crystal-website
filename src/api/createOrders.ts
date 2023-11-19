import React, { useState } from "react";
import { useApi } from "./api.js";
import { Order } from "../types/Order.js";

export function useCreateOrders(): {
  busy: boolean;
  error?: string;
  trigger: (v: Order[]) => void;
} {
  const baseUrl = useApi();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<Error>();
  const trigger = (v: Order[]) =>
    Promise.resolve()
      .then(() => setBusy(true))
      .then(() =>
        fetch(baseUrl + "/orders", {
          method: "post",
          body: JSON.stringify(Order.array().parse(v)),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      )
      .catch(setError)
      .then(() => setBusy(false));
  return { busy, error: error?.message, trigger };
}
