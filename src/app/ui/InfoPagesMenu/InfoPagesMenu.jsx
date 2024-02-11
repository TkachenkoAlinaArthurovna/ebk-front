'use client';

import Link from 'next/link';
import {
  StyledList,
  StyledListItemButton,
  StyledListWrapper,
} from '@/app/ui/InfoPagesMenu/InfoPagesMenuStyles';
import { usePathname } from 'next/navigation';
import { ListItemText, Box } from '@mui/material';

const InfoPagesMenu = ({ cabinet }) => {
  const path = usePathname();

  const links = [
    { href: '/about', label: 'Про нас' },
    { href: '/support', label: 'Підтримка' },
    { href: '/contacts', label: 'Контакти' },
  ];

  const linksForCabinet = [
    { href: '/cabinet/personal-information', label: 'Особиста інформація' },
    { href: '/cabinet/orders', label: 'Мої замовлення' },
    { href: '/cabinet/favorites', label: 'Обране' },
    { href: '/cabinet/reviews', label: 'Мої відгуки' },
  ];

  return (
    <StyledListWrapper>
      <StyledList component="nav">
        {!cabinet
          ? links.map((link) => (
              <Link key={link.label} href={link.href} passHref>
                <StyledListItemButton selected={path === link.href}>
                  <ListItemText
                    primary={link.label}
                    selected={path === link.href}
                  />
                </StyledListItemButton>
              </Link>
            ))
          : linksForCabinet.map((link) => (
              <Link key={link.label} href={link.href} passHref>
                <StyledListItemButton selected={path === link.href}>
                  <ListItemText
                    primary={link.label}
                    selected={path === link.href}
                  />
                </StyledListItemButton>
              </Link>
            ))}
      </StyledList>
    </StyledListWrapper>
  );
};

export default InfoPagesMenu;
