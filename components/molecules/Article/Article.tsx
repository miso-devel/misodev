import { TypoWrapper } from "../../atom/TypoWrapper.tsx";
type TProps = {
  title: string;
  content: string;
};
export const Article = ({ title, content }: TProps) => {
  return (
    <div class="bg-white p-8 rounded-md">
      <TypoWrapper
        element="h2"
        children={title}
        className="my-3 h-32 overflow-y-scroll"
      />
      <TypoWrapper element="p" children={content} />
    </div>
  );
};
