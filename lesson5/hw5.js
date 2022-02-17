// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника
let rectangle = (a, b) => a * b;
console.log(rectangle(4, 6));

// - створити функцію яка обчислює та повертає площу кола
let cyrcle = (r) => r * 3.14 * r;
console.log(cyrcle(3));
// - створити функцію яка обчислює та повертає площу циліндру
let cylinder = (r, h) => 2 * 3.14 * r * h;
console.log(cylinder(3,6))
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1,2,3,4,5,6]
let it =(array) => {
    for (let i = 0; i < array.length; i++) {
        const arrElement = array[i];
        return array
            }
}
console.log(it(array))
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraf = (txt) => {
    document.write(`<p>${txt}</p>`)
}
paragraf(`London is the capital of the Great Britain`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (some) => {
    document.write(`<ul>`);
    document.write(`<li>${some}</li>`);
    document.write(`<li>${some}</li>`);
    document.write(`<li>${some}</li>`);
    document.write(`</ul>`);
}
ulli(`margaryn`);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let foo = (val, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${val}</li>`);
    }
    document.write(`</ul>`);
}
foo(`igi`, 6 );
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1 = [1,2,3,`hello`, `Lviv`,true,false];
let funk = (arr1) => {
    for (let i = 0; i < arr1.length; i++) {
        const arr1Element = arr1[i];
        console.log(arr[i])
    }
}
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr2 = [`id`,`name`,`age`]
let doc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arr2Element = arr[i];
        document.write(`<div>${arr[i]}</div>`);
    }
}
doc(arr2)