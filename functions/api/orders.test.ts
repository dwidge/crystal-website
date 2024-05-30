import { test, expect } from "vitest";
import axios from "axios";
import { Order } from "../../src/types/Order.js";
import { makeId } from "./makeId.js";

test("testGetOrdersSuccess", async () => {
  const order = Order.partial().parse({
    id: "test_order_" + makeId(),
    items: [
      {
        id: "test_item_" + makeId(),
        productId: "test_prod_1",
        quantity: 2,
        price: 4,
      },
    ],
    total: 100,
    user: {
      name: "test_User",
      email: "test_User@localhost",
      phone: "555",
      address: "test_address",
    },
  });

  const r = await axios
    .post("http://127.0.0.1:8788/api/orders", [order])
    .catch((e) => {
      throw new Error(e.message);
    });
  expect(r.data).toMatchObject([
    {
      createDate: expect.any(String),
      ...order,
    },
  ]);

  // await expect(
  //   axios
  //     .get("http://127.0.0.1:8788/api/orders", {
  //       headers: { Authorization: "abc" },
  //     })
  //     .catch((e) => {
  //       throw new Error(e.message);
  //     })
  // ).resolves.toMatchObject({ data: [{}] });
});
