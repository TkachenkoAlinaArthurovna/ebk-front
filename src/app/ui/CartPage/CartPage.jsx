'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import Content from '@/app/ui/Content';
import PageText from '@/app/ui/PageText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  ListItemText,
  Radio,
  RadioGroup,
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
import { contactDataSchema } from '@/lib/schemas';
import EmptyCart from './EmptyCart/EmptyCart';
import CartContactInfo from './CartContactInfo/CartContactInfo';
import Delivery from '@/app/ui/CartPage/Delivery';

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
    termsAgreement: false,
    termsAgreement: false,
  };

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [products, setProducts] = useState(cartProducts);

  const handleRemoveProduct = (code) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.code !== code),
    );
  };

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
                      <CartContactInfo />
                    </AccordionDetails>
                  </StyledAccordion>
                  <Delivery />
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
                  <FormControlLabel
                    sx={{ marginBottom: '14px' }}
                    control={
                      <Field
                        type="checkbox"
                        name="termsAgreement"
                        as={Checkbox}
                      />
                    }
                    label="З умовами ознайомлений та погоджуюсь*"
                  />
                  <FormControlLabel
                    sx={{ marginBottom: '14px' }}
                    control={<Checkbox />}
                    name={'termsAgreement'}
                    label={'З умовами ознайомлений та погоджуюсь*'}
                  />
                  <StyledTermsTitle>
                    Підтверджуючи замовлення, я приймаю умови:{' '}
                  </StyledTermsTitle>
                  <StyledList>
                    <StyledListItem>
                      <ListItemText>
                        • положення про обробку персональних даних
                      </ListItemText>
                    </StyledListItem>
                    <StyledListItem>
                      <ListItemText>• угоди користувача</ListItemText>
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
