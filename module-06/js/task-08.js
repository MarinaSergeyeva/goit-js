import { default as users } from "./users.js";
console.table(users);

/* Массив имен всех пользователей у которых есть друг с указанным именем. */

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.find((friend) => friend === friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
