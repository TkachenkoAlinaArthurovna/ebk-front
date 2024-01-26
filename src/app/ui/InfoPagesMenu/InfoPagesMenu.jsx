'use client';

import Link from 'next/link';
import {
  StyledList,
  StyledListItemButton,
} from '@/app/ui/InfoPagesMenu/InfoPagesMenuStyles';
import { usePathname } from 'next/navigation';
import { ListItemText, Box } from '@mui/material';

// todo: array as props to make it reusable
const InfoPagesMenu = () => {
  const path = usePathname();

  const links = [
    { href: '/about', label: 'Про нас' },
    { href: '/support', label: 'Підтримка' },
    { href: '/contacts', label: 'Контакти' },
    { href: '/reviews', label: 'Відгуки' },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '400px' }}>
      <StyledList component="nav">
        {links.map((link) => (
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
    </Box>
  );
};

export default InfoPagesMenu;
