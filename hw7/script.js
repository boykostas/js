'use strict';
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// task1 
// const dropdownItems = document.querySelectorAll('.dropdown-item');
// dropdownItems.forEach(item => {
//     item.classList.add('super-dropdown');
// });

// task2
// const button = document.querySelector('.btn');
// button.classList.toggle('btn-secondary');

// task3
// const menu = document.querySelector('.menu');
// if (menu.classList.contains('dropdown-menu')) {
//     menu.classList.remove('dropdown-menu');
// }

// task4
// const dropdown = document.querySelector('.dropdown');
// dropdown.insertAdjacentHTML('afterend','<a href="#">link</a>');

// task5
// const dropdownMenuButton = document.getElementById('dropdownMenuButton');
// dropdownMenuButton.id = 'superDropdown';

// task6
// const dropdownMenu = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
// const thirdDropdownItem = dropdownItems[2];
// thirdDropdownItem.dataset.dd = '3';

// task7
// const dropdownToggle = document.querySelector('.dropdown-toggle');
// dropdownToggle.removeAttribute('type');
