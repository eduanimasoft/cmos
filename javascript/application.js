/**
 * File: application.js
 * Author: vavercak.pato@gmail.com
 */

// imports
import {LanguageElements} from './modules/language.js';
import {getAnimation} from './modules/animation.js';

// shared objects in application
const languageElements = new LanguageElements();
let animation = null;

function initializeAnimation() {
    document.getElementById("main-flexbox-container").style.display="none";
    document.getElementById("main-animation-container").style.display="grid";
    animation = getAnimation(this.attributes["name"].value);
    animation.open();
}

function closeCurrentAnimation() {
    document.getElementById("main-flexbox-container").style.display="flex";
    document.getElementById("main-animation-container").style.display="none";
    animation.close();
}

function requestLanguageChange(lang) {
    languageElements.langChange(lang);
}

const mainFrame = () => {
    Array.from(document.getElementsByClassName("flexbox-item")).forEach(function(flexboxItem) {
        flexboxItem.addEventListener("click", initializeAnimation, false);
    });

    document.getElementById('return-to-main').addEventListener('click', closeCurrentAnimation, false);

    languageElements.buildPageWithLangElements();

    window.requestLanguageChange = requestLanguageChange;
}

mainFrame();
