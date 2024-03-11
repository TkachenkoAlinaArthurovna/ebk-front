export const checkProductIdInArray = (productId, arrayOfObjects) => {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    const obj = arrayOfObjects[i];
    if (obj && obj.crmId === productId) {
      return true;
    }
  }
  return false;
};
