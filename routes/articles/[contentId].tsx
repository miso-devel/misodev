import { Handlers, PageProps } from '$fresh/server.ts';
import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Head } from '$fresh/runtime.ts';
import { type TArticle } from '../../types/Article.d.ts';
import { BasicTemplate } from '../../components/Template/BasicTemplate.tsx';
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
      <BasicTemplate>
        <TypoWrapper element="h1" className="text-center">
          記事が存在しません
        </TypoWrapper>
      </BasicTemplate>
    );
  }
  return (
    <>
      <Head>
        <title>miso.dev</title>
        <link rel="stylesheet" href="/styles/Article.css" />
      </Head>
      <BasicTemplate>
        <ArticleContent title={article.title} content={article.content} />
      </BasicTemplate>
    </>
  );
}
