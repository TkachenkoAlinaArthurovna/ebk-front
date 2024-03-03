export const getUserObj = async (
  token,
  user,
  setFirstname,
  setSurname,
  setPhone,
  setEmail,
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
        data.name ? setFirstname(data.name) : '';
        data.surname ? setSurname(data.surname) : '';
        data.phone ? setPhone('+' + data.phone) : '';
        data.email ? setEmail(data.email) : '';
      }
    }
  } catch (error) {
    console.log(error);
  }
};
