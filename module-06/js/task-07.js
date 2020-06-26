import { default as users } from "./users.js";
console.table(users);

/* Получить общую сумму баланса(поле balance) всех пользователей. */

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => {
    acc += user.balance;
    return acc;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
