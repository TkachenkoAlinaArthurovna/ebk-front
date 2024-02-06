import { Box, Button, ButtonGroup, Typography, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)`
  margin-right: 28px;
  position: relative;
  width: 60px;
  height: 38px;
`;

export const StyledButton = styled(Button)`
  && {
    outline: none;
    background-color: transparent !important;
    font-size: 20px;
    color: #212121;
  }
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledPriceTypography = styled(Typography)`
  text-decoration-line: line-through;
  color: #6a6a6a;
`;
