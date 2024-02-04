'use client'
import { Box, Typography } from '@mui/material';

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

const DescriptionPage = () => {
  return (
    <Box mb='28px'>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '28px',
        }}
      >
        Опис
      </Typography>
      <Typography sx={{
          fontWeight: 500,
          fontSize: '16px',
        }}>{obj.name}</Typography>
      <Typography>{obj.description}</Typography>
    </Box>
  );
};
export default DescriptionPage;
