import products from '../../../static/json/products.json' assert { type: 'json' };
import { TProduct } from '../../../types/Product.d.ts';
import { UserProduct } from '../../molecules/User/UserProduct.tsx';
import { TypoWrapper } from '../../atom/TypoWrapper.tsx';

export const UserProducts = () => {
  if (!products) {
    return null;
  }
  return (
    <div class="py-10">
      <TypoWrapper
        element="h2"
        className="mb-5 border-b-2 pb-1"
        word="開発したプロダクト"
      />
      <div class="overflow-x-scroll">
        <table
          cellPadding={10}
          className="border border-white w-full text-left"
        >
          <thead class="border-b-1">
            <tr>
              <th>時期</th>
              <th>作品名</th>
              <th>作った経緯</th>
              <th>役割</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: TProduct) => {
              return <UserProduct product={product} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
