export const postContacts = async (
  login,
  setInactively,
  surname,
  name,
  phone,
  email,
) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/auth/contacts`;
    const requestBody = {
      surname: surname,
      name: name,
      phone: phone,
      email: email,
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
        login(data.token);
        setInactively(false);
      }
    }
  } catch (error) {}
};
