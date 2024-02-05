'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledTextField,
  StyledAutocomplete,
} from '@/app/ui/Header/HeaderStyles';

const options = [
  {
    price: '683',
    currencyId: 'UAH',
    name: 'Електро-Велосипед "Paola" 450W 8 A/h',
    id: '116118803',
    vendor: 'Ardis',
    vendorCode: '0036',
    description: {
      '@cdata':
        '<h2>Електро-велосипед &quot;Paola&quot; 450 Вт 8 A/h</h2>\n\n<ul>\n\t<li>Діаметр коліс: 28 дюймів</li>\n\t<li>Багажник витримує<strong> до 25 кг</strong></li>\n\t<li>Зручне сидіння з пружинами</li>\n\t<li>Яскрава фара </li>\n\t<li>Кошик</li>\n\t<li>Металеві крила</li>\n\t<li>Якісна <strong>гума CST</strong></li>\n</ul>\n\n<p>Поєднуючи в собі сучасний дизайн і передові технології, цей велосипед надає вам неперевершений досвід велоподорожей. З потужним двигуном потужністю <strong>450 Вт</strong> і ємністю батареї <strong>8 A/h</strong>, &quot;Paola&quot; забезпечує <strong>запас ходу до 40 км</strong> з одним зарядом, що дозволяє вам насолоджуватися поїздками без турботи про зарядку.</p>\n\n<p>Ергономічне сидіння та зручна посадка гарантують вам комфорт навіть на тривалих відстанях.<strong> Алюмінієвий багажник</strong> витримує навантаження <strong>до 25 кг</strong>, що робить цей велосипед ідеальним вибором для щоденних поїздок і подорожей з покупками. Крім цього, велосипед обладнаний зручним кошиком, що дозволяє вам легко перевозити невеликі предмети і продукти.</p>\n\n<p>З &quot;Paola&quot; ви також можете насолоджуватися високою швидкістю - <strong>максимальна</strong> <strong>швидкість 40 км/год</strong> забезпечує вам швидке переміщення по місту, економлячи ваш час і сили.</p>\n\n<p>Ми гарантуємо вам надійність та безпеку: конструкція велосипеда забезпечує міцність і легкість, а <strong>12-місячна гарантія на електрообладнання</strong> підкреслює наше довір&#39;я до якості продукції.</p>',
    },
    url: 'https://electronicbikekit.prom.ua/ua/p1814342916-elektro-velosiped-paola.html',
    picture: [
      'https://images.prom.ua/4415392910_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393171_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393425_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393540_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393678_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393746_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415395610_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415393991_elektro-velosiped-paola-450w.jpg',
      'https://images.prom.ua/4415394106_elektro-velosiped-paola-450w.jpg',
    ],
    param: [
      {
        '@value': '21',
        '@attributes': {
          name: 'Вес',
        },
      },
      {
        '@value': '4',
        '@attributes': {
          name: 'Время зарядки',
        },
      },
      {
        '@value': '20',
        '@attributes': {
          name: 'Высота рулевой стойки',
        },
      },
      {
        '@value': '2023',
        '@attributes': {
          name: 'Год выпуска',
        },
      },
      {
        '@value': '28',
        '@attributes': {
          name: 'Диаметр колеса',
        },
      },
      {
        '@value': '40',
        '@attributes': {
          name: 'Дистанция пробега',
        },
      },
      {
        '@value': 'Цельная',
        '@attributes': {
          name: 'Конструкция',
        },
      },
      {
        '@value': '130',
        '@attributes': {
          name: 'Максимальная нагрузка',
        },
      },
      {
        '@value': '40',
        '@attributes': {
          name: 'Максимальная скорость',
        },
      },
      {
        '@value': 'Сталь',
        '@attributes': {
          name: 'Материал рамы',
        },
      },
      {
        '@value': '450',
        '@attributes': {
          name: 'Мощность электродвигателя',
        },
      },
      {
        '@value': 'Ручной тормоз|Ножной тормоз',
        '@attributes': {
          name: 'Особенности',
        },
      },
      {
        '@value': '30',
        '@attributes': {
          name: 'Рекомендуемая предельная скорость',
        },
      },
      {
        '@value': 'Новое',
        '@attributes': {
          name: 'Состояние',
        },
      },
      {
        '@value': 'Черный',
        '@attributes': {
          name: 'Цвет',
        },
      },
    ],
    '@attributes': {
      id: '1814342916',
      available: 'true',
    },
  },
  {
    price: '920',
    currencyId: 'UAH',
    name: 'Електро-велосипед "Elite", 26", 500W, 13A/h',
    id: '116118803',
    vendor: 'Cross',
    vendorCode: '0016',
    description: {
      '@cdata':
        '<h2>Електро-велосипед Elite<span style="font-size:10px"></span></h2>\n\n<ul dir="ltr">\n\t<li data-placeholder="Перевод">Оснащений обладнанням Shimano</li>\n\t<li data-placeholder="Перевод">Алюмінієва рама а також всі запчастини на велосипеді теж алюмінієві</li>\n\t<li data-placeholder="Перевод">Встановлено легкі покришки <strong>Kenda</strong></li>\n\t<li data-placeholder="Перевод">Механічні дискові гальма</li>\n\t<li data-placeholder="Перевод">Алюмінієвий багажник витримує 25 кг</li>\n\t<li data-placeholder="Перевод">Амортизаційна вилка пружинно-масляного типу</li>\n</ul>\n\n<p>Електровелосипед &quot;Elite&quot; - це не лише потужний і надійний супутник для ваших поїздок, але і ідеальне рішення для комфортної їзди. Його зручне сидіння дозволяє вам насолоджуватися кожною миттю поїздки, мінімізуючи втому та забезпечуючи оптимальне положення тіла.</p>\n\n<p>З цим велосипедом ви зможете проїхати до<strong> 60 км</strong> на одному заряджанні завдяки його потужному<strong> 500W</strong> двигуну та ємній <strong>13A/h</strong> батареї. Амортизаційна вилка забезпечує плавний рух навіть по нерівних дорогах, а система передач<strong> Shimano на 7</strong> швидкостей і надійні дискові гальма роблять керування велосипедом легким і безпечним.</p>\n\n<p>Крім того, алюмінієвий багажник з навантаженням до <strong>25 кг</strong> дозволяє вам перевозити свої речі без зайвих клопотів. Гарантія на електрообладнання на <strong>12 місяців</strong> дозволить замінити будь-яку поламану частину без зайвих питань. З &quot;Elite&quot; ви не лише досліджуєте світ, але й насолоджуєтеся кожною поїздкою, завдяки його зручному сидінню та надійності.</p>',
    },
    url: 'https://electronicbikekit.prom.ua/ua/p1810488191-elektro-velosiped-elite.html',
    picture: [
      'https://images.prom.ua/4402122690_elektro-velosiped-elite-26.jpg',
      'https://images.prom.ua/4402123724_elektro-velosiped-elite-26.jpg',
      'https://images.prom.ua/4402124044_elektro-velosiped-elite-26.jpg',
      'https://images.prom.ua/4402124239_elektro-velosiped-elite-26.jpg',
      'https://images.prom.ua/4402124466_elektro-velosiped-elite-26.jpg',
      'https://images.prom.ua/4402124885_elektro-velosiped-elite-26.jpg',
    ],
    param: [
      {
        '@value': '23',
        '@attributes': {
          name: 'Вес',
        },
      },
      {
        '@value': 'Взрослая',
        '@attributes': {
          name: 'Возрастная группа',
        },
      },
      {
        '@value': '6',
        '@attributes': {
          name: 'Время зарядки',
        },
      },
      {
        '@value': '2023',
        '@attributes': {
          name: 'Год выпуска',
        },
      },
      {
        '@value': '26',
        '@attributes': {
          name: 'Диаметр колеса',
        },
      },
      {
        '@value': '60',
        '@attributes': {
          name: 'Дистанция пробега',
        },
      },
      {
        '@value': '140',
        '@attributes': {
          name: 'Максимальная нагрузка',
        },
      },
      {
        '@value': '45',
        '@attributes': {
          name: 'Максимальная скорость',
        },
      },
      {
        '@value': 'Алюминий',
        '@attributes': {
          name: 'Материал рамы',
        },
      },
      {
        '@value': '500',
        '@attributes': {
          name: 'Мощность электродвигателя',
        },
      },
      {
        '@value': '35',
        '@attributes': {
          name: 'Рекомендуемая предельная скорость',
        },
      },
      {
        '@value': 'Новое',
        '@attributes': {
          name: 'Состояние',
        },
      },
    ],
    '@attributes': {
      id: '1810488191',
      available: 'true',
    },
  },
  {
    price: '50',
    currencyId: 'UAH',
    name: 'Контролер HUAWEI 23А 36V-48V',
    id: '116094691',
    vendor: 'Huawei',
    vendorCode: '0093',
    description: {
      '@cdata':
        '<h3 data-placeholder="Перевод" dir="ltr"><strong>Основні характеристики:</strong></h3>\n\n<ul dir="ltr">\n\t<li>Працює як з так і без датчиків холла </li>\n\t<li>Вольтаж:36-48V</li>\n\t<li>Потужність 18А</li>\n\t<li>Є всі роз&#39;єми для підключення ручки газу, фари, сигналу, сигналізації, гальмівних ручок з датчиками відключення, Pas-assistant, задніх габаритів</li>\n\t<li>Алюмінієвий корпус повністю захищає від попадання вологи </li>\n</ul>',
    },
    url: 'https://electronicbikekit.prom.ua/ua/p1878591058-kontroler-huawei-23a.html',
    picture: [
      'https://images.prom.ua/4632245738_kontroler-huawei-23a.jpg',
      'https://images.prom.ua/4632245739_kontroler-huawei-23a.jpg',
      'https://images.prom.ua/4632245741_kontroler-huawei-23a.jpg',
      'https://images.prom.ua/4632245740_kontroler-huawei-23a.jpg',
    ],
    param: [
      {
        '@value': 'Новое',
        '@attributes': {
          name: 'Состояние',
        },
      },
      {
        '@value': 'Контроллер',
        '@attributes': {
          name: 'Тип',
        },
      },
    ],
    '@attributes': {
      id: '1878591058',
      available: 'true',
    },
  },
  {
    price: '10',
    currencyId: 'UAH',
    name: 'Фара для електровелосипеда 48В',
    id: '116094691',
    vendorCode: '0088',
    description: {
      '@cdata':
        '<pre data-placeholder="Перевод" dir="ltr" id="tw-target-text">\nФара з кріпленням на переднє крило, потужна, заряду споживає мало</pre>',
    },
    url: 'https://electronicbikekit.prom.ua/ua/p1859419020-fara-dlya-elektrovelosipeda.html',
    picture: [
      'https://images.prom.ua/4565196641_fara-dlya-elektrovelosipeda.jpg',
      'https://images.prom.ua/4565196642_fara-dlya-elektrovelosipeda.jpg',
      'https://images.prom.ua/4565196640_fara-dlya-elektrovelosipeda.jpg',
      'https://images.prom.ua/4565196639_fara-dlya-elektrovelosipeda.jpg',
    ],
    param: [
      {
        '@value': '15',
        '@attributes': {
          name: 'Дальность светового луча',
        },
      },
      {
        '@value': 'Пластик',
        '@attributes': {
          name: 'Материал корпуса',
        },
      },
      {
        '@value': '8',
        '@attributes': {
          name: 'Мощность',
        },
      },
      {
        '@value': 'Влагостойкий',
        '@attributes': {
          name: 'Особенности фонаря',
        },
      },
      {
        '@value': 'Максимальный',
        '@attributes': {
          name: 'Режимы работы фонаря',
        },
      },
      {
        '@value': 'Новое',
        '@attributes': {
          name: 'Состояние',
        },
      },
      {
        '@value': 'Фара',
        '@attributes': {
          name: 'Тип велосипедного фонаря',
        },
      },
      {
        '@value': 'Черный',
        '@attributes': {
          name: 'Цвет',
        },
      },
    ],
    '@attributes': {
      id: '1859419020',
      available: 'true',
    },
  },
  {
    price: '12',
    id: 'UAH',
    name: 'Ручка "флажок" з індикатором заряду та ключем запалювання',
    categoryId: '116094691',
    vendorCode: '0087',
    description: {
      '@cdata':
        '<pre data-placeholder="Перевод" dir="ltr" id="tw-target-text">\nУніверсальна ручка для будь-якого електротранспорту, кріпитися на дюймове кермо</pre>',
    },
    url: 'https://electronicbikekit.prom.ua/ua/p1859411890-ruchka-flazhok-indikatorom.html',
    picture: [
      'https://images.prom.ua/4565181709_ruchka-flazhok-z.jpg',
      'https://images.prom.ua/4565181709_ruchka-flazhok-s.jpg',
      'https://images.prom.ua/4565181708_ruchka-flazhok-z.jpg',
      'https://images.prom.ua/4565181708_ruchka-flazhok-s.jpg',
    ],
    param: [
      {
        '@value': 'Новое',
        '@attributes': {
          name: 'Состояние',
        },
      },
      {
        '@value': 'Ручка акселератора',
        '@attributes': {
          name: 'Тип',
        },
      },
    ],
    '@attributes': {
      id: '1859411890',
      available: 'true',
    },
  },
];

export const SearchComponent = () => {
  const [id, setId] = useState(null);
  const router = useRouter();

  const handleOptionChange = (event, newValue) => {
    const { id } = newValue;
    setId(id);
    router.push(`/category/${id}`);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledAutocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        // по каким параметрам будем искать и принимает options
        getOptionLabel={(option) => option.name}
        value={id}
        onChange={handleOptionChange}
        renderInput={(params) => (
          <StyledTextField {...params} placeholder="Я шукаю..." />
        )}
      />
    </Search>
  );
};
export default SearchComponent;
