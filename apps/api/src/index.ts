import { createYoga } from "graphql-yoga";
import { buildSchema } from "./schema.gen";

const yoga = createYoga({ schema: buildSchema, graphiql: true });

export default { fetch: yoga.fetch };
