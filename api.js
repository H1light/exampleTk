function start() {
    // Инициализируем Google Sheets API с вашими учетными данными
    gapi.client.init({
        apiKey: 'e99e5d7ec376b549ba587d7e23f98fc3ea6be205',
        clientId: '110295285327282200396',
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
    }).then(function () {
        // Загружаем данные из таблицы
        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1KeUxat0h4eddrYhc3UfY6QnzCiOUHHWTFd7886CGKvM/edit#gid=0',
            range: 'Sheet1!C2' // Указываем диапазон (ячейку C2)
        }).then(function(response) {
            // Получаем значение из ячейки C2
            var value = response.result.values[0][0];

            // Устанавливаем значение в переменную kvt1
            var kvt1 = parseFloat(value); // Преобразовываем значение в число

            // Находим элемент с id "out"
            var outElement = document.getElementById("out");

            // Устанавливаем текст элемента равным значению kvt1
            outElement.textContent = kvt1;
        });
    });
}
