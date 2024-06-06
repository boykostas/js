"use strict";

// task 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector("input");
const span = document.querySelector("span");
input.addEventListener("input", () => {
  span.textContent = input.value;
});

// task 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

document.getElementById("from").addEventListener("input", function () {
  document.getElementById("inputText").textContent = this.value;
});

document.querySelector(".messageBtn").addEventListener("click", function () {
  const messageDiv = document.querySelector(".message");
  messageDiv.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageDiv.style.visibility = "visible";
});

// task 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Форма отправлена корректно!');
    // здесь логика для отправки формы на сервер!!!
  } else {
    alert('Пожалуйста, правильно заполните все поля.');
  }
});

input1.addEventListener('input', function() {
  validateField(input1);
});

input2.addEventListener('change', function() {
  validateField(input2);
});

function validateForm() {
  const fieldsToValidate = [input1, input2];
  let formIsValid = true;

  fieldsToValidate.forEach(field => {
    if (!validateField(field)) {
      formIsValid = false;
    }
  });

  return formIsValid;
}

function validateField(field) {
  if (field.value.trim() === '') {
    field.classList.add('error');
    return false;
  } else {
    field.classList.remove('error');
    return true;
  }
}
