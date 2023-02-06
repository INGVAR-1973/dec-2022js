// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

const myArray = [1,2,true,3,4,'Igor','67',8,false,'Anna']
console.log(myArray [0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray[7]);
console.log(myArray[8]);
console.log(myArray[9]);





const bookSaintExupery = {
    title:'The little Prince',
    pageCount:'112',
    genre:'tales'

}
const bookFScottFitzgerald = {
    title: 'The Great Gatsby',
    pageCount: '144',
    genre: 'novel'
}
const bookMarioPuzo = {
    title:'The God father',
    pageCount:'608',
    genre:'detectives'
}






let userinfo1 = {
    title: 'The Little Prince',
    pageCount: 112,
    genre: 'tales',
    authors : [
       {name: 'AntoineSaintExupery'},
       {age:4} ] }
console.log(userinfo1)


    let userinfo2 = {
    title: 'The Great Gatsby',
    pageCount: 144,
    genre: 'novel',
        author : [
        {name: 'FScottFitzgerald'},
        {age: 44}]
}
let userinfo3 = {
    title:'The God father',
    pageCount:608,
    genre:'detectives',
    author: [
        {name:'MarioPuzo'},
        {age:78}
    ]
}






 let user = [
     {
    name:'Dasha',
         username:'DJ',
         password:'n123'
     },
     {
    name: 'Anna',
         username:'AN',
         password: 'a432',
     },
     {
    name: 'Sasha',
         username: 'SH',
         password: 's675',
     },
     {
    name: 'Ira',
         username: 'IR',
         password: 'i234'
     },
     {
    name: 'Tonya',
         username: 'TN',
         password: 't098',
     },
     {
    name: 'Olya',
         username: 'OL',
         password: 'o777',
     },
     {
    name: 'Yana',
         username: 'YY',
         password: 'Y0008',
     },
     {
    name: 'Yura',
         username: 'YRA',
         password: 'Y1209',
     },
     {
    name: 'Semen',
         username: 'SM',
         password: 's67m67',

     },
     {
    name: 'Masha',
         username: 'MS',
         password: 'm45m97',
     }
 ]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);







let x =-3
if (x !== 0){
console.log('вірно')}
else{console.log('невірно')}

let c = 1
if (c !== 0){
    console.log('вірно')
}
else{console.log('невірно')}

let a = 0
if (a !== 0){
    console.log('вірно')}
else{console.log('невірно')}








let time =35
if (time<=15){
    console.log('Перша четверть')
}
 else if (time<=30){
    console.log('Друга четверть')
}
else if (time<=45){
    console.log('Третя четверть')
}
else if (time<=59){
    console.log('Четверта четверть')}
    else{
        console.log('Значення не відповідає умові')
    }







    let day = 9
if (day<=10){
    console.log('перша декада')
}
else if (day <= 20){
    console.log('друга декада')
}
else if (day <=31){
    console.log('третя декада')
}
else {
    console.log('введіть число від 1 до 31')
}









const weekday = 6
switch (weekday){
    case 1:console.log('monday')
        break
    case 2:console.log('tuesday')
        break
    case 3:console.log('wednesday')
        break
    case 4:console.log('thursday')
        break
    case 5:console.log('friday')
        break
    default:console.log('це вихідний день')
}









let h = 2;
let f = 2;
if (h>f){console.log(h)}
  else if (f>h){console.log(f)}
else if (h===f){console.log('числа рівні')}







let m = false
let n = ''
n || m
console.log( n || m )






let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let monthDuration = 6
if (monthDuration > 5){console.log('Супер'

)}
else if (monthDuration < 5){console.log('Хибний курс')}




























