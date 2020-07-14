// ====================== TASK-02 ======================
/*
 *Перепиши функцию toggleUserState() так,
 *чтобы она не использовала callback-функцию callback,
 *а принимала всего два параметра allUsers и userName и возвращала промис.
 */

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// ==========================================================

const toggleUserState2 = (allUsers, userName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        allUsers.map((user) =>
          user.name === userName ? { ...user, active: !user.active } : user
        )
      );
    });
  });
};

const logger2 = (allUsers, userName) => console.table(allUsers, userName);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, "Mango", logger);
// toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState2(users, "Mango").then(logger2);
toggleUserState2(users, "Lux").then(logger2);
