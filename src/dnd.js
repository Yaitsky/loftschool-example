/* ДЗ 5.2 - Div D&D */

/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом фона и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    var elem = document.createElement('DIV'),
        randomRadius = Math.floor(100 + Math.random()*100) + 'px',
        randomColor = `${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}`,
        randomX = Math.floor(Math.random()*1000) + 'px',
        randomY = Math.floor(Math.random()*800) + 'px';

    elem.style.width = randomRadius;
    elem.style.height = randomRadius;
    elem.style.backgroundColor = `rgb(${randomColor})`;
    elem.style.position = 'absolute';
    elem.style.top = randomY;
    elem.style.left = randomX;
    elem.style.borderRadius = '50%';
    elem.classList.add('draggable-div');

    return elem;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        }
    }

    target.addEventListener('mousedown', function (e) {
        var shiftX = e.pageX - getCoords(target).left,
            shiftY = e.pageY - getCoords(target).top;

        move(e);
        function move(e) {
            target.style.left = e.pageX - shiftX + 'px';
            target.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            move(e);
        }

        target.addEventListener('mouseup', function () {
            document.onmousemove = null;
            target.onmouseup = null;
        })

        target.ondragstart = function () {
            return false;
        }
    })
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
