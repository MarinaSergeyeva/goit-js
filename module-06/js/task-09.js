import { default as users } from "./users.js";
console.table(users);

/* Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends) */

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort(function (a, b) {
      return a.friends.length - b.friends.length;
    })
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
