import CategoryPage from '@/app/ui/CategoryPage';
import { createLinks } from '@/app/lib/createLinks';
import { dollar } from '@/app/lib/dollar';

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = params;
  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];

  const categoryName = await getCategoryName(partsOfCategory[0]);

  return {
    title: categoryName
      ? categoryName.charAt(0).toUpperCase() +
        categoryName.slice(1).toLowerCase()
      : '',
    description: `${
      categoryName
        ? categoryName.charAt(0).toUpperCase() +
          categoryName.slice(1).toLowerCase()
        : ''
    } | Eco-bike | Електровелосипеди | Швидка доставка по Україні | Гарантії | Знижки і акції`,
  };
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
    const dividedPrices = prices.map((price, index) => {
      if (index === 0) {
        return Math.floor(parseInt(price) / dollar);
      } else if (index === 1) {
        return Math.ceil(parseInt(price) / dollar);
      }
    });
    result = dividedPrices.join('-');
  } else {
    const prices = filterProducts.split('-');
    const dividedPrices = prices.map((price, index) => {
      if (index === 0) {
        return Math.floor(parseInt(price) / dollar);
      } else if (index === 1) {
        return Math.ceil(parseInt(price) / dollar);
      }
    });
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

const getPageAndVendorParams = (queryString, value) => {
  const regex = new RegExp(`${value}(.*?)(&|$)`);
  const match = queryString.match(regex);
  if (match) {
    return match[1];
  }
  return '';
};

export default async function Category({ params }) {
  const { category, filterProducts } = params;

  const partsOfCategory = category.includes('%26')
    ? category.split('%26')
    : [category];

  const categoryId = await getCategoryIdProducts(partsOfCategory[0]);
  const categoryName = await getCategoryName(partsOfCategory[0]);

  const filterParams = extractParamsFromString(
    decodeURIComponent(filterProducts),
  )
    .replace(/\//g, '%2F')
    .replace(/&?sort=asc*/, '')
    .replace(/&?sort=desc*/, '')
    .replace(/&?page=[^&]*/, '')
    .replace(/&?Vendor=[^&]*(?:&|$)/g, '');

  const stringWithVendor = extractParamsFromString(
    decodeURIComponent(filterProducts),
  )
    .replace(/&?sort=asc*/, '')
    .replace(/&?sort=desc*/, '')
    .replace(/&?page=[^&]*/, '');

  const vendor = filterProducts.includes('Vendor')
    ? getPageAndVendorParams(stringWithVendor, 'Vendor=')
    : '';

  const sort = filterProducts.includes('sort%3Ddesc') ? 'desc' : 'asc';

  const price = extractPriceFromString(decodeURIComponent(filterProducts));

  const page = filterProducts.includes('page')
    ? getPageAndVendorParams(filterProducts, 'page%3D')
    : 1;

  return (
    <CategoryPage
      partsOfCategory={partsOfCategory}
      categoryName={
        categoryName
          ? categoryName.charAt(0).toUpperCase() +
            categoryName.slice(1).toLowerCase()
          : ''
      }
      categoryId={categoryId}
      filterParams={filterParams}
      sortParam={sort}
      price={price}
      page={page}
      vendorParam={vendor.charAt(0).toUpperCase() + vendor.slice(1)}
    />
  );
}
