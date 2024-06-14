import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFirstname,
  setSurname,
  setEmail,
  setPhone,
} from '@/redux/slices/UserInfoSlice';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useAuth } from '@/redux/contexts/AuthContext';
import ButtonMain from '@/app/ui/ButtonMain';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { postContacts } from '@/app/lib/postContacts';

const CartContactInfo = ({ setErrors, setInactively }) => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const { errors } = useFormikContext();
  const { login } = useAuth();

  useEffect(() => {
    Object.keys(errors).length == 1 ? setErrors(false) : setErrors(true);
  }, [errors]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12} sx={{ height: '100px' }}>
          <Field
            as={TextField}
            label="Прізвище"
            placeholder="Введіть своє прізвище"
            value={userInfo.surname}
            onChange={(e) => dispatch(setSurname(e.target.value))}
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
            value={userInfo.firstname}
            onChange={(e) => dispatch(setFirstname(e.target.value))}
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
            label="Телефон"
            value={userInfo.phone}
            onChange={(e) => dispatch(setPhone(e.target.value))}
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
            value={userInfo.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
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
      <Box sx={{ marginTop: '20px' }}>
        <ButtonMain
          width={'138px'}
          disabled={Object.keys(errors).length == 1 ? false : true}
          endIcon={<ArrowDownwardIcon />}
          onClick={
            authorized
              ? () => (authorized ? setInactively(false) : null)
              : () => {
                  postContacts(
                    login,
                    setInactively,
                    userInfo.surname,
                    userInfo.firstname,
                    userInfo.phone,
                    userInfo.email,
                  );
                }
          }
        >
          Далі
        </ButtonMain>
      </Box>
    </>
  );
};

export default CartContactInfo;
