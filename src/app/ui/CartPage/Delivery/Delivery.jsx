'use client';

import { useState } from 'react';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Autocomplete,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Field } from 'formik';

const Delivery = ({}) => {
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  return (
    <StyledAccordion defaultExpanded>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="delivery-info"
        aria-controls="delivery-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Спосіб доставки</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <RadioGroup
          name="delivery"
          onChange={(e) => setSelectedDelivery(e.target.value)}
        >
          <FormControlLabel
            control={
              <Field
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
          {selectedDelivery === 'До відділення Нової Пошти' && (
            <Autocomplete
              sx={{ marginBottom: '24px' }}
              options={['Київ', 'Львів', 'Одеса', 'Харків']}
              renderInput={(params) => (
                <TextField {...params} label="Ваше місто" />
              )}
              onChange={(event, newValue) => {
                setSelectedCity(newValue);
              }}
            />
          )}
          {selectedDelivery === 'До відділення Нової Пошти' && selectedCity && (
            <Autocomplete
              options={['Department 1', 'Department 2', 'Department 3']}
              renderInput={(params) => (
                <TextField {...params} label="Виберіть відділення" />
              )}
              onChange={(event, newValue) => {
                setSelectedDepartment(newValue);
              }}
            />
          )}
          <FormControlLabel
            control={
              <Field
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
              options={['Київ', 'Львів', 'Одеса', 'Харків']}
              renderInput={(params) => (
                <TextField {...params} label="Ваше місто" />
              )}
              onChange={(event, newValue) => {
                setSelectedCity(newValue);
              }}
            />
          )}
          {selectedDelivery === 'До поштомату Нової Пошти' && selectedCity && (
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
          <FormControlLabel
            control={
              <Field
                as={Radio}
                value="До відділення Укрпошти"
                name="delivery"
              />
            }
            disableTypography
            label={
              <DeliveryItem
                icon={'/images/delivery/UkrPoshta.png'}
                text={'До відділення Укрпошти'}
              />
            }
          />
          {selectedDelivery === 'До відділення Укрпошти' && (
            <Autocomplete
              sx={{ marginBottom: '24px' }}
              options={['Київ', 'Львів', 'Одеса', 'Харків']}
              renderInput={(params) => (
                <TextField {...params} label="Ваше місто" />
              )}
              onChange={(event, newValue) => {
                setSelectedCity(newValue);
              }}
            />
          )}
          {selectedDelivery === 'До відділення Укрпошти' && selectedCity && (
            <Autocomplete
              options={['Department 1', 'Department 2', 'Department 3']}
              renderInput={(params) => (
                <TextField {...params} label="Виберіть відділення" />
              )}
              onChange={(event, newValue) => {
                setSelectedDepartment(newValue);
              }}
            />
          )}
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Delivery;
