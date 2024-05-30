import { sql } from "drizzle-orm";
import {
  text,
  sqliteTable,
  integer,
  real,
  blob,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id"),
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
});

export const products = sqliteTable("products", {
  id: text("id"),
  name: text("name"),
  price: real("price"),
});

export const orders = sqliteTable("orders", {
  id: text("id"),
  userId: text("userId").references(() => users.id),
  createDate: text("createDate").default(sql`CURRENT_TIMESTAMP`),
  total: real("total"),
});

export const images = sqliteTable("images", {
  id: text("id"),
  image: blob("image"),
});

export const orderProducts = sqliteTable("orderProducts", {
  orderId: text("orderId").references(() => orders.id),
  productId: text("productId").references(() => products.id),
  imageId: text("imageId").references(() => images.id),
  price: real("price"),
  quantity: integer("quantity"),
});
