export const createInitials = (firstName, lastName) => {
  const getInitial = (string) => string.charAt(0).toUpperCase();
  return getInitial(firstName) + getInitial(lastName);
};
