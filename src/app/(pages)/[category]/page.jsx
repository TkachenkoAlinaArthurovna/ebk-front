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
  const {name} = categoryItem;
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return <CategoryPage categoryName={categoryName} />;
};

export default Category;
