'use client';

import { styled, List, ListItemButton, Box } from '@mui/material';

export const StyledList = styled(List)`
  color: #4d4d4d;
  width: 90%;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  && {
    margin-bottom: 2px;
    border-radius: 100px;
    background-color: ${(props) =>
      props.selected ? '#f5f5f5' : 'transparent'};

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const StyledListWrapper = styled(Box)`
  width: 40%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
