'use client';

import { Box, List, ListItem, styled } from '@mui/material';

export const StyledContainer = styled(Box)`
  background-color: #4d4d4d;
  padding: 48px;
  color: #ffffff;
`;

export const FooterItemBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-area: ${({ area_name }) => area_name};
  align-items: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: start;
  }
`;

export const StyledListItem = styled(ListItem)`
  padding: 0;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.up('sm')} {
    justify-content: start;
  }
`;
export const StyledList = styled(List)`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperItemBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '32px',
  gridTemplateColumns: 'repeat(1, 1fr)',
  alignItems: 'start',
  gridTemplateAreas: `
    'company'
    'help'
    'contacts'
    'schedule'
    `,
  marginBottom: '32px',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateAreas: `
        'company contacts'
        'help schedule'
        `,
  },

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateAreas: `
        'logo company help'
        'logo contacts schedule'
        `,
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateAreas: `
        'logo company help contacts'
        '. . . schedule'
        `,
  },
}));
