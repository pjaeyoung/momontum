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

export function printGreeting({ $greet_message, nickname, hours }) {
  const message = `${getGreetingFromHours(hours)} ${nickname}!`;
  const ani = typingAnimation({ message, $greet_message });
  const timer = setInterval(() => {
    if (!ani.next()) {
      clearInterval(timer);
    }
  }, 120);
}
