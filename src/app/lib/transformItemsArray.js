export const transformItemsArray = (itemsArray) => {
  return itemsArray.map((item) => ({
    id: item._id,
    quantity: item.count,
  }));
};
