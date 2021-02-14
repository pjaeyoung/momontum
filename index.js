(function () {
  const $input_nickname = document.querySelector(".input-nickname");
  const $icon_smile = document.querySelector(".icon-smile i");
  let isWink = false;

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
})();
