export const getUserOrders = async (token, userPhone, setOrders, dispatch) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/orders/all`;
    const requestBody = {
      phone: userPhone.replace('+', ''),
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
        dispatch(setOrders(data.data));
      }
    }
  } catch (error) {
    console.log(error);
  }
};
