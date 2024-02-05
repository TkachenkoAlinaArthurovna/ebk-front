'use client';

import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartItem/CartItem';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import PageText from '@/app/ui/PageText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControlLabel,
  ListItemText,
  Radio,
  RadioGroup,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {
  StyledAccordion,
  StyledCartLayout,
  StyledCheckoutButton,
  StyledList,
  StyledListItem,
  StyledTotalBox,
  StyledTotalPrice,
  StyledTotalText,
} from '@/app/(pages)/cart/CartPageStyles';
import { Field, Form, Formik } from 'formik';
import { Item } from '@radix-ui/react-dropdown-menu';

export default function Cart() {
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

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Content>
      <BreadCrumbs />
      <StyledCartLayout>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
          <PageTitle>Кошик</PageTitle>
          <CartItem />
          <CartItem />
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <StyledAccordion defaultExpanded>
                <AccordionSummary
                  id="contact-info"
                  aria-controls="contact-info-content"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <PageTitle>Контактна інформація</PageTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        label="Прізвище"
                        placeholder="Введіть своє прізвище"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        name="lastname"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        label="Ім'я"
                        placeholder="Введіть своє ім'я"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        name="firstname"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        label="Телефон"
                        placeholder="+38"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        name="phone"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        as={TextField}
                        label="Ел. пошта"
                        placeholder="Введіть свою ел. пошту"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        name="email"
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </StyledAccordion>
              <StyledAccordion defaultExpanded>
                <AccordionSummary
                  id="delivery-info"
                  aria-controls="delivery-info-content"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <PageTitle>Спосіб доставки</PageTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup name="delivery">
                    <FormControlLabel
                      control={
                        <Field
                          as={Radio}
                          value="До відділення Нової Пошти"
                          name="delivery"
                        />
                      }
                      label="До відділення Нової Пошти"
                    />
                    <FormControlLabel
                      control={
                        <Field
                          as={Radio}
                          value="До поштомату Нової Пошти"
                          name="delivery"
                        />
                      }
                      label="До поштомату Нової Пошти"
                    />
                  </RadioGroup>
                </AccordionDetails>
              </StyledAccordion>
              <StyledAccordion defaultExpanded>
                <AccordionSummary
                  id="payment-info"
                  aria-controls="payment-info-content"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <PageTitle>Оплата</PageTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <RadioGroup name="payment">
                    <div>
                      <FormControlLabel
                        value="Накладений платіж"
                        control={<Field as={Radio} />}
                        label="Накладений платіж"
                        labelPlacement="start"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Оплата на карту"
                        control={<Field as={Radio} />}
                        label="Оплата на карту"
                        labelPlacement="start"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Розрахунковий рахунок"
                        control={<Field as={Radio} />}
                        label="Розрахунковий рахунок"
                        labelPlacement="start"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="Онлайн оплата"
                        control={<Field as={Radio} />}
                        label="Онлайн оплата"
                        labelPlacement="start"
                      />
                    </div>
                  </RadioGroup>
                </AccordionDetails>
              </StyledAccordion>
              <StyledAccordion defaultExpanded>
                <AccordionSummary
                  id="comment-info"
                  aria-controls="comment-info-content"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <PageTitle>Додати коментар до замовлення</PageTitle>
                </AccordionSummary>
                <AccordionDetails>
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
                  <FormControlLabel
                    sx={{ marginTop: '24px' }}
                    control={<Checkbox />}
                    name={'doNotCall'}
                    label={'Не дзвонити для підтвердження замовлення'}
                  />
                </AccordionDetails>
              </StyledAccordion>
            </Form>
          </Formik>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
          <PageTitle>Разом</PageTitle>
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
          <StyledCheckoutButton my={3}>
            Замовлення підтверджую
          </StyledCheckoutButton>
          <PageText color="#6A6A6A">
            Підтверджуючи замовлення, я приймаю умови:{' '}
          </PageText>
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
        </Box>
      </StyledCartLayout>
    </Content>
  );
}
