import { test, expect } from "vitest";
import axios from "axios";
import fs from "fs";
import { makeId } from "./makeId.js";
import { baseUrl } from "./baseUrl.js";

test("testFilesSuccess", async () => {
  const id = "test_file" + makeId();
  const file = await fs.promises.readFile("public/apple-touch-icon.png");
  const blob = new Blob([file], { type: "image/png" });

  const form = new FormData();
  form.append("id", id);
  form.append("type", blob.type);
  form.append("data", blob);
  await expect(
    axios.post(baseUrl + "files", form).catch((e) => {
      throw new Error(e.message);
    })
  ).resolves.toMatchObject({ status: 200, data: "OK" });

  const r = await axios
    .get(baseUrl + "files?id=" + id, { responseType: "arraybuffer" })
    .catch((e) => {
      throw new Error(e.message);
    });
  expect(r).toMatchObject({
    status: 200,
    headers: { "content-type": "image/png" },
  });
  expect(r.data).toStrictEqual(file);
});
