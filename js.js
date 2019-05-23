'use strict';

//_______________one________________________________________________________________________________
console.log('Первая задача');
let numberMonth = +prompt('Введите номер месяца года'),
    month = ['','Январь', 'Февраль', 'Март',
                'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь',
                'Октябрь', 'Ноябрь', 'Декабрь'],
    seasons = ['Зима', 'Весна', 'Лето', 'Осень'];

if (month.indexOf('Январь') === numberMonth ||
        month.indexOf('Февраль') === numberMonth ||
            month.indexOf('Декабрь') === numberMonth ) {
    console.log(`Это ${seasons[0]}`);
} else if (month.indexOf('Март') === numberMonth ||
               month.indexOf('Апрель') === numberMonth ||
                   month.indexOf('Май') === numberMonth ) {
    console.log(`Это ${seasons[1]}`);
} else if (month.indexOf('Июнь') === numberMonth ||
                month.indexOf('Июль') === numberMonth ||
                    month.indexOf('Август') === numberMonth ) {
    console.log(`Это ${seasons[2]}`);
} else if (month.indexOf('Сентябрь') === numberMonth ||
                month.indexOf('Октябрь') === numberMonth ||
                     month.indexOf('Ноябрь') === numberMonth ) {
    console.log(`Это ${seasons[3]}`);
} else {
    console.log('Такого месяца не существует');
}

//______________________________________two________________________________________________________________
console.log('Вторая задача');
let numberSiAndLength = prompt('Введите номер единицы длины и длину отрезка', '1,100'),
    si = ['', 'дециметр', 'километр', 'метр', 'миллиметр', 'сантиметр'];

let arrIn = numberSiAndLength.split(',');

arrIn[0] = +arrIn[0];
arrIn[1] = +arrIn[1];

if (arrIn[0] === si.indexOf('дециметр')) {
    let answer = arrIn[1] * 0.1;
    console.log(`Длина отрезка равна ${answer} м.`);
} else if (arrIn[0] === si.indexOf('километр')) {
    let answer = arrIn[1] * 1000;
    console.log(`Длина отрезка равна ${answer} м.`);
} else if (arrIn[0] === si.indexOf('метр')) {
    let answer = arrIn[1];
    console.log(`Длина отрезка равна ${answer} м.`);
} else if (arrIn[0] === si.indexOf('миллиметр')) {
    let answer = arrIn[1] * 0.001;
    console.log(`Длина отрезка равна ${answer} м.`);
} else if (arrIn[0] === si.indexOf('сантиметр')) {
    let answer = arrIn[1] * 0.01;
    console.log(`Длина отрезка равна ${answer} м.`);
} else {
    console.log('Некорректные данные');
}

//____________________________________________three_____________________________________________________________
console.log('Третья задача');
let num = +prompt('Введите число в диапозоне от -999 до 999');

if (Math.abs(num) > 999 || isNaN(num)) {
    console.log(`Вы ввели некорректные данные`);
} else {
    if (num > 0) {
        if (num > 10 && num < 100) {
            console.log(`${num} - положительное двузначное число`);
        } else if (num > 100 && num < 1000 || num === 100) {
            console.log(`${num} - положительное трехзначное число`)
        } else if (num < 10) {
            console.log(`${num} - положительное однозначное число`)
        }
    } else if (num === 0) {
        console.log(`${num} - нулевое число`)
    } else if (num < 0) {
        if (Math.abs(num) > 10 && Math.abs(num) < 100) {
            console.log(`${num} - отрицательное двузначное число`);
        } else if (Math.abs(num) > 100 && Math.abs(num) < 1000  || num === -100) {
            console.log(`${num} - отрицательное трехзначное число`)
        } else if (Math.abs(num) < 10) {
            console.log(`${num} - отрицательное однозначное число`)
        }
    }
}

//_____________________________________________________four________________________________________________________
console.log('Четвертая задача');

for (let i = 1; i < 101; i++) {
    if (i %3 === 0 && i %5 === 0) {
        console.log('ThreeFive');
    } else if (i %3 === 0) {
        console.log('Three');
    } else if (i %5 === 0) {
        console.log('Five');
    } else {
        console.log(i);
    }
}

//______________________________________________five_______________________________________________________________
console.log('Пятая задача');
let year = +prompt('Введите год');
// Год високосный, если он делится на четыре без остатка,
//     но если он делится на 100 без остатка, это не високосный год.
//          Однако, если он делится без остатка на 400, это високосный год.
//               Таким образом, 2000 г. является особым високосным годом,
//                      который бывает лишь раз в 400 лет.
if (year <= 0 || isNaN(year)) {
    console.log('Некорректные данные');
} else {
    if (year %4 === 0) {
        if (year %100 === 0 && year %400 !== 0) {
            console.log(`${year} - не високосный год`);
        } else {
            console.log(`${year} - високосный год`);
        }
    } else {
        console.log(`${year} - не високосный год`);
    }
}



