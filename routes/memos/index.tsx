import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Articles } from '../../components/molecules/Article/Articles.tsx';
import articles from '../../static/json/articles.json' assert { type: 'json' };
import { Handlers, PageProps } from '$fresh/server.ts';
import { type TArticle } from '../../types/Article.d.ts';
import { BasicTemplate } from '../../components/Template/shared/BasicTemplate.tsx';
type TPageProps = {
  request: Request;
  articles: TArticle[];
};
export const handler: Handlers<TPageProps> = {
  GET(request, ctx) {
    const data = { articles, request };
    return ctx.render(data);
  },
};
export default function ArticlesPage({ data }: PageProps<TPageProps>) {
  if (!data.articles) {
    return <TypoWrapper element="h1" word="記事が取得できませんでした" />;
  }
  return (
    <BasicTemplate path={data.request.url.split('/').reverse()[0]} title="メモ">
      <Articles articles={data.articles} />
    </BasicTemplate>
  );
}
