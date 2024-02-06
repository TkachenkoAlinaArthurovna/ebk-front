import PageTitle from '@/app/ui/PageTitle';
import { Calendar, Home, Mail, PhoneIcon } from 'lucide-react';
import PageText from '@/app/ui/PageText';
import { Box } from '@mui/material';
import {
  StyledContact,
  StyledGridContainer,
  StyledGridItem,
} from '@/app/ui/ContactsPage/ContactsStyles';
import ContactsForm from '@/app/ui/ContactsPage/ContactsForm';

const ContactsPage = () => {
  return (
    <>
      <StyledGridContainer container spacing={2}>
        <StyledGridItem item md={12} lg={4}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Контакти</PageTitle>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '24px',
              gap: '24px',
            }}
          >
            <Box>
              <StyledContact>
                <Mail />
                <PageText>veloplngbfh15@gmail.com</PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <PhoneIcon />
                <PageText>+380 256 145 255 23</PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <PhoneIcon />
                <PageText>+380 256 145 145 36</PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <Home />
                <PageText>Київ, Велика Васильківська 41</PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <Calendar />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <PageText>Пн-Пт: з 9:00 до 18:00</PageText>
                  <PageText>Сб-Нд: вихідний</PageText>
                </Box>
              </StyledContact>
            </Box>
          </Box>
        </StyledGridItem>
        <StyledGridItem item md={12} lg={8}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Напишіть нам</PageTitle>
          </Box>
          <ContactsForm></ContactsForm>
        </StyledGridItem>
      </StyledGridContainer>
    </>
  );
};

export default ContactsPage;
