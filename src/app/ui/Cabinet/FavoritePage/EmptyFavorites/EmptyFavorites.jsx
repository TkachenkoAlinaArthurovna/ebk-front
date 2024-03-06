import { Box } from '@mui/system';
import { StyledEmptyFavoritestWrapper } from './EmptyFavoritesStyles';
import PageText from '@/app/ui/PageText';

const EmptyFavorites = () => {
  return (
    <StyledEmptyFavoritestWrapper>
      <PageText>У вас поки що немає вибраних товарів</PageText>
    </StyledEmptyFavoritestWrapper>
  );
};

export default EmptyFavorites;
