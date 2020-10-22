function gulicka_prevodova_firstmove() {
    var pos = -1;

    var suradnica_x=gulicka.getSuradnicaX();

    var suradnica_y=gulicka.getSuradnicaY();

    var id = setInterval(frame, 11);




    function frame() {
        pos++;
        if (pos == 363) {
            clearInterval(id);
            gulicka.setSuradnice(suradnica_x-8,suradnica_y-8);
            document.getElementById('mySelect').disabled = false;
        } else if(pos<97) {
            document.getElementById('mySelect').disabled = true;

            gulicka.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;

        }else if(pos>=97 && pos<=253) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=0.2;
            suradnica_y--;

        }
        else if(pos>253 ) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;


        }

    }
}
function gulicka_prevodova_secondmove() {
    var pos = 364;
    var suradnica_x=gulicka.getSuradnicaX();

    var suradnica_y=gulicka.getSuradnicaY();
    var id = setInterval(frame2, 11);


    function frame2() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            //gulicka = new Circle(15, 1095 + canvas1OffsetX, 265 + canvas1OffsetY, 0.5, "#0000ff", "#0000ff"); //gulicka v prevodovej tabulke
            //gulicka.setSuradnice(suradnica_x+8,suradnica_y+8);
            gulicka.setSuradnice(1095+ canvas1OffsetX,295+canvas1OffsetY);
            document.getElementById('mySelect').disabled = false;
        } else if(pos<=363 && pos>253) {
            document.getElementById('mySelect').disabled = true;
            gulicka.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;

        }else if(pos<=253 && pos>=97) {

            gulicka.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=0.2;
            suradnica_y++;

        }
        else if(pos<97) {

            gulicka.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;


        }

    }
}

function gulicka_odberova_firstmove() {
    var pos = -1;

    var suradnica_x=gulicka_odberova.getSuradnicaX();

    var suradnica_y=gulicka_odberova.getSuradnicaY();


    var id = setInterval(frame, 11);




    function frame() {
        pos++;
        if (pos == 360) {
            clearInterval(id);
            gulicka_odberova.setSuradnice(suradnica_x-8,suradnica_y-8);
            document.getElementById('mySelect').disabled = false;
        } else if(pos<97) {
            document.getElementById('mySelect').disabled = true;

            gulicka_odberova.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;

        }else if(pos>=97 && pos<=168) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=0.15;
            suradnica_y-=2.5;

        }
        else if(pos>=168 && pos<=184) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=0.8;

        }
        else if(pos>=184 && pos<=256) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=0.16;
            suradnica_y+=2.5;

        }
        else if(pos>256) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;


        }

    }
}

function gulicka_odberova_secondmove() {

    var pos = 361;

    var suradnica_x=gulicka_odberova.getSuradnicaX();

    var suradnica_y=gulicka_odberova.getSuradnicaY();


    var id = setInterval(frame, 11);


    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            //  gulicka_odberova= new Circle(15, 1095 + canvas1OffsetX, 265 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //gulicka odberova charakteristika
            gulicka_odberova.setSuradnice(1095 + canvas1OffsetX,295 + canvas1OffsetY);
            document.getElementById('mySelect').disabled = false;
        } else if(pos<=99) {
            document.getElementById('mySelect').disabled = true;

            gulicka_odberova.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;

        }else if(pos>=99 && pos<=170) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=0.15;
            suradnica_y+=2.5;

        }
        else if(pos>=170 && pos<=186) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=0.80;

        }
        else if(pos>=186 && pos<=257) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=0.16;
            suradnica_y-=2.5;

        }
        else if(pos>257 && pos<=361 ) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka_odberova.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;


        }

    }
}

function gulicka1_first_move() {
    var pos = -1;

    var suradnica_x=gulicka1.getSuradnicaX();

    var suradnica_y=gulicka1.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka1.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<40) {

            gulicka1.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;

        }else if(pos>=40 && pos<=70) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka1.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
            suradnica_y++;

        }


    }
}

function gulicka1_second_move() {
    var pos = 71;

    var suradnica_x=gulicka1.getSuradnicaX();

    var suradnica_y=gulicka1.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka1.setSuradnice(570 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<40) {

            gulicka1.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;

        }else if(pos>=40 && pos<=70) {

            //elem.style.top = pos + ;
            //lem.style.left = pos + 'px';
            gulicka1.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
            suradnica_y--;

        }


    }
}

function gulicka2_first_move() {
    var pos = -1;

    var suradnica_x=gulicka2.getSuradnicaX();

    var suradnica_y=gulicka2.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka2.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=50) {

            gulicka2.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y+=0.5;

        }

        else if(pos>50 && pos<60) {

            gulicka2.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;
            suradnica_x--;

        }


    }
}
function gulicka2_second_move() {
    var pos = 61;

    var suradnica_x=gulicka2.getSuradnicaX();

    var suradnica_y=gulicka2.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka2.setSuradnice(588 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=50) {

            gulicka2.moveObj(suradnica_x,suradnica_y);
            suradnica_y-=0.5;

        }
        else if(pos>50 && pos<=60) {

            gulicka2.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;
            suradnica_x++;

        }



    }
}

function gulicka3_first_move() {
    var pos = -1;

    var suradnica_x=gulicka3.getSuradnicaX();

    var suradnica_y=gulicka3.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka3.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=60) {

            gulicka3.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;

        }

        else if(pos>60 && pos<70) {

            gulicka3.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;
            suradnica_x--;

        }


    }
}

function gulicka3_second_move() {
    var pos = 71;

    var suradnica_x=gulicka3.getSuradnicaX();

    var suradnica_y=gulicka3.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka3.setSuradnice(606 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=60) {

            gulicka3.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;

        }

        else if(pos>60 && pos<=70) {

            gulicka3.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;
            suradnica_x++;

        }


    }
}
function gulicka4_first_move() {
    var pos = -1;

    var suradnica_x=gulicka4.getSuradnicaX();

    var suradnica_y=gulicka4.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka4.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=40) {

            gulicka4.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y+=1.5;

        }

        else if(pos>40 && pos<70) {

            gulicka4.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y+=0.5;
            suradnica_x+=0.5;

        }


    }
}

function gulicka4_second_move() {
    var pos = 71;

    var suradnica_x=gulicka4.getSuradnicaX();

    var suradnica_y=gulicka4.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka4.setSuradnice(624+ canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=40) {

            gulicka4.moveObj(suradnica_x,suradnica_y);
            suradnica_y-=1.5;

        }

        else if(pos>40 && pos<=70) {

            gulicka4.moveObj(suradnica_x,suradnica_y);
            suradnica_y-=0.5;
            suradnica_x-=0.5;

        }


    }
}
function gulicka5_first_move() {
    var pos = -1;

    var suradnica_x=gulicka5.getSuradnicaX();

    var suradnica_y=gulicka5.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka5.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=50) {

            gulicka5.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y+=0.5;

        }

        else if(pos>50 && pos<70) {

            gulicka5.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;
            suradnica_x--;

        }


    }
}
function gulicka5_second_move() {
    var pos = 71;

    var suradnica_x=gulicka5.getSuradnicaX();

    var suradnica_y=gulicka5.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka5.setSuradnice(642 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=50) {

            gulicka5.moveObj(suradnica_x,suradnica_y);
            suradnica_y-=0.5;

        }

        else if(pos>50 && pos<70) {

            gulicka5.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;
            suradnica_x++;

        }


    }
}

function gulicka6_first_move() {
    var pos = -1;

    var suradnica_x=gulicka6.getSuradnicaX();

    var suradnica_y=gulicka6.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka6.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=60) {

            gulicka6.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;

        }
        else if(pos<=70) {

            gulicka6.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;
            suradnica_x++;

        }

    }
}
function gulicka6_second_move() {
    var pos = 71;

    var suradnica_x=gulicka6.getSuradnicaX();

    var suradnica_y=gulicka6.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka6.setSuradnice(660 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=60) {

            gulicka6.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;

        }

        else if(pos<=70 && pos>60) {

            gulicka6.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;
            suradnica_x--;

        }

    }
}

function gulicka7_first_move() {
    var pos = -1;

    var suradnica_x=gulicka7.getSuradnicaX();

    var suradnica_y=gulicka7.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka7.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=40) {

            gulicka7.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y+=0.7;

        }
        else if(pos<=70) {

            gulicka7.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y++;
            suradnica_x++;

        }

    }
}
function gulicka7_second_move() {
    var pos = 71;

    var suradnica_x=gulicka7.getSuradnicaX();

    var suradnica_y=gulicka7.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka7.setSuradnice(678 + canvas1OffsetX,468 + canvas1OffsetY);

        } else if(pos<=40) {

            gulicka7.moveObj(suradnica_x,suradnica_y);
            suradnica_y-=0.7;

        }
        else if(pos<=70) {

            gulicka7.moveObj(suradnica_x,suradnica_y);
            suradnica_y--;
            suradnica_x--;

        }

    }
}
////////////////////////////////////////////////////////////////////////////////////
function gulicka8_first_move() {
    var pos = -1;

    var suradnica_x=gulicka8.getSuradnicaX();

    var suradnica_y=gulicka8.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka8.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<=30) {

            gulicka8.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x+=1.5;
            suradnica_y-=0.8;

        }
        else if(pos>30 && pos<=70) {

            gulicka8.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=1.6;
            //suradnica_x++;

        }

    }
}
function gulicka8_second_move() {
    var pos = 71;

    var suradnica_x=gulicka8.getSuradnicaX();

    var suradnica_y=gulicka8.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka8.setSuradnice(861 + canvas1OffsetX,554 + canvas1OffsetY);

        } else if(pos<=30) {

            gulicka8.moveObj(suradnica_x,suradnica_y);
            suradnica_x-=1.5;
            suradnica_y+=0.8;

        }
        else if(pos>30 && pos<=70) {

            gulicka8.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=1.6;


        }

    }
}


function gulicka9_first_move() {
    var pos = -1;

    var suradnica_x=gulicka9.getSuradnicaX();

    var suradnica_y=gulicka9.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka9.setSuradnice(suradnica_x-8,suradnica_y-8);

        } else if(pos<70) {

            gulicka9.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y--;

        }

    }
}
function gulicka9_second_move() {
    var pos = 71;

    var suradnica_x=gulicka9.getSuradnicaX();

    var suradnica_y=gulicka9.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka9.setSuradnice(890 + canvas1OffsetX,537 + canvas1OffsetY);

        }
        else if(pos<=70) {

            gulicka9.moveObj(suradnica_x,suradnica_y);
            suradnica_y++;

        }

    }
}
function gulicka12_first_move() {
    var pos = -1;

    var suradnica_x=gulicka12.getSuradnicaX();

    var suradnica_y=gulicka12.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka12.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<20) {

            gulicka12.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
            suradnica_y-=0.55;

        }else if(pos>20 && pos<70) {

            gulicka12.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y--;

        }

    }
}
function gulicka12_second_move() {
    var pos = 71;

    var suradnica_x=gulicka12.getSuradnicaX();

    var suradnica_y=gulicka12.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka12.setSuradnice(945 + canvas1OffsetX,527 + canvas1OffsetY);

        }
        else if(pos<=20) {

            gulicka12.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
            suradnica_y+=0.55;

        }
        else if(pos>20 && pos<70) {

            gulicka12.moveObj(suradnica_x,suradnica_y);
            suradnica_y++;

        }

    }
}
function gulicka10_first_move(){
    var pos = -1;

    var suradnica_x=gulicka10.getSuradnicaX();

    var suradnica_y=gulicka10.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka10.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<20) {

            gulicka10.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x++;
            suradnica_y-=0.55;

        }else if(pos>20 && pos<70) {

            gulicka10.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=1.5;

        }

    }
}
function gulicka10_second_move(){
    var pos = 71;

    var suradnica_x=gulicka10.getSuradnicaX();

    var suradnica_y=gulicka10.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka10.setSuradnice(924 + canvas1OffsetX,551 + canvas1OffsetY);

        }
        else if(pos<=20) {

            gulicka10.moveObj(suradnica_x,suradnica_y);
            suradnica_x--;
            suradnica_y+=0.55;

        }
        else if(pos>20 && pos<70) {

            gulicka10.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=1.5;

        }

    }
}
function gulicka13_first_move(){
    var pos = -1;

    var suradnica_x=gulicka13.getSuradnicaX();

    var suradnica_y=gulicka13.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka13.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka13.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
            suradnica_y-=0.55;

        }else if(pos>30 && pos<70) {

            gulicka13.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=0.8;

        }

    }
}
function gulicka13_second_move(){
    var pos = 71;

    var suradnica_x=gulicka13.getSuradnicaX();

    var suradnica_y=gulicka13.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka13.setSuradnice(993 + canvas1OffsetX,515 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka13.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
            suradnica_y+=0.55;

        }
        else if(pos>30 && pos<70) {

            gulicka13.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=0.8;

        }

    }
}
function gulicka11_first_move(){
    var pos = -1;

    var suradnica_x=gulicka11.getSuradnicaX();

    var suradnica_y=gulicka11.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka11.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<70) {

            gulicka11.moveObj(suradnica_x-8,suradnica_y-8);
           // suradnica_x--;
            suradnica_y-=1.3;

        }

    }
}
function gulicka11_second_move(){
    var pos = 71;

    var suradnica_x=gulicka11.getSuradnicaX();

    var suradnica_y=gulicka11.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka11.setSuradnice(980 + canvas1OffsetX,558 + canvas1OffsetY);

        }
        else if(pos<=70) {

            gulicka11.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=1.3;

        }


    }
}
function gulicka14_first_move(){
    var pos = -1;

    var suradnica_x=gulicka14.getSuradnicaX();

    var suradnica_y=gulicka14.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka14.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka14.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
            suradnica_y-=0.55;

        }else if(pos>30 && pos<70) {

            gulicka14.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=1.5;

        }

    }
}
function gulicka14_second_move(){
    var pos = 71;

    var suradnica_x=gulicka14.getSuradnicaX();

    var suradnica_y=gulicka14.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka14.setSuradnice(1030 + canvas1OffsetX,542 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka14.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
            suradnica_y+=0.55;

        }
        else if(pos>30 && pos<70) {

            gulicka14.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=1.5;

        }

    }
}


////////////////////////////////////////////////////Gulicky navyse//////////////////////////////////
function gulicka20_first_move(){
    var pos = -1;

    var suradnica_x=gulicka20.getSuradnicaX();

    var suradnica_y=gulicka20.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka20.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka20.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
           // suradnica_y++;

        }else if(pos>30 && pos<70) {

            gulicka20.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=1.5;

        }

    }
}
function gulicka20_second_move(){
    var pos = 71;

    var suradnica_x=gulicka20.getSuradnicaX();

    var suradnica_y=gulicka20.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka20.setSuradnice(570 + canvas1OffsetX,530 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka20.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
           // suradnica_y--;

        }
        else if(pos>30 && pos<70) {

            gulicka20.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=1.5;

        }

    }
}
function gulicka21_first_move(){
    var pos = -1;

    var suradnica_x=gulicka21.getSuradnicaX();

    var suradnica_y=gulicka21.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka21.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka21.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x--;
            suradnica_y+=0.6;

        }else if(pos>30 && pos<70) {

            gulicka21.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=0.8;

        }

    }
}
function gulicka21_second_move(){
    var pos = 71;

    var suradnica_x=gulicka21.getSuradnicaX();

    var suradnica_y=gulicka21.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka21.setSuradnice(625 + canvas1OffsetX,520 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka21.moveObj(suradnica_x,suradnica_y);
            suradnica_x++;
            suradnica_y-=0.6;

        }
        else if(pos>30 && pos<70) {

            gulicka21.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=0.8;

        }

    }
}
function gulicka22_first_move(){
    var pos = -1;

    var suradnica_x=gulicka22.getSuradnicaX();

    var suradnica_y=gulicka22.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka22.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka22.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x+=1.5;
            suradnica_y+=0.1;

        }else if(pos>30 && pos<70) {

            gulicka22.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x+=0.8;

        }

    }
}
function gulicka22_second_move(){
    var pos = 71;

    var suradnica_x=gulicka22.getSuradnicaX();

    var suradnica_y=gulicka22.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka22.setSuradnice(655 + canvas1OffsetX,520 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka22.moveObj(suradnica_x,suradnica_y);
            suradnica_x-=1.5;
            suradnica_y-=0.1;

        }
        else if(pos>30 && pos<70) {

            gulicka22.moveObj(suradnica_x,suradnica_y);
            suradnica_x-=0.8;

        }

    }
}

function gulicka23_first_move(){
    var pos = -1;

    var suradnica_x=gulicka23.getSuradnicaX();

    var suradnica_y=gulicka23.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka23.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka23.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x+=0.8;
            suradnica_y-=0.4;

        }else if(pos>30 && pos<70) {

            gulicka23.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=1.2;

        }

    }
}
function gulicka23_second_move(){
    var pos = 71;

    var suradnica_x=gulicka23.getSuradnicaX();

    var suradnica_y=gulicka23.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka23.setSuradnice(870 + canvas1OffsetX,580 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka23.moveObj(suradnica_x,suradnica_y);
            suradnica_x-=0.8;
            suradnica_y+=0.4;

        }
        else if(pos>30 && pos<70) {

            gulicka23.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=1.2;

        }

    }
}
function gulicka24_first_move(){
    var pos = -1;

    var suradnica_x=gulicka24.getSuradnicaX();

    var suradnica_y=gulicka24.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);

            gulicka24.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka24.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=0.8;

        }else if(pos>30 && pos<70) {

            gulicka24.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=0.4;

        }

    }
}
function gulicka24_second_move(){
    var pos = 71;

    var suradnica_x=gulicka24.getSuradnicaX();

    var suradnica_y=gulicka24.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka24.setSuradnice(945 + canvas1OffsetX,580 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka24.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=0.8;

        }
        else if(pos>30 && pos<70) {

            gulicka24.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=0.4;

        }

    }
}
function gulicka25_first_move(){
    var pos = -1;

    var suradnica_x=gulicka25.getSuradnicaX();

    var suradnica_y=gulicka25.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos++;
        if (pos == 70) {
            clearInterval(id);
            gulicka25.setSuradnice(suradnica_x-8,suradnica_y-8);

        }
        else if(pos<=30) {

            gulicka25.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_x-=1.8;
            //suradnica_y-=0.3;

        }else if(pos>30 && pos<70) {

            gulicka25.moveObj(suradnica_x-8,suradnica_y-8);
            suradnica_y-=0.5;

        }

    }
}
function gulicka25_second_move(){
    var pos = 71;

    var suradnica_x=gulicka25.getSuradnicaX();

    var suradnica_y=gulicka25.getSuradnicaY();


    var id = setInterval(frame, 60);

    function frame() {
        pos--;
        if (pos == 0) {
            clearInterval(id);
            gulicka25.setSuradnice(1030 + canvas1OffsetX,580 + canvas1OffsetY);

        }
        else if(pos<=30) {

            gulicka25.moveObj(suradnica_x,suradnica_y);
            suradnica_x+=1.8;
           // suradnica_y+=0.8;

        }
        else if(pos>30 && pos<70) {

            gulicka25.moveObj(suradnica_x,suradnica_y);
            suradnica_y+=0.5;

        }

    }
}