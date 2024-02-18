import ProductPage from '@/app/ui/ProductPage';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

// Функция для получения данных о продуктах с сервера
async function getProducts() {
  const res = await fetch(`https://stage.eco-bike.com.ua/api/products`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return data;
}

// Функция для получения данных о категории продукта по его ID
async function getCategory(id) {
  const res = await fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const category = data.items.find((item) => item._id === id);
  return category ? createLinkProduct(category.name) : null;
}

// Функция для получения данных о продукте по его ID
async function getProduct(productId) {
  const res = await fetch(
    `https://stage.eco-bike.com.ua/api/products/${productId}`,
    { next: { revalidate: 3600 } },
  );
  const data = await res.json();
  return data;
}

// Функция для отображения страницы продукта
export default async function Product({ params }) {
  const { product } = params;

  try {
    // Получаем данные о продуктах и ID выбранного продукта
    const products = await getProducts();
    const productLink = createLinkProduct(product);

    // Ищем выбранный продукт по его названию
    const selectedProduct = products.find(
      (item) => createLinkProduct(item.name) === productLink,
    );

    if (!selectedProduct) {
      throw new Error('Продукт не найден');
    }

    // Получаем данные о категории продукта
    const categoryLink = await getCategory(selectedProduct.category);

    // Получаем данные о продукте по его ID
    const currentProduct = await getProduct(selectedProduct._id);

    return <ProductPage currentProduct={currentProduct} />;
  } catch (error) {
    console.error('Ошибка загрузки продукта:', error);
    // Обработка ошибок, например, отображение сообщения об ошибке
    return <div>Ошибка загрузки продукта</div>;
  }
}
