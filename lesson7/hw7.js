// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User  (id, name, surname, email, phone) {
    this[`id`] = id;
    this[`name`] = name;
    this [`surname`] = surname;
    this [`email`] = email;
    this [`phone`] = phone;
};
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user1 = new User(1,`Anna`,`Roma`,`A.Roma@gmail.com`,111111);
let user2 = new User(2,`Olga`,`Orlova`,`O.Orlova@gmail.com`,22222);
let user3 = new User(3,`Inna`,`Tipka`, `I.Tipka@gmail.com`,33333);
let user4 = new User(4,`Tanya`,`Koval`,`T.Kooval@gmail.com`,44444);
let user5 = new User(5,`Galya`,`Soroka`,`G.Soroka@gmail.com`,55555);
let user6 = new User(6,`Ira`,`Travka`,`I.Travka@gmail.com`,66666);
let user7 = new User(7,`Lyuba`,`Fialka`,`L.Fialka@gmail.com`,77777);
let user8 = new User(8,`Slava`,`Sokolova`,`S.Sokolova@gmail.com`,88888);
let user9 = new User(9,`Natalya`,`Korsova`,`N.Korsova@gmail.com`,99999);
let user10 = new User(10,`Kristina`,`Bykova`,`K.Bykova@gmail.com`,93883);
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter =users.filter((user) => {
            if (user.id % 2 === 0) {
           return user
        }

})
console.log(usersFilter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a,b) => b.id - a.id)
console.log(usersSort)
class Client {
        //не знаю чому видає помилку
        constructor(id, name, surname, email, phone, other) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.other = other;
    }

};
let client1 = new Client(1,`Anna`,`Roma`,`A.Roma@gmail.com`,111111,[1,2,3]);
let client2 = new Client(2,`Olga`,`Orlova`,`O.Orlova@gmail.com`,22222,[1,2,3,4]);
let client3 = new Client(3,`Inna`,`Tipka`, `I.Tipka@gmail.com`,33333,[1,2]);
let client4 = new Client(4,`Tanya`,`Koval`,`T.Kooval@gmail.com`,44444, [1]);
let client5 = new Client(5,`Galya`,`Soroka`,`G.Soroka@gmail.com`,55555,[1,2]);
let client6 = new Client(6,`Ira`,`Travka`,`I.Travka@gmail.com`,66666,[1,2,3,4]);
let client7 = new Client(7,`Lyuba`,`Fialka`,`L.Fialka@gmail.com`,77777,[1,2,3]);
let client8 = new Client(8,`Slava`,`Sokolova`,`S.Sokolova@gmail.com`,88888, [1,2,3]);
let client9 = new Client(9,`Natalya`,`Korsova`,`N.Korsova@gmail.com`,99999,[1,2]);
let client10 = new Client(10,`Kristina`,`Bykova`,`K.Bykova@gmail.com`,93883,[1,2,3,4,5]);

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientsort = client.sort((a,b) =>b.other.length - a.other.length );
console.log(clientsort)