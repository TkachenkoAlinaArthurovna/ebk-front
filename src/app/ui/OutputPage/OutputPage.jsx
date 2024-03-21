import React, { useState, useEffect } from 'react';

import { getPaymentOutput } from '@/app/lib/getPaymentOutput';

import Link from 'next/link';
import { Box } from '@mui/material';
import Content from '@/app/ui/Content';

const OutputPage = () => {
  const [status, setStatus] = useState('Pending');

  const dataForPaymentModal = useSelector(
    (state) => state.dataForPaymentModal.dataForPaymentModal,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      getPaymentOutput(token, dataForPaymentModal.orderReference, setStatus)
        .then((status) => {
          if (status === 'Decline' || status === 'Approved') {
            clearInterval(intervalId);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          clearInterval(intervalId);
        });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Content>{status}</Content>;
};

export default OutputPage;
