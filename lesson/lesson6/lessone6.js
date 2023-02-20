// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let a = 'hello world'
console.log('hello world'.length)
let b = 'lorem ipsum'
console.log('lorem ipsum'.length)
let c = 'javascript is cool'
console.log('javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upperCase = a.toUpperCase();
console.log(upperCase);

let upperCase1 = b.toUpperCase();
console.log(upperCase1);

let upperCase2 = c.toUpperCase();
console.log(upperCase2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(upperCase.toLowerCase());
console.log(upperCase1.toLowerCase());
console.log(upperCase2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let d = ' dirty string   ';

console.log(d.trim());//'dirty string'

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let split = str.split(',');
console.log(split);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const string = numbers.map(numbers => ' ' + numbers);
console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sort = nums.sort((a,b) => a-b);
// console.log(sort);

// let nums1 = [11,21,3];
// let sort1 = nums1.sort((a,b)=>b-a);
// console.log(sort1);

//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(coursesAndDurationArray => coursesAndDurationArray.monthDuration > 5);
console.log(filter);


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map = coursesAndDurationArray.map((value, index) => {
    return {title: string, monthDuration: numbers, id: index + 1};
})
console.log(map);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз

// - всі шістки

// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardsSpade = [

  { cardSuit: 'spade', value: '6', color: 'black' },
  { cardSuit: 'spade', value: '7', color: 'black' },
  { cardSuit: 'spade', value: '8', color: 'black' },
  { cardSuit: 'spade', value: '9', color: 'black' },
  { cardSuit: 'spade', value: '10', color: 'black' },
  { cardSuit: 'spade', value: 'jack', color: 'black' },
  { cardSuit: 'spade', value: 'queen', color: 'black' },
  { cardSuit: 'spade', value: 'king', color: 'black' },
  { cardSuit: 'spade', value: 'ace', color: 'black' },];



let cardsDiamond = [
     {cardSuit: 'diamond', value: '6', color: 'red'},
  { cardSuit: 'diamond', value: '7', color: 'red' },
  { cardSuit: 'diamond', value: '8', color: 'red' },
  { cardSuit: 'diamond', value: '9', color: 'red' },
  { cardSuit: 'diamond', value: '10', color: 'red' },
  { cardSuit: 'diamond', value: 'jack', color: 'red' },
  { cardSuit: 'diamond', value: 'queen', color: 'red' },
  { cardSuit: 'diamond', value: 'king', color: 'red' },
  { cardSuit: 'diamond', value: 'ace', color: 'red' },
];
let cardsHeart =  [
    { cardSuit: 'heart', value: '6', color: 'red' },
  { cardSuit: 'heart', value: '7', color: 'red' },
  { cardSuit: 'heart', value: '8', color: 'red' },
  { cardSuit: 'heart', value: '9', color: 'red' },
  { cardSuit: 'heart', value: '10', color: 'red' },
  { cardSuit: 'heart', value: 'jack', color: 'red' },
  { cardSuit: 'heart', value: 'queen', color: 'red' },
  { cardSuit: 'heart', value: 'king', color: 'red' },
  { cardSuit: 'heart', value: 'ace', color: 'red' },
];
let cardsClubs = [
      { cardSuit: 'clubs', value: '6', color: 'black' },
  { cardSuit: 'clubs', value: '7', color: 'black' },
  { cardSuit: 'clubs', value: '8', color: 'black' },
  { cardSuit: 'clubs', value: '9', color: 'black' },
  { cardSuit: 'clubs', value: '10', color: 'black' },
  { cardSuit: 'clubs', value: 'jack', color: 'black' },
  { cardSuit: 'clubs', value: 'queen', color: 'black' },
  { cardSuit: 'clubs', value: 'king', color: 'black' },
  { cardSuit: 'clubs', value: 'ace', color: 'black' },]

// - знайти піковий туз
let aceOfSpades = cardsSpade.find(card =>card.value ==='ace');
console.log(aceOfSpades);
// - всі шістки
let allSixes = [...cardsSpade,...cardsDiamond,...cardsHeart,...cardsClubs].filter(card=> card.value === '6');
console.log(allSixes);

// - всі червоні карти
let allRedCards = [...cardsDiamond,...cardsHeart].filter(card=>card.color==='red');
console.log(allRedCards);

// - всі буби

let allClubs = cardsClubs;
console.log(allClubs);

//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cards = [...cardsSpade,...cardsDiamond,...cardsHeart,...cardsClubs];
let cardsBySuit = cards.reduce((result,card) => {
    if (!result[card.cardSuit]) {
        result[card.cardSuit] = [];

    }
    result[card.cardSuit].push(card);
    return result;
}, { spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(cardsBySuit);



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);
[    {        title: 'Frontend',        monthDuration: 4,        hourDuration: 909,        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}
]
let dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);
[    {        title: 'JavaScript Complex',        monthDuration: 5,        hourDuration: 909,        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
},
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
