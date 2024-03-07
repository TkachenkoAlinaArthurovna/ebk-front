export const postCart = async (token, items) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/cart`;
    const requestBody = {
      data: {
        items: [
          {
            id: '65d799bfe36ade365bbda711',
            quantity: 2,
          },
          {
            id: '65d799bfe36ade365bbda713',
            quantity: 2,
          },
        ],
      },
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
    } else if (res.status === 409) {
      console.log('Ошибка 409: Конфликт данных');
    }
  } catch (error) {}
};
