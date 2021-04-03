import {
  jsx,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.1.7/mod.ts";
import { h } from "https://cdn.skypack.dev/preact@10.5.13";
import { IndexPage } from './components/index.tsx'
// import markdown from "https://cdn.skypack.dev/markdown-wasm@1.1.2";

serve({
  "/": (_request: Request) => jsx(<IndexPage />),
});
