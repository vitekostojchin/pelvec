var languageData = {
    en: {
      navabout: "About",
      navmenu: "Menu",
      navgallery: "Gallery",
      navcontact: "Contact",
      abouttitle: "Our Restaurant",
      abouttext1: "Welcome to Pelvec Restaurant Vevchani. Located in the heart of the picturesque Vevchani, our restaurant offers you a unique gastronomic experience with traditional Macedonian specialties and international flavors. In a cozy and warm atmosphere, surrounded by natural beauty and authentic ambiance, you will enjoy freshly prepared food, friendly service, and a true sense of hospitality.",
      abouttext2: "Visit us and let us make your time spent here unforgettable. A perfect place for family lunches, private celebrations, or gatherings with friends!",
      menutitle: "Our Menu",
      menutext: "Tap below to view or download our full menu:",
      menutext2: "Click to view full menu",
      gallerytitle: "Gallery",
      gallerytext: "See pictures from our dishes and ambient.",
      all: "All",
      food: "Food",
      ambient: "Ambiance",
      reservationtitle: "Want to make a reservation? Call <strong><a href='tel:+38970870292'>070 870 292</a></strong>",
      reservationphone: "070 870 292",
      addresstitle: "Address",
      street: "Vevchani 6335",
      country: "Republic of North Macedonia",
      workinghourstitle: "Working Hours",
      weekdayhours: "Tue-Thurs: 12:00 AM - 12:00 PM",
      weekendhours: "Fri-Sun: 11:00 AM - 01:00 AM",
      contacttitle: "Contact Info",
      contactphone: "Phone: 070 870 292",
      contactemail: "Email: info@pelvec.com"
    },
    mk: {
      navabout: "За нас",
      navmenu: "Мени",
      navgallery: "Галерија",
      navcontact: "Контакт",
      abouttitle: "Нашиот Ресторан",
      abouttext1: "Добредојдовте во Ресторан Пелвец Вевчани. Сместен во срцето на живописното Вевчани, нашиот ресторан ви нуди уникатно гастрономско доживување со традиционални македонски специјалитети и интернационални вкусови. Во пријатен и топол амбиент, опкружен со природна убавина и автентична атмосвера, ќе уживате во свежо приготвена храна, љубезна услуга и вистинско чувство на гостопримство.",
      abouttext2: "Посетете не и дозволете ни да го направиме вашето време поминато тука незаборавно. Совршено место за семејни ручеци, ваши приватни прослави или дружење со пријатели!",
      menutitle: "Нашето Мени",
      menutext: "Кликнете подолу за да го погледнете или преземете нашето целосно мени:",
      menutext2: "Кликнете за да го видите целото мени",
      gallerytitle: "Галерија",
      gallerytext: "Погледнете фотографии од нашите јадења и амбиент.",
      all: "Сите",
      food: "Јадења",
      ambient:"Амбиент",
      reservationtitle: "Сакате да направите резервација? Повикајте <strong><a href='tel:+38970870292'>070 870 292</a></strong>",
      reservationphone: "070 870 292",
      addresstitle: "Адреса",
      street: "Вевчани 6335",
      country: "Република Северна Македонија",
      workinghourstitle: "Работно време",
      weekdayhours: "Втор-Четв: 12:00 AM - 12:00 PM",
      weekendhours: "Пет-Нед: 11:00 AM - 01:00 AM",
      contacttitle: "Контакт Инфо",
      contactphone: "Телефон: 070 870 292",
      contactemail: "Емаил: info@pelvec.com"
    }
  };
  
  var currentLanguage = "en";
  
  function setLanguage() {
    var lang = document.getElementById("language-selector").value;
    currentLanguage = lang;
    loadLanguage();
  }
  
  function loadLanguage() {
    var keys = document.querySelectorAll("[data-key]");
    keys.forEach(function (key) {
      var keyName = key.getAttribute("data-key");
      if (languageData[currentLanguage][keyName]) {
        key.innerHTML = languageData[currentLanguage][keyName];
      }
    });
  
    // Update PDF link based on selected language
    const menuLink = document.getElementById("menu-pdf-link");
    if (menuLink) {
      menuLink.href = currentLanguage === "mk" ? "img/menu.pdf" : "img/menuen.pdf";
    }
  }
  
  // Run once when DOM loads
  window.addEventListener('DOMContentLoaded', loadLanguage);

  function applyModalLanguage() {
    const selected = document.getElementById("modal-language-selector").value;
    document.getElementById("language-selector").value = selected;
    setLanguage();
    document.getElementById("language-modal").style.display = "none";
  }
  