import type { ComponentChildren } from 'preact';
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
import { Header } from './Header.tsx';
type TProps = {
  children: ComponentChildren;
  path?: string;
  title: string;
};

export const BasicTemplate = ({ children, path, title }: TProps) => {
  return (
    <main className="font-mono md:w-1/2 w-full  m-auto blur min-h-full md:border-r-4 md:border-l-4 border-white">
      <Header path={path} />
      <TypoWrapper element="h1" className="text-center my-10" word={title} />
      {children}
    </main>
  );
};
