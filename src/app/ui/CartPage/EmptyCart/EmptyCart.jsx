import { Box } from '@mui/system';
import { StyledEmptyCartWrapper, StyledLink } from './EmptyCartStyles';
import PageText from '@/app/ui/PageText';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <StyledEmptyCartWrapper>
      <PageText>Ваш кошик порожній</PageText>
      <Link href="/">
        <StyledLink>На головну</StyledLink>
      </Link>
    </StyledEmptyCartWrapper>
  );
};

export default EmptyCart;
