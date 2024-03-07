export const getAllFavorites = async (userId, token, setFavorites) => {
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
        setFavorites(data);
      }
    }
  } catch (error) {}
};
