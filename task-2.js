// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.

const car = {
  brand: "volvo",
  model: "XC90",
  release_date: 2000,
  max_speed: 200,
  show_info() {
    return `Бренд:${this.brand} 
            Модель:${this.model}
            Дата релізу:${this.release_date} `;
  },
};
const location = {
  type: "location",
  city: "Kharkiv",
  distance: 500,
  show_time(distance, max_speed) {
    return distance / max_speed;
  },
};
// Варіант 1
Object.prototype.calculate_time = function (
  { city, distance },
  { max_speed, model, brand }
) {
  return `Автомобіль марки ${brand}, модель ${model} дістанеться до міста ${city} за ${
    distance / max_speed
  } години`;
};
console.log(calculate_time(location, car));
//  в цьому прикладі я просто не бачу сенсу ускладнювати собі життя. Я це дуже люблю робити, але контекст трохи не той
