import { h } from "https://cdn.skypack.dev/preact@10.5.13";
// import markdown from "https://cdn.skypack.dev/markdown-wasm";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

type Props = {
  date: string;
  title: string;
  markdown: string;
};

export const PostPage = ({ date, title, markdown }: Props) => (
  <div>
    <h1>{title}</h1>
    <p>date: {date}</p>
    <div dangerouslySetInnerHTML={{
      __html: Marked.parse(markdown).content,
    }} />
  </div>
);
