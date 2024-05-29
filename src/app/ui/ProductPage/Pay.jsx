import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { DeliveryIcon, Payment } from '@/app/ui/ProductPage/ProductPageStyles';

const Pay = () => {
  return (
    <Box>
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
            - Оплата через платіжну систему WayForPay, після оформлення
            замовлення.
          </Typography>
          <Typography variant="body1" sx={{ width: '100%', fontSize: '12px' }}>
            - Оплата замовлення, при отриманні, у відділеннях Нова Пошта.
          </Typography>
        </Box>
      </Box>
      <Payment>
        <img src="/images/visa.png" alt="payment" />
        <img src="/images/mastercard.png" alt="payment" />
        <img src="/images/Google-Pay.png" alt="payment" />
      </Payment>
    </Box>
  );
};

export default Pay;
