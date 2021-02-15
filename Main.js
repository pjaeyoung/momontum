function getTime() {
  return new Date().toTimeString().match(/\d.(?=:)/g);
}

/**
 *
 * @param {number} hours
 * @returns {string}
 */
function getGreetingFromHours(hours) {
  if (hours >= 5 && hours < 12) {
    return "Good Morining";
  }

  if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  }

  if ((hours >= 0 && hours < 5) || (hours >= 17 && hours <= 24)) {
    return "Good Evening";
  }
}

function printGreeting($greet_message, nickname, greeting) {
  $greet_message.textContent = `${greeting} ${nickname}!`;
}

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  const [hours, minutes] = getTime();
  printGreeting(
    document.querySelector(".greet-message"),
    nickname,
    getGreetingFromHours(parseInt(hours))
  );
}
