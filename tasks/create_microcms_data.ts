import { ensureDirSync } from 'fs';
import { join } from 'path';
import { microcmsClient } from '../lib/microcmsClient.ts';

const articles = await microcmsClient
  .get({ endpoint: 'articles' })
  .then((res) => {
    return res.contents;
  });
const products = await microcmsClient
  .get({ endpoint: 'products' })
  .then((res) => {
    return res.contents;
  });

const outputPath = './static/json/';
ensureDirSync(outputPath);
const articlesPath = join(outputPath, 'articles.json');
const careersPath = join(outputPath, 'products.json');
await Deno.writeFile(
  articlesPath,
  new TextEncoder().encode(JSON.stringify(articles, null, 2))
);
await Deno.writeFile(
  careersPath,
  new TextEncoder().encode(JSON.stringify(products, null, 2))
);
