import { styled, Box } from '@mui/material';
import React from 'react';

const StyledBox = styled(Box)`
  height: 100%;
  padding: 42px;
  box-shadow: 0px 4px 40px 0px rgba(190, 190, 190, 0.25);
  border-radius: 28px;
  border: 1px solid transparent;
`;

const ShadowBox = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default ShadowBox;
