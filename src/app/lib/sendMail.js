export const sendMail = async (name, email, message) => {
  try {
    const url = `https://stage.eco-bike.com.ua/api/feedback`;
    const requestBody = {
      name: name,
      email: email,
      message: message,
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
        console.log(data);
      }
    }
  } catch (error) {}
};
