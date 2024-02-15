import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';

export const dynamicParams = false;
export async function generateStaticParams() {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  console.log(data);
  const categoriesLinks = createLinks(data.items);
  return categoriesLinks.map((category) => ({
    category: category.link,
  }));
}

async function getCategoryIdProducts(category) {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const categoriesLinks = createLinks(data.items);
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

async function getCategoryName(category) {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories');
  const data = await res.json();
  const categoriesLinks = createLinks(data.items);
  const categoryName = categoriesLinks.find(
    (item) => item.link === category,
  )?.name;
  return categoryName;
}

export default async function Category({ params }) {
  const { category } = params;
  const categoryProducts = await getCategoryIdProducts(category);
  const categoryName = await getCategoryName(category);

  return (
    <CategoryPage
      categoryName={
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      }
      products={categoryProducts}
    />
  );
}
