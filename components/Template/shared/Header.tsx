import { UserLinks } from '../../molecules/User/UserLinks.tsx';

type TProps = {
  path?: string;
};
export const Header = ({ path }: TProps) => {
  return (
    <div class="py-5 mb-5 sticky top-0 blur">
      <ul class="flex gap-6 px-5 font-bold justify-end items-center">
        <li class="mr-auto">miso.dev</li>
        <li>
          <a
            href="/"
            class={`${path === '' ? 'border-b-2' : ''} pb-1 border-white`}
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
