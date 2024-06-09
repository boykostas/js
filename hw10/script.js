// Урок 10. Семинар. Работа с JSON

// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const newData = JSON.parse(data);
console.log(newData);

const divContent = document.querySelector(".content");
newData.forEach((element) => {
  divContent.insertAdjacentHTML(
    "beforeend", `
    <div class="wrapper">
        <h2>${element.id}</h2>
        <h3>${element.username}</h3>
        <p>${element.address.street}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>
    </div>
    `
  );
});