import { ensureDirSync } from 'fs';
import { join } from 'path';

const data = {
  message: 'data1',
};
const data2 = {
  message: 'data2',
};
const outputPath = '../static/json';
ensureDirSync(outputPath);
const articlesPath = join(outputPath, 'articles.json');
const careersPath = join(outputPath, 'careers.json');
await Deno.writeFile(
  articlesPath,
  new TextEncoder().encode(JSON.stringify(data, null, 2))
);
await Deno.writeFile(
  careersPath,
  new TextEncoder().encode(JSON.stringify(data2, null, 2))
);
