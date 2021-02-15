function printGreeting($greet_message, nickname) {
  $greet_message.textContent = `Good Morning ${nickname}!`;
}

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  printGreeting(document.querySelector(".greet-message"), nickname);
}
