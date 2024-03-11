export const transformItemsArray = (itemsArray) => {
  return itemsArray.map((item) => ({
    id: item.crmId,
    quantity: item.count,
  }));
};
