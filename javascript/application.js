/**
 * File: application.js
 * Author: vavercak.pato@gmail.com
 */

// imports
import {NoobAnimation} from "./modules/animation_objects/noob.js";
import {LanguageElements} from './modules/common.js';

// shared objects in application
const languageElements = new LanguageElements();

function initializeAnimation() {
    document.getElementById("main-flexbox-container").style.display="none";
    document.getElementById("main-animation-container").style.display="grid";
}

function closeCurrentAnimation() {
    document.getElementById("main-flexbox-container").style.display="flex";
    document.getElementById("main-animation-container").style.display="none";
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

    const t = new NoobAnimation();
    t.foo();

    window.requestLanguageChange = requestLanguageChange;
}

mainFrame();
