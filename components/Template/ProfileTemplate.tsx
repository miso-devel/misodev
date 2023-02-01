import type { ComponentChildren } from 'preact';
import { TypoWrapper } from '../atom/TypoWrapper.tsx';
import { BasicTemplate } from './BasicTemplate.tsx';
type TProps = {
  children: ComponentChildren;
};
export const ProfileTemplate = ({ children }: TProps) => {
  return (
    <BasicTemplate>
      <div className=" h-screen">
        <div>
          <TypoWrapper element="h1" className="text-center my-10">
            profile
          </TypoWrapper>
          {children}
        </div>
      </div>
    </BasicTemplate>
  );
};
