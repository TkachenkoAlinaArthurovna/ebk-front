import {
  WrapperSupport,
  WrapperConditions,
  WrapperIcon,
  ShadowBox,
} from '@/app/ui/SupportPage/SupportStyles';
import PageTitle from '@/app/ui/PageTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SupportPage = () => {
  return (
    <WrapperSupport>
      <Box sx={{ marginBottom: '32px' }}>
        <PageTitle>Підтримка</PageTitle>
      </Box>
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" gutterBottom>
          Гарантія
        </Typography>
        <Typography variant="body1">
          На всі електровелосипеди та електрокомплекти діє гарантія. До кожного
          замовлення обов’язково додається гарантійний талон, в якому вказується
          модель велосипеда (у випадку якщо ви придбали електровелосипед), або
          модель двигуна та акумулятора, а також дата замовлення.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" gutterBottom>
          Обмін та повернення
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '32px' }}>
          Обмін та повернення товару регламентується Законом України “Про захист
          прав споживачів”, згідно з яким покупець має право повернути товар
          протягом 14 днів від дати придбання. Ви можете повернути товар, якщо
          дотримано наступних умов:
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
          Правила користування Li-ion акумуляторної батареї (АКБ)
        </Typography>
        <Typography variant="body1">
          1. По можливості не доводити АКБ до повного розрядження, це скорочує
          ресурс використання АКБ.
        </Typography>
        <Typography variant="body1">
          2. Акумулятори чутливі до низьких температур, тому не залишайте АКБ на
          холоді довгий період часу для запобігання виходу її з ладу.
        </Typography>
        <Typography variant="body1">
          3. Для економії заряду АКБ рекомендується набирати швидкість, спочатку
          використовуючи педалі, а вже потім допомагати двигуном, тому що в
          момент розгону батарея споживає максимальну кількість енергії.
        </Typography>
        <Typography variant="body1">
          4. Якщо АКБ не буде використовуватися довгий період часу, її потрібно
          зарядити як мінімум на 50% від ємності та зберігати при температурі
          вище 0°C.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" gutterBottom>
          Технічне обслуговування велосипеду
        </Typography>
        <Typography variant="body1">
          1. Рекомендовано раз на місяць проходити обслуговування в технічному
          сервісі. Радимо перевіряти стан ланцюга, передньої та задньої втулок,
          гальмівних колодок та рульової колонки. Якщо є зайві скрипи, хитання
          або ще якісь підозрілі звуки, потрібно обов’язково звернутися до
          сервісного центру.
        </Typography>
        <Typography variant="body1">
          2. Рекомендовано раз на рік робити повне ТО велосипеда, це допоможе
          продовжити час використання товару якомога більше.
        </Typography>
        <Typography variant="body1">
          3. Рекомендовано слідкувати за зовнішнім станом велосипеда: проводити
          миття велосипеда, окрім АКБ та бокс контролеру, підкачувати колеса,
          запобігати їх проколу та регулярно перевіряти гальма.
        </Typography>
      </Box>
    </WrapperSupport>
  );
};

export default SupportPage;
