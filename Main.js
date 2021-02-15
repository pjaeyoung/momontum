import { printGreeting } from "./greeting.js";

function getTime() {
  return new Date().toTimeString().match(/\d.(?=:)/g);
}

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  const [hours, minutes] = getTime();
  printGreeting({
    $greet_message: document.querySelector(".greet-message"),
    nickname,
    hours: parseInt(hours),
  });
}
