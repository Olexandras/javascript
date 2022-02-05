let namA = + prompt('Перше число');
let namB = + prompt('Друге число');
if (namA > namB) {
    console.log(`Перше число більше`);
} else  if (namB > namA) {
    console.log(`Друге число більше`);
} else  if (namA === namB) {
    console.log(`введені рівні числа`)
}
let nam = Math.max(namA,namB);
console.log(nam);

let flat = prompt(`Номер квартири?`);
if (flat >= 1 && flat <= 20) {
    console.log(`1 під'їзд`);
} else if (flat >= 21 && flat <= 48) {
    console.log(`2 під'їзд`);
} else if (flat >= 49 && flat <= 90) {
    console.log(`3 під'їзд`);
} else {
        console.log(`даного номера не існує`);

}

let number = + prompt(10)
if (number===10) {
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}





let x;
if (typeof x === `number`) {
    console.log(1);
} else if (typeof x === `string`) {
    console.log(2);
} else if (typeof x === `boolean`) {
    console.log(3);
} else if (typeof x === `object`) {
    console.log(4);
}else {
    console.log(0)
}



let t = prompt(`температура?`);
if (t >= 10 && t<= 22) {
    console.log(`в школу!!!`);
} else {
    console.log(`online`);
}



let game = prompt(`виберіть число від 1 до 5`);
switch (game) {
    case `1`:
        console.log(`олівець`);
        break;
    case `2`:
        console.log(`ручка`);
        break;
    case `3`:
        console.log(`книжка`);
        break;
    case `4`:
        console.log(`фарби`);
        break;
    case `5`:
        console.log(`пензлик`);
        break;
    default:
        console.log(`число не вірне`)
}





