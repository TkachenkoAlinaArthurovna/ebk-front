import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Field, ErrorMessage } from 'formik';

const CartContactInfo = ({
  firstname,
  setFirstname,
  surname,
  setSurname,
  phone,
  email,
  setEmail,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12} sx={{ height: '100px' }}>
        <Field
          as={TextField}
          label="Прізвище"
          placeholder="Введіть своє прізвище"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="surname"
          sx={{ marginBottom: '6px' }}
        />
        <ErrorMessage
          name={'surname'}
          component={'div'}
          style={{ color: '#dc362e' }}
        />
      </Grid>
      <Grid item md={6} xs={12} sx={{ height: '100px' }}>
        <Field
          as={TextField}
          label="Ім'я"
          placeholder="Введіть своє ім'я"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="firstname"
          sx={{ marginBottom: '6px' }}
        />
        <ErrorMessage
          name={'firstname'}
          component={'div'}
          style={{ color: '#dc362e' }}
        />
      </Grid>
      <Grid item md={6} xs={12} sx={{ height: '100px' }}>
        <Field
          as={TextField}
          type="text"
          readOnly="readOnly"
          label="Телефон"
          value={phone}
          placeholder="+38"
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="phone"
          sx={{ marginBottom: '6px' }}
        />
        <ErrorMessage
          name={'phone'}
          component={'div'}
          style={{ color: '#dc362e' }}
        />
      </Grid>
      <Grid item md={6} xs={12} sx={{ height: '100px' }}>
        <Field
          as={TextField}
          label="Ел. пошта"
          placeholder="Введіть свою ел. пошту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          name="email"
          sx={{ marginBottom: '6px' }}
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
