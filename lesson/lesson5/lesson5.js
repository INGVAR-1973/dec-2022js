// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRectangle = (a,b) => a * b;

console.log(areaRectangle(5,7));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaCircle = (pi,r) => pi * r * r;

console.log(areaCircle(3.14,2));

// - створити функцію яка обчислює та повертає об.єм циліндру висотою h, та радіутом r

let volumeCylinder = (pi,r,h) => pi * r * r * h;
console.log(volumeCylinder(3.14,2,8));

// - створити функцію яка приймає масив та виводить кожен його елемент


let foobar = (array) => {
    for (const item of array) {
        console.log(item);
    }

}
const array = [1, true, 3, 'text'];
foobar(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент



let foobar2 = (text) => {
    document.write(`my world very beautiful`);


}
let text = (`<div><h2>hello</h2><p>my world very beautiful</p></div>`);
foobar2(text);



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let foobar3 = (sol) =>
{
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<div>${'string'}</div>`);


    }
    document.write(`</ul>`);

}

foobar3('string');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let foobar4 = (text, count) =>  {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<div>${text}</div>`);
    }
    document.write(`</ul>`);

}

foobar4('Bay', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



let foo7 = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul`);
}
const array2 = [false, 8, 4, 'west', 2, true];

foo7(array2);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let foobar6 = (ar) => {

    document.write(`<div>`);
    for (let i = 0; i < ar.length; i++) {
        const user = ar[i];
        document.write(`<ul>`)

        document.write(`<li>${user.id} ${user.name} ${user.age} </li>`);

        document.write(`</ul>`);

    }
    document.write(`</div>`);

}
let users1 = [
    {id: 1234, name: 'Masha', age: 20},
    {id: 4567, name: 'Sasha', age: 23},
    {id: 6789, name: 'Dasha', age: 19}
];

foobar6(users1);

// - створити функцію яка повертає найменьше число з масиву

let minNum = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (min > number) {
            min = number
        }
    }
    return min;
}

console.log(minNum([67, 5, 23]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (numbers) => {
    let bow = 0;
    for (const number of numbers) {
        bow += number;
    }
    return bow;
}
sum([1, 2, 10]);
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let n1 = arr[index1];
    let n2 = arr[index2];
    33
    arr[index1] = n2;
    arr[index2] = n1;
    return arr;
}

swap([11, 22, 33, 44], 0, 1);
console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (uah, currencies, exitCurrency) => {

    for (const item of currencies) {
        if (item.currency === exitCurrency) {
            return uah / item.value;

        }
    }

}
console.log(exchange(10000,


        [{currency: 'USD', value: 40},
            {currency: 'EUR', value: 42},
        ],
        'USD'
    )
)
