// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let hogwarts = (str) => {
    let gryffindor = str.replace(`..`, ` `).replace(`---`, ` `).replace(`__`, ` `);
    return gryffindor;
}
console.log(hogwarts(n1));
console.log(hogwarts(n2));
console.log(hogwarts(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (length, num) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}
let result = random(10, 100);
console.log(result);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
result.sort((a, b) => a - b);
console.log(result)
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let funcFilter = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    []
    return emptyArray.filter(value => value % 2 === 0);
};
console.log(funcFilter(10, 100));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayRandom = (length, num) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.map(value => value.toString());
};
console.log(arrayRandom(10, 100));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortArray = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(sortArray)
// -- відсортувати його за спаданням за monthDuration
let curs = coursesAndDurationArray.filter((a) => {
    return a.monthDuration > 5;
})
console.log(curs)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців