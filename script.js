const inpNickName = document.getElementById('inputNickName');
const inpName = document.getElementById('inputName');
const textarea = document.querySelector('.textarea');
const button = document.querySelector('.button');
const userLine = document.querySelector('.postUserIdentify');
const textLine = document.querySelector('.postTextIdentify');
const postContainer = document.querySelector('.postContainer');
const labelNickName = document.querySelector('.labelNickName');
const labelName = document.querySelector('.labelName');
const labelText = document.querySelector('.labelText');

let toggleNick, toggleName, toggleText = false;

button.disabled = true;

const regNickName = /[А-Яа-яЄ-іє/!/@/#/$/%/^/`/~/&/*/(/)-/_/=/+/?/>/./,/</"/'/ /:/;/{/[/}/]/g;
const regName = /[А-Яа-яЄ-іє/0-9/!/@/#/$/%/^/`/~/&/*/(/)-/_/=/+/?/>/./,/</"/'/ /:/;/{/[/}/]/g;
const regText = /[А-Яа-яЄ-іє/0-9/~/`/@/#/$/%/^/&/*/(/)/-/_/[/{//}/+/=/</>///;/:/'/"/]/g;


inpNickName.oninput = function() {
this.value = this.value.replace(regNickName, '');
let strNickName = "";
    strNickName = strNickName + inpNickName.value;
    arrNick = strNickName.split("");
    if(strNickName.length < 1) {
        toggleNick = false;
        checkButton();
    }
    if(strNickName.length >= 1) {
        toggleNick = true;
        checkButton();

    }
    inpNickName.classList.remove('fieldset');
    labelName.classList.remove('active');
    labelNickName.classList.remove('active');
    labelText.classList.remove('active');
}

inpName.oninput = function() {
    this.value = this.value.replace(regName, '');
    let strName = "";
    strName = strName + inpName.value;
    arrName = strName.split("");
    if(strName.length >= 1) {
        toggleName = true;
        checkButton();

    }

    inpName.classList.remove('fieldset');
    labelName.classList.remove('active');
    labelNickName.classList.remove('active');
    labelText.classList.remove('active');
}

textarea.oninput = function() {
    this.value = this.value.replace(regText, '');
    let strText = "";
    strText = strText + textarea.value;
    arrText = strText.split("");
    if(arrText.length >= 1) {
        toggleText = true;
        checkButton();
    }
    textarea.classList.remove('fieldset');
    labelName.classList.remove('active');
    labelNickName.classList.remove('active');
    labelText.classList.remove('active');
}

const createPost = (nickName, userName, postText) => {
    const div = document.createElement('div');
    div.className="postsContainer";
    postContainer.prepend(div);

    const pUser = document.createElement('p');
    pUser.className = "postUserIdentify";
    div.appendChild(pUser);

    const pText = document.createElement('p');
    pText.className = "postTextIdentify";
    div.appendChild(pText);

    pUser.innerHTML = `${nickName} - ${userName}`;
    pText.innerHTML = `${postText}`;
}

const cleanInputs = () => {
    inpNickName.value = "";
    inpName.value = "";
    textarea.value = "";
}

const checkButton = () => {
    if(toggleNick === true && toggleName === true && toggleText === true) {
        button.disabled = false;
    }
}

button.addEventListener('click', () => {

    const nickName = inpNickName.value;
    const userName = inpName.value;
    const postText = textarea.value;

    if(nickName.length >= 1 && nickName.length < 3 || nickName.length >= 24) {

        inpNickName.classList.add('fieldset');
        labelNickName.classList.add('active');
        return false;
    }

    let count = 0;
    for(let i = 0; i < nickName.length; i++) {
        if(nickName[i].match(/[a-z]/)) {
            count++;
        }
    }
    if(count < 1) {
        inpNickName.classList.add('fieldset');
        labelName.classList.add('active');
        return false;
    }

    if(userName.length >= 1 && userName.length < 3 || userName.length >= 100) {
        inpName.classList.add('fieldset');
        labelNickName.classList.add('active');
        return false;
    }

    if(postText.length >= 1 && postText.length < 3 || postText.length >= 1000) {
        textarea.classList.add('fieldset');
        labelText.classList.add('active');
        return false;
    }

    cleanInputs();
    createPost(nickName, userName, postText);
    button.disabled = true;
    toggleName = false;
    toggleNick = false;
    toggleText = false;
})




