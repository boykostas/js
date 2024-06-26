'use strict';

// Семинар. Основы событий в JavaScript

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

// Task1
// const allElements = document.querySelectorAll('body');
// let elementsLoaded = 0;
// allElements.forEach(element => {
//     element.onload = () => {
//         elementsLoaded++;
//         if (elementsLoaded === allElements.length) {
//             console.log('Все теги прогрузились');
//         }
//     };
// });

// Task2
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Страница загрузилась");
// });

// Task3
// document.addEventListener("click", function(e) {
//     const clickedElement = e.target;

//     if (clickedElement.classList.contains("super_element")) {
//         console.log(`Класс "super_element" присутствует в элементе "${clickedElement.tagName.toLowerCase()}".`);
//     } else {
//         console.log(`Класс "super_element" отсутствует в элементе "${clickedElement.tagName.toLowerCase()}".`);
//     }
// });

// Task4
// const textarea = document.querySelector("textarea");

// textarea.addEventListener("mouseenter", function() {
//     console.log("Вы навели на textarea.");
// });

// Task5
// const ul = document.querySelector("ul");

// ul.addEventListener("click", function(event) {
//     const clickedElement = event.target;

//     if (clickedElement.tagName === "BUTTON") {
//         console.log(clickedElement.textContent);
//     }
// });

// Task6
// Это происходит из-за порядка выполнения обработчиков событий. При каждом клике сначала выполняется обработчик события для ul, где мы проверяем, был ли клик на кнопке. Если да, то выводим текст кнопки в консоль. Затем, если событие не было перехвачено (т.е. клик не был на кнопке), оно всплывает по дереву DOM. После этого выполняется обработчик события для textarea, который выводит сообщение в консоль при наведении на поле ввода. Таким образом, сначала выводится текст из 5 задания, а затем текст из 3 задания, если произошел клик по кнопке в ul.

// Task7
// const liEl = document.querySelectorAll("li");

// liEl.forEach(function(li, index) {
//     if (index % 2 === 1) {
//         li.style.backgroundColor = "silver";
//     }
// });