import { Box, Grid } from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import PageText from '@/app/ui/PageText';
import ShadowBox from '@/app/ui/ShadowBox';

export default function About() {

  return (
    <Box sx={{ height: '100%', maxWidth: '888px' }}>
      <Box sx={{ mb: 2 }}><PageTitle>Про нас</PageTitle></Box>
      <PageText>Electronic Bike Kit – це магазин який спеціалізується на електро-велосипедах та комплектуючих до них,
        наша команда підібрала максимально сумісні та та якісні комплектуючі з якими не буде жодних
        проблем.</PageText>
      <Box sx={{ position: 'relative', height: '500px', my: 2 }}>
        <Image src={'/images/about-us-img.png'} alt={'about-us-img'} fill={true}
               style={{ borderRadius: '35px' }} />
      </Box>
      <PageText>Наші переваги</PageText>
      <Grid container spacing={4} justifyContent="space-between">
        <ShadowBox>
          <Box sx={{ maxWidth: '360px', borderRadius: '28px' }}>
            <GroupsIcon sx={{ fontSize: '50px' }} />
            <PageText color={'#49BEB7'}>Сервіс</PageText>
            <PageText>Наша команда точно знає чим займається, ми відповімо на всі ваші запитання та допоможемо з
              підбором
              саме того що вам потрібно</PageText>
          </Box>
        </ShadowBox>
        <ShadowBox>
          <Box sx={{ maxWidth: '360px', borderRadius: '28px' }}>
            <GroupsIcon sx={{ fontSize: '50px' }} />
            <PageText color={'#49BEB7'}>Післяпродажний сервіс</PageText>
            <PageText>Наша команда точно знає чим займається, ми відповімо на всі ваші запитання та допоможемо з
              підбором
              саме того що вам потрібно</PageText>
          </Box>
        </ShadowBox>
        <ShadowBox>
          <Box sx={{ maxWidth: '360px', borderRadius: '28px' }}>
            <GroupsIcon sx={{ fontSize: '50px' }} />
            <PageText color={'#49BEB7'}>Якість</PageText>
            <PageText>Наша команда точно знає чим займається, ми відповімо на всі ваші запитання та допоможемо з
              підбором
              саме того що вам потрібно</PageText>
          </Box>
        </ShadowBox>
        <ShadowBox>
          <Box sx={{ maxWidth: '360px', borderRadius: '28px' }}>
            <GroupsIcon sx={{ fontSize: '50px' }} />
            <PageText color={'#49BEB7'}>Швидкість</PageText>
            <PageText>Наша команда точно знає чим займається, ми відповімо на всі ваші запитання та допоможемо з
              підбором
              саме того що вам потрібно</PageText>
          </Box>
        </ShadowBox>
      </Grid>


    </Box>
  );
}
