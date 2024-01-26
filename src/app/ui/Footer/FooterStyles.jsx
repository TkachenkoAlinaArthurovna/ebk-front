'use client';

import {Box, List, ListItem, styled} from '@mui/material';

export const StyledContainer = styled(Box)`
    background-color: #4D4D4D;
    padding: 48px;
    color: #ffffff;
`;

export const FooterItemBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledListItem = styled(ListItem)`
    padding: 0;
`;

export const StyledList = styled(List)`
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const WrapperItemBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));

