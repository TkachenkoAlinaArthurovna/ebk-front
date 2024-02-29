'use client';

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { StyledButtonEntry } from '@/app/ui/CartPage/CartPageStyles';

const Entry = ({}) => {
  return (
    <Box sx={{ margin: '20px 0' }}>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        <Typography variant="span" sx={{ color: '#dc362e' }}>
          Увага!
        </Typography>{' '}
        Для замовлення на сайті необхідно увійти у свій кабінет.
      </Typography>
      <StyledButtonEntry variant="contained">Вхід</StyledButtonEntry>
    </Box>
  );
};
export default Entry;
