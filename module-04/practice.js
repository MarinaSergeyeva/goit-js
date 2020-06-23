//----------------------------- mod-02-01 ---------------------------------------

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//----------------------------- mod-02-02 ---------------------------------------
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const wordsCount = message.split(" ");
//   console.log(wordsCount);

//   return pricePerWord * wordsCount.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

//----------------------------- mod-02-03 ---------------------------------------
// const findLongestWord = function (string) {
//   let words = string.split(" ");
//   let longestWord = words[0];

//   for (let i = 1; i < words.length; i += 1) {
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

//----------------------------- mod-02-04 ---------------------------------------
// const formatString = function (string) {
//   if (string.length > 40) {
//     let newString = string.slice(0, 40);
//     //   console.log(`${newString}...`)
//     return `${newString}...`;
//   }
//   return string;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

//----------------------------- mod-02-05 ---------------------------------------
// const checkForSpam = function (message) {
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     return true;
//   }
//   return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//----------------------------- mod-02-06 ---------------------------------------
// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt(`Введите число.`);
//   if (isNaN(input)) {
//     alert("Ошибка, введена буква. Введите число!");
//     continue;
//   } else if (input !== null) {
//     numbers.push(Number(input));
//   }
// } while (input !== null);

// if (numbers.length > 0) {
//   for (let number of numbers) {
//     total += number;
//   }
// }

// console.log(numbers);
// console.log(`Общая сумма чисел равна ${total}`);

//----------------------------- mod-02-07 ---------------------------------------
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   }
//   return false;
// };

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   }
//   return true;
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login) === false) {
//     return `Ошибка! Логин должен быть от 4 до 16 символов`;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     return `Такой логин уже используется!`;
//   } else logins.push(login);
//   return `Логин успешно добавлен!`;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//----------------------------- mod-03-01 ---------------------------------------
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";

// const keys = Object.keys(user);
// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}:${user[key]}`);
// }
//----------------------------- mod-03-02 ---------------------------------------
// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
//----------------------------- mod-03-03 ---------------------------------------
const findBestEmployee = function (employees) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
