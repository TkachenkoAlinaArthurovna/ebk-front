import { Suspense } from 'react';
import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';
import SkeletonCategoryPage from '@/app/ui/SkeletonCategoryPage/SkeletonCategoryPage';

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = params;
  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];

  const categoryName = await getCategoryName(partsOfCategory[0]);

  return {
    title:
      categoryName.charAt(0).toUpperCase() +
      categoryName.slice(1).toLowerCase(),
  };
}

// export const dynamicParams = false;
// export async function generateStaticParams() {
//   const categoriesLinks = await getCategories();
//   return categoriesLinks.map((category) => ({
//     category: category.link,
//   }));
// }

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
  return categoryId;
}

async function getCategoryName(category) {
  const categoriesLinks = await getCategories();
  const categoryName = categoriesLinks.find(
    (item) => item.link === category,
  )?.name;
  return categoryName;
}

const getPageParams = (queryString) => {
  const index = queryString.indexOf('%26page%3D');
  if (index !== -1) {
    return queryString.substring(index + 10);
  }
  return '';
};

export default async function Category({ params }) {
  const { category } = params;
  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];
  const sort = category.includes('sort%3Ddesc') ? 'desc' : 'asc';
  const page = category.includes('page') ? getPageParams(category) : 1;
  const categoryId = await getCategoryIdProducts(partsOfCategory[0]);
  const categoryName = await getCategoryName(partsOfCategory[0]);
  console.log(categoryName);
  return (
    <CategoryPage
      partsOfCategory={partsOfCategory}
      categoryName={
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      }
      categoryId={categoryId}
      page={page}
      sortParam={sort}
    />
  );
}
