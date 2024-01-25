'use client';

import { styled, List, ListItem } from '@mui/material';

export const StyledList = styled(List)`
    color: #4D4D4D;
    width: 340px;
`;

export const StyledListItem = styled(ListItem)`
    padding: 16px;
    border-radius: 100px;

    &:hover {
        background-color: #F7F7F7;
    }
`;