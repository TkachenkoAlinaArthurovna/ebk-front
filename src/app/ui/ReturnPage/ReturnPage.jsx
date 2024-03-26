import Link from 'next/link';

import {
  WrapperSupport,
  WrapperConditions,
  WrapperIcon,
  ShadowBox,
} from '@/app/ui/ReturnPage/ReturnStyles';
import PageTitle from '@/app/ui/PageTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ReturnPage = () => {
  return (
    <>
      <WrapperSupport>
        <Box sx={{ marginBottom: '32px' }}>
          <Box sx={{ marginBottom: '32px' }}>
            <PageTitle>Обмін та повернення</PageTitle>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            Обмін та повернення товару регламентується Законом України “Про
            захист прав споживачів”, згідно з яким покупець має право повернути
            товар протягом 14 днів від дати придбання. УВАГА! Якщо при
            замовленні в представлену модель вносяться корективи ( заміна
            комплектуючих велосипеда ), даний велосипед не підлягає поверненню!
            Ви можете повернути товар, якщо дотримано наступних умов:
          </Typography>
          <WrapperConditions>
            <ShadowBox>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                }}
              >
                <WrapperIcon>
                  <Box
                    component={'img'}
                    src="/images/support/img1.png"
                    style={{ height: '100%' }}
                  />
                </WrapperIcon>
                <Typography
                  variant="body1"
                  sx={{ '@media (max-width: 1200px)': { fontSize: '12px' } }}
                >
                  Товар не був у експлуатації і не має сліди використання.
                </Typography>
              </Box>
            </ShadowBox>
            <ShadowBox>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <WrapperIcon>
                  <Box
                    component={'img'}
                    src="/images/support/img2.png"
                    style={{ height: '100%' }}
                  />
                </WrapperIcon>
                <Typography
                  variant="body1"
                  sx={{ '@media (max-width: 1200px)': { fontSize: '12px' } }}
                >
                  Збережені гарантійні пломби та відсутні ознаки того, що товар
                  розбирався.
                </Typography>
              </Box>
            </ShadowBox>
            <ShadowBox>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <WrapperIcon>
                  <Box
                    component={'img'}
                    src="/images/support/img3.png"
                    style={{ height: '100%' }}
                  />
                </WrapperIcon>
                <Typography
                  variant="body1"
                  sx={{ '@media (max-width: 1200px)': { fontSize: '12px' } }}
                >
                  У комплекті є гарантійний талон або чек, що підтверджує
                  придбання товару.
                </Typography>
              </Box>
            </ShadowBox>
          </WrapperConditions>
        </Box>
        <Box sx={{ marginBottom: '32px' }}>
          <Typography variant="h6" gutterBottom>
            Повернення замовлення через Нову Пошту
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            Щоб повернути товар, доставлений службою “Нова Пошта”, можна
            скористатись послугою{' '}
            <Link
              href={
                'https://novaposhta.ua/lp/?utm_source=site&utm_medium=referral&utm_campaign=npu_lp'
              }
              target="_blank"
            >
              <Box component={'span'} sx={{ color: '#49BEB7' }}>
                "Легке повернення".
              </Box>
            </Link>
          </Typography>
          <Box sx={{ marginBottom: '32px' }}>
            <Typography variant="h6" gutterBottom>
              Адреси для повернення:
            </Typography>
            <Typography variant="body1">
              Київ відділення №247 , Адреса: просп. С. Бандери, 15-Г
            </Typography>
            <Typography variant="body1">
              Харків відділення №3 , Адреса: вул. Тюрінська (ран. Якіра), 124
            </Typography>
            <Typography variant="body1">ФОП Волков Юрій Юрійович</Typography>
            <Typography variant="body1">ЄДРПОУ 3026018634</Typography>
            <Typography variant="body1">
              Контактна особа: Волков Юрій Юрійович тел. (096)-547-16-06
            </Typography>
            <Typography variant="body1">
              Сторона, що сплачує послуги: заявник
            </Typography>
            <Typography variant="body1">
              Оцінка вартості товару дорівнює вартості товару, який повертається
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '32px' }}>
            <Typography variant="h6" gutterBottom>
              Щоб повернути товар, придбаний на сайті Eco-bike:
            </Typography>
            <Typography variant="body1">
              1. Заповнити та підписати «Заяву на повернення товару» , що
              міститься в замовленні.
            </Typography>
            <Typography variant="body1">
              2. Повернути товар в оригінальній упаковці, зі збереженням бірок,
              ярликів, етикеток.
            </Typography>
            <Typography variant="body1">
              3. Отримати кошти за повернене інтернет-замовлення можливо:
            </Typography>
            <Typography variant="body1">
              - на банківську карту, з якої було здійснено оплату замовлення,
              впродовж 1-3 банківських днів.
            </Typography>
          </Box>
          <Typography variant="body1">
            Звертаємо Вашу увагу, що повернення інтернет-замовлення можливе не
            раніше ніж через 24 години з моменту оплати у будні дні та через 72
            години – у вихідні!
          </Typography>
        </Box>
      </WrapperSupport>
    </>
  );
};

export default ReturnPage;
