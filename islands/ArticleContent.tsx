import { TypoWrapper } from '../components/atom/TypoWrapper.tsx';
import { useEffect, useState } from 'preact/hooks';
import DOMPurify from 'dompurify';
import { LinkTo } from '../components/atom/LinkTo.tsx';
type TProps = {
  title: string;
  content: string;
};
export default function ArticleContent({ title, content }: TProps) {
  const [sanitized, setSanitized] = useState('');
  useEffect(() => {
    setSanitized(DOMPurify.sanitize(content));
  }, []);

  return (
    <>
      <TypoWrapper element="h1" className="my-5 border-b-2 text-center">
        {title}
      </TypoWrapper>
      <div class="bg-white p-10 w-4/5 m-auto rounded-md">
        <div dangerouslySetInnerHTML={{ __html: sanitized }} id="contents" />
        <LinkTo href="/articles">記事一覧へ</LinkTo>
      </div>
    </>
  );
}
