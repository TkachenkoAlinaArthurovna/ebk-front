import ProductPage from '@/app/ui/ProductPage';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

// export const dynamicParams = false;

async function getProducts() {
  const res = await fetch(`https://stage.eco-bike.com.ua/api/products`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data;
}

// async function getCategory(id) {
//   const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   const category = data.items.find((item) => item._id === id);
//   return category ? createLinkProduct(category.name) : null;
// }

// export async function generateStaticParams() {
//   const products = await getProducts();
//   const staticParams = await Promise.all(
//     products.map(async (product) => {
//       const category = await getCategory(product.category);
//       const productLink = createLinkProduct(product.name);
//       return {
//         category: category,
//         product: productLink,
//       };
//     }),
//   );
//   return staticParams;
// }

async function getProductId(name) {
  const products = await getProducts();
  const product = products.find(
    (item) => createLinkProduct(item.name) === name,
  );
  const productId = product ? product._id : null;
  return getProduct(productId);
}

async function getProduct(productId) {
  const res = await fetch(
    `https://stage.eco-bike.com.ua/api/products/${productId}`,
    { next: { revalidate: 3600 } },
  );
  const data = await res.json();
  return data;
}

export default async function Product({ params }) {
  const { product } = params;
  const currentProduct = await getProductId(product);
  // return <ProductPage currentProduct={currentProduct} />;
  return <div>hi</div>;
}
