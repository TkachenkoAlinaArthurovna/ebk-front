'use client';

import React, {useState, useEffect} from 'react';
import Content from '@/app/ui/Content';
import {
  FooterItemBox,
  LogoContainer,
  LogoContainerBottom,
  StyledContainer,
  StyledList,
  StyledListItem,
  WrapperItemBox,
  StyledLogoBox,
} from '@/app/ui/Footer/FooterStyles';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Logo from '@/app/ui/Logo/Logo';
import DevModal from '@/app/ui/Footer/DevModal';
import { useDispatch, useSelector } from 'react-redux';
import { openDevModal } from '@/redux/slices/DevModalSlice';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const dispatch = useDispatch();
  const handleOpenDevModal = () => dispatch(openDevModal());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <StyledContainer as="footer">
        <Content>
          <WrapperItemBox>
            <LogoContainer area_name="logo">
              <Link href="/">
                <StyledLogoBox>
                  <Logo color={'#ffff'} width={'100%'} height={'100%'} />
                </StyledLogoBox>
              </Link>
            </LogoContainer>
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
                  <Link href="mailto:ecobikemagazine@gmail.com">
                    ecobikemagazine@gmail.com
                  </Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="tel:+380505621868">+38 050 562 18 68</Link>
                </StyledListItem>
                <StyledListItem>
                  <Link href="tel:+380965471606">+38 096 547 16 06</Link>
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
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mb: '16px',
              '@media(max-width: 400px)': {
                fontSize: '14px',
              },
            }}
          >
            <Box sx={{ margin: '20px', textAlign: 'center' }}>
              <Link href="/privacy-policy">Політика конфіденційності</Link>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              eco-bike copyright <span onClick={handleOpenDevModal}>©</span> {currentYear} all rights reserved
            </Box>
          </Box>
          <LogoContainerBottom>
            <Link href="/">
              <Logo color={'#ffff'} width={'120px'} height={'64px'} />
            </Link>
          </LogoContainerBottom>
        </Content>
      </StyledContainer>
      <DevModal/>
    </>
  );
};

export default Footer;
