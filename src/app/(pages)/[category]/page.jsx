import { Suspense } from 'react';
import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';
import SkeletonCategoryPage from '@/app/ui/SkeletonCategoryPage/SkeletonCategoryPage';

export const dynamicParams = false;

async function getCategories() {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return createLinks(data.items);
}

// export async function generateStaticParams() {
//   const categoriesLinks = await getCategories();
//   return categoriesLinks.map((category) => ({
//     category: category.link,
//   }));
// }

async function getCategoryIdProducts(category) {
  const categoriesLinks = await getCategories();
  const categoryId = categoriesLinks.find(
    (item) => item.link === category,
  )?._id;
  return categoryId;
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
  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];
  const page = partsOfCategory[1] ? partsOfCategory[1].split('%3D')[1] : 1;
  const categoryId = await getCategoryIdProducts(partsOfCategory[0]);
  const categoryName = await getCategoryName(partsOfCategory[0]);

  return (
    <CategoryPage
      partsOfCategory={partsOfCategory}
      categoryName={
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      }
      categoryId={categoryId}
      page={page}
    />
  );
}
