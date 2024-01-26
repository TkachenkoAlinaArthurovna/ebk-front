'use client';

import React, { useEffect, useState } from 'react';
import Content from '@/app/ui/Content';
import {
  FooterItemBox,
  StyledContainer,
  StyledList,
  StyledListItem,
  WrapperItemBox,
} from '@/app/ui/Footer/FooterStyles';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import logo from '../../../../public/images/logo-inverted.png';
import { useTheme } from '@mui/material/styles';
import { useResize } from '@/app/lib/helpers';

const Footer = () => {
  const theme = useTheme();
  const mdBreakpoint = theme.breakpoints.values.md;
  const [windowWidth] = useResize();

  return (
    <>
      <StyledContainer as="footer">
        <Content>
          <WrapperItemBox>
            {windowWidth > mdBreakpoint && (
              <FooterItemBox area_name="logo">
                <Link href="/">
                  <Image src={logo} component="button" alt="logo" />
                </Link>
              </FooterItemBox>
            )}
            <FooterItemBox area_name="company">
              <Typography variant="h6" fontWeight="400">
                Компанія
              </Typography>
              <StyledList>
                <StyledListItem>
                  <Link href="/about">Про нас</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="/contacts">Контакти</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="/reviews">Відгуки</Link>
                </StyledListItem>
              </StyledList>
            </FooterItemBox>

            <FooterItemBox area_name="help">
              <Typography variant="h6" fontWeight="400">
                Допомога
              </Typography>
              <StyledList>
                <StyledListItem>
                  <Link href="/payment-delivery">Оплата та доставка</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="/support">Повернення товару</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="/support">Підтримка</Link>
                </StyledListItem>
              </StyledList>
            </FooterItemBox>

            <FooterItemBox area_name="contacts">
              <Typography variant="h6" fontWeight="400">
                Контакти
              </Typography>
              <StyledList>
                <StyledListItem>
                  <Link href="mailto:bikeworld123@gmail.com">
                    bikeworld123@gmail.com
                  </Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="tel:+380 63 32 95 468">380 63 32 95 468</Link>
                </StyledListItem>
              </StyledList>
            </FooterItemBox>

            <FooterItemBox area_name="schedule">
              <Typography variant="h6" fontWeight="400">
                Графік роботи
              </Typography>
              <StyledList>
                <StyledListItem>Пн-Сб 10:00–19:00</StyledListItem>
                <StyledListItem>Нд 10:00–17:00</StyledListItem>
              </StyledList>
            </FooterItemBox>
          </WrapperItemBox>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: '16px',
            }}
          >
            © text 2023, All Rights Reserved
          </Box>

          {windowWidth < mdBreakpoint && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link href="/">
                <Image src={logo} component="button" alt="logo" />
              </Link>
            </Box>
          )}
        </Content>
      </StyledContainer>
    </>
  );
};

export default Footer;
