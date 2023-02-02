// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/articles/[contentId].tsx";
import * as $2 from "./routes/articles/index.tsx";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/ArticleContent.tsx";
import * as $$1 from "./islands/BackGround.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/articles/[contentId].tsx": $1,
    "./routes/articles/index.tsx": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/ArticleContent.tsx": $$0,
    "./islands/BackGround.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
