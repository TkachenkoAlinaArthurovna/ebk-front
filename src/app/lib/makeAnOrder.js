export const makeAnOrder = async (
  firstname,
  surname,
  phone,
  email,
  delivery,
  payment,
  settlement,
  department,
) => {
  const key =
    'Wuv98scr0kChluYyfI-1RkaO6RXg1HUoM45lI1tKzLKGth5fimR3W3_XlkwJsXKGRU1cX-4AiNju9Q1eF27NnnFOlWWtkUwrghKv';
  const url = 'https://ebk.salesdrive.me/handler/';
  const requestBody = {
    form: '3Dzdp27OAOk1KxVAaSDDq_UZGndqVduZGpn21Uz1IXzef9hip4NQqCzHY',
    getResultData: '',
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
    fName: firstname,
    lName: surname,
    mName: '',
    phone: phone,
    email: email,
    con_comment: '',
    shipping_method: delivery,
    payment_method: payment,
    shipping_address: '',
    novaposhta: {
      ServiceType: '',
      payer: '',
      area: '',
      region: '',
      city: '',
      cityNameFormat: settlement,
      WarehouseNumber: department,
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
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response data:', data);
    }
  } catch (error) {
    console.log(error);
  }
};
