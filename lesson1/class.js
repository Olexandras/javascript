let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = (1+2+3+4+5+6+7+8+9+10);
let book = {
    title:`The Snowman`,
    pages: 145,
    genre: `detective`};
console.log (book);
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    title: `A history of Ukraine`,
    pages: 345,
    genre: `history`,
    authors:{
        author1: `Stepan`,
        author2: `Petro`,

    }




}


let books = [ `book_1`, [`Mats`, 148, `textbook`, `Levytska` ],
    `book_2`, [`Englisch`, 200, `textbook`, `Mykolayko` ],
    `book_3`, [`Physics`, 113, `textbook`, `Stepanova` ]];

console.log(books[1][0]);
console.log(books [3][0]);
console.log(books [5][0]);


let height = 23;
let width =10;
let s =(height*width);
console.log(s);



let heightC = 10;
let dC = 4;
let v = (3.14*heightC*dC);
console.log(v);
// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
 let n = Math.pow(3,2);
 let m = Math.pow(4,2);
 let k = ( n + m);
 k = Math.sqrt(k);
 console.log(k);
