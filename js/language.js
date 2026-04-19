var languageData = {
  en: {
    // Nav
    navabout:   "About",
    navmenu:    "Menu",
    navgallery: "Gallery",
    navcontact: "Contact",
    // Hero
    herosubtop:   "Restaurant",
    herolocation: "Vevchani, North Macedonia",
    herocta:      "Reserve a Table",
    // About
    abouttitle: "Our Restaurant",
    abouttext1: "Welcome to Pelvec Restaurant Vevchani. Located in the heart of the picturesque Vevchani, our restaurant offers you a unique gastronomic experience with traditional Macedonian specialties and international flavors. In a cozy and warm atmosphere, surrounded by natural beauty and authentic ambiance, you will enjoy freshly prepared food, friendly service, and a true sense of hospitality.",
    abouttext2: "Visit us and let us make your time spent here unforgettable. A perfect place for family lunches, private celebrations, or gatherings with friends!",
    // Menu section
    menutitle: "Our Menu",
    menutext:  "Browse our full selection of dishes and drinks.",
    menutext2: "View Full Menu",
    // Gallery
    gallerytitle: "Gallery",
    gallerytext:  "See pictures from our dishes and ambiance.",
    all:     "All",
    food:    "Food",
    ambient: "Ambiance",
    // Reservation
    reservationlabel: "Reservations",
    reservationtitle: "Want to make a reservation?",
    // Footer
    addresstitle:     "Address",
    street:           "Vevchani 6335",
    country:          "Republic of North Macedonia",
    workinghourstitle:"Working Hours",
    weekdayhours:     "Tue–Thu: 12:00 – 24:00",
    weekendhours:     "Fri–Sun: 11:00 – 01:00",
    contacttitle:     "Contact",
    contactphone:     "Phone: 070 870 292",
    contactemail:     "Email: info@pelvec.com"
  },
  mk: {
    // Nav
    navabout:   "За нас",
    navmenu:    "Мени",
    navgallery: "Галерија",
    navcontact: "Контакт",
    // Hero
    herosubtop:   "Ресторан",
    herolocation: "Вевчани, Северна Македонија",
    herocta:      "Резервирај Маса",
    // About
    abouttitle: "Нашиот Ресторан",
    abouttext1: "Добредојдовте во Ресторан Пелвец Вевчани. Сместен во срцето на живописното Вевчани, нашиот ресторан ви нуди уникатно гастрономско доживување со традиционални македонски специјалитети и интернационални вкусови. Во пријатен и топол амбиент, опкружен со природна убавина и автентична атмосфера, ќе уживате во свежо приготвена храна, љубезна услуга и вистинско чувство на гостопримство.",
    abouttext2: "Посетете не и дозволете ни да го направиме вашето време поминато тука незаборавно. Совршено место за семејни ручеци, ваши приватни прослави или дружење со пријатели!",
    // Menu section
    menutitle: "Нашето Мени",
    menutext:  "Прегледајте го нашиот целосен избор на јадења и пијалоци.",
    menutext2: "Погледни го Менито",
    // Gallery
    gallerytitle: "Галерија",
    gallerytext:  "Погледнете фотографии од нашите јадења и амбиент.",
    all:     "Сите",
    food:    "Јадења",
    ambient: "Амбиент",
    // Reservation
    reservationlabel: "Резервации",
    reservationtitle: "Сакате да направите резервација?",
    // Footer
    addresstitle:     "Адреса",
    street:           "Вевчани 6335",
    country:          "Република Северна Македонија",
    workinghourstitle:"Работно Време",
    weekdayhours:     "Втор–Четв: 12:00 – 24:00",
    weekendhours:     "Пет–Нед: 11:00 – 01:00",
    contacttitle:     "Контакт",
    contactphone:     "Телефон: 070 870 292",
    contactemail:     "Емаил: info@pelvec.com"
  }
};

var currentLanguage = 'en';

function setLanguage() {
  currentLanguage = document.getElementById('language-selector').value;
  loadLanguage();
}

function loadLanguage() {
  document.querySelectorAll('[data-key]').forEach(el => {
    var key = el.getAttribute('data-key');
    var val = languageData[currentLanguage][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

function applyModalLanguage(lang) {
  currentLanguage = lang;
  var sel = document.getElementById('language-selector');
  if (sel) sel.value = lang;
  loadLanguage();
  document.getElementById('language-modal').classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', loadLanguage);
