import { Suggestion } from "./App.api";

export const REGIONS = [
  {
    city: "Адлер",
  },
  {
    city: "Алтайский край",
  },
  {
    city: "Алтайский район",
  },
  {
    city: "Амурская область",
  },
  {
    city: "Анапа",
  },
  {
    city: "Архангельск",
  },
  {
    city: "Архангельская область",
  },
  {
    city: "Архипо-Осиповка",
  },
  {
    city: "Астраханская область",
  },
  {
    city: "Астрахань",
  },
  {
    city: "Белгород",
  },
  {
    city: "Белгородская область",
  },
  {
    city: "Брянск",
  },
  {
    city: "Брянская область",
  },
  {
    city: "Великий Новгород",
  },
  {
    city: "Владимир",
  },
  {
    city: "Владимирская область",
  },
  {
    city: "Волгоград",
  },
  {
    city: "Волгоградская область",
  },
  {
    city: "Вологда",
  },
  {
    city: "Вологодская область",
  },
  {
    city: "Вологодский муниципальный округ",
  },
  {
    city: "Воронеж",
  },
  {
    city: "Воронежская область",
  },
  {
    city: "Сочи",
  },
  {
    city: "Евпатория",
  },
  {
    city: "Еврейская автономная область",
  },
  {
    city: "Екатеринбург",
  },
  {
    city: "Забайкальский край",
  },
  {
    city: "Иваново",
  },
  {
    city: "Ивановская область",
  },
  {
    city: "Иркутск",
  },
  {
    city: "Иркутская область",
  },
  {
    city: "Кабардино-Балкарская Республика",
  },
  {
    city: "Калининград",
  },
  {
    city: "Калининградская область",
  },
  {
    city: "Калуга",
  },
  {
    city: "Калужская область",
  },
  {
    city: "Камчатский край",
  },
  {
    city: "Карачаево-Черкесская Республика",
  },
  {
    city: "Карачаевск",
  },
  {
    city: "Кемерово",
  },
  {
    city: "Кемеровская область",
  },
  {
    city: "Кемеровский муниципальный округ",
  },
  {
    city: "Киров",
  },
  {
    city: "Кирово-Чепецк",
  },
  {
    city: "Кировская область",
  },
  {
    city: "Кострома",
  },
  {
    city: "Костромская область",
  },
  {
    city: "Краснодар",
  },
  {
    city: "Краснодарский край",
  },
  {
    city: "Красноярск",
  },
  {
    city: "Красноярский край",
  },
  {
    city: "Крым",
  },
  {
    city: "Курган",
  },
  {
    city: "Курганская область",
  },
  {
    city: "Курск",
  },
  {
    city: "Курская область",
  },
  {
    city: "Ленинградская область",
  },
  {
    city: "Липецк",
  },
  {
    city: "Липецкая область",
  },
  {
    city: "Магадан",
  },
  {
    city: "Магаданская область",
  },
  {
    city: "Москва",
  },
  {
    city: "Московская область",
  },
  {
    city: "Мурманск",
  },
  {
    city: "Мурманская область",
  },
  {
    city: "Нальчик",
  },
  {
    city: "Нахимовский муниципальный округ",
  },
  {
    city: "Ненецкий автономный округ",
  },
  {
    city: "Нижегородская область",
  },
  {
    city: "Нижний Новгород",
  },
  {
    city: "Новгородская область",
  },
  {
    city: "Новороссийск",
  },
  {
    city: "Новосибирск",
  },
  {
    city: "Новосибирская область",
  },
  {
    city: "Омск",
  },
  {
    city: "Омская область",
  },
  {
    city: "Орёл",
  },
  {
    city: "Оренбург",
  },
  {
    city: "Оренбургская область",
  },
  {
    city: "Орловская область",
  },
  {
    city: "Орловский муниципальный округ",
  },
  {
    city: "Пенза",
  },
  {
    city: "Пензенская область",
  },
  {
    city: "Переславль-Залесский",
  },
  {
    city: "Пермский край",
  },
  {
    city: "Пермский муниципальный округ",
  },
  {
    city: "Пермь",
  },
  {
    city: "посёлок городского типа Забайкальск",
  },
  {
    city: "посёлок городского типа Сириус",
  },
  {
    city: "посёлок городского типа Сокол",
  },
  {
    city: "Приморский край",
  },
  {
    city: "Приморско-Ахтарск",
  },
  {
    city: "Псков",
  },
  {
    city: "Псковская область",
  },
  {
    city: "Псковский район",
  },
  {
    city: "п. Хоста",
  },
  {
    city: "Республика Адыгея",
  },
  {
    city: "Республика Алтай",
  },
  {
    city: "Республика Башкортостан",
  },
  {
    city: "Республика Бурятия",
  },
  {
    city: "Республика Дагестан",
  },
  {
    city: "Республика Ингушетия",
  },
  {
    city: "Республика Калмыкия",
  },
  {
    city: "Республика Карелия",
  },
  {
    city: "Республика Коми",
  },
  {
    city: "Республика Крым",
  },
  {
    city: "Республика Марий Эл",
  },
  {
    city: "Республика Мордовия",
  },
  {
    city: "Республика Саха (Якутия)",
  },
  {
    city: "Республика Северная Осетия — Алания",
  },
  {
    city: "Республика Татарстан",
  },
  {
    city: "Республика Тыва",
  },
  {
    city: "Республика Хакасия",
  },
  {
    city: "Ростов-на-Дону",
  },
  {
    city: "Ростовская область",
  },
  {
    city: "Рязанская область",
  },
  {
    city: "Рязань",
  },
  {
    city: "Самара",
  },
  {
    city: "Самарская область",
  },
  {
    city: "Санкт-Петербург",
  },
  {
    city: "Саратов",
  },
  {
    city: "Саратовская область",
  },
  {
    city: "Сахалинская область",
  },
  {
    city: "Свердловская область",
  },
  {
    city: "Севастополь",
  },
  {
    city: "село Алтайское",
  },
  {
    city: "село Воробьёвка",
  },
  {
    city: "село Краснотуранск",
  },
  {
    city: "село Новолуговое",
  },
  {
    city: "Сибирский федеральный округ",
  },
  {
    city: "Смоленск",
  },
  {
    city: "Смоленская область",
  },
  {
    city: "Сочи",
  },
  {
    city: "Ставрополь",
  },
  {
    city: "Ставропольский край",
  },
  {
    city: "Тамбов",
  },
  {
    city: "Тамбовская область",
  },
  {
    city: "Тамбовский муниципальный округ",
  },
  {
    city: "Тамбовский район",
  },
  {
    city: "Тверская область",
  },
  {
    city: "Тверь",
  },
  {
    city: "Теберда",
  },
  {
    city: "Томск",
  },
  {
    city: "Томская область",
  },
  {
    city: "Тула",
  },
  {
    city: "Тульская область",
  },
  {
    city: "Тюменская область",
  },
  {
    city: "Тюмень",
  },
  {
    city: "Удмуртская Республика",
  },
  {
    city: "Ульяновск",
  },
  {
    city: "Ульяновская область",
  },
  {
    city: "Ульяновский район",
  },
  {
    city: "Феодосия",
  },
  {
    city: "Хабаровск",
  },
  {
    city: "Хабаровский край",
  },
  {
    city: "Ханты-Мансийск",
  },
  {
    city: "Ханты-Мансийский автономный округ",
  },
  {
    city: "Челябинск",
  },
  {
    city: "Челябинская область",
  },
  {
    city: "Чеченская Республика",
  },
  {
    city: "Чувашская Республика",
  },
  {
    city: "Чукотский автономный округ",
  },
  {
    city: "Ямало-Ненецкий автономный округ",
  },
  {
    city: "Ярославль",
  },
  {
    city: "Ярославская область",
  },
] as const;

export const MOCK_SUGGESTIONS: Suggestion[] = [
  {
    id: 117627,
    name: "Кочевник",
    address: "Приморский край, Владивосток, Светланская улица, 56",
    review:
      "Быстрый вкусный бизнес ланч, обслуживание вежливое, чисто, по меню интересный ассортимент, буузы не пробовали, но бульон мясной супер. Помещение просторное, но интерьер под бурятскую кухню не тянет.",
  },
  {
    id: 188765,
    name: "Восточный Экспресс",
    address: "Ставропольский край, Ессентуки, Интернациональная улица, 16",
    review:
      "Все очень понравилось: люля и шашлык из баранины, хачапури на гриле,салатики.Быстрое и гостеприимное обслуживание. Спасибо!",
  },
  {
    id: 230945,
    name: "Одесса мама",
    address: "Москва, улица Шаболовка, 14с2",
    review:
      'Хорошее место на "троечку", где можно неплохо поесть и пообщаться с друзьями. В последнее время сервис испортился - долго обслуживают. Цены средние, посетителей обычно много, но места есть.',
  },
  {
    id: 65917,
    name: "Русская трапеза",
    address: "Тверская область, Ржев, Зубцовское шоссе, 61",
    review:
      "Очень вкусно кормят. Хорошие (большие ) порции.  Супы, вторые блюда, чай, кофе, компоты. Меню разнообразное. Можно купить кусочек торта. Можно взять еду на вынос.  В теплое время года можно посидеть на летней веранде. Очень чисто. Прекрасное обслуживание. Рекомендую!!!!",
  },
  {
    id: 46586,
    name: "Angel Cakes City",
    address: "Москва, 1-й Красногвардейский проезд, 22, стр. 2",
    review:
      "Очень уютно. Аппетитная атмосфера. Всё очень вкусно. Обслуживание 5+",
  },
] as const;