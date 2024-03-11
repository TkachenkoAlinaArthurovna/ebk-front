export const getCart = async (
  token,
  setUserCartProducts,
  dispatch,
  setLoading,
) => {
  try {
    setLoading && setLoading(true);
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
        dispatch(setUserCartProducts(data.items));
        setLoading && setLoading(false);
      } else {
        if (res.status === 404) {
          dispatch(setUserCartProducts([]));
        }
      }
    }
  } catch (error) {
    console.log(error);
    setLoading && setLoading(false);
  }
};
