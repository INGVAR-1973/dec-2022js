
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
// Отримуємо доступ до масиву sessions з локального сховища


const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// Знаходимо контейнер, в який будемо вставляти таблицю
// const sessionsContainer = document.querySelector('#sessions-container');
const  sessionsContainer = document.querySelector('#sessions-container');
// Створюємо таблицю і додаємо заголовок
const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
th1.textContent = 'Дата';
th2.textContent = 'Час';
tr.appendChild(th1);
tr.appendChild(th2);
thead.appendChild(tr);
table.appendChild(thead);

// Додаємо кожну сесію в таблицю
const tbody = document.createElement('tbody');
sessions.forEach((session) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = session.date;
    td2.textContent = session.time;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
});
table.appendChild(tbody);

sessionsContainer.appendChild(table);



//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


// Створення масиву з 100 об'єктів
let objectsArray = [];
for (let i = 1; i <= 100; i++) {
    objectsArray.push({ id: i, name: `Object ${i}` });
}

// Оголошення змінних
let currentPage = 1;
let itemsPerPage = 10;

// Функція для відображення елементів на поточній сторінці
function displayItems() {
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let currentItems = objectsArray.slice(startIndex, endIndex);

    // Очистити список перед відображенням нових елементів
    document.getElementById("items-list").innerHTML = "";

    // Додати нові елементи до списку
    currentItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerText = `ID: ${item.id} - Name: ${item.name}`;
        document.getElementById("items-list").appendChild(listItem);
    });
}

// Функція для переміщення до наступної сторінки
function goToNextPage() {
    if (currentPage < objectsArray.length / itemsPerPage) {
        currentPage++;
        displayItems();
    }
}

// Функція для переміщення до попередньої сторінки
function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayItems();
    }
}

// Викликати функцію для відображення перших 10 елементів
displayItems();

// Додати обробники подій до кнопок "prev" та "next"
document.getElementById("prev-button").addEventListener("click", goToPreviousPage);
document.getElementById("next-button").addEventListener("click", goToNextPage);




