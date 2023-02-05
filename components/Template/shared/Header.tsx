type TProps = {
  path?: string;
};
export const Header = ({ path }: TProps) => {
  return (
    <div class="bg-white py-5 mb-5 sticky top-0">
      <ul class="flex gap-6 text-black px-5 font-bold">
        <li>
          <a
            href="/"
            class={`${path === '' ? 'border-b-2' : ''} pb-1 border-black`}
          >
            プロフィール
          </a>
        </li>
        <li>
          <a
            href="memos"
            class={`${path === 'memos' ? 'border-b-2' : ''} pb-1 border-black`}
          >
            メモ
          </a>
        </li>
      </ul>
    </div>
  );
};
