function zoom(selected) {
    // "viewbox function arguments:
    // draw.viewbox(x, y, width, height);
    switch (selected) {
        case 'noZoom':
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak.showText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak.showText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english.showText();
            }
            zakrytie_pravej_strany.hideObj();
            zakrytie_schemy.hideObj();
            zakrytie_obvodu.hideObj();
            draw.viewbox((divWidth -1100)/10, divHeight/6, divWidth, divHeight);
            break;
        case 'scheme':
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak.hideText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak.hideText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english.hideText();
            }
            zakrytie_pravej_strany.showObj();
            zakrytie_schemy.hideObj();
            zakrytie_obvodu.showObj();
            draw.viewbox((divWidth -800)/4, divHeight/6, divWidth / 1.5, divHeight / 2);
            break;
        case 'circuit':
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak.showText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak.showText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english.showText();
            }
            zakrytie_pravej_strany.showObj();
            zakrytie_schemy.showObj();
            zakrytie_obvodu.hideObj();
            draw.viewbox((divWidth -800)/4, divHeight/1.40, divWidth / 1.5, divHeight / 2);
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

function playnor() {
    // this variable holds an audio file
    if(localStorage.getItem("textvalue")== ''){

        audio_nor.paused ? audio_nor.play() : audio_nor.pause();

    }
    if(localStorage.getItem("textvalue") =='slovak'){

        audio_nor.paused ? audio_nor.play() : audio_nor.pause();
    }
    if(localStorage.getItem("textvalue") =='english'){

        audio_nor.paused ? audio_nor.play() : audio_nor.pause();
    }

}