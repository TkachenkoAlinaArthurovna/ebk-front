'use client';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Radio, Autocomplete } from '@mui/material';
import { Field } from 'formik';
import useDebounce from '@/app/lib/useDebounce';

const NovaPoshtaPostmachines = ({
  setSettlement,
  setDepartment,
  setFilteredDepartments,
}) => {
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const [selectedSettlement, setSelectedSettlement] = useState('');
  const [selectedPostmachines, setSelectedPostmachines] = useState();
  const debouncedSelectedSettlement = useDebounce(selectedSettlement, 2000);
  const [settlements, setSettlements] = useState([]);
  const [postmachines, setPostmachines] = useState([]);
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

  const getPostmachines = async (DeliveryCity) => {
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
          const filteredPostmachines = data['data'].filter((obj) =>
            [
              'f9316480-5f2d-425d-bc2c-ac7cd29decf0',
              '95dc212d-479c-4ffb-a8ab-8c1b9073d0bc',
            ].includes(obj.TypeOfWarehouse),
          );
          setFilteredDepartments(filteredPostmachines);
          const description = filteredPostmachines.map(
            (obj) => obj.Description,
          );
          setPostmachines(description);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (debouncedSelectedSettlement.length >= 2) {
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
      getPostmachines(settlement.DeliveryCity);
    }
  }, [selectedSettlement]);

  useEffect(() => {
    if (selectedDelivery == 'До відділення Нової Пошти') {
      setSettlements([]);
      setPostmachines([]);
    }
  }, [selectedDelivery]);

  return (
    <>
      <FormControlLabel
        control={
          <Field
            sx={{ padding: '14px 16px 24px 0' }}
            as={Radio}
            value="До поштомату Нової Пошти"
            name="delivery"
          />
        }
        disableTypography
        label={
          <DeliveryItem
            icon={'/images/delivery/NovaPoshta.png'}
            text={'До поштомату Нова Пошта'}
          />
        }
      />
      {selectedDelivery === 'До поштомату Нової Пошти' && (
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
      {selectedDelivery === 'До поштомату Нової Пошти' &&
        arrAddresses.find((obj) => obj.Present == selectedSettlement) &&
        postmachines.length > 0 && (
          <Autocomplete
            options={postmachines}
            renderInput={(params) => (
              <TextField {...params} label="Виберіть поштомат" />
            )}
            onChange={(event, newValue) => {
              setDepartment(newValue);
              setSelectedPostmachines(newValue);
            }}
          />
        )}
    </>
  );
};

export default NovaPoshtaPostmachines;
