function rectangle(a, b) {

    return a * b;

};
console.log(rectangle(4, 6));

function circle(r) {
    return 3.14 * (r * r)
}

console.log(circle(4));

function cylinder(h, r) {
    return 2 * 3.14 * r * h
}

console.log(cylinder(8, 2));

let array = [1, 1, 3, 4, 5];

function arr(array) {
    for (let i = 0; i < array.length; i++) {
        const arrElement = array[i];
    }
    return;

}

console.log(arr);

function f(txt) {
    document.write (`<p>${txt}</p>`);
    return;
}

f(`hello my name is Lesya`);

function ul(txt) {
    document.write(`<ul>`)
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
    return;
}

ul(`hello`);

function foo(item, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

foo(`hi`, 4);
let xxx = [2, 3, `year`, `day`, true, false];

function list(xxx) {
    document.write(`<ol>`)
    for (let i = 0; i < xxx.length; i++) {
        document.write(`<li>${xxx[i]}</li`)
    }
    document.write(`</ol>`);
    return;
}

console.log(xxx)
let array1 = [
    {id: `dog`, name: `Tusik`, age: 3},
    {id: `cat`, name: `Marseliy`, age: 4},
    {id: `hamster`, name: `Spy`,age: 1.5}
];

function objArray(array1) {
    for (const arrayElement of array1) {
        document.write(`<li>${arrayElement.id}</li>`)
document.write(`<li>${arrayElement.name}</li>`)
document.write(`<li>${arrayElement.age}</li>`);
    }
}

console.log(objArray(array1))
