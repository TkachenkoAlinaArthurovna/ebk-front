import * as yup from 'yup';

export const contactDataSchema = yup.object({
  lastname: yup.string().required("Прізвище обов'язкове"),
  firstname: yup.string().required("Ім'я обов'язкове"),
  middlename: yup.string().required("По-батькові обов'язкове"),
  phone: yup.string().required("Телефон обов'язковий"),
  email: yup
    .string()
    .email('Невірний формат ел. пошти')
    .required("Ел. пошта обов'язкова"),
  delivery: yup.string().required("Спосіб доставки обов'язковий"),
  payment: yup.string().required("Спосіб оплати обов'язковий"),
  comment: yup.string().max(200, 'Максимальна довжина коментаря 200 символів'),
  termsAgreement: yup
    .boolean()
    .oneOf([true], 'Погодьтесь з умовами користування'),
});
