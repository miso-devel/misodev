import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
import { UserLinks } from './UserLinks.tsx';

export const UserDetail = () => {
  return (
    <div class="py-10">
      <TypoWrapper
        element="h2"
        className="mb-5 border-b-2 pb-1"
        word="プロフィール"
      />
      <p>B4 フロントエンドが好き</p>
      <p>趣味はゲーム</p>
    </div>
  );
};
