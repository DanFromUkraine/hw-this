// # Завдання 4

// Створіть об'єкт "користувач" з властивостями "ім'я" та "баланс". Додайте до
// об'єкту метод "додати гроші", який збільшує баланс користувача на вказану суму.
// Додайте до об'єкту метод "balanceInfo", який виводить поточний баланс
// користувача в консоль.

// Створіть масив "users", який містить кілька об'єктів типу "user". Використовуючи
// метод "forEach()", викличте метод "addMoney" на кожному елементі масиву "users".
// Використовуючи метод "filter()", створіть новий масив, який міститиме тільки ті
// об'єкти типу "user", у яких баланс більший за вказану суму. Використовуючи метод
// "map()", створіть новий масив, який містить баланс кожного користувача з масиву
// "users". Виведіть цей масив в консоль.

// Використайте метод "call()", щоб викликати метод "balanceInfo" на конкретному
// об'єкті "user". Перевірте, що в контексті методу "balanceInfo" значення "this"
// вказує на конкретний об'єкт "user".

// ```js
// const users = [
//   { name: "Alice", balance: 500 },
//   { name: "Bob", balance: 200 },
//   { name: "Charlie", balance: 1000 },
// ];
// ```

const user = {
  name: "sdf",
  balance: 2,
};

function balanceInfo() {
  return this.balance;
}
Object.prototype.add_money = function (amount) {
  //Хочу трохи поексперементувати з методами і способами
  this.balance += amount;
  return this.balance;
};

console.log(balanceInfo.call(user));
console.log(user.add_money(20));

const users = [
  { name: "Alice", balance: 500 },
  { name: "Bob", balance: 200 },
  { name: "Charlie", balance: 1000 },
];

users.forEach((student) => {
  return student.add_money(2000);
});
console.log(users);

const filter_users = function (balance_barrier) {
  return this.filter((user) => {
    return user.balance > balance_barrier;
  });
};

const filtered_users = filter_users.call(users, 2200);
console.log(filtered_users);

const get_arr_of_balances = function () {
  return this.map(({ balance }) => {
    return balance;
  });
};
const arr_of_balances = get_arr_of_balances.call(users);
console.log(arr_of_balances);
