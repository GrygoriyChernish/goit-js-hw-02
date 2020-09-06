// Задача 2-9
// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
// Редактор JavaScript:
// 1
// function isLoginValid (login, min = 4, max = 16) {
// 2
//   // Write code under this line
// 3

// 4
// }
// 5
// ​
// 6
// function isLoginUnique  (allLogins, login) {
// 7
//   'use strict';
// 8
//   // Write code under this line
// 9

// 10
// }
// 11
// ​
// 12
// function addLogin (allLogins, login) {
// 13
//   'use strict';
// 14
//   const SUCCESS = 'Логин успешно добавлен!';
// 15
//   const REFUSAL = 'Такой логин уже используется!';
// 16
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
// 17
//   let message;
// 18
//   // Write code under this line
// 19

// 20
// }
// 21
// ​
// 22
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// 23
// ​
// 24
// // console.log(addLogin(logins, 'Ajax'));
// 25
// // 'Логин успешно добавлен!'
// Проверить
// Сбросить
// Скрыть секцию результатов
// Результаты:
// (обновляются при нажатии на кнопку - Проверить)

// ©
// 2020
// |

function isLoginValid(login, min = 4, max = 16) {
  let loginValid = false;

  if (login.length >= min && login.length <= max) {
    loginValid = true;
  }

  return loginValid;
}

function isLoginUnique(allLogins, login) {
  let isLoginUnique = true;

  if (allLogins.includes(login)) {
    isLoginUnique = false;
  }

  return isLoginUnique;
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;

  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }

  if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  }

  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'
console.log(logins);

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
