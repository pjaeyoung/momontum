import * as Main from "./Main.js";

export function init() {
  const $form_nickname = document.querySelector(".form-nickname");
  const $input_nickname = document.querySelector(".input-nickname");
  const $icon_smile = document.querySelector(".icon-smile i");
  const $intro = document.querySelector(".intro");
  const $main = document.querySelector(".main");
  let isWink = false;

  $intro.classList.remove("hidden");

  $input_nickname.addEventListener("input", (e) => {
    if (!isWink && e.target.value.length > 0) {
      isWink = true;
      $icon_smile.classList.replace("fa-smile", "fa-smile-wink");
      return;
    }

    if (e.target.value.length === 0 && isWink) {
      isWink = false;
      $icon_smile.classList.replace("fa-smile-wink", "fa-smile");
    }
  });

  $form_nickname.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($input_nickname.value.length === 0) {
      return;
    }
    $intro.style.transition = "0.5s linear";
    $intro.style.transform = "translateY(-1000px)";
    $intro.style.opacity = "0";
    setTimeout(() => {
      $main.classList.remove("hidden");
      Main.init($input_nickname.value);
    }, 500);

    localStorage.setItem("nickname", JSON.stringify($input_nickname.value));
  });
}
