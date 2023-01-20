'use strict'

let string1 = 'Выхожу один я на дорогу';
let string2 = 'cквозь туман кремнистый путь блестит';
let string3 = 'Ночь тиха,пустыня внемлет богу';
let string4 = 'И звезда с звездою говорит.не удаляйте';

document.write(string1.length);
document.write("<br>");
document.write(string2.length);
document.write("<br>");
document.write(compareLength(string2, string1));
document.write("<br>");
document.write(firstSymbolToUpperCase(string2));
document.write("<br>");
document.write(countLetters(string3));
document.write("<br>");
document.write(checkSpam(string4));
document.write("<br>");
document.write(truncateString(string1, 5));
document.write("<br>");
document.write(isPalindrom('хренерх'));
document.write("<br>");
document.write(countWords(string3));
document.write("<br>");
document.write(findMaxWord(string3));
document.write("<br>");
document.write(averageWord(string1));
document.write("<br>");
findChar(string1, 'а');

/*
1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки
одинаковой длины.
 */


function compareLength(string1, string2) {
    if (string1.length === string2.length) {
        return 0;
    } else {
        return (string1.length > string2.length) ? 1 : -1;
    }
}

/*
2. Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.
 */
function firstSymbolToUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

/*
3. Написать функцию, которая считает количество гласных
букв в переданной строке.
 */
function countLetters(string) {
    let letters = 'аеёиоуыэюяeuioa';
    return string.toLowerCase().split('').reduce((count, item) => {
        if (letters.indexOf(item) !== -1) {
            count++
        }
        return count;
    }, 0);

}

/*
4. Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.
 */

function checkSpam(string) {
    let spams = ['100% бесплатно', 'увеличение продаж', 'только сегодня', 'не удаляйте', 'ххх'];
    let count = 0;
    for (let spam of spams) {
        if (string.toLowerCase().includes(spam)) {
            count++
        }
        ;
    }
    return count > 0;
}

/*
5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”
 */
function truncateString(string, length) {
    if (string.length > length) {
        string = string.slice(0, length - 3) + '...';
    }
    return string;
}

/*
6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
 */
function isPalindrom(string) {
    return string == string.split('').reverse().join('');
}

/*
7. Написать функцию, которая считает количество слов в
предложении.
 */
function countWords(string) {
    return splitString(string).length;

}

function splitString(string) {
    var regex = /(^\w)/g;
    string = string.replace(/[\,\.\:\!\;\"]/g, ' ');
    let array = string.split(' ');
    return array;
}

/*
8. Написать функцию, которая возвращает самое длинное
слово из предложения.
 */

function findMaxWord(string) {
    let array = splitString(string);
    return array.reduce(function (previous, next) {
        return (next.length > previous.length) ? next : previous
    });
}

/*
9. Написать функцию, которая считает среднюю длину слова
в предложении.
 */
function averageWord(string) {
    let words = splitString(string);
    let sum = 0;
    words.forEach(function (word) {
        sum += word.length
    });
    return sum / words.length;
}

/*
10. Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке
 */

function findChar(string, char) {
    let array = string.split('');
    let count = 0;
    let found = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === char) {
            count++;
            found.push(i);
        }
    }
    document.write(found);
    document.write("<br>");
    document.write(count);
}