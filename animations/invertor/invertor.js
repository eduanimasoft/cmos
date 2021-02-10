
"use strict";
function turnAon() {
    let greenStroke = '#00CC00';
    let greenFill = '#008800';
    let gray = '#C4C4C4';
    let redStroke = '#FF0000';
    let redFill = '#CC0000';
    let black = '#000000';
    let white = '#FFFFFF';
    let rowCursor = SVG('.active-row');
    rowCursor.animate().move(593, 323);
    rowCursor.fill(greenFill);
    SVG.find('.line-green-a-on').stroke(greenStroke);
    SVG.find('.line-red-a-on').stroke(redStroke);
    SVG.find('.line-green-a-off').stroke(redStroke);
    SVG.find('.circle-green-a-on').fill(greenFill).stroke(greenFill);
    SVG.find('.circle-green-a-off').fill(redFill).stroke(redFill);
    SVG.find('.empty-circle-green-a-on').stroke(greenFill);
    SVG.find('.empty-circle-green-a-off').stroke(redFill);
    SVG.find('.disconnect-a-on').attr({x2: 327.5});
    SVG.find('.prolong-a-on').attr({x2: 320});
    SVG.find('.connect-a-on').attr({x1: 317.5});
    SVG.find('.shorten-a-on').attr({x2: 316});
    SVG.find('.white-a-on').fill(white);
    SVG.find('.white-a-off').fill(gray);
    SVG.find('.y-zero-a-on').plain('Y = 0');
    SVG.find('.a-zero-a-off').plain('A = 1');
    SVG.find('.line-black-a-on').stroke(black); // must be the last!
}

function turnAoff() {
    let greenStroke = '#00CC00';
    let greenFill = '#008800';
    let gray = '#C4C4C4';
    let redStroke = '#FF0000';
    let redFill = '#CC0000';
    let black = '#000000';
    let white = '#FFFFFF';
    let rowCursor = SVG('.active-row');
    rowCursor.animate(400).move(593, 273);
    rowCursor.fill('#FF0000');
    SVG.find('.line-green-a-on').stroke(redStroke);
    SVG.find('.line-green-a-off').stroke(greenStroke);
    SVG.find('.circle-green-a-on').fill(redFill).stroke(redFill);
    SVG.find('.circle-green-a-off').fill(greenFill).stroke(greenFill);
    SVG.find('.empty-circle-green-a-on').stroke(redFill);
    SVG.find('.empty-circle-green-a-off').stroke(greenFill);
    SVG.find('.disconnect-a-on').attr({x2: 317.5});
    SVG.find('.prolong-a-on').attr({x2: 316});
    SVG.find('.connect-a-on').attr({x1: 323.5});
    SVG.find('.shorten-a-on').attr({x2: 319});
    SVG.find('.white-a-on').fill(gray);
    SVG.find('.white-a-off').fill(white);
    SVG.find('.y-zero-a-on').plain('Y = 1');
    SVG.find('.a-zero-a-off').plain('A = 0');
    SVG.find('.line-black-a-off').stroke(black);
}

function toggleA() {
    let a_select = document.getElementById('value-for-a');
    if (a_select.value == 0) {
        turnAoff();
    }
    else {
        turnAon();
    }
}

function showDetailedInvertorInfo() {
    let detailed = document.getElementsByClassName('invertor-detailed-desc');
    for(let detail = 0; detail < detailed.length; ++detail) {
        detailed[detail].classList.toggle('invertor-detailed-desc-active');
    }
}