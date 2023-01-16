import type { ComponentChildren } from "preact";
import { BasicTemplate } from "./BasicTemplate.tsx";
type TProps = {
  children: ComponentChildren;
};
export const ArticleTemplate = ({ children }: TProps) => {
  return (
    <BasicTemplate>
      <h1 class="my-10 text-4xl">Articles</h1>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-6 mx-5 break-all">
        {children}
      </div>
    </BasicTemplate>
  );
};
