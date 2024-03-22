// # Завдання 3

// Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
// "рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
// привітанням зі зазначенням імені студента.

// Використовуючи метод "map()", створіть новий масив, який містить привітання з
// кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
// новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
// вище заданого значення.

// Створіть функцію "addRating", яка приймає один аргумент - кількість балів, на
// яку потрібно збільшити рейтинг студента. Викличте функцію "addRating" на кожному
// елементі масиву "студентів". Перевірте, що в контексті функції "addRating"
// значення "this" вказує на конкретний об'єкт "студент". Виведіть новий масив зі
// зміненими рейтингами в консоль.

const students = [];
Array.prototype.addElement = function (name, age, rating) {
  this.push({ name: name, age: age, rating: rating });
};

students.addElement("Саня", 20, 9); // 10 бальна шкала рейтингу
students.addElement("Паша", 21, 5); // 10 бальна шкала рейтингу
students.addElement("Сєрий", 25, 8); // 10 бальна шкала рейтингу
students.addElement("Наташа", 19, 2); // 10 бальна шкала рейтингу
students.addElement("Наталка", 22, 7); // 10 бальна шкала рейтингу

console.log(students);

Array.prototype.greet = function (find_name) {
  try {
    return `Здаров ${
      this.find(({ name }) => {
        return name === find_name;
      }).name
    } !!!`;
  } catch {
    return `Нажаль, ми не знаємо ${find_name} ((`;
  }
};

console.log(students.greet("Наташ"));

const arr_of_greetings = students.map((student) => {
  return students.greet(student.name);
});
console.log(arr_of_greetings);

function filter_students_by_rating(rating_barrier) {
  return this.filter((student) => {
    return student.rating >= rating_barrier;
  });
}

const filtered_arrray = filter_students_by_rating.call(students, 7);
console.log(filtered_arrray);

function add_rating_for_students(size_of_operation) {
  // Не знаю, кращі ідеї по назвам з тими зусилями що я прикладаю не приходять, тому маємо, що маємо
  return this.map((student) => {
    return { rating: student.rating + size_of_operation, ...student }; // припустимо, що рейтинг може бути понад максимальну шкалу
  });
}

const increased_students_rating = add_rating_for_students.call(students, 2);
console.log(increased_students_rating);
