var languageData = {
    en: {
      navabout: "About",
      navmenu: "Menu",
      navgallery: "Gallery",
      navcontact: "Contact",
      abouttitle: "Our Restaurant",
      abouttext1: "Informations about restaurant, when is established, what we offer...",
      aboutsubtitle: "Something else or not",
      abouttext2: "Some more informations about restaurant, what are our special dishesh etc...",
      menutitle: "Our Menu",
      menutext: "Tap below to view or download our full menu:",
      menutext2: "Click to view full menu",
      gallerytitle: "Gallery",
      gallerytext: "See pictures from our dishes and ambient.",
      all: "All",
      food: "Food",
      ambient: "Ambient",
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
      abouttext1: "Информации за ресторанот, кога е основан, што нудиме...",
      aboutsubtitle: "Нешто друго или не",
      abouttext2: "Некои дополнителни информации за ресторанот, кои се нашите специјални јадења и сл...",
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
  