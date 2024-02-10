'use client';
import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

export default function Reviews() {
  const StyledButton = styled(Button)(({ theme }) => ({
    padding: '20px 24px',
    backgroundColor: 'transparent',
    border: '1px solid #E5E5E5',
    // [theme.breakpoints.down('lg')]: {
    // },
  }))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ paddingLeft: '24px', fontSize: '28px' }}>
          Відгуки
        </Typography>
        <StyledButton variant='outlened'>Написати відгук</StyledButton>
      </Box>

      <CustomerReview
        date="10.10.2012"
        firstName="vova"
        lastName="vovkin"
        text="Одні з найкращих велосипедів на планеті, дуже вам вдячний! "
      />
      <CustomerReview
        date="10.10.2012"
        firstName="dova"
        lastName="povkin"
        text="Одні з найкращих велосипедів на планеті "
      />
      <CustomerReview
        date="10.10.2012"
        firstName="fova"
        lastName="zovkin"
        text="Одні з найкращих велосипедів на планеті, дуже вам вдячний, комнанія Агонь!!!! "
      />
      <CustomerReview
        date="10.10.2012"
        firstName="gova"
        lastName="dovkin"
        text="Одні з найкращих велосипедів на планеті, дуже вам вдячний, комнанія Агонь!!!! "
      />
    </Box>
  );
}
