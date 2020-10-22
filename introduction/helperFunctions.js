function zoom(selected) {
    // "viewbox function arguments:
    // draw.viewbox(x, y, width, height);
    switch (selected) {
        case 'noZoom':

            draw.viewbox(canvasWidth-555, canvasHeight-167, divWidth, divHeight);
            break;
        case 'scheme':

            draw.viewbox(canvasWidth-600, canvasHeight-150, divWidth / 2, divHeight / 2);
            break;
        case 'circuit':

            draw.viewbox(canvasWidth-600, canvasHeight+170, divWidth / 2, divHeight / 2);
            break;
        case 'prevodova':
            draw.viewbox(canvasWidth+100, canvasHeight-240, divWidth / 2, divHeight / 2);
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

function playintroduction() {
    // this variable holds an audio file
    if(localStorage.getItem("textvalue")== ''){

        audio_introduction.paused ? audio_introduction.play() : audio_introduction.pause();

    }
    if(localStorage.getItem("textvalue") =='slovak'){

        audio_introduction.paused ? audio_introduction.play() : audio_introduction.pause();
    }
    if(localStorage.getItem("textvalue") =='english'){

        audio_introduction.paused ? audio_introduction.play() : audio_introduction.pause();
    }

}