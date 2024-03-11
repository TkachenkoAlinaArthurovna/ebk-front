export const addCartProduct = async (token, productId) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/cart/add`;
    const requestBody = {
      crmId: productId,
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
