import { TypoWrapper } from '../components/atom/TypoWrapper.tsx';
import { useEffect, useState } from 'preact/hooks';
import DOMPurify from 'dompurify';
import { LinkTo } from '../components/atom/LinkTo.tsx';
type TProps = {
  content: string;
};
export default function MemoContent({ content }: TProps) {
  const [sanitized, setSanitized] = useState('');
  useEffect(() => {
    setSanitized(DOMPurify.sanitize(content));
  }, []);

  return (
    <div class="py-3 md:px-10 px-3">
      <div class="bg-white p-5 md:p-10 rounded-md">
        <div dangerouslySetInnerHTML={{ __html: sanitized }} id="contents" />
        <div class="text-center">
          <LinkTo href="/memos">記事一覧へ</LinkTo>
        </div>
      </div>
    </div>
  );
}
