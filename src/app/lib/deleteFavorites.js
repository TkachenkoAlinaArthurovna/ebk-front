export const deleteFavorites = async (userId, productId, token) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/favorites/delete`;
    const requestBody = {
      user: userId,
      product: productId,
    };
    const res = await fetch(url, {
      method: 'DELETE',
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
