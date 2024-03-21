export const getPaymentOutput = async (token, orderReference, setStatus) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/payments/${orderReference}`;
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
        console.log(data);
        setStatus(data.status);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
