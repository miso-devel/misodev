import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { TypoWrapper } from "../../components/atom/TypoWrapper.tsx";
import { Articles } from "../../components/molecules/Article/Articles.tsx";
import { ArticleTemplate } from "../../components/templates/ArticleTemplate.tsx";
import { microcmsClient } from "../../lib/microCMSClient.ts";
import { type TArticle } from "../../types/Article.d.ts";
export const handler: Handlers<TArticle[]> = {
  async GET(_, ctx) {
    const articles = await microcmsClient.get({
      endpoint: "articles",
    }).then((res) => {
      return res;
    });
    console.log(articles.contents);
    return ctx.render(articles.contents);
  },
};
export default function ArticlesPage(
  { data: articles }: PageProps<TArticle[] | null>,
) {
  if (!articles) {
    return <TypoWrapper element="h1">記事が取得できませんでした</TypoWrapper>;
  }
  return (
    <>
      <Head>
        <title>miso's Article</title>
      </Head>
      <ArticleTemplate>
        <Articles articles={articles} />
      </ArticleTemplate>
    </>
  );
}
