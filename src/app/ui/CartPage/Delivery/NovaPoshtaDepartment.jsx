'use client';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Radio, Autocomplete } from '@mui/material';
import { Field } from 'formik';
import useDebounce from '@/app/lib/useDebounce';

const NovaPoshtaDepartment = ({
  setSettlement,
  setDepartment,
  setFilteredDepartments,
}) => {
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const [selectedSettlement, setSelectedSettlement] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState();
  const debouncedSelectedSettlement = useDebounce(selectedSettlement, 1000);
  const [settlements, setSettlements] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [arrAddresses, setArrAddresses] = useState([]);

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

  const getDepartments = async (DeliveryCity) => {
    try {
      const data = {
        apiKey: '47f3596ae765c7c6d56e26a16d22e8ba',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: '',
          CityRef: `${DeliveryCity}`,
          Limit: '5000',
          Page: '1',
          Language: 'UA',
          TypeOfWarehouseRef: '',
          WarehouseId: '',
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
          const filteredDepartments = data['data'].filter((obj) =>
            [
              '6f8c7162-4b72-4b0a-88e5-906948c6a92f',
              '841339c7-591a-42e2-8233-7a0a00f0ed6f',
              '9a68df70-0267-42a8-bb5c-37f427e36ee4',
            ].includes(obj.TypeOfWarehouse),
          );
          setFilteredDepartments(filteredDepartments);
          const description = filteredDepartments.map((obj) => obj.Description);
          setDepartments(description);
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
    if (arrAddresses.find((obj) => obj.Present == selectedSettlement)) {
      const settlement = arrAddresses.find(
        (obj) => obj.Present == selectedSettlement,
      );
      setSettlement(settlement);
      setDepartment('');
      getDepartments(settlement.DeliveryCity);
    }
  }, [selectedSettlement]);

  useEffect(() => {
    if (selectedDelivery == 'До поштомату Нової Пошти') {
      setSettlements([]);
      setDepartments([]);
    }
  }, [selectedDelivery]);

  return (
    <>
      <FormControlLabel
        control={
          <Field
            sx={{ padding: '14px 16px 24px 0' }}
            as={Radio}
            value="До відділення Нової Пошти"
            name="delivery"
          />
        }
        disableTypography
        label={
          <DeliveryItem
            icon={'/images/delivery/NovaPoshta.png'}
            text={'До відділення Нова Пошта'}
          />
        }
      />
      {selectedDelivery == 'До відділення Нової Пошти' && (
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
      {selectedDelivery === 'До відділення Нової Пошти' &&
        arrAddresses.find((obj) => obj.Present == selectedSettlement) &&
        departments.length > 0 && (
          <Autocomplete
            options={departments}
            renderInput={(params) => (
              <TextField {...params} label="Виберіть відділення" />
            )}
            onChange={(event, newValue) => {
              setDepartment(newValue);
              setSelectedDepartment(newValue);
            }}
          />
        )}
    </>
  );
};

export default NovaPoshtaDepartment;
