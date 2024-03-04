import { dollar } from '@/app/lib/dollar';

const formatNumberWithSpaces = (number) => {
  const numString = String(number);
  let formattedNumber = '';
  let count = 0;

  for (let i = numString.length - 1; i >= 0; i--) {
    count++;
    formattedNumber = numString[i] + formattedNumber;
    if (count === 3 && i !== 0) {
      formattedNumber = ' ' + formattedNumber;
      count = 0;
    }
  }

  return formattedNumber;
};

export const sumPrices = (cartProducts) => {
  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price * product.count;
  });
  return formatNumberWithSpaces(Math.ceil(totalPrice * dollar));
};

export const sumOldPrices = (cartProducts) => {
  let totalOldPrice = 0;
  cartProducts.forEach((product) => {
    if (product.oldprice) {
      totalOldPrice += product.oldprice * product.count;
    } else {
      totalOldPrice += product.price * product.count;
    }
  });
  return formatNumberWithSpaces(Math.ceil(totalOldPrice * dollar));
};

export const getProductsQuantity = (cartProducts) => {
  let totalQuantity = 0;
  cartProducts.forEach((product) => {
    totalQuantity += product.count;
  });
  return totalQuantity;
};
