export const getCart = async (token) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/cart`;
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
      }
    }
  } catch (error) {
    console.log(error);
  }
};
