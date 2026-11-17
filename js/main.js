(function () {
  "use strict";

  var WINNER = "вашуркин михаил владимирович";
  var LOAD_TIME = 5000;

  var form = document.getElementById("loginForm");
  var input = document.getElementById("nameInput");
  var error = document.getElementById("loginError");
  var button = document.getElementById("loginBtn");
  var loginStep = document.getElementById("loginStep");
  var loaderStep = document.getElementById("loaderStep");
  var resultStep = document.getElementById("resultStep");

  var errorKey = null;

  function normalize(value) {
    return String(value)
      .toLowerCase()
      .replace(/[.,]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function showError(key) {
    errorKey = key;
    error.textContent = I18N.t(key);
    input.classList.add("invalid");
    form.classList.remove("shake");
    void form.offsetWidth;
    form.classList.add("shake");
    input.focus();
  }

  function clearError() {
    errorKey = null;
    error.textContent = "";
    input.classList.remove("invalid");
  }

  input.addEventListener("input", clearError);

  document.addEventListener("langchange", function () {
    if (errorKey) error.textContent = I18N.t(errorKey);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (button.disabled) return;

    var value = normalize(input.value);

    if (!value) {
      showError("errEmpty");
      return;
    }

    if (value !== WINNER) {
      showError("errNotFound");
      return;
    }

    clearError();
    button.disabled = true;
    button.textContent = I18N.t("checkingButton");
    input.disabled = true;

    loginStep.classList.add("hidden");
    loaderStep.classList.remove("hidden");

    window.setTimeout(function () {
      loaderStep.classList.add("hidden");
      resultStep.classList.remove("hidden");
    }, LOAD_TIME);
  });
})();
