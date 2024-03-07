'use client';

import Link from 'next/link';
import {
  StyledList,
  StyledListItemButton,
  StyledListWrapper,
} from '@/app/ui/InfoPagesMenu/InfoPagesMenuStyles';
import { usePathname } from 'next/navigation';
import { ListItemText } from '@mui/material';
import { useAuth } from '@/redux/contexts/AuthContext';

const InfoPagesMenu = ({ cabinet }) => {
  const { logout } = useAuth();
  const path = usePathname();

  const links = [
    { href: '/about', label: 'Про нас' },
    { href: '/support', label: 'Підтримка' },
    { href: '/contacts', label: 'Контакти' },
    // { href: '/reviews', label: 'Відгуки' },
  ];

  const linksForCabinet = [
    { href: '/cabinet/personal-information', label: 'Особиста інформація' },
    { href: '/cabinet/orders', label: 'Мої замовлення' },
    { href: '/cabinet/favorites', label: 'Обране' },
    // { href: '/cabinet/reviews', label: 'Мої відгуки' },
  ];

  const linksLayout = links.map((link) => (
    <Link key={link.label} href={link.href} passHref>
      <StyledListItemButton selected={path === link.href}>
        <ListItemText primary={link.label} selected={path === link.href} />
      </StyledListItemButton>
    </Link>
  ));

  const linksForCabinetLayout = (
    <>
      {linksForCabinet.map((link) => (
        <Link key={link.label} href={link.href} passHref>
          <StyledListItemButton selected={path === link.href}>
            <ListItemText primary={link.label} selected={path === link.href} />
          </StyledListItemButton>
        </Link>
      ))}
      <StyledListItemButton onClick={logout}>
        <ListItemText>Вихід</ListItemText>
      </StyledListItemButton>
    </>
  );

  return (
    <StyledListWrapper>
      <StyledList component="nav">
        {!cabinet ? linksLayout : linksForCabinetLayout}
      </StyledList>
    </StyledListWrapper>
  );
};

export default InfoPagesMenu;
