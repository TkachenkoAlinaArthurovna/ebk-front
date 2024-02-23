import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Field, ErrorMessage } from 'formik';

const CartContactInfo = () => {
  return (
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
  );
};

export default CartContactInfo;
