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
const checkForSpam = function (message) {
  let wordsArray = message.split(" ");
  console.log(wordsArray);
  for (let word of wordsArray) {
    // console.log(word);

    if (word === "spam" || word === "sale") {
    }
  }
  return;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
