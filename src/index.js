import * as Intro from "./Intro.js";
import * as Main from "./Main.js";

function init() {
  const nickname = JSON.parse(localStorage.getItem("nickname"));
  if (nickname === null) {
    Intro.init();
  } else {
    Main.init(nickname);
  }
}

init();
