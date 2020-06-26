import { default as users } from "./users.js";
console.table(users);

/* Получить массив объектов пользователей по цвету глаз(поле eyeColor). */

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
