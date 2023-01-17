type TProps = {
  children: string;
  href: string;
};
export const LinkTo = ({ children, href }: TProps) => {
  return (
    <a
      href={href}
      class="rounded-md py-2 px-4 border-2 border-gray-500 hover:border-black"
    >
      {children}
    </a>
  );
};
