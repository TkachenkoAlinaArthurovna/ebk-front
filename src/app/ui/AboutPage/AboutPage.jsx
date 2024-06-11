import { Box } from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SpeedIcon from '@mui/icons-material/Speed';
import PageText from '@/app/ui/PageText';
import ShadowBox from '@/app/ui/ShadowBox';
import { WrapperImg, WrapperGrid } from '@/app/ui/AboutPage/AboutStyles';

const AboutPage = () => {
  return (
    <Box
      sx={{
        width: '70%',
        '@media (max-width: 700px)': {
          width: '100%',
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <PageTitle>Про нас</PageTitle>
      </Box>
      <Box sx={{ mb: 3 }}>
        <PageText>
          Інтернет магазин Eco-Bike спеціалізується на електровелосипедах та іх
          комплектуючих вже понад 6 років. В нашому асортименті представлені
          якісні запчастини і хороші велосипеди, які не соромно продавати.
        </PageText>
        <PageText>
          За такий довгий строк наша компанія вирішила пропонувати вам лише
          якісний товар, з яким не буде проблем, а також наші спеціалісти в будь
          якому випадку зможуть вам допомогти. З 2024 Наш магазин представляє
          новий бренд електровелосипедів “ELECTRIC”.
        </PageText>
        <PageText>
          ELECTRIC – це велосипед який був розроблений і скомпонований
          спеціально для електромотора, легка алюмінієва рама, зручна посадка,
          широка гума з крилами до неї, і ще багато чого. Велосипед зроблений з
          урахуванням всіх вад звичайного електровелосипеда, і представлений
          вам.
        </PageText>
      </Box>
      <PageTitle>Наші переваги</PageTitle>
      <WrapperGrid>
        <ShadowBox $padding="30px" $justifyContent="start">
          <Box
            sx={{
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '42px',
                height: '42px',
                borderRadius: '100px',
                backgroundColor: '#49BEB7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <GroupsIcon sx={{ fontSize: '24px' }} style={{ color: '#fff' }} />
            </Box>
            <PageText color={'#49BEB7'}>Сервіс</PageText>
            <PageText>
              Наша команда точно знає чим займається, ми відповімо на всі ваші
              запитання та допоможемо з підбором саме того що вам потрібно.
            </PageText>
          </Box>
        </ShadowBox>
        <ShadowBox $padding="30px" $justifyContent="start">
          <Box
            sx={{
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '42px',
                height: '42px',
                borderRadius: '100px',
                backgroundColor: '#49BEB7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ContactSupportIcon
                sx={{ fontSize: '24px' }}
                style={{ color: 'fff' }}
              />
            </Box>

            <PageText color={'#49BEB7'}>Післяпродажний сервіс</PageText>
            <PageText>
              Якщо у вас є проблема щодо монтажу або демонтажу комплектуючих,
              проблеми з підключенням, або будь-яка інша – ви завжди можете
              звернутись до нас.
            </PageText>
          </Box>
        </ShadowBox>
        <ShadowBox $padding="30px" $justifyContent="start">
          <Box
            sx={{
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '42px',
                height: '42px',
                borderRadius: '100px',
                backgroundColor: '#49BEB7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <PedalBikeIcon
                sx={{ fontSize: '24px' }}
                style={{ color: 'fff' }}
              />
            </Box>

            <PageText color={'#49BEB7'}>Якість</PageText>
            <PageText>
              Всі позиції нові та перевіряються перед відправкою, також на увесь
              товар дається гарантія 1 рік.
            </PageText>
          </Box>
        </ShadowBox>
        <ShadowBox $padding="30px" $justifyContent="start">
          <Box
            sx={{
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: '42px',
                height: '42px',
                borderRadius: '100px',
                backgroundColor: '#49BEB7',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SpeedIcon sx={{ fontSize: '24px' }} style={{ color: 'fff' }} />
            </Box>

            <PageText color={'#49BEB7'}>Швидкість</PageText>
            <PageText>
              Ми відправляємо всі посилки вже на наступний день.
            </PageText>
          </Box>
        </ShadowBox>
      </WrapperGrid>
    </Box>
  );
};

export default AboutPage;
