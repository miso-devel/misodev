import { createClient } from 'microcms';
import 'dotenv/load.ts';
console.log(Deno.env.toObject());
export const microcmsClient = createClient({
  serviceDomain: 'misodev',
  apiKey: `${Deno.env.get('MICROCMS_API_KEY')}`,
});
