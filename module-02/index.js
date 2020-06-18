// ===================================== task-01 ============================================ //
const logItems = function (array) {
  // console.log(array);

  for (let i = 0; i < array.length; i += 1) {
    let indexArrayItem = array.indexOf(array[i]) + 1;
    console.log(`${indexArrayItem} - ${array[i]}`);
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// ===================================== task-02 ============================================ //

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// -----------------------------------------------------------------------------------------------

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let wordsCount = message.split(" ");

//   return wordsCount.length * pricePerWord;
// };

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

// ===================================== task-03 ============================================ //

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// -----------------------------------------------------------------------------------------------

// const findLongestWord = function (string) {
//   let words = string.split(" ");
//   console.log(words);

//   let longestWord = words[0];
//   // console.log(longestWord);

//   for (i = 1; i < words.length; i += 1)
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//       // console.log(longestWord);
//     }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// ===================================== task-04 ============================================ //
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов
// и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// -------------------------------------------------------------------------------------------
// const formatString = function (string) {
//   if (string.length >= 40) {
//     let newString = string.slice(0, 40);
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

// ===================================== task-05 ============================================ //
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.
// -------------------------------------------------------------------------------------------
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
// ===================================== task-06 ============================================ //
// let input;
// let inputNumber;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Введите число.");

//   if (isNaN(input)) {
//     alert(`Введите числовое значение.`);
//     continue;
//   } else if (input !== "" && input !== null) {
//     inputNumber = Number(input);
//     // console.log(inputNumber);
//     numbers.push(inputNumber);
//     console.log(numbers);
//   }
//   if (input === null) {
//     if (numbers.length > 0) {
//       for (let number of numbers) {
//         total += number;
//       }
//     } else console.log(`Массив пуст.`);
//   }
// } while (input !== null);
// console.log(`Общая сумма чисел равна ${total}`);

// ===================================== task-07 ============================================ //
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
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return "Логин успешно добавлен!";
//   } else if (!isLoginValid(login)) {
//     return "Ошибка! Логин должен быть от 4 до 16 символов";
//   } else return "Такой логин уже используется!";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
