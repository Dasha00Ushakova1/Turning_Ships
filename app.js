'use strict';

// 1. Список персонажей (берем самых ярких из вашего списка)
// Чтобы добавить картинку, положите её в папку images/ и укажите имя файла.
const CHARACTERS = [
    { name: "Кейлус Ла Орр", img: "keilus.jpg" },
    { name: "Роза Фария Ла Оро", img: "roza.jpg" },
    { name: "Качиан Ла Орр", img: "kachian.jpg" },
    { name: "Кишиар Ла Орр", img: "kishiar.jpg" },
    { name: "Юливер", img: "uliver.jpg" },
    { name: "Хебрейн Рейфланг", img: "hebreyn.jpg" },
    { name: "Осем Нулли", img: "osem.jpg" },
    { name: "Эннел Каспирл", img: "ennel.jpg" },
    { name: "Юдер Айл", img: "yuder.jpg" },
    { name: "Канна Ванд", img: "kanna.jpg" },
    { name: "Стайбер Рэндли", img: "staiber.jpg" },
    { name: "Эвер Бэк", img: "ever.jpg" },
    { name: "Гакейн Болунвалд", img: "gakein.jpg" },
    { name: "Хинн Элдер", img: "hinn.jpg" },
    { name: "Финн Элдер", img: "finn.jpg" },
    { name: "Лушан", img: "lushan.jpg" },
    { name: "Энон", img: "enon.jpg" },
    { name: "Натан Цукерман", img: "natan.jpg" },
    { name: "Хеллен Каспирл", img: "hellen.jpg" },
    { name: "Мик Шуден", img: "mick.jpg" },
    { name: "Маккларен III", img: "makklaren.jpg" },
    { name: "Антура Синсо", img: "antura.jpg" },
    { name: "Джино Борделли", img: "dzhino.jpg" },
    { name: "Санз", img: "sanz.jpg" },
    { name: "Нахан", img: "nahan.jpg" },
    { name: "Михаэль Пант", img: "mihael.jpg" },
    { name: "Лорна Бейт", img: "lorna.jpg" },
    { name: "Эджейн Афнан Неларн", img: "edzheyn.jpg" },
    { name: "Мелах Кантинто", img: "melah.jpg" }
];

function getRandomCharacter() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

// Форматирование времени
function formatTimestamp(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ` +
           `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// ==========================================
// ЛОГИКА ДЛЯ СТРАНИЦЫ index.html
// ==========================================
function initGenerator() {
    const spinBtn = document.getElementById('spin-all');
    const img1 = document.getElementById('img-1');
    const name1 = document.getElementById('name-1');
    const img2 = document.getElementById('img-2');
    const name2 = document.getElementById('name-2');
    const resultLine = document.getElementById('result-line');

    spinBtn.addEventListener('click', () => {
        // 1. Выбираем двух РАЗНЫХ персонажей
        let char1 = getRandomCharacter();
        let char2 = getRandomCharacter();
        
        // Защита от выпадения одного и того же дважды
        while (char1.name === char2.name) {
            char2 = getRandomCharacter();
        }

        // 2. Анимация "кручения" (быстрое мигание)
        let ticks = 0;
        const interval = setInterval(() => {
            name1.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            name2.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            ticks++;
            
            if (ticks >= 10) {
                clearInterval(interval);
                
                // 3. Вывод результата
                name1.textContent = char1.name;
                name2.textContent = char2.name;

                // Картинки (если файла нет, покажет заглушку)
                img1.src = `./images/${char1.img}`;
                img2.src = `./images/${char2.img}`;
                img1.style.display = 'block';
                img2.style.display = 'block';
                
                // Обработка ошибки загрузки картинки
                img1.onerror = () => { img1.src = 'https://placehold.co/200x200?text=No+Photo'; };
                img2.onerror = () => { img2.src = 'https://placehold.co/200x200?text=No+Photo'; };

                // 4. Формируем текст результата
                const resultText = `${char1.name} + ${char2.name}`;
                resultLine.innerHTML = `<span class="result__text">${resultText}</span>`;

                // 5. Сохраняем в историю (localStorage)
                saveHistory(char1.name, char2.name, resultText);
            }
        }, 50);
    });
}

function saveHistory(c1, c2, result) {
    let history = JSON.parse(localStorage.getItem('pairHistory') || '[]');
    
    const entry = {
        time: formatTimestamp(new Date()),
        char1: c1,
        char2: c2,
        result: result
    };
    
    history.unshift(entry); // Добавляем в начало
    localStorage.setItem('pairHistory', JSON.stringify(history));
    
    // Показываем всплывашку
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = 'Пара сохранена в историю!';
        toast.className = 'toast toast--success';
        toast.hidden = false;
        setTimeout(() => toast.hidden = true, 2000);
    }
}

// ==========================================
// ЛОГИКА ДЛЯ СТРАНИЦЫ history.html
// ==========================================
function initHistory() {
    const tbody = document.getElementById('history-body');
    const emptyEl = document.getElementById('history-empty');
    
    let history = JSON.parse(localStorage.getItem('pairHistory') || '[]');

    if (history.length === 0) {
        emptyEl.hidden = false;
        return;
    }

    emptyEl.hidden = true;

    history.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.time}</td>
            <td>${item.char1}</td>
            <td>${item.char2}</td>
            <td>${item.result}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Запуск нужной логики в зависимости от страницы
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('page--generator')) initGenerator();
    if (document.body.classList.contains('page--history')) initHistory();
});
