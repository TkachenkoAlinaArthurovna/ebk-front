'use client';

import { styled, Stack, Box, Typography } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  height: 100%;
  box-sizing: border-box;
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

export const StyledContainer = styled(Stack)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledWrapper = styled(Box)`
  text-align: center;
`;

export const StyledImage = styled(Box)`
  width: 100%;
  margin-bottom: 10%;
`;

export const StyledImageWrapper = styled(Box)`
  width: 100%;
  height: 70%;
`;

export const StyledName = styled(Typography)`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 930px) {
    font-size: 18px;
  }

  @media (max-width: 830px) {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    font-size: 20px;
  }

  @media (max-width: 414px) {
    font-size: 16px;
  }
`;
