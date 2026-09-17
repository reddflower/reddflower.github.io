// Проверяем, есть ли старая кнопка 'myButton'
const button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', function() {
        alert('Ура! Ваш JavaScript код успешно работает!');
    });
}

// Проверяем кнопку перехода на test.html
const btnTest = document.getElementById('btnTest');
if (btnTest) {
    btnTest.addEventListener('click', function() {
        window.location.href = '/test.html'; 
    });
}

// Проверяем кнопку перехода в папку folder
const btnFolderTest = document.getElementById('btnFolderTest');
if (btnFolderTest) {
    btnFolderTest.addEventListener('click', function() {
        window.location.href = '/folder/test.html';
    });
}

// Безопасная кнопка "Назад" для любой страницы
const btnGoBack = document.getElementById('btnBack');
if (btnGoBack) {
    btnGoBack.addEventListener('click', function() {
        window.history.back(); 
    });
}