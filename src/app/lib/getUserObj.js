export const getUserObj = async (
  token,
  user,
  setFirstname,
  setSurname,
  setPhone,
  setEmail,
  dispatch,
) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/users/${user.id}`;
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
        data.name
          ? dispatch(setFirstname(data.name))
          : dispatch(setFirstname(''));
        data.surname
          ? dispatch(setSurname(data.surname))
          : dispatch(setSurname(''));
        data.phone
          ? dispatch(setPhone('+' + data.phone))
          : dispatch(setPhone(''));
        data.email ? dispatch(setEmail(data.email)) : dispatch(setEmail(''));
      }
    }
  } catch (error) {
    console.log(error);
  }
};
