import { Handlers, PageProps } from '$fresh/server.ts';
import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Head } from '$fresh/runtime.ts';
import { type TArticle } from '../../types/Article.d.ts';
import { BasicTemplate } from '../../components/Template/shared/BasicTemplate.tsx';
import ArticleContent from '../../islands/ArticleContent.tsx';
import articles from '../../static/json/articles.json' assert { type: 'json' };
export const handler: Handlers<TArticle> = {
  GET(_, ctx) {
    const article = articles.find(
      (article) => article.id === ctx.params.contentId
    );
    return ctx.render(article);
  },
};
export default function ArticleContentPage({
  data: article,
}: PageProps<TArticle | undefined>) {
  if (typeof article === 'undefined') {
    return (
      <BasicTemplate path="$1" title="">
        <TypoWrapper
          element="h1"
          className="text-center"
          word="記事が存在しません"
        />
      </BasicTemplate>
    );
  }
  return (
    <>
      <Head>
        <title>miso.dev</title>
        <link rel="stylesheet" href="/styles/Article.css" />
      </Head>
      <BasicTemplate title={article.title}>
        <ArticleContent content={article.content} />
      </BasicTemplate>
    </>
  );
}
