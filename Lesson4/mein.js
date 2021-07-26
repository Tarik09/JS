// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let number = Math.ceil(Math.random() * 100);
// console.log(number);


// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// function getRandom (min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(100);
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
// console.log(getRandom());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let numbers = [1, 55, 25, 14, 145, 159, 172, 196, 20, 40, 80];
// function number () {
//     numbers.sort(function (a,b){
//         return a - b
//     });
//     document.write(numbers);
//     console.log(numbers);
// }
// number();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа


// let numbers = [1, 3, 7,99, 55, 25, 14, 145, 159, 172, 196, 20, 40, 80];
// function number () {
//     let top = numbers.filter(function (elem) {
//         if (elem % 2 ==0) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     console.log(top);
//     document.write(top);
// }
// number();

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

// let numbers = [1, 3, 7,99, 55, 25, 14, 145, 159, 172, 196, 20, 40, 80];
// function number () {
//     let roots = numbers.map(String);
//     console.log(roots);
// }
// number();



// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let users = [
//     new User(36,'Taras', 'Nudga', 'taras@gmail.com', '0671115454'),
//     new User(21,'Vitaliy', 'Gromov', 'gs@gmail.com', '0671115454'),
//     new User(20,'Sveta', 'Gromova', 'sv@gmail.com', '0671115454'),
//     new User(43,'Lena', 'Lenova', 'lena@gmail.com', '0671115454'),
//     new User(58,'Yarik', 'Rog', 'yar@gmail.com', '0671115454'),
//     new User(61,'Sergei', 'Popov', 'sp@gmail.com', '0671115454'),
//     new User(24,'Olia', 'Nudga', 'ol@gmail.com', '0671115454'),
//     new User(87,'Zoya', 'Toma', 'ttm@gmail.com', '0671115454'),
//     new User(100,'Sasha', 'Nudga', 'sh@gmail.com', '0671115454'),
//     new User(111,'Oleg', 'Naumov', 'nam@gmail.com', '0671115454'),
// ]
// let result = users.filter(user => user.id && user.id % 2 == 0);
// console.log(result);
//
// let sort = result.sort((a, b) => a.id - b.id);
// console.log(sort);



