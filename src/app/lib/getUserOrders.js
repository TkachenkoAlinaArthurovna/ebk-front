export const getUserOrders = async (token, phone) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/orders/all`;
    const requestBody = {
      phone: phone,
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
        console.log(data);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
