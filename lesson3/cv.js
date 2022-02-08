let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// перебрати його циклом while
let a = 0;
while (a < arr.length){
    console.log(arr[a]);
    a++;
};
// 2. перебрати його циклом for

for (let b = 0; b < arr.length; b++) {
    console.log(arr[b]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr.length){
    if (arr[i] % 2 !== 0){
        console.log(arr[i]);
    };
    i++
};
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr.length; j++) {
    const arrElement = arr[j];
    if (arr[j]%2 !==0)
    {
        console.log(arrElement);
    }

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr.length){
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    };
    i++
};
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr.length; j++) {
    const arrElement = arr[j];
    if (arr[j]%2 ===0)
    {
        console.log(arrElement);
    }

}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 3 === 0){
    console.log(`okten`);
}
}
// 8. вивести масив в зворотньому порядку.

for (let y = arr.length - 1; y >= 0; y--) {
    const arrElement = arr[y];
    console.log(arrElement);
}


