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
