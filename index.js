import * as Intro from "./Intro.js";

function init() {
  const nickname = localStorage.getItem("nickname");
  if (nickname === null) {
    Intro.init();
  }
}

init();
