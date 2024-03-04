export const makeAnOrder = async () => {
  const formData = {
    form: '3Dzdp27OAOk1KxVAaSDDq_UZGndqVduZGpn21Uz1IXzef9hip4NQqCzHY',
    getResultData: '1',
    products: [
      {
        id: '1858147137',
        name: 'Електровелосипед міський Valencia 26 500W Mxus 48V 10ah',
        costPerItem: '812',
        amount: '1',
        description: '',
        discount: '',
        sku: '0083',
      },
    ],
    comment: '',
    fName: 'Alina',
    lName: 'Tkachenko',
    mName: '',
    phone: '+380934077443',
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

  const salesdriveURL = 'https://ebk.salesdrive.me/handler/';

  try {
    const res = await fetch(salesdriveURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
};
