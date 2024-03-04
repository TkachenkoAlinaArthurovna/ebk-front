'use client';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { StyledButtonEntry } from '@/app/ui/CartPage/CartPageStyles';
import { openAuthModal } from '@/redux/slices/AuthModalSlice';

const Entry = ({}) => {
  const dispatch = useDispatch();
  const handleOpenAuthModal = () => dispatch(openAuthModal());

  return (
    <Box sx={{ margin: '20px 0 40px 0' }}>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        <Typography variant="span" sx={{ color: '#dc362e' }}>
          Увага!
        </Typography>{' '}
        Для замовлення на сайті необхідно увійти у свій кабінет.
      </Typography>
      <StyledButtonEntry variant="contained" onClick={handleOpenAuthModal}>
        Вхід
      </StyledButtonEntry>
    </Box>
  );
};
export default Entry;
