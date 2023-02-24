import { TProduct } from '../../../types/Product.d.ts';
type TProps = {
  product: TProduct;
};
export const UserProduct = ({ product }: TProps) => {
  return (
    <tr>
      <td>
        {product.producedAt
          ?.split('')
          .splice(0, 10)
          .join('')
          .replaceAll('-', '/')}
      </td>
      <td>
        <a
          href={product.githubUrl}
          class="hover:text-blue-800 whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          {product.site}
        </a>
      </td>
      <td class="whitespace-nowrap">{product.description}</td>
      <td class="whitespace-nowrap">{product.position}</td>
    </tr>
  );
};
