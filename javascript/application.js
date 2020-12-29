/**
 * File: application.js
 * Author: pvavercak
 */

function initializeAnimation() {
    document.getElementById("main-flexbox-container").style.display="none";
    document.getElementById("main-animation-container").style.display="grid";
}

function closeCurrentAnimation() {
    document.getElementById("main-flexbox-container").style.display="flex";
    document.getElementById("main-animation-container").style.display="none";
}

const mainFrame = () => {
    Array.from(document.getElementsByClassName("flexbox-item")).forEach(function(flexboxItem) {
        flexboxItem.addEventListener("click", initializeAnimation, false);
    });

    buildPageWithLangElements();
}

mainFrame();
