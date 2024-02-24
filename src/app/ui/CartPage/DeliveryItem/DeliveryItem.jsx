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
        padding: '24px 0',
        borderBottom: '1px solid #E5E5E5',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box display="flex">
          <StyledTotalText>{text}</StyledTotalText>
          <StyledIconWrapper>
            <Image sizes="100%" fill src={icon} alt={'delivery icon'} />
          </StyledIconWrapper>
        </Box>
        <StyledDeliveryDateText>Сьогодні</StyledDeliveryDateText>
      </Box>
      {price && <StyledDeliveryPrice>{price} ₴</StyledDeliveryPrice>}
    </Box>
  );
};

export default DeliveryItem;
