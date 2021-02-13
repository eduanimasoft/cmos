// imports
import {LanguageElements} from './modules/language.js';
import {Animation} from './modules/animation.js';

// global objects
const languageElements = new LanguageElements();
let animation = null;

function initializeAnimation() {
    animation = new Animation(this.attributes["name"].value);
    animation.open();
}

function closeCurrentAnimation() {
    animation.close();
}

function requestLanguageChange(lang) {
    languageElements.langChange(lang);
}

function addReturnActionIfNeeded() {
    let mainReturn = document.getElementById('return-to-main');

    if (mainReturn) {
        mainReturn.addEventListener('click', closeCurrentAnimation, false);
    }
}

const mainFrame = () => {
    Array.from(document.getElementsByClassName("flexbox-item")).forEach(function(flexboxItem) {
        flexboxItem.addEventListener("click", initializeAnimation, false);
    });

    addReturnActionIfNeeded();

    languageElements.translatePage();

    window.requestLanguageChange = requestLanguageChange;
}

mainFrame();
