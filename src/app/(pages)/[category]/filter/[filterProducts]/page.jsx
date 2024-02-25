import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';
import { dollar } from '@/app/lib/dollar';

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

const extractPriceFromString = (filterProducts) => {
  const endIndex = filterProducts.indexOf('&');
  let result = '';
  if (endIndex !== -1) {
    const prices = filterProducts.substring(0, endIndex).split('-');
    const dividedPrices = prices.map((price) =>
      Math.floor(parseInt(price) / dollar),
    );
    result = dividedPrices.join('-');
  } else {
    const prices = filterProducts.split('-');
    const dividedPrices = prices.map((price) =>
      Math.floor(parseInt(price) / dollar),
    );
    result = dividedPrices.join('-');
  }
  return result;
};

const extractParamsFromString = (filterProducts) => {
  const startIndex = filterProducts.indexOf('&');
  if (startIndex !== -1) {
    return filterProducts.substring(startIndex + 1);
  } else {
    return '';
  }
};

export default async function Category({ params }) {
  const { category, filterProducts } = params;
  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];

  const categoryId = await getCategoryIdProducts(partsOfCategory[0]);

  const price = extractPriceFromString(decodeURIComponent(filterProducts));

  const filterParams = extractParamsFromString(
    decodeURIComponent(filterProducts),
  )
    .replace(/\//g, '%2F')
    .replace(/&?page=[^&]*/, '');

  const page = (filterProducts) => {
    const match = filterProducts.match(/page%3D([^&]*)/);
    return match ? match[1] : '1';
  };
  const categoryName = await getCategoryName(partsOfCategory[0]);

  return (
    <CategoryPage
      partsOfCategory={partsOfCategory}
      categoryName={
        categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      }
      categoryId={categoryId}
      price={price}
      filterParams={filterParams}
      page={page(filterProducts)}
    />
  );
}
