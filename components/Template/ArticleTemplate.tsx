import type { ComponentChildren } from 'preact';
import { TypoWrapper } from '../atom/TypoWrapper.tsx';
import { BasicTemplate } from './BasicTemplate.tsx';

type TProps = {
  children: ComponentChildren;
};
export default function ArticleTemplate({ children }: TProps) {
  return (
    <BasicTemplate>
      <TypoWrapper element="h1" className="text-center my-10">
        Articles
      </TypoWrapper>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5 mx-5 break-all">
        {children}
      </div>
    </BasicTemplate>
  );
}
