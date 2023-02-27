import { Head } from '$fresh/runtime.ts';
import type { ComponentChildren } from 'preact';
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
import { Footer } from './Footer.tsx';
import { Header } from './Header.tsx';
type TProps = {
  children: ComponentChildren;
  path?: string;
  title: string;
  headTitle: string;
};

export const BasicTemplate = ({ children, path, title, headTitle }: TProps) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <main className="font-mono md:w-3/5 w-full  m-auto min-h-full border-white">
        <Header path={path} />
        <div class="px-5">
          <TypoWrapper
            element="h1"
            className="text-center my-10"
            word={title}
          />
          {children}
          {path === 'privacyPolicy' ? <></> : <Footer />}
        </div>
      </main>
    </>
  );
};
