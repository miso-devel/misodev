import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Articles } from '../../components/molecules/Article/Articles.tsx';
import ArticleTemplate from '../../components/Template/ArticleTemplate.tsx';
import articles from '../../static/json/articles.json' assert { type: 'json' };
import { Handlers, PageProps } from '$fresh/server.ts';
import { type TArticle } from '../../types/Article.d.ts';
export const handler: Handlers<TArticle[]> = {
  GET(_, ctx) {
    return ctx.render(articles);
  },
};
export default function ArticlesPage({
  data,
}: PageProps<TArticle[] | undefined>) {
  if (!data) {
    return <TypoWrapper element="h1">記事が取得できませんでした</TypoWrapper>;
  }
  return (
    <ArticleTemplate>
      <Articles articles={data} />
    </ArticleTemplate>
  );
}
