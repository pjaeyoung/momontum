function getTime() {
  return new Date().toTimeString().split(/:\d.\s/)[0];
}

export function printTime($clock) {
  $clock.textContent = `${getTime()}`;
  setInterval(() => {
    $clock.textContent = `${getTime()}`;
  }, 10000);
}
