import {
  jsx,
  serve,
  validateRequest,
} from "https://deno.land/x/sift@0.1.7/mod.ts";
import { h } from "https://cdn.skypack.dev/preact@10.5.13";
import { IndexPage } from "./components/index.tsx";
import { PostPage } from "./components/post.tsx";

const handlePostRequest = async (
  request: Request,
  { date, title }: { date: string; title: string },
) => {
  const markdown = await Deno.readTextFile(`./.post/${date}/${title}.md`);
  console.log(markdown);
  return jsx(<PostPage date={date} title={title} markdown={markdown} />);
};

// todo validate
serve({
  "/": (_request: Request) => jsx(<IndexPage />),
  "/post/:date/:title": handlePostRequest,
});
