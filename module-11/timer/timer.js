const timer = {
  start() {
    const finishTime = new Date(2020, 7, 21);
    const daysText = document.querySelector("span[data-value=days]");
    const hoursText = document.querySelector("span[data-value=hours]");
    const minsText = document.querySelector("span[data-value=mins]");
    const secsText = document.querySelector("span[data-value=secs]");
    // console.log(daysText);

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

// ============================== var-02-doesn't work!!! ==================================

// const clock = {
//   el: "#clock",
//   data: {
//     time: "",
//     date: "",
//   },
// };

// const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// function zeroPadding(num, digit) {
//   let zero = "";
//   for (let i = 0; i < digit; i += 1) {
//     zero += "0";
//   }
//   return (zero + num).slice(-digit);
// }

// function updateTime() {
//   let cd = new Date();
//   clock.time =
//     zeroPadding(cd.getHours(), 2) +
//     ":" +
//     zeroPadding(cd.getMinutes(), 2) +
//     ":" +
//     zeroPadding(cd.getSeconds(), 2);
//   clock.date =
//     zeroPadding(cd.getFullYear(), 4) +
//     "-" +
//     zeroPadding(cd.getMonth() + 1, 2) +
//     "-" +
//     zeroPadding(cd.getDate(), 2) +
//     " " +
//     week[cd.getDay()];
// }

// setInterval(updateTime, 1000);

// updateTime();
// console.log(clock);
