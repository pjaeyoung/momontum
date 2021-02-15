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

function* typingAnimation({ message, $greet_message }) {
  for (const word of message) {
    $greet_message.textContent = `${$greet_message.textContent}${word}`;
    yield true;
  }

  return false;
}

function printGreeting({ $greet_message, nickname, greeting }) {
  const message = `${greeting} ${nickname}!`;
  const ani = typingAnimation({ message, $greet_message });
  const timer = setInterval(() => {
    if (!ani.next()) {
      clearInterval(timer);
    }
  }, 120);
}

export function init(nickname) {
  const $main = document.querySelector(".main");
  $main.classList.remove("hidden");

  const [hours, minutes] = getTime();
  printGreeting({
    $greet_message: document.querySelector(".greet-message"),
    nickname,
    greeting: getGreetingFromHours(parseInt(hours)),
  });
}
