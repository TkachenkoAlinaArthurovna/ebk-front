import { Box, Button, ButtonGroup, Typography, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)`
    height: 100%;
    padding: 16px;
`;

export const StyledButton = styled(Button)`
    && {
    outline: none;
    background-color: transparent!important;
    font-size: 20px;
    color: #212121;
    }
`;

export const StyledButtonGroup = styled(ButtonGroup)`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const StyledPriceTypography = styled(Typography)`
    text-decoration-line: line-through;
    color: #6A6A6A;
`;