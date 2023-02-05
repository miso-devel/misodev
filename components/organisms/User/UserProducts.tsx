import products from '../../../static/json/products.json' assert { type: 'json' };
import { TProduct } from '../../../types/Product.d.ts';
import { UserProduct } from '../../molecules/User/UserProduct.tsx';
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';

export const UserProducts = () => {
  if (!products) {
    return null;
  }
  return (
    <>
      <TypoWrapper
        element="h2"
        className="text-center mt-20"
        word="開発したプロダクト"
      />
      <div class="flex gap-3 overflow-x-scroll">
        {products.map((product: TProduct) => {
          return <UserProduct product={product} />;
        })}
      </div>
    </>
  );
};
