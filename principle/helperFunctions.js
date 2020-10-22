function zoom(selected) {
    // "viewbox function arguments:
    // draw.viewbox(x, y, width, height);
    switch (selected) {
        case 'noZoom':

            biely_ramcek_dole.setOpacity(0);
            biely_ramcek_zlava.setOpacity(0);
            draw.viewbox(divWidth/221, divHeight/6, divWidth, divHeight);
            break;
        case 'prevodova':
            biely_ramcek_dole.setOpacity(1);
            biely_ramcek_zlava.setOpacity(1);
            draw.viewbox(divWidth/3, divHeight/6.2, divWidth / 1.5, divHeight / 2);
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


function playprinciple() {
    // this variable holds an audio file
    if(localStorage.getItem("textvalue")== ''){

        audio_principle.paused ? audio_principle.play() : audio_principle.pause();

    }
    if(localStorage.getItem("textvalue") =='slovak'){

        audio_principle.paused ? audio_principle.play() : audio_principle.pause();
    }
    if(localStorage.getItem("textvalue") =='english'){

        audio_principle.paused ? audio_principle.play() : audio_principle.pause();
    }

}