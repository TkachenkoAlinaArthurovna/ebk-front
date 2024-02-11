import { Box, Button, TextField, Typography } from '@mui/material';
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
  [theme.breakpoints.down('sm')]: {
    padding: '12px 16px',
  },
}));
export const StyledTypographyReview = styled(Typography)(({ theme }) => ({
  paddingLeft: '24px',
  fontSize: '28px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));
export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
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

export const StyledBoxModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '548px',
  backgroundColor: '#FFFFFF',
  borderRadius: '28px',
  boxShadow: 24,
  padding: '36px',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    padding: '24px',
  },
}));
export const StyledBoxTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '6px',
  },
}));
export const StyledTextFieldComent = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: '24px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '12px',
  },
}));
export const StyledTextFieldName = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginRight: '32px',
  [theme.breakpoints.down('sm')]: {
    marginRight: '12px',
  },
}));
export const StyledBoxName = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '32px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '12px',
  },
}));
