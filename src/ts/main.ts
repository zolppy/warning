const { log } = console;

document.addEventListener("DOMContentLoaded", () => {
  const mbEl: HTMLElement = document.querySelector(
    ".app__info span"
  ) as HTMLSpanElement;
  const progressEl: HTMLElement = document.querySelector(
    ".app__progress"
  ) as HTMLDivElement;
  const percentEl: HTMLElement = document.querySelector(
    ".app__percent-value"
  ) as HTMLSpanElement;
  const sound = new Audio("/dist/sound/alert.mp3");
  const total = 16384;
  const un: number = total / 100;
  let value: number = 0;
  let percent: number = 0;

  mbEl.textContent = value.toFixed(2).toString();
  progressEl.style.animationPlayState = "running";

  const interval: number = setInterval(() => {
    value += un;
    percent = parseInt(String((value * 100) / total));
    // mbEl.textContent = value.toFixed(2).toString();
    mbEl.textContent = (value / 1024).toFixed(2);
    percentEl.textContent = percent.toString();
    sound.play();

    if (value > 16384) {
      clearInterval(interval);
    }
  }, 1000);
});
