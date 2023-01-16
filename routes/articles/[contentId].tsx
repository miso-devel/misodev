import { PageProps } from "$fresh/server.ts";
export default function ArticleContents(props: PageProps) {
  return (
    <div>
      contentId is {props.params.contentId}
    </div>
  );
}
