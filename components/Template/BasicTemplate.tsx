import type { ComponentChildren } from 'preact';
type TProps = {
  children: ComponentChildren;
};
export const BasicTemplate = ({ children }: TProps) => {
  return <main className="py-10 font-mono">{children}</main>;
};
