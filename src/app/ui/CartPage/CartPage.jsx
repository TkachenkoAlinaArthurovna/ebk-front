'use client';

// Finish layout and styles
// Add error message

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import Content from '@/app/ui/Content';
import PageText from '@/app/ui/PageText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  ListItemText,
  Radio,
  RadioGroup,
  Autocomplete,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {
  CartPageTitle,
  StyledAccordion,
  StyledCartLayout,
  StyledPriceWrapper,
  StyledOrderWrapper,
  StyledCheckoutButton,
  StyledList,
  StyledListItem,
  StyledTotalBox,
  StyledTotalPrice,
  StyledTotalText,
  StyledTermsTitle,
} from '@/app/ui/CartPage/CartPageStyles';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import { contactDataSchema } from '@/lib/schemas';
import EmptyCart from './EmptyCart/EmptyCart';

const CartPage = () => {
  const initialValues = {
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    delivery: '',
    payment: '',
    comment: '',
    anotherPerson: false,
    doNotCall: false,
  };

  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const products = useSelector((state) => state.cart.cartProducts);
  console.log(products);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Content>
      <BreadCrumbs />
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactDataSchema}
          validateOnMount
          enableReinitialize
        >
          {({ dirty, isValid }) => (
            <Form>
              <StyledCartLayout>
                <StyledOrderWrapper>
                  <CartPageTitle>Кошик</CartPageTitle>
                  {products.map((product) => (
                    <CartItem product={product} key={product._id} />
                  ))}
                  <StyledAccordion defaultExpanded>
                    <AccordionSummary
                      sx={{ padding: '0' }}
                      id="contact-info"
                      aria-controls="contact-info-content"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <CartPageTitle>Контактна інформація</CartPageTitle>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                          <Field
                            as={TextField}
                            label="Прізвище"
                            placeholder="Введіть своє прізвище"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            name="lastname"
                          />
                          <ErrorMessage
                            name={'lastname'}
                            component={'div'}
                            style={{ color: '#dc362e' }}
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <Field
                            as={TextField}
                            label="Ім'я"
                            placeholder="Введіть своє ім'я"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            name="firstname"
                          />
                          <ErrorMessage
                            name={'firstname'}
                            component={'div'}
                            style={{ color: '#dc362e' }}
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <Field
                            as={TextField}
                            label="Телефон"
                            placeholder="+38"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            name="phone"
                          />
                          <ErrorMessage
                            name={'phone'}
                            component={'div'}
                            style={{ color: '#dc362e' }}
                          />
                        </Grid>
                        <Grid item md={6} xs={12}>
                          <Field
                            as={TextField}
                            label="Ел. пошта"
                            placeholder="Введіть свою ел. пошту"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            name="email"
                          />
                          <ErrorMessage
                            name={'email'}
                            component={'div'}
                            style={{ color: '#dc362e' }}
                          />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </StyledAccordion>
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
                              price={599}
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
                        {selectedDelivery === 'До відділення Нової Пошти' &&
                          selectedCity && (
                            <Autocomplete
                              options={[
                                'Department 1',
                                'Department 2',
                                'Department 3',
                              ]}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Виберіть відділення"
                                />
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
                              price={299}
                              text={'До поштомату Нова Пошта'}
                            />
                          }
                        />
                      </RadioGroup>
                    </AccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion defaultExpanded>
                    <AccordionSummary
                      sx={{ padding: '0' }}
                      id="payment-info"
                      aria-controls="payment-info-content"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <CartPageTitle>Оплата</CartPageTitle>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <RadioGroup name="payment">
                        <FormControlLabel
                          value="Накладений платіж"
                          control={<Field as={Radio} />}
                          label="Накладений платіж"
                        />
                        <FormControlLabel
                          value="Оплата на карту"
                          control={<Field as={Radio} />}
                          label="Оплата на карту"
                        />
                        <FormControlLabel
                          value="Розрахунковий рахунок"
                          control={<Field as={Radio} />}
                          label="Розрахунковий рахунок"
                        />
                        <FormControlLabel
                          value="Онлайн оплата"
                          control={<Field as={Radio} />}
                          label="Онлайн оплата"
                        />
                      </RadioGroup>
                    </AccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion defaultExpanded>
                    <AccordionSummary
                      sx={{ padding: '0' }}
                      id="comment-info"
                      aria-controls="comment-info-content"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <CartPageTitle>
                        Додати коментар до замовлення
                      </CartPageTitle>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <Field
                        as={TextField}
                        label="Коментар"
                        placeholder={'Маєте уточнення чи запитання?'}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        multiline
                        rows={4}
                        name={'comment'}
                      />
                      <ErrorMessage
                        name={'comment'}
                        component={'div'}
                        style={{ color: '#dc362e' }}
                      />
                      <FormControlLabel
                        sx={{ marginTop: '24px' }}
                        control={<Checkbox />}
                        name={'doNotCall'}
                        label={'Не дзвонити для підтвердження замовлення'}
                      />
                    </AccordionDetails>
                  </StyledAccordion>
                </StyledOrderWrapper>
                <StyledPriceWrapper>
                  <CartPageTitle>Разом</CartPageTitle>
                  <StyledTotalBox mt={3} mb={1}>
                    <StyledTotalText>2 товари на суму</StyledTotalText>
                    <PageText>25 998 ₴</PageText>
                  </StyledTotalBox>
                  <StyledTotalBox mb={3}>
                    <StyledTotalText>Знижка</StyledTotalText>
                    <PageText>25 998 ₴</PageText>
                  </StyledTotalBox>
                  <StyledTotalBox>
                    <StyledTotalText>Загальна сума</StyledTotalText>
                    <StyledTotalPrice>25 998 ₴</StyledTotalPrice>
                  </StyledTotalBox>
                  <StyledCheckoutButton
                    type="submit"
                    variant="contained"
                    disabled={!dirty || !isValid}
                  >
                    Замовлення підтверджую
                  </StyledCheckoutButton>
                  <StyledTermsTitle>
                    Підтверджуючи замовлення, я приймаю умови:{' '}
                  </StyledTermsTitle>
                  <StyledList>
                    <StyledListItem>
                      <ListItemText>
                        положення про обробку персональних даних
                      </ListItemText>
                    </StyledListItem>
                    <StyledListItem>
                      <ListItemText>угоди користувача</ListItemText>
                    </StyledListItem>
                  </StyledList>
                </StyledPriceWrapper>
              </StyledCartLayout>
            </Form>
          )}
        </Formik>
      )}
    </Content>
  );
};

export default CartPage;