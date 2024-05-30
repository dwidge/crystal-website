import { z } from "zod";

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
  try {
    if (context.request.method === "POST") {
      const body = await context.request.formData();
      const id = body.get("id");
      const type = body.get("type");
      const createDate = new Date().toISOString();
      const dataFile = body.get("data") as any as File;
      const dataBuffer = await dataFile.arrayBuffer();

      await context.env.DB.prepare(
        "INSERT INTO files (id,type,createDate,data) VALUES (?1, ?2, ?3, ?4)"
      )
        .bind(id, type, createDate, dataBuffer)
        .run();

      return Response.json("OK", {
        headers,
      });
    }

    if (context.request.method === "GET") {
      const params = new URLSearchParams(context.request.url.split("?")[1]);
      const id = params.get("id");

      const { results } = await context.env.DB.prepare(
        "SELECT * FROM files WHERE id = ?"
      )
        .bind(id)
        .all();
      const files = z
        .object({
          id: z.string(),
          type: z.string(),
          data: z.any().transform((v) => Uint8Array.from(v)),
        })
        .array()
        .parse(results);
      if (files.length !== 1) throw new Error("filesE1");

      return new Response(files[0].data, {
        headers: { "content-type": files[0].type },
      });
    }

    if (context.request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers,
      });
    }

    return new Response(null, {
      status: 404,
      headers,
    });
  } catch (e) {
    console.log(e);
    throw new Error(e.message);
  }
};
