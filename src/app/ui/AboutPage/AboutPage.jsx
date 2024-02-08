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
      <PageText>
        Eco-bike – це магазин, який спеціалізується на електровелосипедах та
        комплектуючих до них. Наша команда підібрала максимально сумісні та
        якісні комплектуючі, з якими не буде жодних проблем.
      </PageText>
      <WrapperImg>
        <Image
          src={'/images/about-us-img.png'}
          alt={'about-us-img'}
          fill={true}
          sizes="70vw"
          priority={true}
          style={{ borderRadius: '28px', objectFit: 'cover' }}
        />
      </WrapperImg>
      <PageTitle>Наші переваги</PageTitle>
      <WrapperGrid>
        <ShadowBox $padding="30px">
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
        <ShadowBox $padding="30px">
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
        <ShadowBox $padding="30px">
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
        <ShadowBox $padding="30px">
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
