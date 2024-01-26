'use client';

import { styled, List, ListItemButton } from '@mui/material';

export const StyledList = styled(List)`
  color: #4d4d4d;
  width: 340px;
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
