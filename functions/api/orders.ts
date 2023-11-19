import { Order } from "../../src/types/Order.js";

interface Env {
  DB: D1Database;
}

const headers = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers,
    });
  }

  // const where = Order.partial().parse(await context.request.json());
  // console.log("where1", where);
  // const ps = context.env.DB.prepare("SELECT * from orders");
  // const order = await ps.first();
  // console.log("order1", { order });
  const data = Order.array().parse([]);
  console.log("data1", data);
  return Response.json(data, {
    headers,
  });
};
