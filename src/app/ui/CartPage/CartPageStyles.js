import { Typography, Box, List, Accordion, styled } from '@mui/material';

export const StyledCartLayout = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 120px;
`;

export const StyledTotalText = styled(Typography)`
    font-size: 20px;
`;

export const StyledTotalBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledTotalPrice = styled(Typography)`
    font-size: 28px;
    font-weight: 500;
`;

export const StyledCheckoutButton = styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #49BEB7;
    padding: 16px 24px;
    border-radius: 100px;
    font-weight: 500;

    &:hover {
        background-color: #3EA39E;
    }
`;

export const StyledList = styled(List)`
    padding: 0;
    margin: 0;
    list-style: disc !important;
    color: #6A6A6A;
`;

export const StyledListItem = styled(Box)`
    display: flex;
    padding: 0;
`;

export const StyledAccordion = styled(Accordion)`
    padding: 0;
    box-shadow: none !important;
    border: none !important;
    
    &::before {
        display: none;
    }
`;