import { WrapperPaymentDelivery } from '@/app/ui/PaymentDeliveryPage/PaymentDeliveryStyles';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';

const PaymentDeliveryPage = () => {
  return (
    <Content>
      <BreadCrumbs />
      <WrapperPaymentDelivery>
        <Box sx={{ marginBottom: '32px' }}>
          <PageTitle>Доставка і оплата</PageTitle>
        </Box>
        <Box sx={{ marginBottom: '32px', color: '#49BEB7' }}>
          <PageTitle>Оплата</PageTitle>
        </Box>
        <Box>
          <Typography variant="h6">
            Visa/Mastercard • Google Pay • Apple Pay
          </Typography>
          <Typography variant="body1">
            БЕЗ КОМІСІЙ ТА ПЕРЕПЛАТ. ШВИДКА ТА ЗРУЧНА ОПЛАТА ОНЛАЙН.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Оплата на сайті, через платіжну систему WayForPay, після
            оформлення замовлення.
          </Typography>
          <Typography variant="h6">Накладений платіж Нова Пошта</Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Оплата замовлення, при отриманні, у відділеннях Нова Пошта.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - ВАЖЛИВО: при даному способі оплати, компанією Нова Пошта,
            утримується додаткова комісія 20 грн + 2% від суми замовлення
            (комісія оплачується покупцем). Якщо Ви бажаєте оплатити замовлення
            без додаткових переплат та комісій, ми рекомендуємо оплату онлайн
            Visa/Mastercard • Google Pay • Apple Pay.
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '32px', color: '#49BEB7' }}>
          <PageTitle>Доставка</PageTitle>
        </Box>
        <Box>
          <Typography variant="h6">Нова Пошта (відділення)</Typography>
          <Typography variant="body1">
            Доставка у відділення Нова Пошта по Україні.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            Увага! Ретельно перевіряйте замовлення при отриманні! У разі
            виявлення некомплекту або пошкоджень, ви маєте право відмовитися від
            отримання посилки, склавши акт (претензію) у відділенні Нової Пошти.
            Будь ласка, завжди перевіряйте цілісність упаковки, відсутність
            механічних пошкоджень і комплектацію, наявність всіх одиниць товару
            при отриманні замовлення.
          </Typography>
          <Typography variant="h6">
            Вартість доставки замовлення у відділення Нова Пошта:
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення всіх електровелосипедів або електро наборів -
            безкоштовна доставка.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення окремих запчастин на сумму до 3000 грн - доставка за
            тарифами Нової пошти.
          </Typography>
          <Typography
            variant="body1"
            sx={{ margin: '16px 0', fontSize: '14px', fontWeight: '500' }}
          >
            Велосипеди відправляються у Flat-Боксах і знаходяться в частково
            розібраному вигляді (як правило, встановлення потребуватимуть:,
            кермо, педалі, корзинка) Для збирання вам знадобляться: набір
            шестигранників і ключ (на 15) для педалей (інструмент не йде в
            комплекті з велосипедом).
          </Typography>
          <Typography variant="h6">Нова Пошта (поштомат)</Typography>
          <Typography variant="body1">
            Отримай своє замовлення 24/7 у найближчому поштоматі Нова Пошта, по
            Україні та Києву.
          </Typography>
          <Typography variant="h6">
            Вартість доставки замовлення у поштомати Нова Пошта:
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення від 3000 грн - БЕЗКОШТОВНО.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення до 3000 грн - за тарифами Нова Пошта.
          </Typography>
          <Typography variant="h6">
            Обмеження для посилок, які можуть бути відправлені у поштомати:
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Максимальний розмір посилки 40х60х30 см.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Максимальна фактична вага 20 кг.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Максимальна вартість замовлення 15000 грн.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - У поштомати відправляються тільки замовлення з 100% оплатою.
          </Typography>
          <Typography
            variant="body1"
            sx={{ margin: '16px 0', fontSize: '14px', fontWeight: '500' }}
          >
            Посилка зберігається у поштоматі 3 дні. ВАЖЛИВО: якщо посилка не
            забирається клієнтом з поштомату протягом 3 днів - вона автоматично
            переміщується на найближче відділення Нова Пошта.
          </Typography>
          {/* <Typography variant="h6">Укрпошта (відділення)</Typography>
          <Typography variant="body1">
            Доставка у відділення Укрпошти по Україні.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            Увага! Ретельно перевіряйте замовлення при отриманні! У разі
            виявлення некомплекту або пошкоджень, ви маєте право відмовитися від
            отримання посилки, склавши акт (претензію) у відділенні Укрпошти.
            Будь ласка, завжди перевіряйте цілісність упаковки, відсутність
            механічних пошкоджень і комплектацію, наявність всіх одиниць товару
            при отриманні замовлення.
          </Typography>
          <Typography variant="h6">
            Вартість доставки замовлення у відділення Укрпошта:
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення від 3000 грн - безкоштовно.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            - Замовлення до 3000 грн - за тарифами Укрпошта.
          </Typography>
          <Typography variant="body1" sx={{ margin: '16px 0' }}>
            Велосипеди НЕ ВІДПРАВЛЯЮТЬСЯ Укрпоштою. Можлива лише доставка інших
            запчастин або електронаборів.
          </Typography>
          <Typography
            variant="body1"
            sx={{ margin: '16px 0', fontSize: '14px', fontWeight: '500' }}
          >
            ВАЖЛИВО: якщо посилка не забирається клієнтом з відділення поштової
            служби протягом 5 днів - вантаж автоматично повертається на наш
            склад.
          </Typography> */}
        </Box>
      </WrapperPaymentDelivery>
    </Content>
  );
};

export default PaymentDeliveryPage;
