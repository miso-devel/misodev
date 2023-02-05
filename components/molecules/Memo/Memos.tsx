import { TMemo } from '../../../types/Memo.d.ts';
import { Memo } from './Memo.tsx';
type TProps = {
  memos: TMemo[];
};
export const Memos = ({ memos }: TProps) => {
  return (
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3 mx-5 break-all">
      {memos.map((memo) => {
        return (
          <Memo
            id={memo.id}
            title={memo.title}
            date={memo.updatedAt}
            categories={memo.category}
          />
        );
      })}
    </div>
  );
};
