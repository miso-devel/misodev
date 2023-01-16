import type { ComponentChildren } from "preact";
type TProps = {
  children: ComponentChildren;
};
export const BasicTemplate = ({ children }: TProps) => {
  return (
    <main class="h-screen bg-indigo-100 flex justify-center flex-col items-center font-mono">
      {children}
    </main>
  );
};
