// ===================================== task-01 ============================================ //
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// console.log(user);

// user.hobby = "skydiving";
// console.log(user);

// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// ===================================== task-02 ============================================ //
// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// ===================================== task-03 ============================================ //
// const findBestEmployee = function (employees) {
//   const props = Object.entries(employees);
//   console.log(props);

//   let name = "";
//   let tasks = 0;

//   for (const prop of props) {
//     if (prop[1] > tasks) {
//       tasks = prop[1];
//       name = prop[0];
//     }
//   }

//   return `${name}: ${tasks}`;
// };

// ===================================== task-03-with-values-and-keys ============================================ //
// const findBestEmployee = function (employees) {
//   const tasksArray = Object.values(employees);
//   const namesArray = Object.keys(employees);
//   //   console.log(tasksArray);
//   //   console.log(namesArray);

//   let index = 0;

//   let nameIndex;

//   //   console.log(maxTasksCount);
//   let maxTasksCount = 0;

//   for (i = 0; i < tasksArray.length; i += 1) {
//     if (maxTasksCount < tasksArray[i]) {
//       maxTasksCount = tasksArray[i];
//       //   console.log(maxTasksCount);
//       index = tasksArray.indexOf(tasksArray[i]);
//     }
//   }
//   //   console.log(index);

//   nameIndex = namesArray[index];
//   //   console.log(nameIndex);

//   return `${nameIndex}: ${maxTasksCount}`;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ===================================== task-04 ============================================ //

// const countTotalSalary = function (employees) {
//   let payments = Object.values(employees);
//   //   console.log(payments);

//   let total = 0;

//   for (const payment of payments) {
//     total += payment;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// ===================================== task-05 ============================================ //
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const entries = Object.entries(arr[i]);
//     // console.log(entries);

//     for (const entrie of entries) {
//       //   console.log(entrie);

//       if (entrie.includes(prop)) {
//         result.push(entrie[1]);
//         //   console.log(entrie[i]);
//       }
//     }
//   }
//   return result;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// ===================================== task-06 ============================================ //
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice;
//   for (let i = 0; i < allProdcuts.length; i += 1) {
//     // console.log(allProdcuts[i]);

//     const values = Object.values(allProdcuts[i]);
//     // console.log(values);

//     if (values.includes(productName)) {
//       totalPrice = values[1] * values[2];
//     }
//   }
//   return totalPrice;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// ===================================== task-07 ============================================ //
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

console.log(Transaction);

let id = 0;

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    id += 1;
    const transaction = {
      amount: amount,
      type: type,
      id: id,
    };
    // console.log(transaction);

    // this.transactions.push(transaction);
    // console.log(this.transactions);
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;

    return this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    // console.log(this.balance);

    if (amount > this.balance) {
      // this.transactions.push(
      //   `Снятие невозможно. Недостаточно средств на счету!`
      // );
      return `Снятие невозможно. Недостаточно средств на счету!`;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;

    return transaction;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      for (const key in this.transactions[i]) {
        if (key === "id" && this.transactions[i][key] === id) {
          // console.log(this.transactions[i][key]);
          return this.transactions[i];
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum;
    // for (let i = 0; i < this.transactions.length; i += 1) {
    //   const keys = Object.keys(this.transactions[i]);
    //   for (const key of keys) {
    //     console.log(this.transactions[i][key]);
    //   }
    // }

    for (let i = 0; i < this.transactions.length; i += 1) {
      const entries = Object.entries(this.transactions[i]);
      console.log(entries);
    }
  },
};

console.log(account);
// account.createTransaction(400, Transaction.DEPOSIT);
// account.createTransaction(100, Transaction.DEPOSIT);
// account.createTransaction(200, Transaction.DEPOSIT);
// account.createTransaction(600, Transaction.WITHDRAW);
// account.createTransaction(200, Transaction.WITHDRAW);

account.deposit(500);
account.withdraw(200);
account.withdraw(150);
account.withdraw(250);
account.deposit(800);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
