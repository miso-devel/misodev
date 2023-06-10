import { createClient } from "microcms";
export const microcmsClient = createClient({
  serviceDomain: "misodev",
  apiKey: `${Deno.args[0]}`,
});
