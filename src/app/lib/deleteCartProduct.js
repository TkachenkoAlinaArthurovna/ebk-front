export const deleteCartProduct = async (token, productId) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/cart`;
    const requestBody = {
      id: productId,
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
        console.log(data);
      }
    }
  } catch (error) {}
};
