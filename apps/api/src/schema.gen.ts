import { builder } from "./builder";

export function buildSchema() {
  builder.queryType({
    fields: (t) => ({
      sum: t.int({
        args: {
          a: t.arg.int(),
          b: t.arg.int(),
        },
        resolve: (parent, { a, b }) => a + b,
      }),
    }),
  });

  return builder.toSchema();
}
