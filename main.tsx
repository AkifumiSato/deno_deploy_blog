import { jsx, serve } from "https://deno.land/x/sift@0.1.7/mod.ts";
import { html } from "https://cdn.skypack.dev/htm@v3.0.4/preact/standalone.module.js";

const App = html`
  <div>
    <h1>Hello world!</h1>
    <p>this page is testing...</p>
  </div>
`;

// todo
// const handleRequest = async (request: Request) => {
// const { error, body } = await validateRequest(request, {
//   GET: {
//     params: ["title"],
//   },
//   POST: {
//     body: ["title", "artist", "album", "released", "genres"],
//   },
// });
// if (error) {
//   return json({ error: error.message }, { status: error.status });
// }
// const markdown = await fetch('https://raw.githubusercontent.com/AkifumiSato/deno_markdown_docs/main/README.md').then(res => res.text());
// console.log(markdown);
//   return new Response("hello world");
// }

serve({
  "/": (_request: Request) => jsx(App),
});
