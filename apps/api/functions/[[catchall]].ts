import { createYoga } from "graphql-yoga";
import { buildSchema } from "../src/schema.gen";

import type {
  PagesFunction,
  Response,
} from "@cloudflare/workers-types/2023-07-01";

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  const yoga = createYoga<Env>({ schema: buildSchema, graphiql: true });

  const yogaResponse = await yoga.handleRequest(
    request as unknown as Request,
    env
  );
  // @ts-expect-error
  return new Response(await yogaResponse.arrayBuffer(), {
    status: yogaResponse.status,
    statusText: yogaResponse.statusText,
    headers: yogaResponse.headers,
  });
};
