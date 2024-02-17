export const categoryBlockData = [
  {
    name: 'Гірські',
    img: 'mtb-e-bike.jpg',
    url: '/hirski-elektrovelosypedy',
  },
  {
    name: 'Fatbike',
    img: 'fatbike.jpg',
    url: '/fatbike',
  },
  {
    name: 'Міські',
    img: 'city-e-bike.jpg',
    url: '/miski-elektrovelosypedy',
  },
  {
    name: 'Триколісні',
    img: 'e-tricycle.jpg',
    url: '/trykolisni-elektrovelosypedy',
  },
];

export const infoBlockData = [
  {
    title: 'Зручність',
    text: 'Не треба стояти в заторах або товпитися в маршрутці. Заряд акумуляторів можливий в домашніх умовах від звичайної електромережі.',
  },
  {
    title: 'Легкість',
    text: 'Не треба крутити педалі, велосипед все зробить за вас. Навіть фізично непідготовлена людина може подолати круті підйоми і значну відстань за рахунок електромотора.',
  },
  {
    title: 'Універсальність',
    text: 'На електровелосипеді можна перевозити легкий вантаж, їздити на роботу або по іншим справам на відстань від 30 до 70 км залежно від ємності АКБ.',
  },
  {
    title: 'Безшумність',
    text: 'Електродвигун дуже тихий, а найголовніше - не забруднює повітря.',
  },
];

export const reviewsBlockData = [
  {
    id: 1,
    date: '18.10.23',
    firstName: 'Аліна',
    lastName: 'Байкенич',
    text: 'Товар якісний, все сподобалось.Товар якісний, все сподобалось.Товар якісний, все сподобалось.Товар якісний, все сподобалось.Товар якісний, все сподобалось.Товар якісний, все сподобалось.3',
  },
  {
    id: 2,
    date: '18.11.15',
    firstName: 'Олександр',
    lastName: 'Іванов',
    text: 'Дуже швидка доставка, вдячний за сервіс!',
  },
  {
    id: 3,
    date: '18.12.02',
    firstName: 'Наталія',
    lastName: 'Петренко',
    text: 'Чудовий обслуговування, рекомендую!',
  },
  {
    id: 4,
    date: '19.01.08',
    firstName: 'Ігор',
    lastName: 'Сидоренко',
    text: 'Великий вибір товарів, завжди знаходжу потрібне.',
  },
  {
    id: 5,
    date: '19.02.14',
    firstName: 'Марія',
    lastName: 'Коваленко',
    text: 'Зручний сайт, легко зрозуміти навігацію.',
  },
  {
    id: 6,
    date: '19.03.27',
    firstName: 'Віталій',
    lastName: 'Мельник',
    text: "Вражений якістю обслуговування, обов'язково повернусь!",
  },
];

export const catalog = [
  { id: '116094691', name: 'ЗАПЧАСТИНИ ДЛЯ ЕЛЕКТРОВЕЛОСИПЕДІВ' },
  { id: '116118803', parentId: '38', name: 'МІСЬКІ ЕЛЕКТРОВЕЛОСИПЕДИ' },
  { id: '117151657', parentId: '38', name: 'FAT-BIKE' },
  { id: '116763322', parentId: '39', name: 'МОТОР-КОЛЕСА' },
  { id: '116700451', name: 'ЗАПЧАСТИНИ ДЛЯ ВЕЛОСИПЕДІВ' },
  { id: '116319462', name: 'ЕЛЕКТРО-ВЕЛОКОМПЛЕКТИ' },
  {
    id: '116288305',
    parentId: '116094691',
    name: 'ЗАРЯДНІ ПРИСТРОЇ ДЛЯ ЕЛЕКТРОВЕЛОСИПЕДУ',
  },
  {
    id: '116238096',
    parentId: '38',
    name: 'ТРИКОЛІСНІ ЕЛЕКТРОВЕЛОСИПЕДИ',
  },
  { id: '116127700', parentId: '38', name: 'ГІРСЬКІ ЕЛЕКТРОВЕЛОСИПЕДИ' },
  { id: '116094628', parentId: '39', name: 'МОТОРИ' },
  { id: '116096230', name: 'АКУМУЛЯТОРИ' },
  {
    id: '125408537',
    parentId: '116700451',
    name: 'ГРІПСИ, ЗАМКИ, СИДІННЯ',
  },
  {
    id: '125353127',
    parentId: '116700451',
    name: 'ПЕРЕМИКАЧІ, МАНЕТКИ, МОНОБЛОКИ',
  },
  {
    id: '125371961',
    parentId: '116700451',
    name: 'ЛАНЦЮГИ, ШАТУНИ, ПЕДАЛІ',
  },
  { id: '125353124', parentId: '116700451', name: 'КАМЕРИ, ОБОДА, ГУМА' },
  {
    id: '125353126',
    parentId: '116700451',
    name: 'ЗІРКИ, КАСЕТИ, ВТУЛКИ',
  },
  {
    id: '124791554',
    parentId: '116700451',
    name: 'КОЛЕСА ДЛЯ ВЕЛОСИПЕДІВ',
  },
  { id: '38', name: 'ЕЛЕКТРОВЕЛОСИПЕДИ' },
  { id: '39', name: 'МОТОРИ ТА МОТОР-КОЛЕСА' },
  { id: '40', parentId: '116700451', name: 'КАРЕТКИ, РУБАШКИ, ТРОСИКИ' },
  { id: '41', parentId: '116700451', name: 'ПІДНІЖКИ, КРИЛА, ЛІХТАРІ' },
  { id: '42', parentId: '116094691', name: 'КОНТРОЛЕРИ' },
  { id: '43', parentId: '116094691', name: 'РУЧКИ ГАЗУ' },
  { id: '44', parentId: '116094691', name: 'ФАРИ' },
  { id: '45', parentId: '116094691', name: 'РУЧКИ ГАЗУ' },
  { id: '46', parentId: '116094691', name: 'КОМПЛЕКТИ ОБЛАДНАННЯ' },
  { id: '47', parentId: '116094691', name: 'ІНШЕ' },
];

export const navigation = [
  { id: 1, title: 'Кошик', path: 'cart' },
  { id: 2, title: 'Кабінет', path: 'cabinet' },
  { id: 3, title: 'Про нас', path: 'about' },
  { id: 4, title: 'Підтримка', path: 'support' },
  { id: 5, title: 'Доставка і оплата', path: 'payment-delivery' },
  { id: 6, title: 'Контакти', path: 'contacts' },
  { id: 7, title: 'Відгуки', path: 'reviews' },
  { id: 8, title: 'Політика конфеденційності', path: 'privacy-policy' },
  { id: 9, title: 'Особиста інформація', path: 'personal-information' },
  { id: 10, title: 'Мої замовлення', path: 'orders' },
  { id: 11, title: 'Обране', path: 'favorites' },
  { id: 11, title: 'Мої відгуки', path: 'reviews' },
];

export const cartProducts = [
  {
    name: 'Велосипед “Ardis Messina"',
    code: '200604769',
    image: '/images/city-e-bike.jpg',
    price: 12999,
    oldPrice: 15000,
  },
  {
    name: 'Велосипед “Not Ardis Messina"',
    code: '123456789',
    image: '/images/city-e-bike.jpg',
    price: 13500,
    oldPrice: 16000,
  },
  {
    name: 'Велосипед “Definitely Not Ardis Messina"',
    code: '987654321',
    image: '/images/city-e-bike.jpg',
    price: 3500,
    oldPrice: 5000,
  },
];
