import { createClient } from "microcms";
import "dotenv/load.ts";
export const microcmsClient = createClient({
  serviceDomain: "misodev",
  apiKey: `${Deno.env.get("MICROCMS_API_KEY")}`,
});
