import { TypoWrapper } from '../../components/atom/TypoWrapper.tsx';
import { Memos } from '../../components/molecules/Memo/Memos.tsx';
import memos from '../../static/json/memos.json' assert { type: 'json' };
import { Handlers, PageProps } from '$fresh/server.ts';
import { type TMemo } from '../../types/Memo.d.ts';
import { BasicTemplate } from '../../components/Template/shared/BasicTemplate.tsx';
type TPageProps = {
  request: Request;
  memos: TMemo[];
};
export const handler: Handlers<TPageProps> = {
  GET(request, ctx) {
    const data = { memos, request };
    return ctx.render(data);
  },
};
export default function ArticlesPage({ data }: PageProps<TPageProps>) {
  if (!data.memos) {
    return <TypoWrapper element="h1" word="記事が取得できませんでした" />;
  }
  return (
    <BasicTemplate
      path={data.request.url.split('/').reverse()[0]}
      title="メモ"
      headTitle="memos"
    >
      <Memos memos={data.memos} />
    </BasicTemplate>
  );
}
