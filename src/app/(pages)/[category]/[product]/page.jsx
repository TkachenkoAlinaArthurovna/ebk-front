import ProductPage from '@/app/ui/ProductPage';
import { createLinkProduct } from '@/app/lib/createLinkProduct';
import { createLinks } from '@/app/lib/createLinks';

export const dynamicParams = false;

async function getProducts() {
  const res = await fetch(`https://stage.eco-bike.com.ua/api/products/all`, {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data;
}

async function getCategory(id) {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const category = data.items.find((item) => item._id === id);
  return category ? createLinkProduct(category.name) : null;
}

export async function generateStaticParams() {
  const products = await getProducts();
  const staticParams = await Promise.all(
    products.map(async (product) => {
      const category = await getCategory(product.category);
      const productLink = createLinkProduct(product.name);
      return {
        category: category,
        product: productLink,
      };
    }),
  );
  return staticParams;
}

async function getCategories() {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return createLinks(data.items);
}

async function getCategoryIdProducts(category) {
  const categoriesLinks = await getCategories();
  const categoryId = categoriesLinks.find(
    (item) => item.link === category,
  )?._id;
  return getCategoryProducts(categoryId);
}

async function getCategoryProducts(categoryId) {
  const res = await fetch(
    `https://stage.eco-bike.com.ua/api/catalog/${categoryId}`,
    { next: { revalidate: 3600 } },
  );
  const data = await res.json();
  return data.results;
}

async function getProductId(category, product) {
  const products = await getCategoryIdProducts(category);
  const productCurrent = products.find(
    (item) => createLinkProduct(item.name) === product,
  );
  const productId = productCurrent ? productCurrent._id : null;
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
  const { category, product } = params;
  const currentProduct = await getProductId(category, product);
  return <ProductPage currentProduct={currentProduct} />;
}
