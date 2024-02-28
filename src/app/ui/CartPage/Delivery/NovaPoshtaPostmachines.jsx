'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Radio, Autocomplete } from '@mui/material';
import { Field } from 'formik';

const NovaPoshtaPostmachines = ({}) => {
  const dispatch = useDispatch();
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const [selectedSettlement, setSelectedSettlement] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState();
  return (
    <>
      <FormControlLabel
        control={
          <Field as={Radio} value="До поштомату Нової Пошти" name="delivery" />
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
          options={['Київ', 'Львів', 'Одеса', 'Харків']}
          renderInput={(params) => <TextField {...params} label="Ваше місто" />}
          onChange={(event, newValue) => {
            setSelectedSettlement(newValue);
          }}
        />
      )}
      {selectedDelivery === 'До поштомату Нової Пошти' &&
        selectedSettlement && (
          <Autocomplete
            options={['Department 1', 'Department 2', 'Department 3']}
            renderInput={(params) => (
              <TextField {...params} label="Виберіть поштомат" />
            )}
            onChange={(event, newValue) => {
              setSelectedDepartment(newValue);
            }}
          />
        )}
    </>
  );
};

export default NovaPoshtaPostmachines;
