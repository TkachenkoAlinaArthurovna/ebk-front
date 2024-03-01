import { StyledTotalText } from '@/app/ui/CartPage/CartPageStyles';
import { Box } from '@mui/system';
import Image from 'next/image';
import {
  StyledIconWrapper,
  StyledDeliveryDateText,
  StyledDeliveryPrice,
} from '@/app/ui/CartPage/DeliveryItem/DeliveryitemStyles';

const DeliveryItem = ({ text, icon, price }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '14px 0 24px 0',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <StyledTotalText>{text}</StyledTotalText>
        <StyledIconWrapper>
          <Box
            component={'img'}
            width={'auto'}
            height={'100%'}
            src={icon}
            alt={'delivery icon'}
          />
        </StyledIconWrapper>
      </Box>
    </Box>
  );
};

export default DeliveryItem;
