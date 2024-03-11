export const addFavorites = async (userId, productId, token) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/favorites`;
    const requestBody = {
      user: userId,
      product: productId,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
      }
    }
  } catch (error) {}
};
