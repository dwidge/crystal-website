// node src\utils\makeItemsJsonFromDir.js

import fs from "fs";

const itemsDir = "public/data/blanks";
const jsonFile = "tmp/blanks.json";

const filenames = await fs.promises.readdir(itemsDir);
const items = filenames.map((filename) => ({
  src: "blanks/" + filename,
  title: filename,
}));

await fs.promises.mkdir("tmp", { recursive: true });
await fs.promises.writeFile(jsonFile, JSON.stringify(items, null, 2), "utf-8");
