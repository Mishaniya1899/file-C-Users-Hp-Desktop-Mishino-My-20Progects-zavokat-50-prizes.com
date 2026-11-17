(function () {
  "use strict";

  var LANG_KEY = "chess-lang";
  var THEME_KEY = "chess-theme";
  var root = document.documentElement;

  var STRINGS = {
    ru: {
      titleLogin: "Турнир «Zavokat-gambit» — проверка участника",
      loginEyebrow: "Турнир «Zavokat-gambit» · сезон 2026",
      loginTitle: "Проверка участника",
      loginSubtitle: "Введите свои инициалы, чтобы узнать результат турнира.",
      loginLabel: "Ваши инициалы",
      loginPlaceholder: "Фамилия Имя Отчество",
      loginButton: "Проверить результат",
      checkingButton: "Проверяем…",
      errEmpty: "Пожалуйста, введите свои инициалы.",
      errNotFound: "Участник с такими данными в турнирной таблице не найден.",
      loaderTitle: "Проверяем турнирную таблицу…",
      loaderNote: "Это займёт несколько секунд",
      resultEyebrow: "Результат найден",
      resultTitle: "Поздравляем! Вы вошли в топ-50 лучших шахматистов турнира.",
      prizeLine: "Ваш приз — <b>ваучер на 150 000 сум</b>",
      prizesButton: "Какие призы я могу получить",

      prizesPageTitle: "Призы турнира «Zavokat-gambit»",
      brand: "Zavokat-gambit",
      voucher: "Ваш ваучер: <b>150 000 сум</b>",
      prizesEyebrow: "Топ-50 · сезон 2026",
      prizesTitle: "Какие призы я могу получить",
      prizesSubtitle: "Выберите приз и нажмите «Заказать» — все призы доступны по вашему ваучеру на 150 000 сум. Курьер свяжется с вами в скором времени.",
      orderButton: "Заказать",
      confirmEyebrow: "Подтверждение",
      confirmTitle: "Вы точно хотите заказать?",
      yes: "Да",
      no: "Нет",
      doneTitle: "Заказ принят!",
      doneText: "В скором времени с вами свяжется курьер.",
      doneButton: "Отлично",
      footerTournament: "Турнир «Zavokat-gambit»",
      footerBack: "Вернуться на главную",
      creditsSummary: "Источники фотографий (Wikimedia Commons)",

      badge_hit: "Хит",
      badge_retro: "Ретро",
      badge_collection: "Коллекция",
      badge_new: "Новинка",

      themeToLight: "Включить светлую тему",
      themeToDark: "Включить тёмную тему"
    },

    uz: {
      titleLogin: "«Zavokat-gambit» turniri — ishtirokchini tekshirish",
      loginEyebrow: "«Zavokat-gambit» turniri · 2026 mavsum",
      loginTitle: "Ishtirokchini tekshirish",
      loginSubtitle: "Turnir natijasini bilish uchun ism-familiyangizni kiriting.",
      loginLabel: "Ism-familiyangiz",
      loginPlaceholder: "Familiya Ism Sharif",
      loginButton: "Natijani tekshirish",
      checkingButton: "Tekshirilmoqda…",
      errEmpty: "Iltimos, ism-familiyangizni kiriting.",
      errNotFound: "Bunday ma'lumotli ishtirokchi turnir jadvalida topilmadi.",
      loaderTitle: "Turnir jadvali tekshirilmoqda…",
      loaderNote: "Bu bir necha soniya vaqt oladi",
      resultEyebrow: "Natija topildi",
      resultTitle: "Tabriklaymiz! Siz turnirning eng yaxshi 50 nafar shaxmatchisi qatoriga kirdingiz.",
      prizeLine: "Sovriningiz — <b>150 000 so'mlik vaucher</b>",
      prizesButton: "Qanday sovrinlar olsam bo'ladi",

      prizesPageTitle: "«Zavokat-gambit» turniri sovrinlari",
      brand: "Zavokat-gambit",
      voucher: "Sizning vaucheri: <b>150 000 so'm</b>",
      prizesEyebrow: "Top-50 · 2026 mavsum",
      prizesTitle: "Qanday sovrinlar olsam bo'ladi",
      prizesSubtitle: "Sovrinni tanlang va «Buyurtma berish» tugmasini bosing — barcha sovrinlar 150 000 so'mlik vaucher orqali mavjud. Kuryer siz bilan tez orada bog'lanadi.",
      orderButton: "Buyurtma berish",
      confirmEyebrow: "Tasdiqlash",
      confirmTitle: "Buyurtma berishni xohlayotganingizga ishonchingiz komilmi?",
      yes: "Ha",
      no: "Yo'q",
      doneTitle: "Buyurtma qabul qilindi!",
      doneText: "Kuryer tez orada siz bilan bog'lanadi.",
      doneButton: "Ajoyib",
      footerTournament: "«Zavokat-gambit» turniri",
      footerBack: "Bosh sahifaga qaytish",
      creditsSummary: "Fotosuratlar manbalari (Wikimedia Commons)",

      badge_hit: "Mashhur",
      badge_retro: "Retro",
      badge_collection: "Kolleksiya",
      badge_new: "Yangi",

      themeToLight: "Yorug' mavzuni yoqish",
      themeToDark: "Qorong'i mavzuni yoqish"
    },

    en: {
      titleLogin: "Zavokat-gambit Tournament — participant check",
      loginEyebrow: "Zavokat-gambit Tournament · 2026 season",
      loginTitle: "Participant check",
      loginSubtitle: "Enter your full name to see your tournament result.",
      loginLabel: "Your full name",
      loginPlaceholder: "Surname Name Patronymic",
      loginButton: "Check result",
      checkingButton: "Checking…",
      errEmpty: "Please enter your full name.",
      errNotFound: "No participant with these details was found in the tournament table.",
      loaderTitle: "Checking the tournament table…",
      loaderNote: "This will take a few seconds",
      resultEyebrow: "Result found",
      resultTitle: "Congratulations! You have made the top-50 best chess players of the tournament.",
      prizeLine: "Your prize — a <b>150,000 UZS voucher</b>",
      prizesButton: "What prizes can I get?",

      prizesPageTitle: "Prizes of the Zavokat-gambit Tournament",
      brand: "Zavokat-gambit",
      voucher: "Your voucher: <b>150,000 UZS</b>",
      prizesEyebrow: "Top-50 · 2026 season",
      prizesTitle: "What prizes can I get?",
      prizesSubtitle: "Pick a prize and press “Order” — every prize is covered by your 150,000 UZS voucher. A courier will contact you shortly.",
      orderButton: "Order",
      confirmEyebrow: "Confirmation",
      confirmTitle: "Are you sure you want to order?",
      yes: "Yes",
      no: "No",
      doneTitle: "Order accepted!",
      doneText: "A courier will contact you shortly.",
      doneButton: "Great",
      footerTournament: "Zavokat-gambit Tournament",
      footerBack: "Back to home",
      creditsSummary: "Photo credits (Wikimedia Commons)",

      badge_hit: "Hit",
      badge_retro: "Retro",
      badge_collection: "Collection",
      badge_new: "New",

      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme"
    }
  };

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  function currentLang() {
    var lang = root.getAttribute("data-lang");
    return STRINGS[lang] ? lang : "ru";
  }

  function t(key) {
    var value = STRINGS[currentLang()][key];
    if (value == null) value = STRINGS.ru[key];
    return value == null ? key : value;
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateThemeButton() {
    var button = document.getElementById("themeBtn");
    if (!button) return;
    var dark = currentTheme() === "dark";
    button.textContent = dark ? "\u2600" : "\u263E";
    var ariaKey = dark ? "themeToLight" : "themeToDark";
    button.setAttribute("data-i18n-aria", ariaKey);
    button.setAttribute("aria-label", t(ariaKey));
  }

  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = t(element.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      element.innerHTML = t(element.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      element.setAttribute("placeholder", t(element.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      element.setAttribute("aria-label", t(element.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (button) {
      var active = button.getAttribute("data-lang") === currentLang();
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    updateThemeButton();
  }

  function setLang(lang) {
    if (!STRINGS[lang]) return;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    safeSet(LANG_KEY, lang);
    applyStatic();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  function setTheme(theme) {
    theme = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    safeSet(THEME_KEY, theme);
    updateThemeButton();
  }

  document.addEventListener("click", function (event) {
    var langButton = event.target.closest(".lang-switch [data-lang]");
    if (langButton) {
      setLang(langButton.getAttribute("data-lang"));
      return;
    }
    if (event.target.closest("#themeBtn")) {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    }
  });

  window.I18N = {
    t: t,
    lang: currentLang,
    theme: currentTheme,
    apply: applyStatic,
    setLang: setLang,
    setTheme: setTheme
  };

  applyStatic();
})();
