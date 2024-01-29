import { Box } from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SpeedIcon from '@mui/icons-material/Speed';
import PageText from '@/app/ui/PageText';
import ShadowBox from '@/app/ui/ShadowBox';
import {
  WrapperImg,
  WrapperGrid,
} from '@/app/(pages)/(info)/about/AboutStyles';

export default function About() {
  return (
    <Box sx={{ maxWidth: '888px' }}>
      <Box sx={{ mb: 3 }}>
        <PageTitle>Про нас</PageTitle>
      </Box>
      <PageText>
        Electronic Bike Kit – це магазин який спеціалізується на
        електро-велосипедах та комплектуючих до них, наша команда підібрала
        максимально сумісні та та якісні комплектуючі з якими не буде жодних
        проблем.
      </PageText>
      <WrapperImg>
        <Image
          src={'/images/about-us-img.png'}
          alt={'about-us-img'}
          fill={true}
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
              запитання та допоможемо з підбором саме того що вам потрібно
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
              Наша команда точно знає чим займається, ми відповімо на всі ваші
              запитання та допоможемо з підбором саме того що вам потрібно
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
              Наша команда точно знає чим займається, ми відповімо на всі ваші
              запитання та допоможемо з підбором саме того що вам потрібно
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
              Наша команда точно знає чим займається, ми відповімо на всі ваші
              запитання та допоможемо з підбором саме того що вам потрібно
            </PageText>
          </Box>
        </ShadowBox>
      </WrapperGrid>
    </Box>
  );
}
