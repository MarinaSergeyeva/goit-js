// ===================================== task-01 ============================================ //

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов.`);

// price = 2000;
// console.log(`Выбран «${name}», цена за штуку ${price} кредитов.`);

// ===================================== task-02 ============================================ //

// const total = 100;

// let ordered = prompt("Введите количество товаров для заказа");

// if (isNaN(ordered)) {
//   console.log("Введите числовое значение.");
// }
// if (ordered === null) {
//   console.log("Отмена заказа");
// }
// if (ordered <= total && ordered > 0) {
//   console.log("Заказ оформлен с вами свяжется менеджер");
// }
// if (ordered > total) {
//   console.log("На складе недостаточно товаров!");
// } else if (ordered == "") {
//   console.log("Корзина пуста.");
// }

// ===================================== task-03 ============================================ //

// const ADMIN_PASSWORD = "qwe";
// let message = prompt("Введите пароль");

// if (message === null) {
//   console.log("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   alert(`Доступ разрешен, введен пароль: ${message}`);
// } else alert(`Доступ запрещен, введен неверный пароль: ${message}`);

// ===================================== task-04 ============================================ //

// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let balance;

// let order = prompt("Сколько дронов вы хотите приобрести?");

// totalPrice = pricePerDroid * order;
// balance = credits - totalPrice;

// if (isNaN(order)) {
//   console.log("Введите числовое значение");
// }
// if (order === null) {
//   console.log("Отменено пользователем!");
// }
// if (Number(order) === 0 && order !== null) {
//   console.log("Корзина пуста.");
// }
// if (totalPrice <= credits && totalPrice > 0) {
//   console.log(
//     `Вы купили ${order} дроидов, на счету осталось ${balance} кредитов.`
//   );
// }
// if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// }

// ===================================== task-05 ============================================ //

// const countrySelectRef = document.querySelector('select[name="country"]');
// const buttonRef = document.querySelector("button");

// let country = "";
// let cost;
// buttonRef.addEventListener("click", function () {
//   country = countrySelectRef.value;
//   // console.log("country:", country);

//   switch (country) {
//     case "--Выберите страну--": {
//       alert("Сделайте выбор");
//       break;
//     }

//     case "Китай": {
//       country = "Китай";
//       cost = 100;
//       console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//       break;
//     }

//     case "Чили": {
//       country = "Чили";
//       cost = 250;
//       console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//       break;
//     }

//     case "Австралия": {
//       country = "Австралия";
//       cost = 170;
//       console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//       break;
//     }

//     case "Индия": {
//       country = "Индия";
//       cost = 250;
//       console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//       break;
//     }

//     case "Ямайка": {
//       country = "Ямайка";
//       cost = 120;
//       console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//       break;
//     }

//     default:
//       alert("В вашей стране доставка не доступна");
//   }
// });

// ===================================== task-06 ============================================ //
// let input;
// let total = 0;

// while (true) {
//   let input = prompt("Введите число");
//   let number = Number(input);
//   console.log(typeof number);

//   if (isNaN(input)) {
//     alert(`Введите числовое значение`);
//     continue;
//   } else if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   } else {
//     total += number;
//     console.log(total);
//   }
// }

// ===================================== task-EXTRA ============================================ //

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";

// let totalWidth;

// const newPadding = Number.parseInt(padding);
// console.log("newP:", newPadding);
// const newBorder = Number.parseInt(border);
// console.log("newB:", newBorder);
// const newContentWidth = Number.parseInt(contentWidth);
// console.log("newC:", newContentWidth);

// totalWidth = newPadding + newBorder + newContentWidth + "px";

// console.log(totalWidth); // 125px

// ===================================== task-EXTRA-2 ============================================ //

// 16\06\2020

const day = 2;
const mounth = "06";
const year = 2020;

const date = "0" + day + mounth + year;
console.log(date);

// ===================================== task-06-with-buttons-DOESN'T-WORK ============================================ //

// let input;
// let total = 0;

// let inputSelect = document.querySelector('input[type="number"]');
// const buttonOk = document.querySelector(".btn_ok");
// const buttonCancel = document.querySelector(".btn_cancel");

// if (buttonOk) {
//   buttonOk.addEventListener("click", function () {
//     let input = Number.parseInt(inputSelect.value);
//     console.log(typeof inputSelect.value);
//     console.log(input);
//   });
// } else if (buttonCancel) {
//   buttonCancel.addEventListener("click", function () {
//     let sum = (total += input);
//     console.log(sum);

//     console.log("Cancel");
//     alert(`Общая сумма чисел равна ${total}`);
//   });
// }

// if (buttonCancel) {
//   buttonCancel.addEventListener("click", function () {
//     let input = Number.parseInt(inputSelect.value);
//     console.log(typeof inputSelect.value);
//     console.log(input);
//     console.log("Cancel");
//   });
// } else if (buttonCancel) {
//   buttonCancel.addEventListener("click", function () {
//     console.log("Cancel");
//     alert(`Общая сумма чисел равна ${total}`);
//   });
// }

// let input = inputSelectRef.value;
// console.log(typeof input);

// let input = prompt("Введите число");
// let total = 0;

// if (isNaN(input)) {
//   alert("Было введено не число, попробуйте еще раз");
// }
// if (input > 0 && input !== null) {
//   input = Number(input);
//   //   console.log(input);
//   total += input;
// }
// if (input === null) {
//   //   console.log(`Общая сумма чисел равна ${total}`);
//   alert(`Общая сумма чисел равна ${total}`);
// }
// console.log(`Total = ${total}`);
