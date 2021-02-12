/**
 * Auxiliary function
 * @returns a value of A specified by user
 */
function getStateA() {
    return document.getElementById('value-for-a').value;
}


/**
 * Auxiliary function
 * @returns a value of B specified by user
 */
function getStateB() {
    return document.getElementById('value-for-b').value;
}


/**
 * State 0 - A == 0 && B == 0
 * State 1 - A == 1 && B == 0
 * State 2 - A == 0 && B == 1
 * State 3 - A == 1 && B == 1
 * @param {any} a - input A variable
 * @param {any} b - input B variable
 * @returns a state specified above according to a and b parameters
 */
function getStateNumber(a, b) {
    if (a == 1 && b == 1) {
        return 3;
    }
    // State 1:
    else if (a == 1 && b == 0) {
        return 1;
    }
    // State 2:
    else if (a == 0 && b == 1) {
        return 2;
    }
    // State 0:
    else {
        return 0;
    }
}


/**
 * Search for input/output values in animation's text and change them to provided values
 * @param {any} a - value for A
 * @param {any} b - value for B
 * @param {any} output - value for Y
 */
function changeIOTextValues(a, b, output) {
    SVG.find('.a-input-text').plain(`A = ${a}`);
    SVG.find('.b-input-text').plain(`B = ${b}`);
    SVG.find('.y-state').plain(`Y = ${output}`);
}


/**
 * Switch truth table's cursor to a line corresponding with the input A and B values.
 * @param {any} stateNumber - defines a state in which the animation is
 */
function changeTruthTable(stateNumber) {
    let ycoord = 224;
    switch(stateNumber) {
        case 0:
            ycoord = 224;
            break;
        case 1:
            ycoord = 274;
            break;
        case 2:
            ycoord = 324;
            break;
        case 3:
            ycoord = 374;
            break;
        default:
            ycoord = 224;
    }
    moveActiveRowCursor(ycoord, stateNumber);
}


/**
 * By providing ycoord and state number, this function moves a cursor
 * according to the animation's state and whitens a corresponding rectangle.
 * @param {any} ycoord - specifies where on Y-coord should the cursor be
 * @param {any} stateNumber - defines a state in which the animation is
 */
function moveActiveRowCursor(ycoord, stateNumber) {
    SVG.find('.truth-table-rect').fill('#C4C4C4');
    SVG('.active-row').animate().y(ycoord);
    SVG(`.rect-white-state-${stateNumber}`).fill('#FFFFFF');
}


/**
 * Search for lines that should be shorter due to a switch change.
 * To be able to shorten only non-shortened lines, it was necessary to provide
 * a custom html-element attribute called 'isshortened'.
 * This attribute holds a 'true' value in case a particular line was shortened.
 * If it holds a 'false' value, the line wasn't shortened yet and so the line
 * is going to be shortened.
 * @param {any} stateNumber - defines a state in which the animation is
 */
function shortenLines(stateNumber) {
    let shorten = SVG.find(`.line-shorten-state-${stateNumber}`);
    shorten.forEach((element)=> {
        let x2coord = element.attr('x2');
        let isShortened = element.attr('isshortened');
        console.log(isShortened);
        if(isShortened == "false") {
            element.attr('x2', x2coord - 5);
            element.attr('isshortened', "true");
        }
    });
}


/**
 * Search for lines that should be longer due to a switch change.
 * To be able to prolong only shortened lines, it was necessary to provide
 * a custom html-element attribute called 'isshortened'.
 * This attribute holds a 'true' value in case a particular line was shortened.
 * If it holds a 'false' value, the line wasn't shortened yet and so the prolongation
 * is skipped.
 * @param {any} stateNumber - defines a state in which the animation is
 */
function prolongLines(stateNumber) {
    let prolong = SVG.find(`.line-prolong-state-${stateNumber}`);
    prolong.forEach((element)=> {
        let x2coord = element.attr('x2');
        let isShortened = element.attr('isshortened');
        console.log(isShortened);
        if (isShortened == "true") {
            element.attr('x2', x2coord + 5);
            element.attr('isshortened', "false");
        }
    });
}


/**
 * Search for lines that have to be connected in the provided state
 * and connect them
 * @param {any} stateNumber - defines a state in which the animation is
 */
function connectLines(stateNumber) {
    let switches = SVG.find(`.line-connect-state-${stateNumber}`);
    switches.forEach((element) => {
        let x1coord = element.attr('x1');
        let x2coord = element.attr('x2');
        // check if a switch is disconnected
        if (x1coord > x2coord) {
            element.attr('x1', x2coord);
            shortenLines(stateNumber);
        }
    });
}


/**
 * Search for lines that have to be disconnected in the provided state
 * and disconnect them
 * @param {any} stateNumber - defines a state in which the animation is
 */
function disconnectLines(stateNumber) {
    let switches = SVG.find(`.line-disconnect-state-${stateNumber}`);
    switches.forEach((element) => {
        let x1coord = element.attr('x1');
        let x2coord = element.attr('x2');
        // check if a switch is connected
        if (x1coord == x2coord) {
            element.attr('x1', x2coord + 7.925);
            prolongLines(stateNumber);
        }
    });
}


/**
 * Search for:
 * - Lines
 * - Circles
 * - Empty Circles
 * and change their color to the one defined in their class name
 * @param {any} stateNumber - defines a state in which the animation is
 */
function changeCircuitColors(stateNumber) {
    let elementColorToNumber = {
        line : {
            "black" : "#000000",
            "green" : "#00CC00",
            "red" : "#FF0000",
            "orange" : "#FFBB00"
        },
        circle : {
            "black" : "#000000",
            "green" : "#008800",
            "red" : "#CC0000",
            "orange" : "#FFBB00"
        }
    };
    let possibleColors = ['green', 'red', 'black', 'orange'];
    possibleColors.forEach((color) => {
        let affectedItems = SVG.find(`.${color}-state-${stateNumber}`);
        affectedItems.forEach((item) => {
            if (item instanceof SVG.Line) {
                item.stroke(elementColorToNumber.line[color]);
            }
            else if (item instanceof SVG.Circle) {
                // this is the case of empty circle
                if ("white" != item.attr('fill')) {
                    item.fill(elementColorToNumber.circle[color]);
                }
                item.stroke(elementColorToNumber.circle[color]);
            }
        });
    });
}


/**
 * Search for symbols marked as advanced and show/hide them
 */
function showDetailedNorInfo() {
    let detailed = document.getElementsByClassName('detailed-symbol');
    for(let detail = 0; detail < detailed.length; ++detail) {
        detailed[detail].classList.toggle('detailed-symbol-active');
    }
}


/**
 * MAIN FUNCTION
 * Triggers all important changes in animation to adapt a state change
 * Approach:
 * 1. Get A value
 * 2. Get B value
 * 3. Get state number according to A and B combination
 * 4. Get state result using a simple ternary operator
 * 5. Change all text values of A, B and Y in animation
 * 6. Change the truth table cursor and whiten the right row
 * 7. Change the colors in the circuit
 * 8. Check out all switches in an equivalent circuit
 * 9. 
 */
function toggleCircuit() {
    let a = getStateA();
    let b = getStateB();
    let stateNumber = getStateNumber(a, b);
    let stateResult = !(a || b) ? 1 : 0;
    changeIOTextValues(a, b, stateResult);
    changeTruthTable(stateNumber);
    changeCircuitColors(stateNumber);
    connectLines(stateNumber);
    disconnectLines(stateNumber);
}
