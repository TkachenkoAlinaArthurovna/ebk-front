import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButtonReviews = styled(Button)(({ theme }) => ({
  padding: '20px 24px',
  marginRight: '24px  ',
  backgroundColor: 'transparent',
  border: '1px solid #E5E5E5',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    height: '43px',
  },
}));

export const StyledButtonFirstReview = styled(Button)(({ theme }) => ({
  padding: '20px 24px',
  marginRight: '24px  ',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    height: '43px',
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
export const StyledBoxReviews = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '362px',
  backgroundColor: '#F7F7F7',
  marginTop: '32px',
  borderRadius: '32px',
}));
export const StyledBoxReviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
}));

export const ModalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '648px',
  bgcolor: 'background.paper',
  borderRadius: '28px',
  boxShadow: 24,
  p: 4,
};
