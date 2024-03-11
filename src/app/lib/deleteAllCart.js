export const deleteAllCart = async (token) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/cart/all`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
      }
    }
  } catch (error) {}
};
