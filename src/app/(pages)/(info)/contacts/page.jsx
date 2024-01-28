'use client';

import PageTitle from '@/app/ui/PageTitle';
import { Calendar, Home, Mail, PhoneIcon } from 'lucide-react';
import PageText from '@/app/ui/PageText';
import { Box, Grid, styled, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Contacts() {
  const StyledContact = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;
  `;

  const StyledGridContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      align-items: start;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
      flex-direction: row;
      gap: 0;
    }
  `;

  const StyledGridItem = styled(Grid)`
    max-width: 90%;

    ${({ theme }) => theme.breakpoints.up('sm')} {
      max-width: 100%;
    }
  `;

  return (
    <>
      <StyledGridContainer container spacing={2}>
        <StyledGridItem item md={12} lg={4}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Контакти</PageTitle>
          </Box>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '24px',
              gap: '24px',
            }}
          >
            <Grid item>
              <StyledContact>
                <Mail />
                <PageText>veloplngbfh15@gmail.com</PageText>
              </StyledContact>
            </Grid>
            <Grid item>
              <StyledContact>
                <PhoneIcon />
                <PageText>+380 256 145 255 23</PageText>
              </StyledContact>
            </Grid>
            <Grid item>
              <StyledContact>
                <PhoneIcon />
                <PageText>+380 256 145 145 36</PageText>
              </StyledContact>
            </Grid>
            <Grid item>
              <StyledContact>
                <Home />
                <PageText>Київ, Велика Васильківська 41</PageText>
              </StyledContact>
            </Grid>
            <Grid item>
              <StyledContact>
                <Calendar />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <PageText>Пн-Пт: з 9:00 до 18:00</PageText>
                  <PageText>Сб-Нд: вихідний</PageText>
                </Box>
              </StyledContact>
            </Grid>
          </Grid>
        </StyledGridItem>
        <StyledGridItem item md={12} lg={8}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Напишіть нам</PageTitle>
          </Box>

          <Grid>
            <TextField
              sx={{ mb: 3 }}
              label="Ім'я"
              id="contact-name"
              placeholder="Вкажіть ім'я"
              fullWidth
            />
            <TextField
              sx={{ mb: 3 }}
              label="Email"
              id="contact-email"
              placeholder="Вкажіть email"
              fullWidth
            />

            <TextField
              sx={{ mb: 3 }}
              label="Повідомлення"
              id="contact-message"
              multiline
              rows={4}
              placeholder="Ваше повідомлення"
              fullWidth
            />

            <Button variant="contained" fullWidth sx={{ padding: '16px' }}>
              Відправити
            </Button>
          </Grid>
        </StyledGridItem>
      </StyledGridContainer>
    </>
  );
}
