document.addEventListener("DOMContentLoaded", function() {
    // Получаем имя пользователя из localStorage (если оно сохранено)
    let savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('greeting').textContent = `Привет, ${savedUsername}!`;
    }

    // Обработчик события для кнопки сохранения имени пользователя
    document.getElementById('saveBtn').addEventListener('click', function() {
        let username = document.getElementById('username').value;
        if (username) {
            localStorage.setItem('username', username);
            document.getElementById('greeting').textContent = `Привет, ${username}!`;
        }
    });

    // Обработчик события для кнопки показа заставки
    document.getElementById('showSplashBtn').addEventListener('click', function() {
        showSplashScreen();
    });

    // Обработчик события для закрытия заставки при клике на любое место экрана
    document.getElementById('splashScreen').addEventListener('click', function() {
        this.style.display = 'none';
    });
});

function showSplashScreen() {
    let splashScreen = document.getElementById('splashScreen');
    splashScreen.style.display = 'flex';

    // Установка текущей даты
    let currentDate = new Date().toLocaleDateString();
    document.getElementById('splashDate').textContent = currentDate;

    // Получение имени пользователя из localStorage
    let savedUsername = localStorage.getItem('username');
    document.getElementById('splashUsername').textContent = savedUsername ? savedUsername : "гость";
}

function executeTask0P1() {
    let variable1 = "Привет!"; // строка
    let variable2 = 123; // число
    let variable3 = true; // булево значение
    let variable4; // неопределенное значение
    let variable5 = {}; // объект
    let variable6 = function () { }; // функция

    let variable1Type = typeof variable1;
    let variable2Type = typeof variable2;
    let variable3Type = typeof variable3;
    let variable4Type = typeof variable4;
    let variable5Type = typeof variable5;
    let variable6Type = typeof variable6;

    alert("Переменная 1: " + variable1 + " - является типом: " + variable1Type);
    alert("Переменная 2: " + variable2 + " - является типом: " + variable2Type);
    alert("Переменная 3: " + variable3 + " - является типом: " + variable3Type);
    alert("Переменная 4: " + variable4 + " - является типом: " + variable4Type);
    alert("Переменная 5: " + variable5 + " - является типом: " + variable5Type);
    alert("Переменная 6: " + variable6 + " - является типом: " + variable6Type);
}

function executeTask1P1() {
    let zodiacSign = prompt("Введите ваш знак зодиака:");

    if (zodiacSign !== null) {
        zodiacSign = zodiacSign.toLowerCase();

        switch (zodiacSign) {
            case 'овен':
                alert("Привет, Овен!");
                break;
            case 'телец':
                alert("Привет, Телец!");
                break;
            case 'близнецы':
                alert("Привет, Близнецы!");
                break;
            case 'рак':
                alert("Привет, Рак!");
                break;
            case 'лев':
                alert("Привет, Лев!");
                break;
            case 'дева':
                alert("Привет, Дева!");
                break;
            case 'весы':
                alert("Привет, Весы!");
                break;
            case 'скорпион':
                alert("Привет, Скорпион!");
                break;
            case 'стрелец':
                alert("Привет, Стрелец!");
                break;
            case 'козерог':
                alert("Привет, Козерог!");
                break;
            case 'водолей':
                alert("Привет, Водолей!");
                break;
            case 'рыбы':
                alert("Привет, Рыбы!");
                break;
            default:
                alert("Извините, я не знаю такого знака зодиака. Пожалуйста, введите корректный знак.");
        }
    }
}

function executeTask1P2() {
    let array1 = [1, 2, 3, 4, 5];
    alert("Способ 1: " + array1.join(", "));

    // Способ 2: С помощью конструктора Array()
    let array2 = new Array(1, 2, 3, 4, 5);
    alert("Способ 2: " + array2.join(", "));

    // Способ 3: Добавление элементов по одному
    let array3 = [];
    array3.push(1);
    array3.push(2);
    array3.push(3);
    array3.push(4);
    array3.push(5);
    alert("Способ 3: " + array3.join(", "));
}

function executeTask2P2() {
    let myArray = [10, 20, 30, 40, 50];

    alert("5-й элемент массива: " + myArray[4]);

    myArray[4] = 55;
    alert("\nИзмененное значение 5-го элемента массива: " + myArray[4]);
}

function executeTask2P1() {
    let numbers1 = '';
    for (let i = 1; i <= 40; i++) {
        numbers1 += i + ' ';
    }
    alert(numbers1);

    let numbers2 = '';
    let j = 1;
    while (j <= 40) {
        numbers2 += j + ' ';
        j++;
    }
    alert(numbers2);

    let numbers3 = '';
    let k = 1;
    do {
        numbers3 += k + ' ';
        k++;
    } while (k <= 40);
    alert(numbers3);
}

function executeTask3P1() {
    function showPopup() {
        while (true) {
            alert("Привет, как дела?");
        }
    }

    showPopup();
}

function executeTask4P1() {
    let userInput = prompt("Введите любое число больше 5:");

    if (userInput === null || userInput.trim() === "") {
        executeTask4P1();
    } else {
        let number = parseFloat(userInput);

        if (!isNaN(number) && number > 5) {
            alert("Поздравляем! Вы ввели число больше 5!");
        } else {
            executeTask4P1();
        }
    }
}

function executeTask5P1() {
    let output = "";
    for (let i = 8; i <= 20; i++) {
        if (i % 2 === 0) {
            output += i + " ";
        }
    }
    alert("Четные числа от 8 до 20: " + output);
}

function executeTask6P1() {
    let output = "";
    for (let i = 1; i <= 7; i++) {
        if (i === 5) {
            continue;
        }
        if (i % 2 !== 0) {
            output += i + " ";
        }
    }
    alert("Нечетные числа от 1 до 7, пропуская число 5: " + output);
}

function executeTask3P2() {
    let myArray = [10, 20, 30, 40, 50];

    function showAlert() {
        if (showAlert.state === "length") {
            alert("Длина массива: " + myArray.length);
            showAlert.state = "array";  // Смена состояния
        } else {
            alert("Массив: " + myArray.join(", "));
            showAlert.state = "length";  // Смена состояния
        }
    }

    showAlert.state = "array";

    showAlert();

    let output1 = document.getElementById('output1');
    output.onmouseover = showAlert;
}

function executeTask4P2() {
    let myArray = [10, 20, 30, 40, 50];

    let output1 = document.getElementById('output1');

    let text = "Элементы массива: ";

    for (let i = 0; i < myArray.length; i++) {
        text += myArray[i] + ", ";
    }

    output1.innerText = text;
}

function executeTask5P2() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    let mergedArray = array1.concat(array2);

    let output2 = document.getElementById('output2');

    alert("Объединенный массив: " + mergedArray.join(", "));
}

function executeTask6P2() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    let mergedArray = array1.concat(array2);

    let lastElement = mergedArray.pop();

    let output3 = document.getElementById('output3');

    alert("Удаленный последний элемент: " + lastElement);
}

function executeTask7P2() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    let mergedArray = array1.concat(array2);

    let lastElement = mergedArray.pop();

    alert("Удаленный первый раз последний элемент: " + lastElement);

    let secondLastElement = mergedArray.pop();

    alert("Удаленный второй раз последний элемент: " + secondLastElement);
}

function executeTask8P2() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    let mergedArray = array1.concat(array2);

    mergedArray.unshift(0);

    alert("Обновленный массив: " + mergedArray.join(", "));
}

function executeTask9P2() {
    let currentDate = new Date();

    let formattedDate = currentDate.toLocaleDateString();

    alert("Сегодняшняя дата: " + formattedDate);
}

function executeTask10P2() {
    let currentDate = new Date();

    let day = currentDate.getDate();
    let monthIndex = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let monthNames = [
        "января", "февраля", "марта",
        "апреля", "мая", "июня",
        "июля", "августа", "сентября",
        "октября", "ноября", "декабря"
    ];

    let formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year + ' года';

    alert("Сегодняшняя дата: " + formattedDate);
}

function executeTask11P2() {
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function calculateRandomProduct() {
        let num1 = getRandomNumber(0, 50);
        let num2 = getRandomNumber(0, 50);
        return num1 * num2;
    }

    function showRandomProduct() {
        let product = calculateRandomProduct();
        alert("Произведение двух случайных чисел от 0 до 50: " + product);
    }

    showRandomProduct();
}
const correctAnswers = ['b', 'a', 'b', 'a', 'a', 'a', 'b', 'b', 'a', 'a'];

function calculateResults() {
    const form = document.forms.quizForm;
    const userAnswers = [];
    let score = 0;

    for (const formElement of form) {
        if (formElement.type === "radio" && formElement.checked) {
            userAnswers.push(formElement.value);
            if (formElement.value === correctAnswers[userAnswers.length - 1]) {
                score++;
            }
        }
    }

    if (userAnswers.length !== correctAnswers.length) {
        document.getElementById("results").innerHTML = "Вы ответили не на все вопросы.";
        return;
    }

    const results = document.getElementById("results");
    results.innerHTML = `Вы ответили верно на ${score} из ${correctAnswers.length} вопросов.`;

    const answers = document.getElementById("answers");
    answers.innerHTML = "";
    correctAnswers.forEach((correctAnswer, index) => {
        const li = document.createElement("li");
        li.textContent = `Вопрос ${index + 1}: ${userAnswers[index] === correctAnswer ? "верно" : "неверно"} (${userAnswers[index]})`;
        answers.appendChild(li);
    });
}

const form = document.forms.quizForm;
form.addEventListener("submit", function (event) {
    event.preventDefault(); // добавляем вызов метода preventDefault()
    calculateResults();
});
