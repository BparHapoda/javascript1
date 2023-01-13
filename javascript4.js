'use strict'
/*
1. Написать функцию, которая принимает 2 числа и
возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.
 */
let a = +prompt('Равенство чисел\nВведите число a', 0);
let b = +prompt('Введите число b', 0);
let result = comparison(a, b);
switch (result) {
    case -1: {
        alert(`${a} < ${b}`);
        break
    }
    case 1: {
        alert(`${a} > ${b}`);
        break;
    }
    case 0: {
        alert(`${a} = ${b}`)
    }
}

function comparison(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

/*
2. Написать функцию, которая вычисляет
факториал переданного ей числа.
 */

let n = +prompt('Факториал числа\nВведите число :');
alert(`Факториал числа ${n} равен ${factor(n)}`);

function factor(n) {
    if (n <= 2) {
        return n;
    }

    return n * factor(n - 1);
}

/*
3. Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149.
 */
let aa = prompt('Объединение цифр в число\nВведите первую цифру ');
let bb = prompt('Введите вторую цифру ');
let cc = prompt('Введите третью цифру ');
alert(`Объединенное число ${unionN(aa, bb, cc)}`);

function unionN(a, b, c) {
    return parseInt(a + b + c);
}

/*
4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.
 */
let side1 = +prompt('Вычисление площади прямоугольника\nВведите ширину ');
let side2 = +prompt('Введите высоту ');


if (side1 !== side2) {
    alert(`Площадь прямоугольника равна ${area(side1, side2)}`);
} else {
    alert(`Площадь квадрата равна ${area(side1)}`);
}

function area(side1, side2) {
    if (!side2) {
        return Math.pow(side1, 2);
    } else {
        return side1*side2;
    }
};
/*
5. Написать функцию, которая проверяет, является ли
переданное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.
 */
let numberDel = +prompt('Проверка ,является ли число совершенным\nВведите число :');
if (isGood(numberDel)) {
    alert(`Число ${numberDel} является совершенным`);
} else {
    alert(`Число ${numberDel} не является совершенным`);
}

function isGood(numberDel) {
    return sumArray(calcDel(numberDel)) === numberDel;
}

function calcDel(num) {
    let r = [];
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            r.push(i)
        }
    }
    return r;
}

function sumArray(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
    }
    return s;
}

/*
6. Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
    Используйте написанную ранее функцию, чтобы узнавать,
    совершенное число или нет.

 */
let diap = prompt('Совершенные числа из диапазона\nВведите первое и последнее число диапазона через пробел ', '0 0');
let nd = [];
nd = diap.split(' ');
let itog = [];
itog = findGood(+nd[0], +nd[1]);
if (itog.length !== 0) {
    alert(`В данном диапазоне совершенными явл-ся следующие числа :  ${itog}`);
} else {
    alert(`В данном диапазоне нет совершенных чисел`);
}

function findGood(n1, n2) {
    let it = [];
    while (n1 <= n2) {
        if (isGood(n1)) {
            it.push(n1)
        }
        ;
        n1++;
    }
    return it;
}

/*
7. Написать функцию, которая принимает время (часы, минуты, секунды)
и выводит его на экран в формате «чч:мм:

Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.

 */

let hour = prompt('Вывод времени на экран\nВведите часы :');
let min = prompt('Введите  минуты :');
let sek = prompt('Введите секунды :');

alert(timeOutput(hour, min, sek));
alert(timeOutput(hour, min));
alert(timeOutput(hour));

function timeOutput(hour, min, sek) {
    let output = '';
    let array = [];
    if (!hour) {
        hour = '0'
    }
    ;
    if (!min) {
        min = '0'
    }
    ;
    if (!sek) {
        sek = '0'
    }
    ;
    array.push(zero(hour));
    array.push(zero(min));
    array.push(zero(sek));
    for (let j = 0; j < array.length; j++) {
        output += array[j];
        if (j < array.length - 1) {
            output += ':'
        }

    }
    return output;
}

function zero(n) {
    return parseInt(n) > 9 ? n : '0' + n;
}

/*
8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.
 */
let hourz = +prompt('Перевод времени в сек\nВведите часы :');
let minz = +prompt('Введите  минуты :');
let sekz = +prompt('Введите секунды :');
alert(convertInSek(hourz, minz, sekz));

function convertInSek(hourz, minz, sekz) {
    return sekz + minz * 60 + hourz * 60 * 60;

}

/*
9. Написать функцию, которая принимает количество секунд,
    переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».
 */
let seconds = +prompt('Перевод времени из сек \nВведите количество секунд :');
alert(convFromSec(seconds));

function convFromSec(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds / 60 % 60);
    let sec = Math.floor(seconds / 1 % 60);
    return timeOutput(hour, min, sec);
}

/*
10. Написать функцию, которая считает разницу между датами.
    Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыдущих 2-х заданий:
    сначала обе даты переведите в секунды,
    узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс»
*/
let date1 = prompt('Разница между датами \nВведите первую дату в формате ЧЧ:ММ:СС');
let date2 = prompt('Введите вторую дату в формате ЧЧ:ММ:СС');
alert(diff(date1, date2));

function diff(date1, date2) {
    let date1array = date1.split(':');
    let date2array = date2.split(':');
    let diff = convertInSek(+date1array[0], +date1array[1], +date1array[2]) - convertInSek(+date2array[0],
        +date2array[1], +date2array[2]);
    if (diff < 0) {
        diff = -1 * diff
    }
    ;
    return convFromSec(diff);
}
