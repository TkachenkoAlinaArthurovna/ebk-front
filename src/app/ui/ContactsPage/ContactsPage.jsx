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
import Link from 'next/link';

const ContactsPage = () => {
  return (
    <>
      <StyledGridContainer container spacing={2}>
        <StyledGridItem item md={12} lg={5}>
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
                <Mail width={'24px'} height={'24px'} />
                <PageText>
                  <Link href="mailto:ecobikemagazine@gmail.com">
                    ecobikemagazine@gmail.com
                  </Link>
                </PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <PhoneIcon width={'24px'} height={'24px'} />
                <PageText>
                  <Link href="tel:+380505621868">+38 050 562 18 68</Link>
                </PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <PhoneIcon width={'24px'} height={'24px'} />
                <PageText>
                  <Link href="tel:+380965471606">+38 096 547 16 06</Link>
                </PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <Box>
                  <Home width={'24px'} height={'24px'} />
                </Box>
                <PageText>
                  вулиця Льва Толстого, 39А, Харків, Харківська область, 61000
                </PageText>
              </StyledContact>
            </Box>
            <Box>
              <StyledContact>
                <Calendar width={'24px'} height={'24px'} />
                <Box>
                  <PageText>Пн-Сб: з 10:00 до 19:00</PageText>
                  <PageText>Нд: з 10:00 до 17:00</PageText>
                </Box>
              </StyledContact>
            </Box>
          </Box>
        </StyledGridItem>
        <StyledGridItem item md={12} lg={7}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Напишіть нам</PageTitle>
            <Box
              sx={{
                marginTop: '10px',
                '@media (max-width: 700px)': {
                  textAlign: 'center',
                },
              }}
            >
              <PageText>Ми зв'яжемось з вами найближчим часом!</PageText>
            </Box>
          </Box>
          <ContactsForm></ContactsForm>
        </StyledGridItem>
      </StyledGridContainer>
    </>
  );
};

export default ContactsPage;
