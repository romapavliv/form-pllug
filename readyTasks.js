const animals = document.getElementById('animals');
const birds = document.getElementById('birds');
const dangerous = document.querySelector('.dangerous');
const pet = document.querySelectorAll('.pet');
const li = document.querySelectorAll('li');
const catItem = document.getElementById('cat');
const container = document.querySelector('.container');

// Функція яка збільшує розмір шрифту всіх елементів списку animals
const changeFontSize = () => {
    animals.style.fontSize = "20px";
}

// changeFontSize();

// Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous
const changeColor = () => {
    dangerous.style.color = "red";
}

// changeColor();

// Функція яка видаляє всі класи останнього елемента списку animals

const removeClasses = () => {
    animals.lastElementChild.removeAttribute("class");
}
// removeClasses();

// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є першим
const addElem = () => {
    let newItem = document.createElement('li').innerText = "new Bird";
    birds.prepend(newItem);
}

// addElem();

// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є останнім
const addLastElem = () => {
    let newItem = document.createElement('li').innerText = "new Bird";
    birds.append(newItem);
}

// addLastElem();

// Функція яка видаляє всі елементи які мають клас pet, але якщо крім класу pet є ще інші класи, то вони повинні залишитись

const removeElem = () => {
    li.forEach(el => el.classList == 'pet' ? el.remove() : el);
}

// removeElem();

// Функція яка змінює background-color наступного елемента після елемента з id="cat"

const changeBg = () => {
    catItem.nextElementSibling.style.background = "black";
}

// changeBg();

// Функція яка перетворює класи елементів списку animals і додає до цих елементів data-* атрибути з назвою класу який був прибраний. Наприклад: <li class="wild dangerous">Tiger</li> => <li data-wild data-dangerous>Tiger</li>

const createAtr = () => {
    for (let i = 0; i < animals.children.length; i++) {
        let classItem = animals.children[i].className.split(' ')[0];
        animals.children[i].setAttribute(`data-${classItem}`, `data-${classItem}`);
        animals.children[i].removeAttribute("class");
    }
}

// createAtr();

// Функція яка змінює порядок елементів в списку animals - останній елемент стає першим, передостанній  - другим, і т.д.

const reverseList = () => {
    Array.from(animals.children).reverse().forEach(el => el.parentNode.appendChild(el));
}

// reverseList();

// Функція яка додає додає новий список id="fish" перед списком birds

const dataFish = ["Shark", "Salmon", "Trout", "Tuna"];
const createNewList = (dataFish) => {

    const ul = document.createElement('ul');
    ul.id = "fish";

    for (let i = 0, ln = dataFish.length; i < ln; i++) {
        let li = document.createElement('li');
        li.innerHTML = dataFish[i];
        ul.appendChild(li);
    }

    container.appendChild(ul).after(birds);
}

// createNewLis-t(dataFish);
