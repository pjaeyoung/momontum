import { printGreeting } from "./greeting.js";
import { printTime } from "./clock.js";
import Todos from "./Todos.js";

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  printGreeting({
    $greet_message: document.querySelector(".greet-message"),
    nickname,
    hours: parseInt(new Date().getHours()),
  });

  printTime(document.querySelector(".clock"));

  new Todos(document.querySelector(".todos"));
}
