"use strict";
// Урок 2. Семинар. Введение в DOM (Document Object Model)
// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// 5. Выведите содержимое тега title в консоль.
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег h6 на странице.

// task1
// const superLink = document.querySelector('#super_link');
// console.log(superLink);

// task2
// const cardLinks = document.querySelectorAll(".card-link");
// cardLinks.forEach((link) => {
//   link.textContent = "ссылка";
// });

// task3
// const cardLinks = document.querySelectorAll('.card-body .card-link');
// console.log(cardLinks);

// task4
// const element = document.querySelector('[data-number="50"]');
// console.log(element);

// task5
// const title = document.title;
// console.log(title);

// task6
// const cardTitle = document.querySelector('.card-title');
// console.log(cardTitle.parentNode);

// task7
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Привет друг';
// const cardEl = document.querySelector('.card');
// cardEl.insertBefore(paragraph, cardEl.firstChild);

// task8
// const h6 = document.querySelector('h6');
// h6.remove();