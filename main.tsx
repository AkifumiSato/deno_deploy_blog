import { h, jsx, serve } from "https://deno.land/x/sift@0.1.7/mod.ts";
import { IndexPage } from "./components/index.tsx";
import { PostPage } from "./components/post.tsx";

const HtmlLayout = ({ children }) => (
  <html>
    <head>
      <title>Document</title>
    </head>
    <body style={{ margin: 0 }}>
      {children}
    </body>
  </html>
);

const handlePostRequest = async (
  request: Request,
  { date, title }: { date: string; title: string },
) => {
  const markdown = await fetch(
    `https://raw.githubusercontent.com/AkifumiSato/deno_deploy_blog/main/.post/${date}/${title}.md`,
  ).then((res) => res.text());
  return jsx(
    <HtmlLayout>
      <PostPage date={date} title={title} markdown={markdown} />
    </HtmlLayout>,
  );
};

// todo validate
serve({
  "/": (_request: Request) => jsx(<IndexPage />),
  "/post/:date/:title": handlePostRequest,
});
