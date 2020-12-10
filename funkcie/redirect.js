const screenWidthLimit = 1000;
const screenHeightLimit = 500;
window.addEventListener('resize', redirect);
redirect();

function returnWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function returnHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function redirect() {
    "use strict";
    let screenWidth = returnWidth();
    let screenHeight = returnHeight();
    if (screenWidth < screenWidthLimit || screenHeight < screenHeightLimit) {
        /* if(window.location.href.indexOf("mobile") === -1) {
             window.location.replace("mobile.html");
         }*/
    } else {
        if (window.location.href.indexOf("index") === -1) {
            console.log("ano je to komp");
            window.location.replace("index.html");
        }
    }
}

function getEnvironment() {
    let screenWidth = returnWidth();
    let screenHeight = returnHeight();
    if (screenWidth < screenWidthLimit || screenHeight < screenHeightLimit) {
        return "mobile";
    } else {
        //console.log("ano je to komp");
        return "pc";
    }
}