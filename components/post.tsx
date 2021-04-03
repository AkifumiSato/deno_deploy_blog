import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";
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
    <div
      dangerouslySetInnerHTML={{
        __html: Marked.parse(markdown).content,
      }}
    />
  </div>
);
