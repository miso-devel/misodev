import { Handlers, PageProps } from '$fresh/server.ts';
import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { microcmsClient } from '../../lib/microCMSClient.ts';
import { Head } from '$fresh/runtime.ts';
import { type TArticle } from '../../types/Article.d.ts';
import { BasicTemplate } from '../../components/Template/BasicTemplate.tsx';
import ArticleContent from '../../islands/ArticleContent.tsx';
export const handler: Handlers<TArticle> = {
  async GET(_, ctx) {
    const article = await microcmsClient
      .get({
        endpoint: `articles/${ctx.params.contentId}`,
      })
      .then((res) => {
        return res;
      })
      .catch(() => {
        return undefined;
      });
    return ctx.render(article);
  },
};
export default function ArticleContentPage({
  data: article,
}: PageProps<TArticle | undefined>) {
  if (typeof article === 'undefined') {
    return (
      <BasicTemplate>
        <TypoWrapper element="h1">記事が存在しません</TypoWrapper>
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
