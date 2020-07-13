// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aug 21, 2020"),
// });

// import template from "./timer.js";
// const markup = template();
// document.querySelector("#timer-1").innerHTML = template();

const timer = {
  start() {
    const finishTime = new Date(2020, 7, 21);
    const daysText = document.querySelector("span[data-value=days]");
    const hoursText = document.querySelector("span[data-value=hours]");
    const minsText = document.querySelector("span[data-value=mins]");
    const secsText = document.querySelector("span[data-value=secs]");
    console.log(daysText);

    setInterval(() => {
      const currentTime = Date.now();
      const time = finishTime - currentTime;

      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      daysText.textContent = days;

      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      hoursText.textContent = hours;

      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      minsText.textContent = mins;

      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      secsText.textContent = secs;
    }, 1000);

    function pad(value) {
      return String(value).padStart(2, "0");
    }
  },
};

timer.start();
