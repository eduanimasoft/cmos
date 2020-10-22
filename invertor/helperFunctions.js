
function zoom(selected) {
    // "viewbox function arguments:
    // draw.viewbox(x, y, width, height);
    switch (selected) {
        case 'noZoom':
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english1.showText();
                equivalent_english2.showText();
            }

            udd_dole1.showText();
            udd_dole2.showText();
            zakrytie_pravej_strany.hideObj();
            zakrytie_schemy.hideObj();
            zakrytie_obvodu.hideObj();
            draw.viewbox((divWidth -1100)/10, divHeight/6, divWidth, divHeight);
            break;
        case 'scheme':
            //left top
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english1.showText();
                equivalent_english2.showText();
            }

            udd_dole1.hideText();
            udd_dole2.hideText();
            zakrytie_schemy.hideObj();
            zakrytie_obvodu.showObj();
            zakrytie_pravej_strany.showObj();

            draw.viewbox((divWidth -800)/4, divHeight/6, divWidth / 1.5, divHeight / 2);

            break;
        case 'circuit':
            //right top
            if(localStorage.getItem("textvalue")== ''){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='slovak'){
                equivalent_slovak1.showText();
                equivalent_slovak2.showText();
            }
            if(localStorage.getItem("textvalue") =='english'){
                equivalent_english1.showText();
                equivalent_english2.showText();
            }
            udd_dole1.showText();
            udd_dole2.showText();
            zakrytie_obvodu.hideObj();
            zakrytie_schemy.showObj();
            zakrytie_pravej_strany.showObj();
            draw.viewbox((divWidth -800)/4, divHeight/1.4, divWidth / 1.5, divHeight / 2);
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


function playinvertor() {
    // this variable holds an audio file
    if(localStorage.getItem("textvalue")== ''){

        audio_invertor.paused ? audio_invertor.play() : audio_invertor.pause();

    }
    if(localStorage.getItem("textvalue") =='slovak'){

        audio_invertor.paused ? audio_invertor.play() : audio_invertor.pause();
    }
    if(localStorage.getItem("textvalue") =='english'){

        audio_invertor.paused ? audio_invertor.play() : audio_invertor.pause();
    }

}