import { Box } from '@mui/system';
import { StyledEmptyCartWrapper, StyledLink } from './EmptyCartStyles';
import PageText from '@/app/ui/PageText';
import Link from 'next/link';

const Success = () => {
  return (
    <StyledEmptyCartWrapper>
      <PageText>Заявка створена успішно!</PageText>
      <Link href="/">
        <StyledLink>На головну</StyledLink>
      </Link>
    </StyledEmptyCartWrapper>
  );
};

export default Success;
