export const modifyPrice = (price) => {
  const parts = price.split('-');
  const num1 = parseInt(parts[0]);
  const num2 = parseInt(parts[1]);
  if (num1 === num2) {
    const modifiedNum = num2 + 1;
    return `${num1}-${modifiedNum}`;
  } else {
    return price;
  }
};
