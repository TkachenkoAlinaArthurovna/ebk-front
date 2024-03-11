export const getAllFavorites = async (
  userId,
  token,
  setFavorites,
  setFavoritesMeta,
  dispatch,
) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/favorites/user/${userId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
        dispatch(setFavorites(data.items));
        dispatch(setFavoritesMeta(data.meta));
      }
    }
  } catch (error) {}
};
