import { TCategory } from '../../../types/Memo.d.ts';
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';
type TProps = {
  id: string;
  title: string;
  date: string;
  categories: TCategory[];
};
export const Memo = ({ id, title, date, categories }: TProps) => {
  return (
    <a class="bg-white p-5 rounded-md" href={`memos/${id}`}>
      <TypoWrapper
        element="h2"
        word={title}
        className="my-3 h-24 overflow-y-scroll"
      />
      <TypoWrapper element="p" className="pt-5" word={date.split('T')[0]} />
      <div class="flex w-full gap-3 mt-3 overflow-x-scroll">
        {categories.map((category) => {
          return (
            <TypoWrapper
              element="p"
              className="py-1 px-2 shadow-2xl border-2 rounded-md"
              word={category.name}
            />
          );
        })}
      </div>
    </a>
  );
};
