import { ensureDirSync } from 'fs';
import { join } from 'path';
import { microcmsClient } from '../lib/microcmsClient.ts';
type TProps = {
  target: string;
};
export const basicTask = async ({ target }: TProps) => {
  const data = await microcmsClient.get({ endpoint: target }).then((res) => {
    return res.contents;
  });
  const outputPath = './static/json/';
  ensureDirSync(outputPath);
  const path = join(outputPath, `${target}.json`);
  await Deno.writeFile(
    path,
    new TextEncoder().encode(JSON.stringify(data, null, 2))
  );
};
