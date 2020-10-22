
function zoom(selected) {
    // "viewbox function arguments:
    // draw.viewbox(x, y, width, height);
    switch (selected) {

        case 'scheme':


            draw.viewbox((divWidth -350)/4, divHeight/6.5, divWidth / 2, divHeight / 2);

            break;

        default:
            draw.viewbox(0, 0, divWidth, divHeight);
    }
}


function returnWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function returnHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
