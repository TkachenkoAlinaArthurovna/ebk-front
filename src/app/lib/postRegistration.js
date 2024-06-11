export const postRegistration = async (login, email, password) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/auth/registration`;
    const requestBody = {
      email: email,
      password: password,
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
      }
    }
  } catch (error) {}
};
