import { ensureDirSync } from 'fs';
import { join } from 'path';
import { createClient } from 'microcms';

export const microcmsClient = createClient({
  serviceDomain: 'misodev',
  apiKey: `${Deno.args[0]}`,
});

const articles = await microcmsClient
  .get({ endpoint: 'articles' })
  .then((res) => {
    return res.contents;
  });
const data2 = {
  message: 'data5s',
};
const outputPath = './static/json/';
ensureDirSync(outputPath);
const articlesPath = join(outputPath, 'articles.json');
const careersPath = join(outputPath, 'careers.json');
await Deno.writeFile(
  articlesPath,
  new TextEncoder().encode(JSON.stringify(articles, null, 2))
);
await Deno.writeFile(
  careersPath,
  new TextEncoder().encode(JSON.stringify(data2, null, 2))
);
