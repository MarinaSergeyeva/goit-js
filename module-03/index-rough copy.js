// ===================================== task-07 ============================================ //

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// console.log(Transaction);

// let id = 0;

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     id += 1;
//     const transaction = {
//       amount: amount,
//       type: type,
//       id: id,
//     };
//     // console.log(transaction);

//     // this.transactions.push(transaction);
//     // console.log(this.transactions);
//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;

//     return this.transactions.push(transaction);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     // console.log(this.balance);

//     if (amount > this.balance) {
//       // this.transactions.push(
//       //   `Снятие невозможно. Недостаточно средств на счету!`
//       // );
//       return `Снятие невозможно. Недостаточно средств на счету!`;
//     }

//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;

//     return transaction;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       for (const key in this.transactions[i]) {
//         if (key === "id" && this.transactions[i][key] === id) {
//           // console.log(this.transactions[i][key]);
//           return this.transactions[i];
//         }
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum;
//     // for (let i = 0; i < this.transactions.length; i += 1) {
//     //   const keys = Object.keys(this.transactions[i]);
//     //   for (const key of keys) {
//     //     console.log(this.transactions[i][key]);
//     //   }
//     // }

//     for (let i = 0; i < this.transactions.length; i += 1) {
//       const entries = Object.entries(this.transactions[i]);
//       console.log(entries);
//     }
//   },
// };

// console.log(account);
// // account.createTransaction(400, Transaction.DEPOSIT);
// // account.createTransaction(100, Transaction.DEPOSIT);
// // account.createTransaction(200, Transaction.DEPOSIT);
// // account.createTransaction(600, Transaction.WITHDRAW);
// // account.createTransaction(200, Transaction.WITHDRAW);

// account.deposit(500);
// account.withdraw(200);
// account.withdraw(150);
// account.withdraw(250);
// account.deposit(800);
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// ===================================== task-07-Izmail ============================================ //
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
// let typeResult = 0;
// let depositSum = 0;
// let withdrawSum = 0;
// // let id = 0;
// // const account = {
// //   balance: 0,
// //   transactions: [],
// //   createTransaction(amount, type) {
// //     id += 1;
// //     const transaction = {
// //       id: id,
// //       type: type,
// //       amount: amount,
// //     };
// //     return transaction;
// //   },
// let id = 0;
// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     id += 1;
//     const transaction = {
//       id: id,
//       type: type,
//       amount: amount,
//     };
//     console.table(transaction);
//     this.transactions.push(transaction);
//     if (type === Transaction.DEPOSIT) {
//       this.balance += amount;
//     } else {
//       this.balance -= amount;
//       return transaction;
//     }
//   },
//   deposit(amount) {
//     this.createTransaction(amount, Transaction.DEPOSIT);
//   },
//   withdraw(amount) {
//     this.createTransaction(amount, Transaction.WITHDRAW);
//   },
//   getBalance() {
//     console.log(this.balance);
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (const transact of this.transactions) {
//       if (transact.id === id) {
//         console.log(transact);
//         return transact;
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     for (const types of this.transactions) {
//       if (types.type === "deposit") {
//         depositSum = depositSum + types.amount;
//       }
//       console.log(depositSum);
//       if (types.type === "withdraw") {
//         withdrawSum = withdrawSum + types.amount;
//       }
//       console.log(withdrawSum);
//     }
//   },
// };
// // account.createTransaction(400, "deposit");
// // account.createTransaction(100, "deposit");
// // account.createTransaction(200, "deposit");
// // account.createTransaction(600, "withdraw");
// // account.createTransaction(200, "withdraw");
// // account.deposit();
// // account.withdraw();
// // console.log(account.getBalance());
// // console.log(account.getTransactionTotal("deposit"));
// // console.table(account.transactions);
// account.deposit(300);
// account.deposit(800);
// account.deposit(400);
// account.deposit(1200);
// account.withdraw(200);
// account.withdraw(700);
// account.withdraw(700);
// account.getBalance();
// account.getTransactionDetails(1);
// account.getTransactionDetails(3);
// account.getTransactionTotal("deposit");
// // account.getTransactionTotal("withdraw");
