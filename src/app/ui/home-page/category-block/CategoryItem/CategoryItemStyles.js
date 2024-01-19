import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)`
height: 100%;
  a {
    text-decoration: none;
    color: #171717;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    > div {
      border: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledImage = styled(Box)`
  height: 145px;
  margin-bottom: 24px;
`;

export const StyledName = styled(Typography)`
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 28px;
`;
