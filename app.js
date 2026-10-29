'use strict';

// ==========================================
// ПОЛНЫЙ СПИСОК ПЕРСОНАЖЕЙ
// Если есть картинка - пишем имя файла. Если нет - пишем null.
// ==========================================
const CHARACTERS = [
    // === С ФОТО (25 человек) ===
    { name: "Джино Борделли", img: "dzhino.jpg" },
    { name: "Эджейн Афнан Неларн", img: "edzheyn.png" },
    { name: "Эннел Каспирл", img: "ennel.png" },
    { name: "Энон", img: "enon.jpg" },
    { name: "Эвер Бэк", img: "ever.jpg" },
    { name: "Финн Элдер", img: "finn.jpg" },
    { name: "Гакейн Болунвалд", img: "gakein.jpg" },
    { name: "Хебрейн Рейфланг", img: "hebreyn.png" },
    { name: "Хеллен Каспирл", img: "hellen.png" },
    { name: "Хинн Элдер", img: "hinn.jpg" },
    { name: "Качиан Ла Орр", img: "kachian.jpg" },
    { name: "Канна Ванд", img: "kanna.jpg" },
    { name: "Кейлус Ла Орр", img: "keilus.jpg" },
    { name: "Кишиар Ла Орр", img: "kishiar.jpg" },
    { name: "Лушан", img: "lushan.png" },
    { name: "Мик Шуден", img: "mick.png" },
    { name: "Нахан", img: "nahan.jpg" },
    { name: "Натан Цукерман", img: "natan.jpg" },
    { name: "Осем Нулли", img: "osem.png" },
    { name: "Роза Фария Ла Оро", img: "roza.jpg" },
    { name: "Санз", img: "sanz.jpg" },
    { name: "Стайбер Рэндли", img: "staiber.jpg" },
    { name: "Таис Юльман", img: "thais.jpg" },
    { name: "Юливер", img: "uliver.jpg" },
    { name: "Юдер Айл", img: "yuder.jpg" },

    // === БЕЗ ФОТО (Все остальные из списка) ===
    { name: "Инелла Ла Орр", img: null },
    { name: "Лафлаим Реходин Ла Орр", img: null },
    { name: "Девран Хартуд", img: null },
    { name: "Пруэль Ван Тайн", img: null },
    { name: "Ниполлион Ван Тайн", img: null },
    { name: "Ревелин Шан Апето", img: null },
    { name: "Данденион", img: null },
    { name: "Гейл", img: null },
    { name: "Дойл", img: null },
    { name: "Довер", img: null },
    { name: "Марин", img: null },
    { name: "Глое", img: null },
    { name: "Элпкинс", img: null },
    { name: "Ренев", img: null },
    { name: "Сирегин", img: null },
    { name: "Иргин Шиллер", img: null },
    { name: "Курга Сингх", img: null },
    { name: "Джек", img: null },
    { name: "Эмун Филанг", img: null },
    { name: "Марти", img: null },
    { name: "Робель", img: null },
    { name: "Марсуна", img: null },
    { name: "Онел", img: null },
    { name: "Джимми Окер", img: null },
    { name: "Хуан Ларево", img: null },
    { name: "Фиени Моффл", img: null },
    { name: "Фэй", img: null },
    { name: "Изиас Келтар", img: null },
    { name: "Герцог Диарка", img: null },
    { name: "Лангреци Да Диарка", img: null },
    { name: "Киолле Да Диарка", img: null },
    { name: "Киронн Да Диарка", img: null },
    { name: "Иделроф Да Диарка", img: null },
    { name: "Барон Дурманд", img: null },
    { name: "Барон Рэнбоу", img: null },
    { name: "Барон Милдр", img: null },
    { name: "Виконт Кломье", img: null },
    { name: "Граф Рубекулли", img: null },
    { name: "Барон Радмозель", img: null },
    { name: "Теорадо Ван Тайн", img: null },
    { name: "Герцог Апето", img: null },
    { name: "Белтрейл Шан Апето", img: null },
    { name: "Ленор Шан Апето", img: null },
    { name: "Айшес Шан Апето", img: null },
    { name: "Феодал Хартан", img: null },
    { name: "Сабеллина Хартан", img: null },
    { name: "Райол Хартан", img: null },
    { name: "Закайл Хартан", img: null },
    { name: "Зеклис Хартан", img: null },
    { name: "Дермилла", img: null },
    { name: "Эклен Вьюкан", img: null },
    { name: "Хенк", img: null },
    { name: "Герцог Хёрн", img: null },
    { name: "Леди Йеллен", img: null },
    { name: "Майра Эль Хёрн", img: null },
    { name: "Ашрав Эль Хёрн", img: null },
    { name: "Барон Джейкоб Шарлуа", img: null },
    { name: "Барон Кончэ", img: null },
    { name: "Энеска Абкачия", img: null },
    { name: "Мэлоун Обрайна", img: null },
    { name: "Колес Салмака", img: null },
    { name: "Джузеппа Конкереме", img: null },
    { name: "Ташкин Пантана", img: null },
    { name: "Найджел Азулика", img: null },
    { name: "Герцог Тайн", img: null },
    { name: "Присцилла Ван Тайн", img: null },
    { name: "Филебан Ван Тайн", img: null },
    { name: "Приам Ван Тайн", img: null },
    { name: "Барон Джозеф Вильгельм", img: null },
    { name: "Грэм Вильгельм", img: null },
    { name: "Стюард", img: null },
    { name: "Мадам Бишу", img: null },
    { name: "Эрши", img: null },
    { name: "Джим", img: null },
    { name: "Питер", img: null },
    { name: "Алик Фелгин", img: null },
    { name: "Фраа Эстр", img: null },
    { name: "Уэлливен", img: null },
    { name: "Энк", img: null },
    { name: "Денни", img: null },
    { name: "Шусайнер", img: null },
    { name: "Маргарет", img: null },
    { name: "Маккларен III", img: null },
    { name: "Мотинью Альканта", img: null },
    { name: "Морен", img: null },
    { name: "Антура Синсо", img: null },
    { name: "Галлеум", img: null },
    { name: "Нукидзо", img: null },
    { name: "Сэр Радел", img: null },
    { name: "Джеральд Мукера", img: null },
    { name: "Мегна Курлиева", img: null },
    { name: "Галексентр Бальфорс", img: null },
    { name: "Эмон", img: null },
    { name: "Атон Джин", img: null },
    { name: "Свин", img: null },
    { name: "Онаквей", img: null },
    { name: "Мэттен", img: null },
    { name: "Раума Асан Роэль", img: null },
    { name: "Айм", img: null },
    { name: "Гоум Ванман", img: null },
    { name: "госпожа Саландин", img: null },
    { name: "Мудрец", img: null },
    { name: "Карл Энфайл", img: null },
    { name: "Аджихен Тум", img: null },
    { name: "Хосанна", img: null },
    { name: "Диемон", img: null },
    { name: "Сера", img: null },
    { name: "Михаэль Пант", img: null },
    { name: "Лорна Бейт", img: null },
    { name: "Лума", img: null },
    { name: "Блейк ван Тайн", img: null },
    { name: "Первый император", img: null },
    { name: "Волшебник Модар", img: null },
    { name: "Сельцим", img: null },
    { name: "Меземевлен", img: null },
    { name: "Мелах Кантинто", img: null },
    { name: "Майки", img: null },
    { name: "Абелито", img: null },
    { name: "Певилаба Каспирл", img: null },
    { name: "Луиш Каспирл", img: null },
    { name: "Паска Каспирл", img: null },
    { name: "Петти", img: null },
    { name: "Ингелит", img: null }
];

// ==========================================
// ЛОГИКА РАНДОМАЙЗЕРА
// ==========================================
function getRandomCharacter() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

function formatTimestamp(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ` +
           `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function initGenerator() {
    const spinBtn = document.getElementById('spin-all');
    const img1 = document.getElementById('img-1');
    const name1 = document.getElementById('name-1');
    const img2 = document.getElementById('img-2');
    const name2 = document.getElementById('name-2');
    const resultLine = document.getElementById('result-line');

    spinBtn.addEventListener('click', () => {
        let char1 = getRandomCharacter();
        let char2 = getRandomCharacter();
        
        // Защита от выпадения одного и того же дважды
        while (char1.name === char2.name) {
            char2 = getRandomCharacter();
        }

        let ticks = 0;
        const interval = setInterval(() => {
            name1.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            name2.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            ticks++;
            
            if (ticks >= 10) {
                clearInterval(interval);
                
                name1.textContent = char1.name;
                name2.textContent = char2.name;

                // УМНАЯ ЛОГИКА ДЛЯ КАРТИНОК
                // Если картинка есть — показываем. Если нет — скрываем тег img.
                if (char1.img) {
                    img1.src = `./images/${char1.img}`;
                    img1.style.display = 'block';
                } else {
                    img1.style.display = 'none';
                }

                if (char2.img) {
                    img2.src = `./images/${char2.img}`;
                    img2.style.display = 'block';
                } else {
                    img2.style.display = 'none';
                }

                const resultText = `${char1.name} + ${char2.name}`;
                resultLine.innerHTML = `<span class="result__text">${resultText}</span>`;

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
    
    history.unshift(entry);
    localStorage.setItem('pairHistory', JSON.stringify(history));
    
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = 'Пара сохранена в историю!';
        toast.className = 'toast toast--success';
        toast.hidden = false;
        setTimeout(() => toast.hidden = true, 2000);
    }
}

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
    spinBtn.addEventListener('click', () => {
        let char1 = getRandomCharacter();
        let char2 = getRandomCharacter();
        
        while (char1.name === char2.name) {
            char2 = getRandomCharacter();
        }

        // Добавляем класс тряски
        const card1 = document.getElementById('slot-1');
        const card2 = document.getElementById('slot-2');
        card1.classList.add('shaking');
        card2.classList.add('shaking');

        let ticks = 0;
        const interval = setInterval(() => {
            name1.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            name2.textContent = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)].name;
            ticks++;
            
            if (ticks >= 10) {
                clearInterval(interval);
                
                // Убираем класс тряски
                card1.classList.remove('shaking');
                card2.classList.remove('shaking');

                // ... ДАЛЬШЕ ВАШ КОД ВЫВОДА ИМЕН И КАРТИНОК ...

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('page--generator')) initGenerator();
    if (document.body.classList.contains('page--history')) initHistory();
});
