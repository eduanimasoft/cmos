///////////////////////////////////////////////VSTUPNE NAPATIE////////////////////////////////////
function vstupne_napatie_znizovanie(){
    var pos = 1;



    var id = setInterval(frame, 20);

    function frame() {
        pos-=0.05;
        if (pos <= 0) {
            vstupne_napatie_styrivolty_znizovanie();
            vstup_5V_prepnutie.setOpacity(0);
            clearInterval(id);

        } else if(pos<=1) {
            vstup_5V_prepnutie.setOpacity(pos);


        }

    }
}

function vstupne_napatie_styrivolty_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vstupne_napatie_trivolty_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vstup_4V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vstup_4V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_trivolty_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vstupne_napatie_dvavolty_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vstup_3V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vstup_3V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_dvavolty_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vstupne_napatie_jedenvolt_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vstup_2V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vstup_2V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_jedenvolt_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vstupne_napatie_nulavoltov_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vstup_1V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vstup_1V_prepnutie.setOpacity(pocitadlo);


        }


    }
}
function vstupne_napatie_nulavoltov_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vstup_0V_prepnutie.setOpacity(1);
            clearInterval(id);


        } else if(pos<=2) {
            pocitadlo+=0.05;
            vstup_0V_prepnutie.setOpacity(pocitadlo);


        }


    }
}
function vstupne_napatie_zvysovanie(){
    var pos = 1;



    var id = setInterval(frame, 20);

    function frame() {
        pos-=0.05;
        if (pos <= 0) {
            vstupne_napatie_jedenvolt_zvysovanie();
            clearInterval(id);

        } else if(pos<=1) {
            vstup_0V_prepnutie.setOpacity(pos);


        }

    }
}
function vstupne_napatie_jedenvolt_zvysovanie() {
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            vstupne_napatie_dvavolty_zvysovanie();
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo += 0.05;
            vstup_1V_prepnutie.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo -= 0.05;
            vstup_1V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_dvavolty_zvysovanie() {
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            vstupne_napatie_trivolty_zvysovanie();
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo += 0.05;
            vstup_2V_prepnutie.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo -= 0.05;
            vstup_2V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_trivolty_zvysovanie(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            vstupne_napatie_styrivolty_zvysovanie();
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo += 0.05;
            vstup_3V_prepnutie.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo -= 0.05;
            vstup_3V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_styrivolty_zvysovanie(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            vstupne_napatie_patvoltov_zvysovanie();
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo += 0.05;
            vstup_4V_prepnutie.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo -= 0.05;
            vstup_4V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vstupne_napatie_patvoltov_zvysovanie(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            vstup_5V_prepnutie.setOpacity(1);
            clearInterval(id);


        } else if (pos <= 2) {
            pocitadlo += 0.05;
            vstup_5V_prepnutie.setOpacity(pocitadlo);


        }

    }
}



///////////////////////////////////////////////VYSTUPNE NAPATIE////////////////////////////////////
function vystupne_napatie_zvysovanie(){
    var pos = 1;

    var id = setInterval(frame, 20);

    function frame() {
        pos-=0.05;
        if (pos <= 0) {
            vystupne_napatie_jedenvolt_zvysovanie();
            vystup_0V_prepnutie.setOpacity(0);
            clearInterval(id);

        } else if(pos<=1) {
            vystup_0V_prepnutie.setOpacity(pos);


        }

    }
}
function vystupne_napatie_jedenvolt_zvysovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_dvavolty_zvysovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_1V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_1V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_dvavolty_zvysovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_trivolty_zvysovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_2V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_2V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_trivolty_zvysovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_styrivolty_zvysovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_3V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_3V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_styrivolty_zvysovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_patvoltov_zvysovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_4V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_4V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_patvoltov_zvysovanie(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 2) {
            pocitadlo += 0.05;
            vystup_5V_prepnutie.setOpacity(pocitadlo);


        }

    }
}


///////////////////////////////////////////////////////////////////////////
function  vystupne_napatie_znizovanie(){

    var pos=1;
    var id = setInterval(frame, 20);

    function frame() {
        pos-=0.05;
        if (pos <= 0) {
            vystupne_napatie_styrivolty_znizovanie();
            clearInterval(id);

        } else if(pos<=1) {
            vystup_5V_prepnutie.setOpacity(pos);


        }

    }
}
function vystupne_napatie_styrivolty_znizovanie() {
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_trivolty_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_4V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_4V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_trivolty_znizovanie() {
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_dvavolty_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_3V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_3V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_dvavolty_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_jedenvolt_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_2V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_2V_prepnutie.setOpacity(pocitadlo);


        }

    }
}
function vystupne_napatie_jedenvolt_znizovanie(){
    var pos = 0;
    var pocitadlo=0;

    var id = setInterval(frame, 20);

    function frame() {
        pos+=0.05;
        if (pos > 2) {
            vystupne_napatie_nulavoltov_znizovanie();
            clearInterval(id);


        } else if(pos<=1) {
            pocitadlo+=0.05;
            vystup_1V_prepnutie.setOpacity(pocitadlo);


        }
        else if(pos>=1 && pos<=2) {
            pocitadlo-=0.05;
            vystup_1V_prepnutie.setOpacity(pocitadlo);


        }

    }
}

function vystupne_napatie_nulavoltov_znizovanie(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 20);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 2) {
            pocitadlo += 0.05;
            vystup_0V_prepnutie.setOpacity(pocitadlo);


        }

    }
}


/////////////////////////////logicke nuly, jednotky////////////////////////////

function znizovanie_log_1_vstupne(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 80);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo -= 0.05;
            vstup_log1.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo += 0.05;
            vstup_log0.setOpacity(pocitadlo);


        }

    }
}
function zvysovanie_log_0_vstupne(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 80);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo -= 0.05;
            vstup_log0.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo += 0.05;
            vstup_log1.setOpacity(pocitadlo);


        }

    }
}


function zvysovanie_log_0_vystupne(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 80);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo -= 0.05;
            vystup_log0.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo += 0.05;
            vystup_log1.setOpacity(pocitadlo);


        }

    }
}
function znizovanie_log_1_vystupne(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 80);

    function frame() {
        pos += 0.05;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo -= 0.05;
            vystup_log1.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo += 0.05;
            vystup_log0.setOpacity(pocitadlo);


        }

    }
}


/////////////////////////////////////////////////////////////////////////////OPN//////////////////////////////////////////////
function  opn_n_first(){
    var opn;
    var pos = 0;
    var pocitadlo =1;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.05;
        opn=pos;
        if (pos > 4) {
            clearInterval(id);
        }
        if(pos>1 && pos<1.10){
            opn_p_first();
        }
        else if (pos <= 4) {
            pocitadlo -= 0.015;
            n_medzi.setOpacity(pocitadlo);
            n_zeleny_roztok1.opacity(pocitadlo);
            n_zeleny_roztok2.opacity(pocitadlo);
        }

    }
}
function opn_p_first(){
    var pos = 0;
    var pocitadlo =0;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.05;
        if (pos > 4) {
            clearInterval(id);


        } else if (pos <= 4) {
            pocitadlo += 0.015;
            p_medzi.setOpacity(pocitadlo);
            p_zeleny_roztok1.opacity(pocitadlo);
            p_zeleny_roztok2.opacity(pocitadlo);

        }

    }

}

function opn_p_second(){

    var opn;
    var pos = 0;
    var pocitadlo =1;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.05;
        opn=pos;
        if (pos > 4) {
            clearInterval(id);
        }
        if(pos>1 && pos<1.10){
            opn_n_second();
        }
        else if (pos <= 4) {
            pocitadlo -= 0.015;
            p_medzi.setOpacity(pocitadlo);
            p_zeleny_roztok1.opacity(pocitadlo);
            p_zeleny_roztok2.opacity(pocitadlo);
        }

    }
}
function opn_n_second(){
    var pos = 0;
    var pocitadlo =0;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.05;
        if (pos > 4) {
            clearInterval(id);


        } else if (pos <= 4) {
            pocitadlo += 0.015;
            n_medzi.setOpacity(pocitadlo);
            n_zeleny_roztok1.opacity(pocitadlo);
            n_zeleny_roztok2.opacity(pocitadlo);

        }

    }

}

////////////////////////////////////////////////////ORANZOVA-prechod prudu/////////////////////

/*

    oranzova_od_dn= new Rectangle(730+ canvas1OffsetX, 405 + canvas1OffsetY, 10, 32, "#ffa500");
    oranzova_od_dn.setOpacity(0);
    oranzova_od_dn_dostredu= new Rectangle(730+ canvas1OffsetX, 405 + canvas1OffsetY, 55, 10, "#ffa500");
    oranzova_od_dn_dostredu.setOpacity(0);
    oranzova_dn_dp_nahor= new Rectangle(780+ canvas1OffsetX, 370 + canvas1OffsetY, 10, 36, "#ffa500");
    oranzova_dn_dp_nahor.setOpacity(0);
    oranzova_dn_dp_nahor_dolava= new Rectangle(670+ canvas1OffsetX, 370 + canvas1OffsetY, 115, 10, "#ffa500");
    oranzova_dn_dp_nahor_dolava.setOpacity(0);
    oranzova_dn_dp_nahor_dolava_nahor= new Rectangle(670+ canvas1OffsetX, 340 + canvas1OffsetY, 10, 35, "#ffa500");
    oranzova_dn_dp_nahor_dolava_nahor.setOpacity(0);
    oranzova_dn_dp_nahor_dolava_nahor_doprava= new Rectangle(650+ canvas1OffsetX, 340 + canvas1OffsetY, 30, 10, "#ffa500");
    oranzova_dn_dp_nahor_dolava_nahor_doprava.setOpacity(0);

    oranzova_dp= new Rectangle(830+ canvas1OffsetX, 405 + canvas1OffsetY, 10, 32, "#ffa500");
    oranzova_dp.setOpacity(0);
    oranzova_dp_dolava= new Rectangle(785+ canvas1OffsetX, 405 + canvas1OffsetY, 50, 10, "#ffa500");
    oranzova_dp_dolava.setOpacity(0);




    }
 */

function zmena_prudu(){
    var pos = 0;
    var pocitadlo = 0;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.02;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos <= 1) {
            pocitadlo += 0.025;
            oranzova_od_dn.setOpacity(pocitadlo);
            oranzova_od_dn_dostredu.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava_nahor.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava_nahor_doprava.setOpacity(pocitadlo);
            oranzova_dp.setOpacity(pocitadlo);
            oranzova_dp_dolava.setOpacity(pocitadlo);


        } else if (pos >= 1 && pos <= 2) {
            pocitadlo -= 0.025;
            oranzova_od_dn.setOpacity(pocitadlo);
            oranzova_od_dn_dostredu.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava_nahor.setOpacity(pocitadlo);
            oranzova_dn_dp_nahor_dolava_nahor_doprava.setOpacity(pocitadlo);
            oranzova_dp.setOpacity(pocitadlo);
            oranzova_dp_dolava.setOpacity(pocitadlo);


        }

    }
}
function  zmena_dn_dp_first(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.01;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos>0.5 && pos <= 0.7) {
            pocitadlo -= 0.025;

            cervena_dp.setOpacity(pocitadlo);
            cervena_dp_dolava.setOpacity(pocitadlo);
            zelena_od_dn.setOpacity(pocitadlo);
            zelena_od_dn_dostredu.setOpacity(pocitadlo);


        } else if (pos >= 0.7 && pos <= 0.8) {
            zelena_od_dn.fillObj("#FF0000");
            zelena_od_dn_dostredu.fillObj("#FF0000");
            cervena_dp.fillObj("#228B22");
            cervena_dp_dolava.fillObj("#228B22");
        }

        else if (pos >= 0.8 && pos <= 2) {
            pocitadlo += 0.025;
            cervena_dp.setOpacity(pocitadlo);
            cervena_dp_dolava.setOpacity(pocitadlo);
            zelena_od_dn.setOpacity(pocitadlo);
            zelena_od_dn_dostredu.setOpacity(pocitadlo);


        }

    }
}
function zmena_dn_dp_second(){
    var pos = 0;
    var pocitadlo = 1;

    var id = setInterval(frame, 40);

    function frame() {
        pos += 0.01;
        if (pos > 2) {
            clearInterval(id);


        } else if (pos>0.5 && pos <= 0.7) {
            pocitadlo -= 0.025;

            cervena_dp.setOpacity(pocitadlo);
            cervena_dp_dolava.setOpacity(pocitadlo);
            zelena_od_dn.setOpacity(pocitadlo);
            zelena_od_dn_dostredu.setOpacity(pocitadlo);


        } else if (pos >= 0.7 && pos <= 0.8) {
            zelena_od_dn.fillObj("#228B22");
            zelena_od_dn_dostredu.fillObj("#228B22");
            cervena_dp.fillObj("#FF0000");
            cervena_dp_dolava.fillObj("#FF0000");
        }

        else if (pos >= 0.8 && pos <= 2) {
            pocitadlo += 0.025;
            cervena_dp.setOpacity(pocitadlo);
            cervena_dp_dolava.setOpacity(pocitadlo);
            zelena_od_dn.setOpacity(pocitadlo);
            zelena_od_dn_dostredu.setOpacity(pocitadlo);


        }

    }
}


//////////////////////////Rucicka////////////////////

/*
    rucicka = new Line(515 + canvas1OffsetX, 325 + canvas1OffsetY, 515 + canvas1OffsetX, 285 + canvas1OffsetY);
 */
function rucicka_first(){

    var pos = 0;
    var pocitadlo_x = 0;
    var pocitadlo_y = 0;
    var x2_new;
    var y2_new;
    var x1=515 + canvas1OffsetX;
    var y1=325 + canvas1OffsetY;
    var x2=515 + canvas1OffsetX;
    var y2=285 + canvas1OffsetY;

    var id = setInterval(frame, 160);

    function frame() {
        pos += 0.10;
        if (pos > 2) {
            rucicka_1.hideObj();
            rucicka_2.showObj();
            rucicka_1.plotObj(x1,y1,x2,y2);
            clearInterval(id);


        } else if ( pos <= 2) {
            pocitadlo_x += 1;
            pocitadlo_y += 0.2;
            x2_new=x2+pocitadlo_x;
            y2_new=y2+pocitadlo_y;
            rucicka_1.plotObj(x1,y1,x2_new,y2_new);


        }

    }
}

function rucicka_second(){

    var pos = 0;
    var pocitadlo_x = 0;
    var pocitadlo_y = 0;
    var x2_new;
    var y2_new;
    var x1=515 + canvas1OffsetX;
    var y1=325 + canvas1OffsetY;
    var x2=535 + canvas1OffsetX;
    var y2=289 + canvas1OffsetY;

    var id = setInterval(frame, 160);

    function frame() {
        pos += 0.10;
        if (pos > 2) {
            rucicka_2.hideObj();
            rucicka_1.showObj();
            rucicka_2.plotObj(x1,y1,x2,y2);

            clearInterval(id);


        } else if ( pos <= 2) {
            pocitadlo_x -= 1;
            pocitadlo_y -= 0.2;
            x2_new=x2+pocitadlo_x;
            y2_new=y2+pocitadlo_y;
            rucicka_2.plotObj(x1,y1,x2_new,y2_new);


        }

    }

}