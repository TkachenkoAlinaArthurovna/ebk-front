const getImageForProductCard = (picture) => {
  if (Array.isArray(picture)) {
    return picture[0];
  }
  if (!Array.isArray(picture)) {
    return picture;
  }
};

export default getImageForProductCard;
