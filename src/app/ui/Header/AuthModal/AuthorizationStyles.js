import { styled } from '@mui/system';
import { Box, Button } from '@mui/material';

export const StyledModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: '#fff',
  boxShadow: 24,
  padding: '40px',
  borderRadius: '28px',
}));

export const StyledAuthButton = styled(Button)`
  &:disabled,
  &[disabled] {
    color: #ffffff;
    background-color: #eeeeee !important;
  }
`;

export const StyledTimer = styled(Box)`
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  margin-bottom: 24px;
`;

export const StyledBackButton = styled(Box)`
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-bottom: 24px;
`;
