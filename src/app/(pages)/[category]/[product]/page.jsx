import { notFound } from 'next/navigation';

export default function Product({ params }) {
  if (params.product.includes('product_')) {
    return (
      <div>
        DynamicPage - Product
        <div>Params:{JSON.stringify(params)}</div>
      </div>
    );
  } else {
    notFound();
  }
}
