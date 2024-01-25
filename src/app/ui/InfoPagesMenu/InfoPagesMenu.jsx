import Link from 'next/link';
import { StyledList, StyledListItem } from '@/app/ui/InfoPagesMenu/InfoPagesMenuStyles';

const InfoPagesMenu = () => {
  return (
    <StyledList component="nav">
      <StyledListItem>
        <Link href="/about">Про нас</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/support">Підтримка</Link>
      </StyledListItem>
      <StyledListItem>
        {/* To fix */}
        <Link href="/about">Запитання та відповіді</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/contacts">Контакти</Link>
      </StyledListItem>
      <StyledListItem>
        {/* To fix */}
        <Link href="about">Відгуки</Link>
      </StyledListItem>
    </StyledList>
  )
}

export default InfoPagesMenu;