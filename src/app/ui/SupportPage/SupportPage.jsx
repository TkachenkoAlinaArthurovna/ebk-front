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
          На всі електро-велосипеди та електро-комплекти діє гарантія, до
          кожного замовлення обов’язково додається гарантійний талон, в якому
          вказується модель велосипеду (у випадку якщо ви придбали
          електро-велосипед), або модель двигуна та акумулятора а також дата
          замовлення.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" gutterBottom>
          Обмін та повернення
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '32px' }}>
          Обмін та повернення товару регламентується Законом України “Про захист
          прав споживачів”, згідно з яким, покупець має право повернути товар
          продавцю протягом 14 днів з дня покупки. Ви можете повернути товар
          якщо дотримано наступних умов:
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
                Товар має абсолютно новий вигляд.
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
          Правила користування Li-ion акумуляторами
        </Typography>
        <Typography variant="body1">
          Першою рекомендацією є по можливості не доводити АКБ до повного
          розряду, це дуже скорочує ресурс АКБ. Ці акумулятори дуже чутливі до
          низьких температур, тому його не можна залишати на холоді або він
          зіпсується дуже швидко. Також для економії заряду рекомендується
          набирати швидкість спочатку на педалях, а вже потім допомагати
          мотором, тому що в момент розгону АКБ споживає максимальну кількість
          енергії. Якщо АКБ з якихось причини буде дуже довго не
          використовуватися, треба його зарядити як мінімум на 50% та зберігати
          при плюсової температури.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" gutterBottom>
          Технічне обслуговування велосипеду
        </Typography>
        <Typography variant="body1">
          Рекомендовано приблизно раз у місяць проходити тех. обслуговування у
          велосипедному сервісі. Перевірка стану ланцюга, передньої та задньої
          втулок, гальмівних колодок та рульової колонки, якщо в якомусь місці є
          скрип, хитання або ще якісь підозрілі звуки, треба обов’язково
          звернутися у сервісний центр. Раз у рік рекомендується робити повне ТО
          велосипеда, це допоможе йому пропрацювати якомога більше. Також
          обов’язково треба слідкувати за зовнішнім станом велосипеду, мити весь
          велосипед окрім АКБ та бокс контролеру, підкачувати колеса щоб
          запобігти їх проколу та регулярно перевіряти гальма.
        </Typography>
      </Box>
    </WrapperSupport>
  );
};

export default SupportPage;
