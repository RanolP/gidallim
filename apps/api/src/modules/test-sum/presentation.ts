import { Presentation } from "../../builder";

export const install: Presentation = (builder) => {
  builder.queryType({
    fields: (t) => ({
      sum: t.int({
        args: { a: t.arg.int(), b: t.arg.int() },
        resolve: (parent, { a, b }) => a + b,
      }),
    }),
  });
};
