import { createYoga } from "graphql-yoga";
import SchemaBuilder from "@pothos/core";
import { builder } from "./builder";

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

const yoga = createYoga({ schema: builder.toSchema(), graphiql: true });

export default { fetch: yoga.fetch };
