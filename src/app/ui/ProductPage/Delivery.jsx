import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { DeliveryIcon } from '@/app/ui/ProductPage/ProductPageStyles';

const Delivery = ({ bike }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}
    >
      {bike && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'start',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <DeliveryIcon>
              <img
                src="/images/delivery/NovaPoshta.png"
                style={{ height: '100%' }}
              />
            </DeliveryIcon>
            <Typography
              variant="body1"
              sx={{ marginRight: '16px', fontSize: '12px' }}
            >
              Нова Пошта (відділення) - безкоштовна доставка.
            </Typography>
          </Box>
        </Box>
      )}
      {!bike && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'start',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              width: '40%',
            }}
          >
            <DeliveryIcon>
              <img
                src="/images/delivery/NovaPoshta.png"
                style={{ height: '100%' }}
              />
            </DeliveryIcon>
            <Typography
              variant="body1"
              sx={{ marginRight: '16px', fontSize: '12px' }}
            >
              Нова Пошта (відділення)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення від 3000 грн - БЕЗКОШТОВНО.
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення до 3000 грн - за тарифами Нова Пошта.
            </Typography>
          </Box>
        </Box>
      )}
      {!bike && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'start',
            marginBottom: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              width: '40%',
            }}
          >
            <DeliveryIcon>
              <img
                src="/images/delivery/NovaPoshta.png"
                style={{ height: '100%' }}
              />
            </DeliveryIcon>
            <Typography
              variant="body1"
              sx={{ marginRight: '16px', fontSize: '12px' }}
            >
              Нова Пошта (поштомат)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення від 3000 грн - БЕЗКОШТОВНО.
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення до 3000 грн - за тарифами Нова Пошта.
            </Typography>
          </Box>
        </Box>
      )}
      {!bike && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              alignItems: 'center',
              width: '40%',
            }}
          >
            <DeliveryIcon>
              <img
                src="/images/delivery/Ukrposhta.png"
                style={{ height: '100%' }}
              />
            </DeliveryIcon>
            <Typography variant="body1" sx={{ fontSize: '12px' }}>
              Укрпошта (відділення)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення від 3000 грн - БЕЗКОШТОВНО.
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: '100%', fontSize: '12px' }}
            >
              Замовлення до 3000 грн - за тарифами Укрпошта.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
export default Delivery;
