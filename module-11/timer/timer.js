// ============================== var-01 ==================================

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      daysText: document.querySelector("span[data-value=days]"),
      hoursText: document.querySelector("span[data-value=hours]"),
      minsText: document.querySelector("span[data-value=mins]"),
      secsText: document.querySelector("span[data-value=secs]"),
    };

    this.start();
  }

  countTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.changeElements(days, hours, mins, secs);
  }

  changeElements(days, hours, mins, secs) {
    this.refs.daysText.innerHTML = days;
    this.refs.hoursText.innerHTML = hours;
    this.refs.minsText.innerHTML = mins;
    this.refs.secsText.innerHTML = secs;
  }

  countDate() {
    const time = this.targetDate.getTime() - new Date().getTime();
    time > 0 ? this.countTime(time) : this.viewError();
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    this.countDate();
    setInterval(() => {
      this.countDate();
    }, 1000);
  }

  viewError() {
    document.querySelector(this.selector).innerHTML = "00:00:00";
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 21, 2020"),
});

document.querySelector("#timer-1").style.display = "flex";
// const timer = document.querySelector(".timer");
// timer.querySelectorAll(".field").style.marginRight = "50px"; // задается стиль только первому элементу в диве

// ============================== var-02 ==================================

// const timer = {
//   start() {
//     const finishTime = new Date(2020, 7, 21);
//     const daysText = document.querySelector("span[data-value=days]");
//     const hoursText = document.querySelector("span[data-value=hours]");
//     const minsText = document.querySelector("span[data-value=mins]");
//     const secsText = document.querySelector("span[data-value=secs]");
//     // console.log(daysText);

//     setInterval(() => {
//       const currentTime = Date.now();
//       const time = finishTime - currentTime;

//       const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//       daysText.textContent = days;

//       const hours = pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );
//       hoursText.textContent = hours;

//       const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       minsText.textContent = mins;

//       const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//       secsText.textContent = secs;
//     }, 1000);

//     function pad(value) {
//       return String(value).padStart(2, "0");
//     }
//   },
// };

// timer.start();

// ============================== var-03-doesn't work!!! ==================================

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
