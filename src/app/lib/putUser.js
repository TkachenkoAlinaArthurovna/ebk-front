export const putUser = async (firstname, surname, email, phone, user) => {
  const userObj = {
    name: firstname,
    surname: surname,
    secondName: '',
    email: email,
    phone: phone.replace('+', ''),
    authCode: '000000',
  };
  try {
    const url = `https://stage.eco-bike.com.ua/api/users/${user.id}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    });
  } catch (error) {
    console.log(error);
  }
};
