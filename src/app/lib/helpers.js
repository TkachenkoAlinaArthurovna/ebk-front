export const createInitials = (firstName, lastName) => {
  const getInitial = (string) => string.charAt(0).toUpperCase();
  return getInitial(firstName) + getInitial(lastName);
};

export const getSlidesPerView = (windowWidth) => {
  if (windowWidth <= 950) {
    return 1;
  }
  if (windowWidth <= 1400) {
    return 2;
  }
  return 3;
};
