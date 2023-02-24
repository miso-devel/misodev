import { ComponentChildren } from 'https://esm.sh/v102/preact@10.11.0/src/index.d.ts';

type TProps = {
  children: ComponentChildren;
  href: string;
};
export const LinkTo = ({ children, href }: TProps) => {
  return (
    <a
      href={href}
      class="rounded-md py-2 px-4 border-2 text-black border-gray-500 hover:border-black"
    >
      {children}
    </a>
  );
};
