import CategoryPage from '@/app/ui/CategoryPage';
import { catalog } from '@/app/lib/mockData';
import { createLinks } from '@/app/lib/createLinks';

export const dynamicParams = false;

export function generateStaticParams() {
  const catalogLinks = createLinks(catalog);
  return catalogLinks.map((category) => ({ category: category.link }));
}

const getCategory = (params) => {
  const catalogLinks = createLinks(catalog);
  return catalogLinks.find((category) => category.link === params);
};

const Category = ({ params }) => {
  const { category } = params;
  const categoryItem = getCategory(category);
  return <CategoryPage />;
};

export default Category;
