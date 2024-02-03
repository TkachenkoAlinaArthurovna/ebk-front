import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { DeliveryIcon } from '@/app/ui/ProductPage/ProductPageStyles';

const Pay = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '16px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'start',
        }}
      >
        <DeliveryIcon>
          <img
            src="/images/delivery/Pay.png"
            style={{ height: '100%' }}
            alt="pay"
          ></img>
        </DeliveryIcon>
        <Typography
          variant="body1"
          sx={{ marginRight: '16px', fontSize: '12px' }}
        >
          Оплата
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" sx={{ width: '100%', fontSize: '12px' }}>
          - Оплата на сайті, через платіжну систему Liqpay, після оформлення
          замовлення.
        </Typography>
        <Typography variant="body1" sx={{ width: '100%', fontSize: '12px' }}>
          - Оплата замовлення, при отриманні, у відділеннях Нова Пошта.
        </Typography>
      </Box>
    </Box>
  );
};

export default Pay;
