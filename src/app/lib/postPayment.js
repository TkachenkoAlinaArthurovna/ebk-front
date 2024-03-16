export const postPayment = async (token, obj) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/payments/create`;
    const requestBody = {
      orderDate: obj.orderDate,
      amount: obj.orderDate,
      currency: obj.orderDate,
      productName: obj.orderDate,
      productCount: obj.orderDate,
      productPrice: obj.orderDate,
      accountId: obj.orderDate,
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
  } catch (error) {}
};
