'use client';
import { Modal, Typography, Box } from '@mui/material';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Field, ErrorMessage } from 'formik';
import { contactDataSchema } from '@/app/lib/schemas';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';
import { StyledModalContent } from '@/app/ui/AuthModal/AuthorizationStyles';
import {
  ButtonBox,
  StyledButton,
} from '@/app/ui/Cabinet/UserInfo/UserInfoStyles';
import React, { useState } from 'react';
import { closeAuthModal } from '@/redux/slices/AuthModalSlice';
import AuthForma from '@/app/ui/AuthModal/AuthForma';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Authorization = () => {
  const isOpenAuthModal = useSelector(
    (state) => state.authModal.isOpenModalAuth,
  );
  const dispatch = useDispatch();
  const handleCloseAuthModal = () => dispatch(closeAuthModal());

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Modal open={isOpenAuthModal} onClose={handleCloseAuthModal}>
        <StyledModalContent>
          <IconButton
            onClick={handleCloseAuthModal}
            sx={{ position: 'absolute', top: '24px', right: '24px' }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ width: '100%', marginTop: '20px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Вхід" {...a11yProps(0)} />
                <Tab label="Реєстрація" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <AuthForma
                registration={false}
                handleCloseAuthModal={handleCloseAuthModal}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <AuthForma
                registration={true}
                handleCloseAuthModal={handleCloseAuthModal}
              />
            </CustomTabPanel>
          </Box>
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default Authorization;
