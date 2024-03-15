import { createLinks } from '@/app/lib/createLinks';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

export default async function sitemap() {
  async function getCategories() {
    const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return createLinks(data.items);
  }

  async function getProducts() {
    const res = await fetch(`https://stage.eco-bike.com.ua/api/products/all`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data;
  }

  const categories = await getCategories();
  const products = await getProducts();

  const urlCategories = categories.map((category) => ({
    url: `https://eco-bike.com.ua/${category.link}`,
  }));

  const urlProducts = products.map((product) => {
    const findCategory = (categoryId) => {
      return categories.find((category) => category.id === categoryId);
    };
    const productCategory = findCategory(product.categoryId);

    return {
      url: `https://eco-bike.com.ua/${productCategory.link}/${createLinkProduct(product.name)}`,
    };
  });

  return [
    {
      url: 'https://eco-bike.com.ua/about',
    },
    {
      url: 'https://eco-bike.com.ua/support',
    },
    {
      url: 'https://eco-bike.com.ua/contacts',
    },
    {
      url: 'https://eco-bike.com.ua/payment-delivery',
    },
    ...urlCategories,
    ...urlProducts,
  ];
}
