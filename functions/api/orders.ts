import { drizzle } from "drizzle-orm/d1";
import { orders, users } from "../tables.js";
import { Order } from "../../src/types/Order.js";

interface Env {
  DB: D1Database;
  ADMIN_TOKEN: string;
}

const headers = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequest: PagesFunction<Env> = async (context) => {
  console.log("ADMIN_TOKEN1", context.env.ADMIN_TOKEN);
  // await context.request.json();

  if (context.request.method === "POST") {
    const db = drizzle(context.env.DB);
    const body = await context.request.json();
    const input = Order.partial().array().parse(body);
    console.log("onRequest1", body, input);
    console.log("post1", input);
    const createDate = new Date().toISOString();
    // const result = await db.insert(orders).values(input).returning();
    return Response.json([{ ...input[0], createDate }], {
      headers,
    });
  }
  if (context.request.method === "GET") {
    const db = drizzle(context.env.DB);
    const body = context.request.headers.get("Content-Type")?.includes("json")
      ? await context.request.json()
      : undefined;
    const where = Order.partial().parse(body ?? {});
    console.log("where1", where);
    const result = await db.select().from(orders).all();
    console.log("result1", result);
    return Response.json(result, {
      status: 200,
      headers,
    });
  }

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

  // get orders matching where.id and where.createDate if either or both given, otherwise all orders
  // const query = await context.env.DB.prepare(
  //   "SELECT orders.*, users.* from orders as orders, users WHERE (orders.userId = users.id) AND (? IS NULL OR orders.id = ?) AND (? IS NULL OR orders.createDate = ?)"
  // )
  //   .bind(
  //     where.id ?? null,
  //     where.id ?? null,
  //     where.createDate ?? null,
  //     where.createDate ?? null
  //   )
  //   .all();
  // console.log("orders1", query);

  // const data = Order.array().parse(query.results);
  // console.log("data1", data);
  // return Response.json(data, {
  //   headers,
  // });
};
