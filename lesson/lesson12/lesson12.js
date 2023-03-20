// // Cache DOM elements
const container = document.querySelector('.container');
const userDetails = document.querySelector('.user-details');

const displayUsers = (users) => {
    container.innerHTML = '';
    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p>id: ${user.id}</p>
        <a href="user-details.html?id=${user.id}">Details</a>
    `;
        container.appendChild(userDiv);
    });
};

const displayUserDetails = (user) => {
    userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;
};

const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    if (userId) {
        // Retrieve the user details and display them
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const user = await response.json();
            displayUserDetails(user);
        } catch (error) {
            console.log(error);
        }
    } else {
        // Retrieve all users and display them
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            displayUsers(users);
        } catch (error) {
            console.log(error);
        }
    }
};

init();



// Функція, яка створює блок з інформацією про користувача та додає його до сторінки

// Створити HTML та JS ,СSS код:
//  Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
//  Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//      Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
//  Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// // index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// //     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// //     блоки з короткою іфною про post - в ряд по 5 .
// //     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// //     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
// // fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
        // Виконати дії з масивом об'єктів користувачів
    // });
// Get the user id from the query string
