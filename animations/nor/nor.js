
function getStateA() {
    return document.getElementById('value-for-a').value;
}

function getStateB() {
    return document.getElementById('value-for-b').value;
}

function toggleCircuit() {
    let a = getStateA();
    let b = getStateB();
    changeTruthTable(a, b);
}

function changeTruthTable(a, b) {
    SVG.find('.truth-table-rect').fill('#C4C4C4');
    if (a == 1 && b == 1) {
        truthTableState3();
    }
    else if (a == 1 && b == 0) {
        truthTableState1();
    }
    else if (a == 0 && b == 1) {
        truthTableState2();
    }
    else {
        truthTableState0();
    }
}

/**
 * A == 0 && B == 0
 */
function truthTableState0() {
    moveActiveRowCursor(224, '.white-state-0');
}

/**
 * A == 1 && B == 0
 */
function truthTableState1() {
    moveActiveRowCursor(274, '.white-state-1');
}

/**
 * A == 0 && B == 1
 */
function truthTableState2() {
    moveActiveRowCursor(324, '.white-state-2');
}

/**
 * A == 1 && B == 1
 */
function truthTableState3() {
    moveActiveRowCursor(374, '.white-state-3');
}

function moveActiveRowCursor(ycoord, stateClass=".white-state-0") {
    SVG('.active-row').animate().y(ycoord);
    SVG(stateClass).fill('#FFFFFF');
}

function showDetailedNorInfo() {
    return;
}