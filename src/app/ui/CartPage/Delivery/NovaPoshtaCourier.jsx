'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Radio, Autocomplete } from '@mui/material';
import { Field } from 'formik';
import useDebounce from '@/app/lib/useDebounce';
import { WrapperAdress } from '@/app/ui/CartPage/CartPageStyles';

const NovaPoshtaCourier = ({ setDataForOrder }) => {
  const dispatch = useDispatch();
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );

  const [selectedSettlement, setSelectedSettlement] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [settlements, setSettlements] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [streets, setStreets] = useState([]);
  const [house, setHouse] = useState([]);
  const [flat, setFlat] = useState([]);
  const [arrAddresses, setArrAddresses] = useState([]);
  const [arrStreets, setArrStreets] = useState([]);

  const debouncedSelectedSettlement = useDebounce(selectedSettlement, 1000);

  const debouncedSelectedStreet = useDebounce(selectedStreet, 1000);

  const getSettlements = async (selectedSettlement) => {
    try {
      const data = {
        apiKey: '47f3596ae765c7c6d56e26a16d22e8ba',
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
          CityName: `${selectedSettlement}`,
          Limit: '1000',
          Page: '1',
        },
      };
      const url = 'https://api.novaposhta.ua/v2.0/json/';

      const res = await fetch(url, {
        next: { revalidate: 0 },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          const presentValues = data['data'][0].Addresses.map(
            (obj) => obj.Present,
          );
          setArrAddresses(data['data'][0].Addresses);
          setSettlements(presentValues);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStreets = async (selectedStreet, Ref) => {
    try {
      const data = {
        apiKey: '47f3596ae765c7c6d56e26a16d22e8ba',
        modelName: 'AddressGeneral',
        calledMethod: 'searchSettlementStreets',
        methodProperties: {
          StreetName: `${selectedStreet}`,
          SettlementRef: `${Ref}`,
          Limit: '1000',
        },
      };
      const url = 'https://api.novaposhta.ua/v2.0/json/';

      const res = await fetch(url, {
        next: { revalidate: 0 },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          const presentValues = data['data'][0].Addresses.map(
            (obj) => obj.Present,
          );
          setArrStreets(data['data'][0].Addresses);
          setStreets(presentValues);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      debouncedSelectedSettlement.length >= 2 &&
      !arrAddresses.find((obj) => obj.Present == selectedSettlement)
    ) {
      getSettlements(debouncedSelectedSettlement);
    }
  }, [debouncedSelectedSettlement]);

  useEffect(() => {
    if (
      debouncedSelectedStreet.length >= 2 &&
      !arrStreets.find((obj) => obj.Present == selectedStreet)
    ) {
      const settlement = arrAddresses.find(
        (obj) => obj.Present == selectedSettlement,
      );
      getStreets(debouncedSelectedStreet, settlement.Ref);
    }
  }, [debouncedSelectedStreet]);

  useEffect(() => {
    if (arrAddresses.find((obj) => obj.Present == selectedSettlement)) {
      const settlement = arrAddresses.find(
        (obj) => obj.Present == selectedSettlement,
      );
      dispatch(setDataForOrder({ valueName: 'settlement', value: settlement }));
      dispatch(setDataForOrder({ valueName: 'department', value: '' }));
    }
  }, [selectedSettlement]);

  useEffect(() => {
    if (arrStreets.find((obj) => obj.Present == selectedStreet)) {
      const street = arrStreets.find((obj) => obj.Present == selectedStreet);
      dispatch(setDataForOrder({ valueName: 'street', value: street }));
    }
  }, [selectedStreet]);

  useEffect(() => {
    if (
      selectedDelivery == 'До поштомату Нової Пошти' ||
      selectedDelivery == 'До відділення Нової Пошти'
    ) {
      setSettlements([]);
      setDepartments([]);
      setStreets([]);
    }
  }, [selectedDelivery]);

  useEffect(() => {
    dispatch(setDataForOrder({ valueName: 'house', value: house }));
    dispatch(setDataForOrder({ valueName: 'flat', value: flat }));
  }, [house, flat]);

  return (
    <>
      <FormControlLabel
        control={
          <Field
            sx={{ padding: '14px 16px 24px 0' }}
            as={Radio}
            value="Кур'єр на вашу адресу"
            name="delivery"
          />
        }
        disableTypography
        label={
          <DeliveryItem
            icon={'/images/delivery/NovaPoshta.png'}
            text={"Кур'єр на вашу адресу"}
          />
        }
      />
      {selectedDelivery == "Кур'єр на вашу адресу" && (
        <Autocomplete
          sx={{ marginBottom: '24px' }}
          options={settlements}
          freeSolo
          renderInput={(params) => <TextField {...params} label="Ваше місто" />}
          onInputChange={(event, newValue) => {
            setSelectedSettlement(newValue);
          }}
        />
      )}
      {selectedDelivery === "Кур'єр на вашу адресу" &&
        arrAddresses.find((obj) => obj.Present == selectedSettlement) && (
          <>
            <Autocomplete
              sx={{ marginBottom: '24px' }}
              options={streets}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label="Ваша вулиця" />
              )}
              onInputChange={(event, newValue) => {
                setSelectedStreet(newValue);
              }}
            />
            <WrapperAdress sx={{}}>
              <TextField
                sx={{ marginRight: '20px' }}
                id="house_number"
                label="Будинок"
                maxRows={1}
                multiline={false}
                value={house}
                onChange={(event) => setHouse(event.target.value)}
              />
              <TextField
                id="flat_number"
                label="Квартира"
                maxRows={1}
                multiline={false}
                value={flat}
                onChange={(event) => setFlat(event.target.value)}
              />
            </WrapperAdress>
          </>
        )}
    </>
  );
};

export default NovaPoshtaCourier;
