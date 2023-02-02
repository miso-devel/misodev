import type { ComponentChildren } from 'preact';
type TProps = {
  children: ComponentChildren;
};

export const BasicTemplate = ({ children }: TProps) => {
  return (
    <main className="py-10 font-mono md:w-1/2 w-full  m-auto blur h-screen border-r-2 border-l-2">
      {children}
    </main>
  );
};
