export const makeAnOrder = () => {
  // const url = 'https://ebk.salesdrive.me/handler/';
  // const data = {
  //   form: '3Dzdp27OAOk1KxVAaSDDq_UZGndqVduZGpn21Uz1IXzef9hip4NQqCzHY',
  //   getResultData: '',
  //   products: [
  //     {
  //       id: '1',
  //       name: 'test',
  //       costPerItem: '',
  //       amount: '',
  //       description: '',
  //       discount: '',
  //       sku: 'test1',
  //     },
  //   ],
  //   comment: '',
  //   fName: 'fTest',
  //   lName: 'lTest',
  //   mName: '',
  //   phone: '',
  //   email: '',
  //   con_comment: '',
  //   shipping_method: '',
  //   payment_method: '',
  //   shipping_address: '',
  //   novaposhta: {
  //     ServiceType: '',
  //     payer: '',
  //     area: '',
  //     region: '',
  //     city: '',
  //     cityNameFormat: '',
  //     WarehouseNumber: '',
  //     Street: '',
  //     BuildingNumber: '',
  //     Flat: '',
  //   },
  //   ukrposhta: {
  //     ServiceType: '',
  //     payer: '',
  //     type: '',
  //     city: '',
  //     WarehouseNumber: '',
  //     Street: '',
  //     BuildingNumber: '',
  //     Flat: '',
  //   },
  //   sajt: '',
  //   organizationId: '',
  //   shipping_costs: '',
  //   stockId: '',
  //   prodex24source_full: '',
  //   prodex24source: '',
  //   prodex24medium: '',
  //   prodex24campaign: '',
  //   prodex24content: '',
  //   prodex24term: '',
  //   prodex24page: '',
  // };

  // const options = {
  //   method: 'POST',
  //   // mode: 'no-cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'test-api':
  //       'cthypdGW4hgGGpYW_4na4ZzJiS1z-UGqyUG9ODhipzlswg0iNVdK6UuFPiI7iMf7KnokJR_-tOt548qKQ_DXOTzaS4UyDqGhfW_O',
  //   },
  //   body: JSON.stringify(data),
  // };

  // fetch(url, options)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error('There was an error!', error));
  const formData = {
    form: '3Dzdp27OAOk1KxVAaSDDq_UZGndqVduZGpn21Uz1IXzef9hip4NQqCzHY',
    getResultData: '1',
    products: [
      {
        id: '1',
        name: 'test',
        costPerItem: '',
        amount: '',
        description: '',
        discount: '',
        sku: 'test1',
      },
    ],
    comment: '',
    fName: 'fTest',
    lName: 'lTest',
    mName: '',
    phone: '',
    email: '',
    con_comment: '',
    shipping_method: '',
    payment_method: '',
    shipping_address: '',
    novaposhta: {
      ServiceType: '',
      payer: '',
      area: '',
      region: '',
      city: '',
      cityNameFormat: '',
      WarehouseNumber: '',
      Street: '',
      BuildingNumber: '',
      Flat: '',
    },
    ukrposhta: {
      ServiceType: '',
      payer: '',
      type: '',
      city: '',
      WarehouseNumber: '',
      Street: '',
      BuildingNumber: '',
      Flat: '',
    },
    sajt: '',
    organizationId: '',
    shipping_costs: '',
    stockId: '',
    prodex24source_full: '',
    prodex24source: '',
    prodex24medium: '',
    prodex24campaign: '',
    prodex24content: '',
    prodex24term: '',
    prodex24page: '',
  };

  // Опції запиту
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };

  // URL сервера
  const salesdriveURL = 'https://ebk.salesdrive.me/handler/';

  fetch(salesdriveURL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Response:', data);
      // Обробка відповіді від сервера
    })
    .catch((error) => {
      console.error('There was a problem with your fetch operation:', error);
    });
};
