export const postLogin = async (login, email, password, setError) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/auth/login`;
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
        setError(false);
      }
    } else {
      const errorText = await res.text();
      console.error('Ошибка:', errorText);
      setError(true);
    }
  } catch (error) {}
};
