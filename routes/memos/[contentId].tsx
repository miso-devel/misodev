import { Handlers, PageProps } from '$fresh/server.ts';
import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Head } from '$fresh/runtime.ts';
import { type TMemo } from '../../types/Memo.d.ts';
import { BasicTemplate } from '../../components/Template/shared/BasicTemplate.tsx';
import MemoContent from '../../islands/MemoContent.tsx';
import memos from '../../static/json/memos.json' assert { type: 'json' };
export const handler: Handlers<TMemo> = {
  GET(_, ctx) {
    const memo = memos.find((memo) => memo.id === ctx.params.contentId);
    return ctx.render(memo);
  },
};
export default function ArticleContentPage({
  data: article,
}: PageProps<TMemo | undefined>) {
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
        {article.content ? (
          <MemoContent content={article.content} />
        ) : (
          <p>コンテンツがありません</p>
        )}
      </BasicTemplate>
    </>
  );
}
