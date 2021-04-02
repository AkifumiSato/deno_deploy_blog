import {
  jsx,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.1.7/mod.ts";
import { html } from "https://cdn.skypack.dev/htm@v3.0.4/preact/standalone.module.js";

const App = html`
  <div>
    <h1>Hello world!</h1>
    <p>page: index</p>
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

const handleIndexRequest = async (request: Request) => {
  // Make sure the request is a GET request.
  const { error } = await validateRequest(request, {
    GET: {},
  });
  // validateRequest populates the error if the request doesn't meet
  // the schema we defined.
  if (error) {
    return jsx(html`
      <div>internal error</div>
    `);
  }
  // const markdown = await fetch(
  //   "https://raw.githubusercontent.com/AkifumiSato/deno_markdown_docs/main/README.md",
  // ).then((res) => res.text());
  // console.log(markdown);

  // Return all the quotes.
  return jsx(App);
};

serve({
  "/": handleIndexRequest,
});
