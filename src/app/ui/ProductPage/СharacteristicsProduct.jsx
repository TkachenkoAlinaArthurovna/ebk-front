import {
  Box,
  List,
  ListItem,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/system';

const StyledImg = styled('img')`
  width: inherit;
  // height: 348px;
  border-radius: 28px;
  // @media (max-width: 1250px) {
  //   width: 384px;
  //   height: 332px;
  //   border-radius: 28px;
  // }
`;

// obj === props
const obj = {
  id: '1810801792',
  available: 'true',
  name: 'Гірський Електровелосипед "Konar" 27.5R 450W MXUS Акб 54V 8A/h',
  categoryId: '116127700',
  vendorCode: '0027',
  vendor: 'Mxus',
  description:
    '<pre data-placeholder="Перевод" dir="ltr" id="tw-target-text">\nЕлектровелосипед &quot;Konar&quot; добре підходить для велопрогулянок у лісі за рахунок великої кількості швидкостей, великих покришок та амортизаційної вилки, має навісне обладнання Shimano та дискові гальма.</pre>\n\n<p dir="ltr">На велосипед діє гарантія 12 місяців після покупки</p>',
  url: 'https://electronicbikekit.prom.ua/ua/p1810801792-girskij-elektrovelosiped-konar.html',
  picture: [
    'https://images.prom.ua/4403112287_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112287_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112263_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112263_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112265_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112265_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112266_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112266_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112267_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112267_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112278_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112278_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112285_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112285_girskij-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112286_gornyj-elektrovelosiped-konar.jpg',
    'https://images.prom.ua/4403112286_girskij-elektrovelosiped-konar.jpg',
  ],
  params: [
    { _: '21', $: { name: 'Вес' } },
    { _: 'Взрослая', $: { name: 'Возрастная группа' } },
    { _: '4', $: { name: 'Время зарядки' } },
    { _: '20', $: { name: 'Высота рулевой стойки' } },
    { _: '2023', $: { name: 'Год выпуска' } },
    { _: '27.5', $: { name: 'Диаметр колеса' } },
    { _: '40', $: { name: 'Дистанция пробега' } },
    { _: 'Цельная', $: { name: 'Конструкция' } },
    { _: '120', $: { name: 'Максимальная нагрузка' } },
    { _: '42', $: { name: 'Максимальная скорость' } },
    { _: 'Алюминий', $: { name: 'Материал рамы' } },
    { _: '450', $: { name: 'Мощность электродвигателя' } },
    {
      _: 'Амортизатор|Ручной тормоз|Подножка',
      $: { name: 'Особенности' },
    },
    { _: '25', $: { name: 'Рекомендуемая предельная скорость' } },
    { _: 'Новое', $: { name: 'Состояние' } },
    { _: 'Черный', $: { name: 'Цвет' } },
  ],
  price: '717',
  currencyId: 'UAH',
};
const discount = 0.2;

const СharacteristicsProduct = () => {
  return (
    <Box sx={{marginBottom: '80px'}}>
      <Box>
        <Grid container>
          <Grid item lg={7} md={7} sm={12} xs={12} sx={{ paddingRight: '24px' }}>
            <PageTitle>Характеристики</PageTitle>
            {obj.params.map((item) => (
              <List key={item.$.name} disablePadding>
                <ListItem
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Typography >{item.$.name}</Typography>
                  <Typography sx={{ color: '#6A6A6A', whiteSpace:'discard-before' }}>{item._}</Typography>
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box sx={{ marginBottom: '16px' }}>
              <Typography
                sx={{ fontWeight: 400, fontSize: '28px', marginBottom: '8px' }}
              >
                {obj.name}
              </Typography>
              <Typography sx={{ color: '#6A6A6A' }}>
                Код: {obj.vendorCode}
              </Typography>
            </Box>
            <Box sx={{ marginBottom: '24px' }}>
              <StyledImg src={obj.picture[0]} />
            </Box>
            <Box>
              <Typography
                component={'s'}
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#6A6A6A',
                }}
              >
                {obj.price}₴
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '18px',
                }}
              >
                <Typography
                  sx={{
                    marginRight: '20px',
                    fontSize: '28px',
                    fontWeight: 500,
                    color: '#DC362E',
                  }}
                >
                  {obj.price * discount}₴
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#FCEBEA',
                    padding: '6px',
                    borderRadius: '12px',
                    color: '#DC362E',
                  }}
                >
                  -{discount * 100}%
                </Box>
              </Box>

              <Box>
                <Stack direction="row" spacing={2}>
                  <Button
                    sx={{ width: '100%', padding: '8px' }}
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Купити
                  </Button>
                  <IconButton sx={{ padding: '10px' }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default СharacteristicsProduct;
