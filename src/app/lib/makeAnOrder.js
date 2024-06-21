export const makeAnOrder = async (
  token,
  firstname,
  surname,
  phone,
  email,
  delivery,
  payment,
  settlement,
  department,
  city,
  street,
  house,
  flat,
  cityRefAndRef,
  products,
  comment,
  doNotCall,
) => {
  const formData = {
    // form: '3Dzdp27OAOk1KxVAaSDDq_UZGndqVduZGpn21Uz1IXzef9hip4NQqCzHY',
    getResultData: '1',
    products: products,
    comment: doNotCall ? `Не дзвонити!${comment}` : comment,
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
      ServiceType: delivery == "Кур'єр на вашу адресу" ? 'Doors' : 'Warehouse',
      payer: '',
      area: '',
      region: '',
      city: cityRefAndRef ? cityRefAndRef.CityRef : city,
      cityNameFormat: 'settlement',
      WarehouseNumber: cityRefAndRef && cityRefAndRef.Ref,
      Street: street,
      BuildingNumber: house && house,
      Flat: flat && flat,
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

  const url = 'https://stage.eco-bike.com.ua/api/orders';

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const data = await res.json();
      if (data) {
      }
    }
  } catch (error) {
    console.log(error);
  }
};
