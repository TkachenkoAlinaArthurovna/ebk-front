import { Box } from '@mui/material';
import React from 'react';

const ShadowBox = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
        padding: '42px',
        boxShadow: '0px 4px 40px 0px rgba(190, 190, 190, 0.25)',
        borderRadius: '28px',
        border: '1px solid transparent',
      }}
    >
      {children}
    </Box>
  );
};

export default ShadowBox;
