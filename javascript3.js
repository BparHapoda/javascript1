'use strict'

/*
1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне.
 */
let diap = prompt('Подсчет суммы диапазона\nВведите первое и последнее число диапазона через пробел ', '0 0');
let a = [];
a = diap.split(' ');
alert(`Сумма введенного диапазона равна ${sumDiap(+a[0], +a[1])}`)

function sumDiap(n1, n2) {
    let sum = 0;
    while (n1 <= n2) {
        sum += n1;
        n1++;
    }
    return sum;
}

/*
2. Запросить 2 числа и найти только наибольший общий
делитель.
 */
let first = +prompt('Поиск наибольшего общего делителя\nВведите первое число', '0');
let second = +prompt('Введите второое число', '0');
let third = +delimetr(first, second);
alert(`Наибольший общий делитель ${third}`)

function delimetr(a, b) {
    if (b === 0) {
        return a;
    }
    return delimetr(b, a % b);

}

/*
3. Запросить у пользователя число и вывести все делители
этого числа.
 */
let num = +prompt('Поиск делитедей числа\nВведите число', '0');
let res = calcDel(num);
alert(res);

function calcDel(num) {
    let r = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            r.push(i)
        }
    }
    return r;
}

/*
4. Определить количество цифр в введенном числе.
 */

let numb = prompt('Определение количества цифр\nВведите число ');
alert(`Количество цифр в числе ${numb} равно ${numb.length}`);

/*
5. Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной
переменной (не 10) для ввода чисел пользователем.
 */

let string = prompt('Статистика цифр числа \nВведите 10 чисел через пробел :', '0 1 2 3 4 5 6 7 8 9');
let ar = [0, 0, 0, 0, 0];
let numbers = string.split(' ');
for (var j = 0; j < numbers.length; j++) {
    if (numbers[j] > 0) {
        ar[0]++
    } else if (numbers[j] < 0) {
        ar[1]++
    } else {
        ar[2]++
    }
    ;
    if (numbers[j] % 2) {
        ar[3]++
    } else {
        ar[4]++
    }
    ;
}
alert(`В списке введенных чисел : ${numbers}\n ${ar[0]} положительных\n${ar[1]} отрицательных \n ${ar[2]} нулевых значений \n ${ar[3]} четных \n ${ar[4]} нечетных\n
`)

/*
6. Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить,
хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.
 */
let str1;
let res1;
while (true) {
    str1 = prompt('Калькулятор\nВведите простое математическое выражение или нажмите отмена', '2*2');
    if (str1 == undefined) {
        break;
    }
    res1 = calcExp(str1);
    alert(`Результат вычисления ${res1}`);
}

function calcExp(str1) {
    let an = [];
    if (str1.includes('+')) {
        an = str1.split('+');
        console.log(an[0], an[1]);
        console.log(parseInt(an[0]) + parseInt(an[1]));
        return (parseInt(an[0]) + parseInt(an[1]));
    } else if (str1.includes('-')) {
        an = str1.split('-');
        return (parseInt(an[0]) - parseInt(an[1]));
    } else if (str1.includes('/')) {
        an = str1.split('/');
        return Math.floor(parseInt(an[0]) / parseInt(an[1]) * 100) / 100;
    } else if (str1.includes('*')) {
        an = str1.split('*');
        return (parseInt(an[0]) * parseInt(an[1]));
    } else {
        return undefined;
    }

}

/*
7. Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).
*/

let aNumber = prompt('Сдвиг числа\nВведите число ', '12345');
let move = +prompt('На сколько знаков подвинуть введенное число влево ?');
alert('Число со смещенными цифрами ' + moveNumber(aNumber, move));

function moveNumber(aNumber, move) {
    let arrNumber = aNumber.split('');
    while (move > 0) {
        let hh = arrNumber[0];
        for (let ii = 0; ii < arrNumber.length - 1; ii++) {
            arrNumber[ii] = +arrNumber[ii + 1];
        }
        arrNumber[arrNumber.length - 1] = hh;
        move--;
    }
    return arrNumber.join('');

}

/*
8. Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.
 */
let daysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let result = true;
while (result) {
    for (let kk = 0; kk < 7; kk++) {
        result = confirm(daysWeek[kk] + '\n\nХотите увидеть ,каким будет завтрашний день?');
        if (!result) {
            break
        }
    }
}
/*
9. Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.
*/
let dis = "";
for (let i = 2; i < 10; i++) {
    for (let j = i; j < 11; j++) {
        dis += i + "*" + j + "=" + i * j + "   ";
    }
    dis += "\n";
}
alert(dis);

/*
10. Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока
пользователь не выберет == N.
*/

let NSTART = 0;
let NFINISH = 100;
let N = 50;
confirm('Давайте сыграем в игру -УГАДАЙ ЧИСЛО - \nЗагадайте ваш вариант числа от 0 до 100', 0);
let win = false;
while (!win) {
    let choice = +prompt(`Ваше число \n 1 - > ${N}\n 2 - < ${N}\n 3 - == ${N}`);
    switch (choice) {
        case 1: {
            NSTART = N;
            N = Math.ceil((NFINISH - NSTART) / 2 + NSTART);
            break;
        }

        case 2: {
            NFINISH = N;
            N = Math.ceil((NFINISH - NSTART) / 2 + NSTART);
            break
        }
        case 3: {
            alert('Ура! Я угадал число');
            win = true;
            break;
        }
    }

}