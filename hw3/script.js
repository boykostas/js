
// Task1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function pow(num) {
//     console.log(num ** 3);
// }
// pow(3)

// Task2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// let answer = Number(prompt('Введите число: '));
// if (isNaN(answer)) {
//     console.log('Введите число!');
// } else {
//     ndfl(answer);
// }
// function ndfl(num) {
//     zp = num - (num * 0.13);
//     console.log('Размер заработной платы за вычетом налогов равен ' + zp + ' руб.');
// }

// Task3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
// let num1 = Number(prompt('Введите первое число: '));
// let num2 = Number(prompt('Введите второе число: '));
// let num3 = Number(prompt('Введите третье число: '));
// function maxNum(a, b, c) {
//     if (a > b && a > c) {
//         console.log('Первое числое ' + num1 + ' наибольшее');
//     } else if (b > c && b > a) {
//         console.log('Второе числое ' + num2 + ' наибольшее');
//     } else if (c > b && c > a) {
//         console.log('Третье числое ' + num3 + ' наибольшее');
//     } else {
//         console.log('Введите число!');
//     }
// }
// maxNum(num1, num2, num3);

// Task4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
function sum(a, b) {
    console.log(a + b);
}
function subt(a, b) {
    console.log(a - b);
}
function div(a, b) {
    console.log(a / b);
}
function mult(a, b) {
    console.log(a * b);
}

sum(2, 6);
subt(8, 4);
div(9, 5);
mult(6, 6);