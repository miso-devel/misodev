import { UserLinks } from '../../molecules/User/UserLinks.tsx';

type TProps = {
  path?: string;
};
export const Header = ({ path }: TProps) => {
  return (
    <div class="py-5 mb-5 sticky top-0 bg-[#1e232e]">
      <ul class="flex gap-6 px-5 font-bold justify-end items-center">
        <li class="mr-auto">
          <a href="/">miso.dev</a>
        </li>
        <li>
          <a
            href="/"
            class={`${
              path === '' ? 'border-b-2' : ''
            } pb-1 border-white stroke-2`}
          >
            プロフィール
          </a>
        </li>
        <li>
          <a
            href="/memos"
            class={`${path === 'memos' ? 'border-b-2' : ''} pb-1 border-white`}
          >
            メモ
          </a>
        </li>
      </ul>
    </div>
  );
};
