// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let hello = `hello world`;
console.log(hello.length);
let lorem = `lorem ipsum`;
console.log(lorem.length);
let javascript = `javascript is cool`;
console.log(javascript.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(hello.toUpperCase());
console.log(lorem.toUpperCase());
console.log(javascript.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let HELLO = `HELLO WORLD`;
let LOREM = `LOREM IPSUM`;
let JAVA = `JAVASCRIPT IS COOL`;
console.log(HELLO.toLowerCase());
console.log(LOREM.toLowerCase());
console.log(JAVA.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   '
console.log(dirty.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let rainbow = 'Каждый охотник желает знать';

console.log(rainbow.split(` `))


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let delete_characters = (str) => {
    return str.substr(0,7)
};
console.log(delete_characters(rainbow));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let insert_dash = (str) => {
    return str.split(` `).join(`-`).toUpperCase()
};
console.log(insert_dash(rainbow));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let okten = `okten web`
let foo = (str) => {
    return str[0].toUpperCase()
}
console.log(foo(okten));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {

            return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
        };
        console.log(capitalize('знову падає білий сніг'));

