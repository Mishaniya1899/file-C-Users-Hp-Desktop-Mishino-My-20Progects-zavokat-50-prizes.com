(function () {
  "use strict";

  var products = [
    {
      id: 1, badge: "new",
      title: {
        ru: "Форма Аргентины — домашняя 2024/25",
        uz: "Argentina formasi — uy 2024/25",
        en: "Argentina kit — home 2024/25"
      },
      desc: {
        ru: "Домашний комплект сборной Аргентины сезона 2024/25: небесно-голубые полосы, вышитый герб и золотые акценты.",
        uz: "Argentina terma jamoasining 2024/25 mavsumidagi uy formasi: moviy-oq yo'l-yo'l naqsh, naqshli emblema va oltin bezaklar.",
        en: "Argentina's 2024/25 home kit: sky-blue stripes, embroidered crest and gold accents."
      },
      photo: "kit-argentina-home-2024.jpg"
    },
    {
      id: 4, badge: "hit",
      title: {
        ru: "Форма Испании — домашняя 2025/26",
        uz: "Ispaniya formasi — uy 2025/26",
        en: "Spain kit — home 2025/26"
      },
      desc: {
        ru: "Домашний комплект сборной Испании сезона 2025/26: красный цвет, жёлтая отделка и вышитый герб.",
        uz: "Ispaniya terma jamoasining 2025/26 mavsumidagi uy formasi: qizil rang, sariq bezak va naqshli gerb.",
        en: "Spain's 2025/26 home kit: red colour, yellow trim and an embroidered crest."
      },
      photo: "kit-spain-home-2025.jpg"
    },
    {
      id: 7,
      title: {
        ru: "Форма Португалии — домашняя 2025/26",
        uz: "Portugaliya formasi — uy 2025/26",
        en: "Portugal kit — home 2025/26"
      },
      desc: {
        ru: "Домашний комплект сборной Португалии сезона 2025/26: бордовый цвет, зелёная отделка и вышитый герб.",
        uz: "Portugaliya terma jamoasining 2025/26 mavsumidagi uy formasi: bordo rang, yashil bezak va naqshli gerb.",
        en: "Portugal's 2025/26 home kit: burgundy colour, green trim and an embroidered crest."
      },
      photo: "kit-portugal-home-2025.jpg"
    },
    {
      id: 8, badge: "new",
      title: {
        ru: "Форма Узбекистана — сезон 2025/26",
        uz: "O'zbekiston formasi — 2025/26 mavsum",
        en: "Uzbekistan kit — 2025/26 season"
      },
      desc: {
        ru: "Актуальный комплект сборной Узбекистана сезона 2025/26 — форма отборочного цикла к чемпионату мира.",
        uz: "O'zbekiston terma jamoasining 2025/26 mavsumidagi amaldagi formasi — jahon chempionati saralash bosqichi komplekti.",
        en: "Uzbekistan's current 2025/26 kit — the World Cup qualification shirt."
      },
      photo: "kit-uzbekistan-2025.jpg"
    },

    {
      id: 9, badge: "hit",
      title: {
        ru: "Чехол iPhone 15 — Месси",
        uz: "iPhone 15 uchun g'ilof — Messi",
        en: "iPhone 15 case — Messi"
      },
      desc: {
        ru: "Ударопрочный чехол с портретом Месси. Защита камеры, мягкие борта и точные вырезы.",
        uz: "Messining portreti tushirilgan zarbaga chidamli g'ilof. Kamera himoyasi va aniq kesimlar.",
        en: "Shockproof case with a portrait of Messi. Camera protection, soft edges and precise cutouts."
      },
      photo: "messi-1.jpg",
      case: { num: "10", team: "MESSI", accent: "#a9d4ff" }
    },
    {
      id: 10,
      title: {
        ru: "Чехол iPhone 15 — Роналду",
        uz: "iPhone 15 uchun g'ilof — Ronaldu",
        en: "iPhone 15 case — Ronaldo"
      },
      desc: {
        ru: "Чехол с портретом Роналду и матовым soft-touch покрытием — не собирает отпечатки.",
        uz: "Ronaldu portreti tushirilgan, mat soft-touch qoplamali g'ilof.",
        en: "Case with a portrait of Ronaldo and a soft-touch matte finish."
      },
      photo: "ronaldo-1.jpg",
      case: { num: "7", team: "RONALDO", accent: "#f0c419" }
    },
    {
      id: 19, badge: "new",
      title: {
        ru: "Чехол «Золотой мяч» — Роналду",
        uz: "«Oltin to'p» g'ilofi — Ronaldu",
        en: "Ballon d'Or case — Ronaldo"
      },
      desc: {
        ru: "Золотой чехол с фотографией «Золотого мяча» Роналду. Подарочная упаковка в комплекте.",
        uz: "Ronalduning «Oltin to'pi» surati tushirilgan oltin g'ilof. Sovg'a qutisi bilan.",
        en: "Golden case with a photo of Ronaldo's Ballon d'Or trophy. Gift box included."
      },
      photo: "ballon-dor.jpg",
      case: { num: "7", team: "BALLON D OR", accent: "#ffe9a8" }
    },
    {
      id: 25, badge: "new",
      title: {
        ru: "Чехол iPhone 15 — Шахматы",
        uz: "iPhone 15 uchun g'ilof — Shaxmat",
        en: "iPhone 15 case — Chess"
      },
      desc: {
        ru: "Чехол с шахматной доской. Ударопрочный корпус, защита камеры и точные вырезы.",
        uz: "Shaxmat taxtasi tushirilgan g'ilof. Zarbaga chidamli korpus va aniq kesimlar.",
        en: "Case with a chess board. Shockproof body, camera protection and precise cutouts."
      },
      photo: "chess-board.jpg",
      case: { num: "64", team: "CHESS", accent: "#e9c258" }
    },
    {
      id: 26,
      title: {
        ru: "Чехол Samsung Galaxy S24 — Шахматы",
        uz: "Samsung Galaxy S24 uchun g'ilof — Shaxmat",
        en: "Samsung Galaxy S24 case — Chess"
      },
      desc: {
        ru: "Чехол с шахматными фигурами и матовым soft-touch покрытием — не собирает отпечатки.",
        uz: "Shaxmat donalari tushirilgan, mat soft-touch qoplamali g'ilof.",
        en: "Case with chess pieces and a soft-touch matte finish that resists fingerprints."
      },
      photo: "chess-pieces.jpg",
      case: { num: "♛", team: "CHESS", accent: "#a9d4ff" }
    },
    {
      id: 21, badge: "hit",
      title: {
        ru: "Шахматная доска — Staunton №6",
        uz: "Shaxmat taxtasi — Staunton №6",
        en: "Chess board — Staunton No. 6"
      },
      desc: {
        ru: "Классическая деревянная доска с фигурами Staunton — для турниров и домашних партий.",
        uz: "Staunton donalari bilan klassik yog'och taxta — turnir va uy partiyalari uchun.",
        en: "Classic wooden board with Staunton pieces — for tournaments and home games."
      },
      photo: "chess-board.jpg"
    },
    {
      id: 22,
      title: {
        ru: "Волейбольный мяч",
        uz: "Voleybol to'pi",
        en: "Volleyball"
      },
      desc: {
        ru: "Мяч для волейбола с мягкой синтетической оболочкой и точной балансировкой — для зала и пляжа.",
        uz: "Yumshoq sintetik qoplamali va aniq balansli voleybol to'pi — zal va plyaj uchun.",
        en: "Volleyball with a soft synthetic cover and precise balance — for indoor and beach play."
      },
      photo: "volleyball.jpg"
    },
    {
      id: 23, badge: "new",
      title: {
        ru: "Шапка для плавания — силиконовая",
        uz: "Suzish qalpog'i — silikon",
        en: "Swimming cap — silicone"
      },
      desc: {
        ru: "Силиконовая шапка для плавания: плотно прилегает, не тянет волосы и защищает от хлора.",
        uz: "Silikon suzish qalpog'i: boshga mahkam yopishadi, sochni tortmaydi va xlordan himoya qiladi.",
        en: "Silicone swimming cap: fits snugly, protects hair and shields it from chlorine."
      },
      photo: "swim-cap.jpg"
    },
    {
      id: 24,
      title: {
        ru: "Плавки для бассейна",
        uz: "Basseyn uchun suzish ishtonlari",
        en: "Swimming trunks"
      },
      desc: {
        ru: "Плавки для бассейна: быстросохнущая ткань, эластичный пояс и свободный крой.",
        uz: "Basseyn uchun suzish ishtonlari: tez quriydigan mato, elastik belbog' va erkin bichim.",
        en: "Swimming trunks: quick-dry fabric, elastic waistband and a relaxed fit."
      },
      photo: "swim-trunks.jpg"
    }
  ];

  function text(field) {
    return field[I18N.lang()] || field.ru;
  }

  function mediaHTML(p, title) {
    var badge = p.badge
      ? '<span class="badge">' + I18N.t("badge_" + p.badge) + "</span>"
      : "";
    var img =
      '<img class="photo" src="images/' + p.photo + '" alt="' + title + '" loading="lazy">';

    if (!p.case) {
      return '<div class="card-media">' + badge + img + "</div>";
    }

    return (
      '<div class="card-media">' + badge +
      '<div class="case-shot"><div class="case-body" style="--accent:' + p.case.accent + '">' +
      '<span class="case-cam" aria-hidden="true"></span>' +
      '<div class="case-photo">' + img + "</div>" +
      '<div class="case-print">' +
      '<span class="case-num">' + p.case.num + "</span>" +
      '<span class="case-team">' + p.case.team + "</span>" +
      "</div></div></div>" +
      "</div>"
    );
  }

  function cardHTML(p) {
    var title = text(p.title);
    return (
      mediaHTML(p, title) +
      '<div class="card-body">' +
      "<h3>" + title + "</h3>" +
      '<p class="card-desc">' + text(p.desc) + "</p>" +
      '<button class="btn btn-gold btn-sm btn-block" type="button" data-id="' + p.id + '">' +
      I18N.t("orderButton") +
      "</button>" +
      "</div>"
    );
  }

  var grid = document.getElementById("grid");
  var confirmLayer = document.getElementById("confirmLayer");
  var doneLayer = document.getElementById("doneLayer");
  var confirmProduct = document.getElementById("confirmProduct");
  var confirmYes = document.getElementById("confirmYes");
  var confirmNo = document.getElementById("confirmNo");
  var doneOk = document.getElementById("doneOk");

  var selected = null;
  var initialRender = true;

  function renderGrid() {
    var fragment = document.createDocumentFragment();
    products.forEach(function (p, index) {
      var card = document.createElement("article");
      card.className = "card";
      card.style.animationDelay = (initialRender ? index * 45 : index * 12) + "ms";
      card.innerHTML = cardHTML(p);
      fragment.appendChild(card);
    });
    grid.innerHTML = "";
    grid.appendChild(fragment);
    initialRender = false;
  }

  function openLayer(layer) {
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeLayer(layer) {
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-layer.is-open")) {
      document.body.classList.remove("modal-open");
    }
  }

  function openConfirm(product) {
    selected = product;
    confirmProduct.textContent = text(product.title);
    openLayer(confirmLayer);
    window.setTimeout(function () { confirmYes.focus(); }, 60);
  }

  grid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-id]");
    if (!button) return;
    var product = products.find(function (item) {
      return String(item.id) === button.dataset.id;
    });
    if (product) openConfirm(product);
  });

  confirmNo.addEventListener("click", function () {
    closeLayer(confirmLayer);
    selected = null;
  });

  confirmYes.addEventListener("click", function () {
    closeLayer(confirmLayer);
    if (selected) {
      window.setTimeout(function () { openLayer(doneLayer); }, 120);
    }
    selected = null;
  });

  doneOk.addEventListener("click", function () {
    closeLayer(doneLayer);
  });

  [confirmLayer, doneLayer].forEach(function (layer) {
    layer.addEventListener("click", function (event) {
      if (event.target !== layer) return;
      if (layer === confirmLayer) {
        closeLayer(confirmLayer);
        selected = null;
      } else {
        closeLayer(doneLayer);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (doneLayer.classList.contains("is-open")) {
      closeLayer(doneLayer);
    } else if (confirmLayer.classList.contains("is-open")) {
      closeLayer(confirmLayer);
      selected = null;
    }
  });

  document.addEventListener("langchange", function () {
    renderGrid();
    if (selected) confirmProduct.textContent = text(selected.title);
  });

  renderGrid();
})();
