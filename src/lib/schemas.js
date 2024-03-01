import * as yup from 'yup';

const cyrillicOnlyRegex = /^[а-яА-ЯЁё]+$/;

export const basicContactSchema = yup.object({
  lastname: yup
    .string()
    .matches(cyrillicOnlyRegex, 'Прізвище може містити лише кириличні символи')
    .required("Прізвище обов'язкове"),
  firstname: yup
    .string()
    .matches(cyrillicOnlyRegex, "Ім'я може містити лише кириличні символи")
    .required("Ім'я обов'язкове"),
  middlename: yup
    .string()
    .matches(
      cyrillicOnlyRegex,
      'По-батькові може містити лише кириличні символи',
    )
    .required("По-батькові обов'язкове"),
  phone: yup.string().required("Телефон обов'язковий"),
  email: yup
    .string()
    .email('Невірний формат ел. пошти')
    .required("Ел. пошта обов'язкова"),
});

export const contactDataSchema = yup.object({
  ...basicContactSchema.fields,
  delivery: yup.string().required("Спосіб доставки обов'язковий"),
  payment: yup.string().required("Спосіб оплати обов'язковий"),
  comment: yup.string().max(200, 'Максимальна довжина коментаря 200 символів'),
  termsAgreement: yup
    .boolean()
    .oneOf([true], 'Погодьтесь з умовами користування'),
});
