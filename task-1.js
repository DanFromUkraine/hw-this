// # Завдання 1

// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для дос тупу до властивостей об'єкту.

// Окі-докі, буде зроблено

const person = {
  name: "Анунах",
  age: 1000,
  gender: "Бог всіх студентів",
  changeName(input_string) {
    this.name = input_string;
  },
};
Object.prototype.introduce = function () {
  return `Мене звати ${this.name}, мені ${this.age} років і я ${this.gender}`;
};
person.changeName("Данунах");
console.log(person.introduce());

person.changeName("Деканат");
console.log(person.introduce());
