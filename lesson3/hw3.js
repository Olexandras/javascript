let mas1 = [1, 2, 3, 4, 5,];
console.log(mas1);
let mas2 = [`mother`, `father`, `sister`, `brother`, `aunt`];
console.log(mas2);
let mas3 = [`Andriy`, 18, `Vasyl`, 25, true];
console.log(mas3);

let arr = [9, 8, 7, 6, 5, 4, 3, 1];
console.log(arr[2]);

let year = [`january`, `february`, `march`, `april`, `may`, `june`, `july`, `august`, `september`, `october`];
for (let string of year) {
    document.write(`<div class="silver">${string}</div>`)
}
let aBc = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 3, 4],
    [1, 2],
    [1, 2],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4],
    [1, 2],
    [1, 2, 3, 4, 5],
    [1, 2],
];
for (let i = 0; i < aBc.length; i++) {
    const aBcElement = aBc[i];
    document.write(`<div>${aBcElement}</div>`);
    for (let j = 0; j < aBcElement.length; j++) {
        const aBcElementElement = aBcElement[j];
        document.write(`<div>${aBcElementElement}</div>`);

    }
}
let k=0;
while (k<year.length){
    document.write(`<div class="red">${year[k]}</div>`);
    k++;}


let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let k = 0; k < numbers.length; k++) {
    const number = numbers[k];
    console.log(number);
}
let txt = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`];
for (let l = 0; l < txt.length; l++) {
    const txtElement = txt[l];
    console.log(txtElement);
}

let AbC = [`Monday`,`Tuesday`,`Wednesday`, `Thursday`, `Friday`,1,2,3,true,false];
console.log(AbC);
for (let z = 0; z < AbC.length; z++) {
    const abCElement = AbC[z];
    if (typeof abCElement === "number"){
        console.log(`число`);
}
else {
    if (typeof abCElement === "boolean"){
    console.log('булеве');
} else {
    console.log('стрінга');}
    }}


let yyy = [];
yyy[0] = `Tolya`;
yyy[1] = `Inna`;
yyy[2] = `Vasya`;
yyy[3] = 1;
yyy[4] = 22;
yyy[5] = 33;
yyy[6] = 44;
yyy[7] = true;
yyy[8] = false;
yyy[9] = `Olya`;
for (let x = 0; x < yyy.length; x++) {
    const yyyElement = yyy[x];
    console.log(yyyElement);
}

let c=0
for (let c = 0; c <= 10; c++) {
    console.log(c);
    document.write(`<div>${c}</div>`);

};

let m=0
for (let m = 0; m <101; m++) {
    console.log(m)
document.write(`<div>${m}</div>`)
};

let n = 0;
for (let n = 0; n <= 100; n += 2) {
    console.log(n);
    document.write(`<div>${n}</div>`);

}


let b = 0;
for (let b = 2; b <=100; b++) {
    if (b % 2 === 0){
        console.log(b);
        document.write(`<div>${b}</div>`)
    }
        }
let v = 0;
for (let v = 2; v <=100; v++) {
    if (v % 2 === 1){
        console.log(v);
        document.write(`<div>${v}</div>`)
    }}