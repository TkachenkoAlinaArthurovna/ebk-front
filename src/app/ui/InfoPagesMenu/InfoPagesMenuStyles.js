'use client';

import { styled, List, ListItemButton, Box } from '@mui/material';

export const StyledList = styled(List)`
  color: #4d4d4d;
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 90%;
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  && {
    border-radius: 10px;
    background-color: ${(props) =>
      props.selected ? '#f5f5f5' : 'transparent'};

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const StyledListWrapper = styled(Box)`
  width: 100%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 400px;
  }
`;
