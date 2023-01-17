import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
type TProps = {
  id: string;
  title: string;
  date: string;
};
export const Article = ({ id, title, date }: TProps) => {
  return (
    <a class="bg-white p-5 rounded-md" href={`articles/${id}`}>
      <TypoWrapper
        element="h2"
        children={title}
        className="my-3 h-24 overflow-y-scroll"
      />
      <TypoWrapper element="p" className="pt-5" children={date.split('T')[0]} />
    </a>
  );
};
