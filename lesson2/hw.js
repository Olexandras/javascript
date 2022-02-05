let time = prompt(`до якої четверті години попадає число?`);
if (time > 0 && time <= 14) {
    console.log(`до першої`);
} else if (time >= 15 && time <= 29) {
    console.log(`до другої`);
} else if (time >= 30 && time <= 44) {
    console.log(`до третьої`);
} else if (time >= 45 && time <= 59) {
    console.log(`до четвертої`);
} else if (time > 60) {
    console.log('введіть коректне значення');
}


let day = prompt(`в яку декаду місяця потрапляє це число?`);
if (day > 0 && day <= 10) {
    console.log(`перша декада`);
} else if (day >= 11 && day <= 19) {
    console.log(`друга декада`);
} else if (day >= 20 && day <= 31) {
    console.log(`третя декада`);
} else if (day > 31) {
    console.log('введіть коректне значення');
}


let test = true;
if (test === true) {
    console.log(`Вірно`);
} else if (test != true) {
    console.log(`Неправильно`);
}
(test === true) ? console.log(`Вірно`) : console.log(`Неправильно`);
(test !== true) ? console.log(`Вірно`) : console.log(`Неправильно`);


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = +prompt('а не = 0, значить а = 1,0,-3?')
if (a !== 0) {
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}

(a !== 0) ? console.log(`Вірно`) : console.log(`Невірно`);


let week = prompt('Порядковий номер дня тижня');
switch (week) {
    case `1` :
        console.log('планка 3хв');
        break;
    case `2` :
        console.log(`планка 3хв, присідання 10раз`);
        break;
    case `3` :
        console.log(`планка 3хв, присідання 10раз, підтягування 5раз`);
        break;
    case `4` :
        console.log(`перерва між заняттями`);
        break;
    case `5` :
        console.log('випади 15раз');
        break;
    case `6` :
        console.log(`планка 3хв, присідання 10раз, підтягування 10раз`);
        break;
    case `7` :
        console.log(`вечірка`);
}
let year = prompt(`Цей рік високостний?`);
if (year % 4 === 0) {
    console.log('Так');
} else {
    console.log(`Ні`);
}

let JavaScript = prompt(`Яка офіційна назва JavaScript?`);
if (JavaScript === `ECMAScript`) {
    console.log('Правильно!');
} else {
    console.log(`Не знаєте? ECMAScript!`);
}