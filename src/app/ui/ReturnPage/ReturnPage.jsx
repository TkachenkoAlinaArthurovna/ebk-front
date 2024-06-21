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
            1. Обмін: Згідно Закону України "Про захист прав споживачів",
            споживач має право обміняти товар не належної якості протягом 14
            днів з моменту покупки за умови, що збережена товарна відповідність,
            оригінальна упаковка, та всі супутні документи.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            2. Повернення: Згідно Закону України, споживач має право на
            повернення товару не належної якості протягом 14 днів з моменту
            покупки за умови, що збережена товарна відповідність. Товар повинен
            бути повернутий у незміненому стані, в оригінальній упаковці та з
            усіма супровідними документами.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            УВАГА! Якщо при замовленні в представлену модель вносяться корективи
            ( заміна комплектуючих велосипеда ), даний велосипед не підлягає
            поверненню! Ви можете повернути товар, якщо дотримано наступних
            умов:
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
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            3. Розбитий товар: споживач має право на повернення або обмін
            розбитого товару безпосередньо на пункті видачі товару. При цьому
            споживач має право на безоплатний обмін або повернення вартості
            товару.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            4. Пошкоджений товар: У разі отримання пошкодженого товару споживач
            має право на повернення товару безпосередньо на пункті видачі. Товар
            повинен бути повернутий в оригінальній упаковці з усіма супровідними
            документами.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            5. Не прийшов товар: Згідно Закону України, у випадку, якщо товар не
            був доставлений, споживач має право вимагати повернення коштів,
            сплачених за товар, або вимагати відправлення товару повторно.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            6. Передумав брати: Споживач має право скасувати замовлення, після
            чого продавець повинен повернути всі сплачені кошти у визначений
            строк, відповідно до Закону України.
          </Typography>
          <Typography variant="body1">
            7. Не той товар прийшов: У разі отримання неправильного товару,
            споживач має право вимагати обмін або повернення товару належної
            якості протягом 14 днів з моменту отримання, при умові що товарний
            вид, упаковка та всі документи збережено. Продавець зобов'язаний
            здійснити обмін або повернення вартості товару у визначений законом
            строк.
          </Typography>
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
          <Typography variant="body1">Транспортні витрати:</Typography>
          <Typography variant="body1">
            - Якщо товар має дефект або був помилково відправлений: Ми покриємо
            всі транспортні витрати на зворотню доставку та відправку нового
            товару.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '32px' }}>
            - Якщо товар обмінюється з іншої причини (наприклад, не підійшов
            розмір або колір): Транспортні витрати на зворотню доставку та
            відправку нового товару оплачує покупець.
          </Typography>
          <Typography variant="body1">
            Повернення товарів належної та не належної якості
          </Typography>
          <Typography variant="body1">
            Згідно Закону України "Про захист прав споживачів",всі товари
            придбані на цьому сайті можна повернути протягом 14 днів з моменту
            покупки. Товар належної та не належної якості повертається через
            сервіс «Нова Пошта». Повернення товару належної якості: В випадку
            повернення товару належної якості з причин: не підійшов, не
            сподобався, передумав і тд. покупець бере на себе транспортні
            витрати (доставка товару назад), повернути товар можна протягом 14
            днів. Повернення товару не належної якості: В випадку повернення
            товару з причин: Товар зламаний, у замовленні був інший товар, товар
            не відповідає заявленим характеристикам, товар пошкоджено, зовнішній
            вигляд товару пошкоджено. У такому випадку транспортні витрати бере
            на себе продавець (доставка назад), повернути товар можна протягом
            14 днів. Повернення коштів за товар. В будь якому випадку кошти
            повертаються на рахунок покупця після отримання та огляду товару, в
            разі якщо товар належної якості був зламаний, пошкоджений, замінений
            на будь який інший товар, оглядач робить відео або фото фіксацію, і
            в такому разі повернення коштів не є можливим. В випадку повернення
            товару згідно із замовленням, без пошкоджень, кошти повернуться до
            покупця протягом 2-ох днів.
          </Typography>
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
