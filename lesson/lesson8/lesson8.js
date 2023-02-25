/// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let users1 = [
    {id: 8456, name: 'Masha', age: 20},
    {id: 4567, name: 'Sasha', age: 23},
    {id: 6789, name: 'Dasha', age: 19}
];
users1.sort(function (a, b){
    return a.id - b.id;
});
console.log(users1);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {


    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const client1 = new Client(1234, 'Sonya', 'fgh', 'fgh.@com1', '381234', ['milk', 'bread', 'wine', 'potato']);
const client2 = new Client(4321, 'Vasya', 'lkj', 'lkj.@com2', '384321', ['ham', 'egg', 'pizza']);
const client3 = new Client(4567, 'Olya', 'mngh', 'mngh.@com3', '386543', ['flour', 'salad', 'fish', 'egg', 'ham']);
const client4 = new Client(7654, 'Kolya', 'louy', 'louy.@com4', '382118', ['butter', 'potato', 'cheese']);

console.log(client1);
console.log(client2);
console.log(client3);
console.log(client4);


//     /
// }пустий масив, наповнити його 10 об'єктами Client

let clients = [];

for (let i = 0; i < 10; i++) {

    let client = {
        id:'ID Клієнта' + (i+1),
        name:'Клієнт'+ (i+1),
        surname:'Прізвище'+ (i+1),
        email: 'client' + (i+1) + "@example.com",
        phoneNumber: 'client'+ (i+1)
    };


    clients.push(client);
}


console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const client = [
 new Client(1234, 'Sonya', 'fgh', 'fgh.@com1', '381234', [5]),
 new Client(4321, 'Vasya', 'lkj', 'lkj.@com2', '384321', [3]),
 new Client(4567, 'Olya', 'mngh', 'mngh.@com3', '386543', [6]),
 new Client(7654, 'Kolya', 'louy', 'louy.@com4', '382118', [4])
 ]
client.sort(function (a, b){
    return a.order -b.order;
});
console.log(client);

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineVolume}`);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function(newValue) {
        this.year = newValue;
    }

    this.addDriver = function(driver) {
        this.driver = driver;
    }
}
const car1 = new Car('A4', 'Audi', 2021, 220, 2.0);
const car2 = new Car('Camry', 'Toyota', 2019, 200, 3.5);
car1.drive();
car2.info();
car1.increaseMaxSpeed(30);
car2.changeYear(2022);
car1.addDriver({name: 'Igor', age: 35, experience: 10}); // Додає водія до об'єкту car1

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car1 {
constructor(model, manufacturer, year, maxSpeed, engineVolume) {
this.model = model;
this.manufacturer = manufacturer;
this.year = year;
this.maxSpeed = maxSpeed;
this.engineVolume = engineVolume;
}

drive() {
console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
//
info() {
console.log(`Модель ${this.model}`);
console.log(`Виробник ${this.manufacturer}`);
console.log(`Рік випуску ${this.year}`);
console.log(`Максимальна швидкість ${this.maxSpeed}`);
console.log(`Об'єм двигуна ${this.engineVolume}`);
}

increaseMaxSpeed(newSpeed) {
this.maxSpeed += newSpeed;
}

changeYear(newValue) {
this.year = newValue;
}

addDriver(driver) {
this.driver = driver;
}
}

const car3 = new Car('Outback', 'Subaru', 2021, 240, 2.5);
const car4 = new Car('Accord', 'Honda', 2020, 220, 3.5);

car3.drive();
car4.info();
car3.increaseMaxSpeed(50);
car4.changeYear(2022);
car3.addDriver({name: 'Andriy', age: 45, experience: 15});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let Cinderellas = [
   {name:'Anna',age:18,shoeSize:33},
    {name:'Sonya',age:19,shoeSize:34},
    {name:'Ella',age:20,shoeSize:31},
    {name:'Dana',age:17,shoeSize:35},
    {name:'Emma',age:21,shoeSize:36},
    {name:'Kira',age:22,shoeSize:32},
    {name:'Rimma',age:19,shoeSize:35},
    {name:'Sasha',age:23,shoeSize:37},
    {name:'Nina',age:16,shoeSize:33},
    {name:'Karina',age:20,shoeSize:34},
    ]
    class Prince {
        constructor(name, age, shoeSize) {
            this.name = name;
            this.age = age;
            this.shoeSize = shoeSize;
        }
    }
    let prince = new Prince('Taras', 27,31);
let foundCinderella;
for (let i = 0;i < Cinderellas.length; i++){
    if (Cinderellas[i].shoeSize === prince.shoeSize) {
        foundCinderella = Cinderellas[i] ;
        break;
    }
}
  console.log('Попелюшка яка підходить за розміром взуття принца');
console.log(foundCinderella) ;

foundCinderella = Cinderellas.find(function (cinderella){
    return cinderella.shoeSize === prince.shoeSize;

});
console.log('Попелюшка яка підходить за розміром взуття принца');
console.log(foundCinderella) ;








