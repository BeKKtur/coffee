// =============================================================
// MOKA COFFEE — ВСЕ ДАННЫЕ САЙТА МЕНЯЮТСЯ ТОЛЬКО В ЭТОМ ФАЙЛЕ
// =============================================================

const BUSINESS_DATA = {
  // ==========================================
  // ОСНОВНАЯ ИНФОРМАЦИЯ
  // ==========================================
  business: {
    // НАЗВАНИЕ КОФЕЙНИ
    name: "MOKA Coffee",
    shortName: "MOKA",
    subtitle: "Coffee • Bakery • Breakfast",
    slogan: "Твой идеальный кофе начинается здесь",
    description: "Спешелти-кофе, свежая выпечка и завтраки весь день в самом сердце Бишкека.",
    aboutTitle: "Место, где утро становится ритуалом",
    aboutText: "Мы создали MOKA для неспешных разговоров, точного вкуса и тех самых десяти минут наедине с собой. Отбираем зерно небольшими лотами, печём каждое утро и помним любимый заказ постоянных гостей.",
    city: "Бишкек",
    currency: "сом",
    locale: "ru-KG",
    siteUrl: "https://example.com/",
    seoTitle: "MOKA Coffee — кофейня, завтраки и выпечка в Бишкеке",
    seoDescription: "MOKA Coffee в Бишкеке: спешелти-кофе, свежая выпечка и завтраки каждый день с 08:00 до 23:00.",
    stats: [
      { value: "5+", label: "лет с вами" },
      { value: "20+", label: "видов кофе" },
      { value: "10 000+", label: "гостей" }
    ]
  },

  // ==========================================
  // КОНТАКТЫ
  // ==========================================
  contacts: {
    // НОМЕР ТЕЛЕФОНА
    phone: "+996 555 123 456",
    // НОМЕР ТЕЛЕФОНА БЕЗ ПРОБЕЛОВ
    phoneRaw: "+996555123456",
    // НОМЕР WHATSAPP БЕЗ + И ПРОБЕЛОВ
    whatsapp: "996555123456",
    address: "ул. Киевская, 123",
    // ВСТАВЬ СЮДА ССЫЛКУ НА КОФЕЙНЮ В 2ГИС
    twoGisUrl: "https://2gis.kg/bishkek/search/%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20123",
    whatsappMessage: "Здравствуйте! Хочу узнать подробнее о MOKA Coffee."
  },

  // ==========================================
  // СОЦИАЛЬНЫЕ СЕТИ
  // ==========================================
  social: {
    instagram: "@moka.coffee",
    // ССЫЛКА НА INSTAGRAM
    instagramUrl: "https://instagram.com/moka.coffee"
  },

  // ==========================================
  // ВРЕМЯ РАБОТЫ
  // ==========================================
  schedule: {
    // ВРЕМЯ РАБОТЫ
    days: "Ежедневно",
    open: "08:00",
    close: "23:00"
  },

  // ==========================================
  // МЕНЮ И ЦЕНЫ — ВСЁ МЕНЮ МЕНЯЕТСЯ ЗДЕСЬ
  // ==========================================
  menuCategories: [
    { id: "coffee", label: "Кофе" },
    { id: "cold", label: "Холодные" },
    { id: "breakfast", label: "Завтраки" },
    { id: "dessert", label: "Десерты" }
  ],
  menu: [
    { category: "coffee", name: "Эспрессо", description: "Насыщенный и точный", price: 120 },
    { category: "coffee", name: "Американо", description: "Чистый вкус зерна", price: 140 },
    { category: "coffee", name: "Капучино", description: "Эспрессо и шелковистое молоко", price: 180 },
    { category: "coffee", name: "Латте", description: "Мягкий и сливочный", price: 200 },
    { category: "coffee", name: "Раф", description: "Ваниль, сливки, эспрессо", price: 230 },
    { category: "cold", name: "Ice Latte", description: "Эспрессо, молоко и лёд", price: 220 },
    { category: "cold", name: "Espresso Tonic", description: "Кофе, тоник, цитрус", price: 240 },
    { category: "cold", name: "Lemonade", description: "Домашний, сезонный", price: 200 },
    { category: "breakfast", name: "Круассан с лососем", description: "Лосось, сливочный сыр, зелень", price: 350 },
    { category: "breakfast", name: "Авокадо тост", description: "Авокадо, яйцо пашот, микрозелень", price: 320 },
    { category: "breakfast", name: "Сырники", description: "Сметана, сезонные ягоды", price: 280 },
    { category: "dessert", name: "Чизкейк", description: "Классический, с ванилью", price: 250 },
    { category: "dessert", name: "Тирамису", description: "Маскарпоне и наш эспрессо", price: 270 },
    { category: "dessert", name: "Круассан", description: "Сливочный, выпекаем утром", price: 180 }
  ],

  // ==========================================
  // ПОПУЛЯРНЫЕ ПОЗИЦИИ
  // ==========================================
  popular: [
    { name: "Cappuccino", note: "Шёлковая текстура и двойной эспрессо", price: 180, badge: "BESTSELLER", image: "images/menu/breakfast.webp", position: "52% 26%" },
    { name: "Salmon Croissant", note: "Хрустящий круассан, лосось и крем-чиз", price: 350, badge: "POPULAR", image: "images/menu/breakfast.webp", position: "24% 67%" },
    { name: "Cheesecake", note: "Нежная классика с ягодами", price: 250, badge: "NEW", image: "images/menu/breakfast.webp", position: "84% 42%" },
    { name: "Raf Coffee", note: "Ваниль, сливки и сбалансированный шот", price: 230, badge: "MOKA CHOICE", image: "images/hero/hero.webp", position: "79% 71%" }
  ],

  // ==========================================
  // АКЦИИ
  // ==========================================
  promotions: [
    { eyebrow: "Для своих", title: "Каждый 6-й кофе — в подарок", text: "Попросите карту гостя у бариста. Мы отметим каждый напиток — шестой приготовим за наш счёт.", cta: "Заглянуть сегодня" }
  ],

  // ==========================================
  // ОТЗЫВЫ
  // ==========================================
  reviews: [
    { name: "Айжан", text: "То самое место, куда хочется возвращаться. Бариста помнят мой заказ, а капучино всегда идеальной температуры.", rating: 5 },
    { name: "Даниэль", text: "Очень цельное пространство: музыка, свет, кофе. Круассан с лососем — отдельная причина приехать утром.", rating: 5 },
    { name: "Мээрим", text: "Люблю работать здесь по утрам. Спокойно, красиво и действительно вкусный фильтр.", rating: 5 },
    { name: "Тимур", text: "Редкий случай, когда интерьер не важнее продукта. Раф мягкий, но вкус кофе не теряется.", rating: 5 },
    { name: "Алина", text: "Сырники, латте и тёплый свет — мой идеальный воскресный план. Очень внимательная команда.", rating: 5 }
  ],

  // ==========================================
  // ФОТОГРАФИИ
  // ==========================================
  images: {
    hero: "images/hero/hero.webp",
    about: "images/other/barista.webp",
    promo: "images/menu/breakfast.webp",
    og: "images/hero/hero.webp"
  },
  gallery: [
    { src: "images/gallery/interior.webp", alt: "Тёплый интерьер кофейни MOKA", caption: "Пространство" },
    { src: "images/other/barista.webp", alt: "Бариста готовит капучино", caption: "Мастерство" },
    { src: "images/menu/breakfast.webp", alt: "Завтрак и кофе на столе", caption: "Завтраки" },
    { src: "images/hero/hero.webp", alt: "Капучино на каменной стойке", caption: "Тот самый кофе" },
    { src: "images/gallery/interior.webp", alt: "Светлый зал современной кофейни", caption: "Атмосфера" }
  ],

  // ==========================================
  // ТЕКСТЫ КНОПОК И ИНТЕРФЕЙСА
  // ==========================================
  cta: {
    viewMenu: "Посмотреть меню",
    directions: "Как добраться",
    call: "Позвонить",
    whatsapp: "Написать в WhatsApp",
    instagram: "Instagram",
    route: "Открыть в 2ГИС"
  }
};
