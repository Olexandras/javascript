function min(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c)
    }
}

min(9, 16, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c)
//     }
// }
//
// max(91, 16, 32);
// // - створити функцію яка повертає найбільше число з масиву

// // - створити функцію яка повертає найменьше число з масиву
//
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr11 = [3, 4, 5];

function summary(array) {
    let result = 0;
    for (const arrayElement of array) {
        result = result + arrayElement;
    }
    return result;
}

console.log(summary(arr11))
//
// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
function ari(array) {
    let result = 0;
    for (const arrayElement of array) {
        result = result + arrayElement
    }
    return result / array.length;
}

console.log(ari(arr11));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function frandom(length) {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++) {
        arrayEmpty.push(Math.floor(Math.random() * 100));
    }
    return arrayEmpty
};

document.write(frandom(7))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomNumber(length, limit) {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.round(Math.random() * limit));
    }
    return emptyArray;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function rev(arr) {
    let newArr = []
    for (let i = arr.length - 1, ri = 0; i >= 0;
    i--, ri++)

        newArr[ri] = arr[i];

    return newArr;
}

console.log(rev(200,100,300))