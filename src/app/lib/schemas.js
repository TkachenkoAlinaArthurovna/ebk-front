import * as yup from 'yup';

export const basicContactSchema = yup.object({
  surname: yup
    .string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Не може мати числові значення')
    .min(2, 'Занадто коротке імʼя')
    .max(70, 'Занадто довге імʼя')
    .required('Обовʼязкове поле'),
  firstname: yup
    .string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Не може мати числові значення')
    .min(2, 'Занадто коротке прізвище')
    .max(70, 'Занадто довге прізвище')
    .required('Обовʼязкове поле'),
  email: yup
    .string()
    .email('Невірний формат ел. пошти')
    .required('Обовʼязкове поле'),
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

export const contactsPageSchema = yup.object({
  name: yup
    .string()
    .matches(/[а-яА-ЯёЁa-zA-Z]$/, 'Не може мати числові значення')
    .min(2, 'Занадто коротке імʼя')
    .max(70, 'Занадто довге імʼя')
    .required('Обовʼязкове поле'),
  email: yup
    .string()
    .email('Невірний формат ел. пошти')
    .required("Email є обов'язковим полем"),
  message: yup
    .string()
    .required("Повідомлення є обов'язковим полем")
    .max(200, 'Максимальна довжина повідомлення 200 символів'),
});

export const phoneSchema = yup.object({
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Невірний формат номеру')
    .required('Обовʼязкове поле'),
});
