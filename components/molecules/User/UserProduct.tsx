import { TProduct } from '../../../types/Product.d.ts';
import { ImageLink } from '../../atom/ImageLink.tsx';
type TProps = {
  product: TProduct;
};
export const UserProduct = ({ product }: TProps) => {
  return (
    <div class="flex flex-col shadow-2xl rounded-md border-2 p-3 my-10 md:min-w-[50%] min-w-full">
      <div class="flex items-center justify-center">
        <a
          href={product.url}
          class="text-xl hover:text-blue-800 text-center overflow-x-scroll whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          {product.site}
        </a>
      </div>
      <ImageLink
        href={product.githubUrl}
        imgLink="/images/Github.png"
        className="hover:scale-105 text-center flex justify-center my-2"
      />
      <img
        src={product.image.url}
        alt={product.image.url}
        class="w-full h-full m-auto"
      />
    </div>
  );
};
