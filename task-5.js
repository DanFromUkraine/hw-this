// # Завдання 5

// Створіть об'єкт "user" з властивостями "ім'я", "прізвище" та масивом "friends".
// У цьому масиві зберігаються об'єкти, кожен з яких містить ім'я та прізвище
// друга.

// Створіть функцію "friendsInfo", яка використовує метод масиву "forEach" для
// перебору масиву друзів користувача та виводу їх імені та прізвища у консоль. У
// цій функції використовуйте ключове слово "this" для звернення до поточного
// об'єкту.

// Створіть ще один об'єкт "user" зі своїми властивостями та масивом друзів та
// викличте функцію "friendsInfo" для обох об'єктів, передаючи контекст через
// методи "call()" чи "apply()". Виведіть результат у консоль.

const user1 = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
};

const user2 = {
  name: "Juan",
  surname: "Hernandez",
  friends: [
    { name: "Maria", surname: "Garcia" },
    { name: "Carlos", surname: "Rodriguez" },
    { name: "Ana", surname: "Lopez" },
  ],
};

const friendsInfo = function () {
  this.friends.forEach((element) => {
    console.log(Object.values(element));
  });
  return "результат в консолі";
};
const result1_friends_info = friendsInfo.call(user1);
console.log(result1_friends_info);
const result2_friends_info = friendsInfo.apply(user2);

// Ну наче ото і всьо))
