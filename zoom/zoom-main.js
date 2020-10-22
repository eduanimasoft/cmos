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

zoom_funkcia();
zoom('scheme');


//invertor();
/*let c1Constants = c1Array[0];
let c1Arrays = c1Array[1];
let c1Objects = c1Array[2];
let powerSupply = c1Array[3];


let c2Array = drawCanvas2();
let c2Circle = c2Array[0];
let c2Points = c2Array[1];
let c2ZeroPoint = c2Array[2];

let c3Array = drawCanvas3();
let c3Objects = c3Array[0];
let c3Arrays = c3Array[1];
let c3Constants = c3Array[2];
let c3Points = c3Array[3];

let c4Array = drawCanvas4();
let c4Objects = c4Array[0];
let c4Arrays = c4Array[1];
let c4Constants = c4Array[2];

let anim = new Animation();
anim.makeRecombinationThreeDimensional();
anim.redCirclePos = anim.redCircleZero = c2ZeroPoint;
anim.depletionBorders['left'] = Math.round(c1Arrays.depletionArray['initial']['3e20_3e20']['left'] * 10) / 10;
anim.depletionBorders['right'] = Math.round(c1Arrays.depletionArray['initial']['3e20_3e20']['right'] * 10) / 10;
anim.depletionRegionSpeed = canvasWidth / 800;

// start the animation
requestAnimationFrame(animateInitial);*/