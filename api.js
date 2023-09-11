// Функция для инициализации клиента Google Sheets API
function initClient() {
    gapi.client.init({
        apiKey: 'e99e5d7ec376b549ba587d7e23f98fc3ea6be205',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        clientId: '110295285327282200396',
        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    }).then(function () {
        // Вызываем функцию для загрузки данных после инициализации
        getDataFromGoogleSheet();
    });
}

// Функция для загрузки данных из Google Таблицы
function getDataFromGoogleSheet() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1KeUxat0h4eddrYhc3UfY6QnzCiOUHHWTFd7886CGKvM/edit#gid=0',
        range: 'Sheet1!C2', // Здесь укажите диапазон ячейки, из которой нужно получить данные
    }).then(function (response) {
        var cellValue = response.result.values[0][0];
        // Обновляем значение на вашей веб-странице
        document.getElementById('num').innerHTML = cellValue;
    }, function (error) {
        console.error('Ошибка при загрузке данных: ', error.result.error.message);
    });
}

// Вызываем функцию для инициализации клиента Google Sheets API
function handleClientLoad() {
    gapi.load('client', initClient);
}
