export const postPayment = async (token, obj) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/payments/create`;
    const requestBody = {
      orderDate: obj.orderDate,
      amount: obj.amount,
      currency: obj.currency,
      productName: obj.productName,
      productCount: obj.productCount,
      productPrice: obj.productPrice,
      accountId: obj.accountId,
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
