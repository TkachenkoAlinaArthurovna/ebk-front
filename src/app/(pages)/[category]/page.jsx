import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';

export const dynamicParams = false;

async function getCategories() {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return createLinks(data.items);
}

export async function generateStaticParams() {
  const categoriesLinks = await getCategories();
  return categoriesLinks.map((category) => ({
    category: category.link,
  }));
}

async function getCategoryIdProducts(category) {
  const categoriesLinks = await getCategories();
  const categoryId = categoriesLinks.find(
    (item) => item.link === category,
  )?._id;
  return categoryId;
}

async function getCategoryProducts(categoryId) {
  const res = await fetch(
    `https://stage.eco-bike.com.ua/api/catalog/${categoryId}`,
    { next: { revalidate: 3600 } },
  );
  const data = await res.json();
  return data;
}

async function getCategoryName(category) {
  const categoriesLinks = await getCategories();
  const categoryName = categoriesLinks.find(
    (item) => item.link === category,
  )?.name;
  return categoryName;
}

export default async function Category({ params }) {
  const { category } = params;
  const categoryId = await getCategoryIdProducts(category);
  const categoryProducts = await getCategoryProducts(categoryId);
  const categoryName = await getCategoryName(category);
  return (
    <CategoryPage
      categoryName={
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      }
      categoryId={categoryId}
      products={categoryProducts.results}
      priceRange={categoryProducts.priceRange}
      paramsForCategory={categoryProducts.params}
    />
  );
}
