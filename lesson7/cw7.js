// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна
// /. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

function Car(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна) {
    this['модель'] = модель;
    this [`виробник`] = виробник;
    this [`рік_випуску`] = рік_випуску;
    this [`максимальна_швидкість`] = максимальна_швидкість;
    this [`обєм_двигуна`] = обєм_двигуна;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${максимальна_швидкість} на годину`)
    };
    this.info = function () {
        for (const argument of arguments) {
            if (argument !== 0)
                console.log(`${argument} - ${this[argument]}`)
        }

    };
    this.maxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed

    };
    // / -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.changeYear = function (newValue) {
        this.рік_випуску = newValue
    };
    this.addDriver = function (driver) {
        this.водій = driver

    };
};


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Cars {
    constructor(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна) {
        this.виробник = виробник;
        this.рік_випуску = рік_випуску;
        this.максимальна_швидкість = максимальна_швидкість;
        this.обєм_двигуна = обєм_двигуна;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${максимальна_швидкість} на годину`)
    };

    info() {
        for (const argument of arguments) {
            if (argument !== 0)
                console.log(`${argument} - ${this[argument]}`)
        }

    };

    maxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed

    };

    changeYear(newValue) {
        this.рік_випуску = newValue
    };

    addDriver(driver) {
        this.водій = driver

    };
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Sindarella(name, age, foot_size) {
    this[`name`] = name;
    this [`age`] = age;
    this [`foot_size`] = foot_size;

};
let sindarella1 = new Sindarella(`Nastya`, 18, 37);
let sindarella2 = new Sindarella(`Katya`, 20, 39);
let sindarella3 = new Sindarella(`Lisa`, 19, 35);
let sindarella4 = new Sindarella(`Lyuba`, 20, 38);
let sindarella5 = new Sindarella(`Tanya`, 18, 35);
let sindarella6 = new Sindarella(`Olya`, 22, 38);
let sindarella7 = new Sindarella(`Natalya`, 19, 35);
let sindarella8 = new Sindarella(`Sofia`, 18, 37);
let sindarella9 = new Sindarella(`Nina`, 21, 39);
let sindarella10 = new Sindarella(`Ira`, 19, 36);

let sindarelas = [sindarella1, sindarella2, sindarella3, sindarella4, sindarella5, sindarella6, sindarella7, sindarella8, sindarella9, sindarella10]
console.log(sindarelas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, pumps) {
        this.name = name;
        this.age = age;
        this.pumps = pumps;
    }

}

let prince = new Prince(`Tolyan`, 56, 35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let love = (sindarelas, prince) => {
    for (const cobita of sindarelas) {
        if (cobita.foot_size === prince.pumps) {
            return `It is ${cobita.name}`
        }
    }
}
console.log(love(sindarelas, prince))


