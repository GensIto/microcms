import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "r2yqn1k1c7",
  apiKey: process.env.API_KEY!,
});
