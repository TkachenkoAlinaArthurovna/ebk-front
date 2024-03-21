import { sumUserPrices } from '@/app/lib/getTotalForCart';
import { dollar } from '@/app/lib/dollar';

export const createObjForPostPayment = (userCartProducts, user) => {
  const date = Date.now();
  const amountProducts = sumUserPrices(userCartProducts).replace(/\s/g, '');
  const arrProductName = userCartProducts.map(
    (cartProduct) => cartProduct.product.crmId,
  );
  const arrProductCount = userCartProducts.map(
    (cartProduct) => cartProduct.quantity,
  );
  const productPrice = userCartProducts.map((cartProduct) =>
    Math.ceil(cartProduct.product.price * dollar),
  );

  return {
    orderDate: date,
    amount: amountProducts,
    currency: 'UAH',
    productName: arrProductName,
    productCount: arrProductCount,
    productPrice: productPrice,
    accountId: user ? user.id : null,
  };
};
