// task1

// const block = document.querySelector('.block');
// const item = document.createElement('div');
// block.appendChild(item);
// item.textContent = 'Элемент внутри';

// item.style.color = 'blue';
// item.style.border = '1px solid black';
// item.style.margin = '20px';
// item.style.padding = '16px';
// item.style.background = 'orange';
// item.setAttribute('class', 'item_1');

// task2

// const text = document.querySelector('.text');
// console.log(text.previousElementSibling);
// console.log(text.parentNode);
// console.log(text.parentNode.previousElementSibling);
// console.log(text.parentNode.parentNode);

// task3

// const heading = document.querySelector('h2');
// console.log(heading.parentNode);
// console.log(heading.parentNode.parentNode);
// console.log(heading.parentNode.parentNode.parentNode);

// task4

// const input = document.querySelector("input");
// const btn = document.querySelector(".btn");
// let h2 = document.querySelector("h2");
// btn.addEventListener("click", (event) => {
//   event.preventDefault;
//   if (input.value.trim() === "") {
//     if (!h2) {
//       h2 = document.createElement("h2");
//       input.parentElement.insertAdjacentElement("afterend", h2);
//     }
//     h2.textContent = "Вы не заполнили поле ввода";
//     input.style.border = "2px solid red";
//   } else {
//     h2.remove();
//     input.style.border = "1px solid green";
//   }
// });
