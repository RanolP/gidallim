import { introspectionFromSchema } from "graphql";
import { buildSchema } from "../src/schema.gen";
import fs from "node:fs";
import path from "node:path";

const [relative] = process.argv.slice(2);
const absolute = path.resolve(process.cwd(), relative);

const schema = buildSchema();
const introspection = introspectionFromSchema(schema);

let parent = path.dirname(absolute);
const toMake = [];
while (!fs.existsSync(parent)) {
  toMake.unshift(parent);
  parent = path.dirname(parent);
}
for (const dir of toMake) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(absolute, JSON.stringify(introspection));
