
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const block = document.createElement('div');
block.classList.add('wrap','collapse','alpha','beta');
block.style.backgraundColor = 'blue';
block.style.color = 'yellow';
block.style.fontSize = '30px'
const body = document.querySelector('body');
body.appendChild(block);

const clone = block.cloneNode(true);
block.appendChild(clone);

  const LiArr =  ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const body1 = document.querySelector('body');
const ul = document.createElement('ul');
for (const item of LiArr) {
    const li = document.createElement('li');
    li.innerText = item ;
    ul.appendChild(li);

}
body1.appendChild(ul);



//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {
 let title = course.title;
 let duration = course.monthDuration;
 console.log(`${title} - ${duration} місяці`);
}
// JavaScript Complex - 5 місяців
// Java Complex - 6 місяців
// Python Complex - 6 місяців
// QA Complex - 4 місяці
// FullStack - 7 місяців
// Frontend - 4 місяці

//
// =========================
//
//
//
//    - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
let coursesAndDurationArray1 = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];

let container = document.createElement('div');
container.className = 'container';

for (let i = 0; i < coursesAndDurationArray1.length; i++) {
 let course = coursesAndDurationArray1[i];

 let item = document.createElement('div');
 item.className = 'item';

 let heading = document.createElement('h1');
 heading.className = 'heading';
 heading.textContent = course.title;

 let description = document.createElement('p');
 description.className = 'description';
 description.textContent = `Duration: ${course.monthDuration} months`;

 item.appendChild(heading);
 item.appendChild(description);

 container.appendChild(item);
}

document.body.appendChild(container);

//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
const body2 = document.querySelector('body');

for (const item of simpsons) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const i = document.createElement('i');
    const p = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('member');
    h1.innerText = `${item.name} - ${item.surname}`;
    i.innerText = `Age: ${item.age}`;
    p.innerText = item.info;

    img.setAttribute('alt', `${item.name} photo`);
    img.setAttribute('src', item.photo);

    div.append(h1, i, img, p);

    body2.appendChild(div);
}



// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray2= [
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
]
const body4 = document.querySelector('body');
for (const item of coursesArray2){
    const block1 = document.createElement('div');
    const title = document.createElement('h1');
    const duration = document.createElement('div');
    const mouth = document.createElement('div');
    const hour = document.createElement('div');
    const ul = document.createElement('ul');

    title.innerText = item.title;
    mouth.innerText = `mouthDuration: ${item.monthDuration}`;
    hour.innerText = `hourDuration; ${item.hourDuration}`;

    for (const module of item.modules){
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    duration.append(mouth,hour);
    block1.append(title, duration,ul);
    body4.append(block1);

}


// ------------------
//
//    - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScrіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const body3 = document.querySelector('body');
const p = document.createElement('p');
const btn = document.createElement('button');
p.innerText = ' Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScrіть так, щоб при натисканні на кнопку зникав елемент з id="text"';
btn.innerText = 'click';
body3.append(p,btn);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const ageInput = document.getElementById("age-input");
// const submitBtn = document.getElementById("submit-btn");
//
// submitBtn.addEventListener("click", function() {
//     const age = ageInput.value;
//     if (age < 18) {
//         alert("Ваш вік менше 18 років!");
//     } else {
//         alert("Ваш вік дорівнює або більше 18 років.");
//     }
// });

    //
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
    {/*<!DOCTYPE html>*/}
    {/*<html>*/}
    {/*<head>*/}
    {/*    <title>Створення таблиці</title>*/}
    {/*    <meta charset="UTF-8">*/}
    {/*</head>*/}
    {/*<body>*/}
    {/*<label for="rows-input">Кількість рядків:</label>*/}
    {/*<input type="number" id="rows-input">*/}
    {/*    <label for="cols-input">Кількість ячеєк:</label>*/}
    {/*    <input type="number" id="cols-input">*/}
    {/*        <label for="content-input">Вміст ячеєк:</label>*/}
    {/*        <input type="text" id="content-input">*/}
    {/*            <button onclick="createTable()">Створити таблицю</button>*/}
    {/*            <br><br>*/}
    {/*                <table id="my-table"></table>*/}

    {/*                <script>*/}
    {/*                    function createTable() {*/}
    {/*                    const rows = document.getElementById("rows-input").value;*/}
    {/*                    const cols = document.getElementById("cols-input").value;*/}
    {/*                    const content = document.getElementById("content-input").value;*/}
    {/*                    const table = document.getElementById("my-table");*/}
    {/*                    table.innerHTML = ""; // очистити попередню таблицю (якщо була)*/}

    {/*                    // додати рядки і ячейки з відповідним вмістом*/}
    {/*                    for (var i = 0; i < rows; i++) {*/}
    {/*                    var row = table.insertRow();*/}
    {/*                    for (var j = 0; j < cols; j++) {*/}
    {/*                    var cell = row.insertCell();*/}
    {/*                    cell.innerHTML = content;*/}
    {/*                }*/}
    {/*                }*/}
    {/*                }*/}
    {/*                </script>*/}
    {/*</body>*/}
    {/*</html>*/}
