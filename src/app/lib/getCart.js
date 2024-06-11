export const getCart = async (
  token,
  setUserCartProducts,
  dispatch,
  setLoading,
) => {
  try {
    setLoading && dispatch(setLoading(true));
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
        setLoading && dispatch(setLoading(false));
      } else {
        dispatch(setUserCartProducts([]));
        setLoading && dispatch(setLoading(false));
      }
    }
  } catch (error) {
    console.log(error);
    setLoading && dispatch(setLoading(false));
  }
  setLoading && dispatch(setLoading(false));
};
