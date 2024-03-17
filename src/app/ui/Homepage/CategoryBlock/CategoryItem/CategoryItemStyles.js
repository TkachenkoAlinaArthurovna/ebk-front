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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const StyledImage = styled(Box)`
  width: 100%;
  margin-bottom: 10%;
`;

export const StyledImageWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  @media (max-width: 1300px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 1200px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 1100px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 650px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 500px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 400px) {
    width: 100px;
    height: 100px;
  }
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
