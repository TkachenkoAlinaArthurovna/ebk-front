import { Box } from '@mui/system';
import { StyledEmptyOrdersWrapper } from './EmptyOrdersStyles';
import PageText from '@/app/ui/PageText';

const EmptyOrders = () => {
  return (
    <StyledEmptyOrdersWrapper>
      <PageText>У вас поки що немає замовлень</PageText>
    </StyledEmptyOrdersWrapper>
  );
};

export default EmptyOrders;
