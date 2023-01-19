'use strict'
/*
Задание 1
Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.
1. Функция принимает массив и выводит его на экран.
2. Функция принимает массив и выводит только четные
элементы.
3. Функция принимает массив и возвращает сумму всех
элементов массива.
4. Функция принимает массив и возвращает его максимальный элемент.
5. Функция добавления нового элемента в массив по указанному индексу.
6. Функция удаления элемента из массива по указанному
индексу
 */
let array = getArray(10);
print(array);
printStream(array);
printEven(array);
printStreamEven(array);
document.write('<pre> Сумма массива ' + sumArray(array) + '</pre>');
document.write('<pre> Сумма массива ' + sumArrayStream(array) + '</pre>');
document.write('<pre> Максимальный элемент  ' + getMax(array) + '</pre>');
document.write('<pre> Максимальный элемент  ' + getMaxStream(array) + '</pre>');
print(addItem(array, 2, 0));
print(deleteItem(array, 0));


function getArray(lim) {
    let array = [];
    for (let i = 0; i < lim; i++) {
        array.push(getRandomInt(1, 99));
    }
    return array;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function print(array) {
    let str = '[';
    for (let j = 0; j < array.length; j++) {
        if (j !== array.length - 1) {
            str += array[j] + ', '
        } else {
            str += array[j]
        }
    }
    str += ']'
    document.write('<pre>' + str + '</pre>');
}

function printStream(array) {
    let str = '[';
    array.forEach((item, index, array) => {
        (index < array.length - 1) ? str += array[index] + ', ' : str += array[index]
    })
    str += ']'
    document.write('<pre>' + str + '</pre>');
}

function printEven(array) {
    let str = '[';
    for (let j = 0; j < array.length; j++) {
        if (j % 2 == 0) {
            if (j < array.length - 2) {
                str += array[j] + ', '
            } else {
                str += array[j]
            }
        }
    }
    str += ']'
    document.write('<pre>' + str + '</pre>');
}

function printStreamEven(array) {
    array = array.filter(function (item, index, array) {
        return (index % 2 == 0);
    })
    printStream(array);
}

function sumArray(array) {
    let sum = 0;
    for (let a of array) {
        sum += +a;
    }
    return sum;
}

function sumArrayStream(array) {
    return array.reduce(function (sum, item) {
        return sum + item
    }, 0)
}

function getMax(array) {
    let max = array[0];
    for (let a of array) {
        if (+a > max) {
            max = a;
        }
    }
    return max;
}

function getMaxStream(array) {
    return array.reduce(function (max, item) {
        return (item > max) ? item : max
    });
}

function addItem(array, index, item) {
    let array1 = array.slice(0);
    array1.splice(index, 0, item);
    return array1;
}

function deleteItem(array, index) {
    let array1 = array.slice(0);
    array1.splice(index, 1);
    return array1;
}

/*
Задание 2
Создать еще один массив из 5 случайных чисел и написать
следующие функции.
1. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов
без повторений
2. Функция принимает 2 массива и возвращает новый массив,
в котором собраны общие элементы (то есть элементы,
которые встречаются и в первом и во втором массивах)
без повторений.
3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива,
которых нет во втором массиве.
 */
let array51 = [1, 23, 3, 4, 5]
printStream(array51);
let array52 = [1, 2, 3, 4, 5];
printStream(array52);
print(unionArrays(array51, array52));
print(nonUnique(array51, array52));
print(uniqueElementsFromFirstArray(array51, array52));

function unionArrays(array1, array2) {
    let result;
    result = array1.concat(array2);
    return unique(result);
}

function unique(array) {
    let result = array.splice(0);
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] === result[j]) {
                result.splice(j, 1);
                j--;
            }
        }
    }
    return result;
}

function nonUnique(array1, array2) {
    let arr = array1.concat(array2);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                res.push(arr[i]);
                arr.splice(j, 1);
                j--;
            }
        }

    }
    return res;
}

function uniqueElementsFromFirstArray(array1, array2) {
    let res = [];
    let flag;
    for (let i = 0; i < array1.length; i++) {
        flag = false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                flag = true;
            }
        }
        if (!flag) {
            res.push(array1[i]);
        }

    }
    return res;
}

/*
Задание 3
Создать массив фруктов и отсортировать его по алфавиту.
Написать следующие функции.
1. Вывод на экран с помощью document.write() в виде списка
(с помощью тегов ul и li).
2. Поиск фрукта в массиве. Функция принимает название
фрукта и возвращает индекс найденного элемента или -1,
если не найден. Поиск должен быть нерегистрозависимым.
 */

class Fruit {
    constructor(name, country, color) {
        this.name = name;
        this.country = country;
    }
}

let fruits = [];
fruits.push(new Fruit('Мандарин', 'Марокко', 'Оранжевый'));
fruits.push(new Fruit('Апельсин', 'Марокко', 'Оранжевый'));
fruits.push(new Fruit('Ананас', 'Бразилия', 'Коричневый'));
fruits.push(new Fruit('Манго', 'Таиланд', 'Зеленый'));
fruits.push(new Fruit('Яблоко', 'Польша', 'Красный'));


function findFruits(fruit, fruits) {
    let fruitNamez = [];
    for (let f of fruits) {
        fruitNamez.push(f.name.toLowerCase());
    }
    fruit = fruit.toLowerCase();
    return fruitNamez.indexOf(fruit);

}

function printOl(fruits) {
    let ul = document.getElementById("listOfFruits");
    fruits.forEach((item) => {
        let li = document.createElement('li');
        li.append(item.name);
        ul.append(li);
    });
}