// GLOBAL VARIABLES
let environment = getEnvironment();

let animation = document.createElement('div');

//document.body.appendChild(animation);
document.getElementById("animationContainer").appendChild(animation);
animation.id = 'animation';
// get the width of the html document
let htmlWidth = returnWidth();

// get the height of the html document
let htmlHeight = returnHeight();

let divWidth, divHeight;

if (environment === "pc") {
    const htmlToDivRatio = 0.6;
    // width of the div in html
    divWidth = htmlWidth * htmlToDivRatio;
    // height of the div in html
    divHeight = htmlHeight * htmlToDivRatio;
} else if (environment === "mobile") {
    divWidth = htmlWidth;
    // 4X 16:9, that's why 36 and 16;
    const widthRatio = 16;
    const heightRatio = 36;
    divHeight = htmlWidth * heightRatio / widthRatio;
}

// set the width and height of the div
animation.style.width = divWidth + 'px';
animation.style.height = divHeight+ + 'px';
// create a new svg element and set it's size
let draw = SVG("animation").size(divWidth, divHeight+200);
// set padding to 1%
const onePercent = 0.01;
const padding = divWidth * onePercent;

// width and height of ONE canvas out of 4
let canvasWidth;
let canvasHeight;

if (environment === "pc") {
    canvasWidth = Number((divWidth / 2) - 2 * padding);
    canvasHeight = Number((divHeight / 2) - 2 * padding);
} else if (environment === "mobile") {
    canvasWidth = Number((divWidth) - 2 * padding);
    canvasHeight = Number((divHeight / 4) - 4 * padding);
}

introduction();

let audio_introduction = new Audio('../sound/introduction.mp3');


