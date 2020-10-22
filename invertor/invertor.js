function invertor() {

    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;

    //canvas1OffsetX = padding + canvasWidth * magicCanvasXOffset;
    canvas1OffsetX = (divWidth -1000)/2;
    canvas1OffsetY = (divHeight-540)/2;
    //canvas1OffsetY = (canvasHeight -1000)/2;


    //////////////////////////////////////////////////////PRVA SCHEMA///////////////////////////////////////////////////////////////

    zelena1 = new Line(300 + canvas1OffsetX, 90 + canvas1OffsetY, 300 + canvas1OffsetX, 150 + canvas1OffsetY); //udd zhora nadol
    zelena1.setStroke("#32cd32", 2);
    zelenaktap1 = new Line(280 + canvas1OffsetX, 130 + canvas1OffsetY, 280 + canvas1OffsetX, 140 + canvas1OffsetY); //udd zhora nadol
    zelenaktap1.setStroke("#32cd32", 2);
    zelenaktap2 = new Line(280 + canvas1OffsetX, 145 + canvas1OffsetY, 280 + canvas1OffsetX, 155 + canvas1OffsetY); //udd zhora nadol
    zelenaktap2.setStroke("#32cd32", 2);
    zelenaktap3 = new Line(280 + canvas1OffsetX, 160 + canvas1OffsetY, 280 + canvas1OffsetX, 170 + canvas1OffsetY); //udd zhora nadol
    zelenaktap3.setStroke("#32cd32", 2);
    zelena2 = new Line(280 + canvas1OffsetX, 135 + canvas1OffsetY, 300 + canvas1OffsetX, 135 + canvas1OffsetY); //Tap
    zelena2.setStroke("#32cd32", 2);
    zelena3 = new Line(280 + canvas1OffsetX, 150 + canvas1OffsetY, 300 + canvas1OffsetX, 150 + canvas1OffsetY); //Tap
    zelena3.setStroke("#32cd32", 2);
    zelenaY1 = new Line(280 + canvas1OffsetX, 165 + canvas1OffsetY, 300 + canvas1OffsetX, 165 + canvas1OffsetY); //Tap
    zelenaY1.setStroke("#32cd32", 2);
    zelenaY2 = new Line(300 + canvas1OffsetX, 165 + canvas1OffsetY, 300 + canvas1OffsetX, 235 + canvas1OffsetY); //Ypsilon pomocna ciara
    zelenaY2.setStroke("#32cd32", 2);
    zelenaY3 = new Line(300 + canvas1OffsetX, 200 + canvas1OffsetY, 360 + canvas1OffsetX, 200 + canvas1OffsetY); //Ypsilon
    zelenaY3.setStroke("#32cd32", 2);
    zelenaY4 = new Line(280 + canvas1OffsetX, 235 + canvas1OffsetY, 300 + canvas1OffsetX, 235 + canvas1OffsetY); //Ypsilon pomocna ciara dole Tab
    zelenaY4.setStroke("#32cd32", 2);
    ciernakTanpotomcervena1 = new Line(280 + canvas1OffsetX, 230 + canvas1OffsetY, 280 + canvas1OffsetX, 240 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena1.setStroke("#000000", 2);
    ciernakTanpotomcervena2 = new Line(280 + canvas1OffsetX, 245 + canvas1OffsetY, 280 + canvas1OffsetX, 255 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena2.setStroke("#000000", 2);
    ciernakTanpotomcervena3 = new Line(280 + canvas1OffsetX, 260 + canvas1OffsetY, 280 + canvas1OffsetX, 270 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena3.setStroke("#000000", 2);
    cervena1 = new Line(280 + canvas1OffsetX, 250 + canvas1OffsetY, 300 + canvas1OffsetX, 250 + canvas1OffsetY); //Tab
    cervena1.setStroke("#FF0000", 2);
    cervena2 = new Line(280 + canvas1OffsetX, 265 + canvas1OffsetY, 300 + canvas1OffsetX, 265 + canvas1OffsetY); //Tab
    cervena2.setStroke("#FF0000", 2);
    cervena3 = new Line(300 + canvas1OffsetX, 250 + canvas1OffsetY, 300 + canvas1OffsetX, 290 + canvas1OffsetY); //Tab zhora nadol
    cervena3.setStroke("#FF0000", 2);
    cervena4 = new Line(285 + canvas1OffsetX, 290 + canvas1OffsetY, 315 + canvas1OffsetX, 290 + canvas1OffsetY); //Spodok Tab
    cervena4.setStroke("#FF0000", 2);
    acko1 = new Line(220 + canvas1OffsetX, 265 + canvas1OffsetY, 275 + canvas1OffsetX, 265 + canvas1OffsetY); //Acko
    acko1.setStroke("#FF0000", 2);
    acko2 = new Line(255 + canvas1OffsetX, 265 + canvas1OffsetY, 255 + canvas1OffsetX, 135 + canvas1OffsetY); //Acko zdola nahor
    acko2.setStroke("#FF0000", 2);
    acko3 = new Line(255 + canvas1OffsetX, 135 + canvas1OffsetY, 275 + canvas1OffsetX, 135 + canvas1OffsetY); //Acko hore zlava doprava
    acko3.setStroke("#FF0000", 2);
    acko4 = new Line(275 + canvas1OffsetX, 135 + canvas1OffsetY, 275 + canvas1OffsetX, 165 + canvas1OffsetY); //Acko hore zhora nadol
    acko4.setStroke("#FF0000", 2);
    acko5 = new Line(275 + canvas1OffsetX, 235 + canvas1OffsetY, 275 + canvas1OffsetX, 265 + canvas1OffsetY); //Acko dole zdola nahor
    acko5.setStroke("#FF0000", 2);


    kruh1 = new Circle(7, 300 + canvas1OffsetX, 90 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //UDD
    kruh1 = new Circle(6, 300 + canvas1OffsetX, 135 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Tp
    zelenaY5 = new Circle(6, 300 + canvas1OffsetX, 200 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y lave
    zelenaY6 = new Circle(7, 360 + canvas1OffsetX, 200 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y prave
    kruh2 = new Circle(6, 300 + canvas1OffsetX, 265 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tn
    acko6 = new Circle(6, 255 + canvas1OffsetX, 265 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prave
    acko7 = new Circle(7, 220 + canvas1OffsetX, 265 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko lave


    scheme_slovak = new CustomText("Schéma", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    equivalent_slovak1 = new CustomText("Ekvivalentný", canvas1OffsetX+130, 380 + canvas1OffsetY, 20);
    equivalent_slovak2= new CustomText(" obvod", canvas1OffsetX+155, 410 + canvas1OffsetY, 20);

    scheme_english = new CustomText("Scheme", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    scheme_english.hideText();
    equivalent_english1 = new CustomText("Equivalent", canvas1OffsetX+130, 380 + canvas1OffsetY, 20);
    equivalent_english1.hideText();
    equivalent_english2 = new CustomText("circuit", canvas1OffsetX+155, 410 + canvas1OffsetY, 20);
    equivalent_english2.hideText();

    new CustomText("U", 285 + canvas1OffsetX, 60 + canvas1OffsetY, 18).toItalic();
    new CustomText("DD", 298 + canvas1OffsetX, 70 + canvas1OffsetY, 13);



    text = new CustomText("Tp", 315 + canvas1OffsetX, 140 + canvas1OffsetY, 15);
    text = new CustomText("Tn", 315 + canvas1OffsetX, 240 + canvas1OffsetY, 15);
    text = new CustomText("A", 195 + canvas1OffsetX, 258 + canvas1OffsetY, 15);
    ypsilon1 = new CustomText("Y=1", 380 + canvas1OffsetX, 190 + canvas1OffsetY, 15);
    ypsilon0 = new CustomText("Y=0", 380 + canvas1OffsetX, 190 + canvas1OffsetY, 15);
    ypsilon0.hideText();


    tp1ramcek = new Rectangle(265 + canvas1OffsetX, 120 + canvas1OffsetY, 80, 60, "#32cd32");
    tp1ramcek.setOpacity(0.3);
    tn1ramcek = new Rectangle(265 + canvas1OffsetX, 220 + canvas1OffsetY, 80, 60, "#FF0000");
    tn1ramcek.setOpacity(0.3);


    prvasuradnicax = 285 + canvas1OffsetX;
    prvasuradnicay = 155 + canvas1OffsetY;
    druhasuradnicax = 285 + canvas1OffsetX;
    druhasuradnicay = 145 + canvas1OffsetY;
    tretiasuradnicax = 295 + canvas1OffsetX;
    tretiasuradnicay = 150 + canvas1OffsetY;

    trojuholniktp = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#32cd32"); //tp trojuholnik

    prvasuradnicax = 280 + canvas1OffsetX;
    prvasuradnicay = 250 + canvas1OffsetY;
    druhasuradnicax = 290 + canvas1OffsetX;
    druhasuradnicay = 245 + canvas1OffsetY;
    tretiasuradnicax = 290 + canvas1OffsetX;
    tretiasuradnicay = 255 + canvas1OffsetY;

    trojuholniktn = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktn.fill("#FF0000");


    ///////////////////////////////////////////////////////////DRUHA SCHEMA////////////////////////////////////////////////////////////////////////////////////////

    udd = new Line(300 + canvas1OffsetX, 410 + canvas1OffsetY, 300 + canvas1OffsetX, 460 + canvas1OffsetY); //UDD
    udd.setStroke("#32cd32", 2);

    klapka1zelena = new Line(305 + canvas1OffsetX, 460 + canvas1OffsetY, 305 + canvas1OffsetX, 490 + canvas1OffsetY); //Klapka pri Tap
    klapka1zelena.setStroke("#32cd32", 2);
    klapka1cervena = new Line(315 + canvas1OffsetX, 460 + canvas1OffsetY, 305 + canvas1OffsetX, 490 + canvas1OffsetY); //Klapka pri Tap
    klapka1cervena.setStroke("#FF0000", 2);
    klapka1cervena.hideObj();

    klapka2otvor = new Line(315 + canvas1OffsetX, 570 + canvas1OffsetY, 305 + canvas1OffsetX, 600 + canvas1OffsetY); //Klapka pri Tap
    klapka2otvor.setStroke("#FF0000", 2);

    klapka2zatvor = new Line(305 + canvas1OffsetX, 570 + canvas1OffsetY, 305 + canvas1OffsetX, 600 + canvas1OffsetY); //Klapka pri Tap
    klapka2zatvor.setStroke("#FF0000", 2);
    klapka2zatvor.hideObj();

    zelenaY7 = new Line(300 + canvas1OffsetX, 490 + canvas1OffsetY, 300 + canvas1OffsetX, 570 + canvas1OffsetY); //Y pomocne zhora nadol
    zelenaY7.setStroke("#32cd32", 2);

    zelenaY8 = new Line(300 + canvas1OffsetX, 530 + canvas1OffsetY, 360 + canvas1OffsetX, 530 + canvas1OffsetY); //Ypsilon zlava doprava
    zelenaY8.setStroke("#32cd32", 2);

    acko8 = new Line(255 + canvas1OffsetX, 475 + canvas1OffsetY, 304 + canvas1OffsetX, 475 + canvas1OffsetY); //Acko .. Tap
    acko8.setStroke("#FF0000", 2);

    ackodoplnok = new Line(304 + canvas1OffsetX, 475 + canvas1OffsetY, 309 + canvas1OffsetX, 475 + canvas1OffsetY); //Acko Tap doplnok
    ackodoplnok.setStroke("#32cd32", 2);
    ackodoplnok.hideObj();

    ackodoplnok2 = new Line(304 + canvas1OffsetX, 585 + canvas1OffsetY, 309 + canvas1OffsetX, 585 + canvas1OffsetY); //Acko Tap doplnok
    ackodoplnok2.setStroke("#FF0000", 2);

    acko9 = new Line(255 + canvas1OffsetX, 475 + canvas1OffsetY, 255 + canvas1OffsetX, 600 + canvas1OffsetY); //Acko zdola nahor
    acko9.setStroke("#FF0000", 2);

    acko10 = new Line(220 + canvas1OffsetX, 600 + canvas1OffsetY, 275 + canvas1OffsetX, 600 + canvas1OffsetY); //Acko
    acko10.setStroke("#FF0000", 2);

    acko11 = new Line(275 + canvas1OffsetX, 600 + canvas1OffsetY, 275 + canvas1OffsetX, 585 + canvas1OffsetY); //Acko dole zdola nahor
    acko11.setStroke("#FF0000", 2);

    acko12 = new Line(275 + canvas1OffsetX, 585 + canvas1OffsetY, 304 + canvas1OffsetX, 585 + canvas1OffsetY); //Acko dole vrch zlava doprava
    acko12.setStroke("#FF0000", 2);

    spodok = new Line(300 + canvas1OffsetX, 600 + canvas1OffsetY, 300 + canvas1OffsetX, 630 + canvas1OffsetY); //Spodok Tan
    spodok.setStroke("#FF0000", 2);

    spodok2 = new Line(290 + canvas1OffsetX, 630 + canvas1OffsetY, 310 + canvas1OffsetX, 630 + canvas1OffsetY); //Spodok Tan
    spodok2.setStroke("#FF0000", 2);


    kruh3 = new Circle(7, 300 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //UDD

    kruh4 = new Circle(7, 300 + canvas1OffsetX, 460 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap1
    zelenaY9 = new Circle(7, 300 + canvas1OffsetX, 490 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap2

    zelenaY10 = new Circle(7, 300 + canvas1OffsetX, 530 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y lave
    zelenaY11 = new Circle(7, 360 + canvas1OffsetX, 530 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y prave
    zelenaY12 = new Circle(7, 300 + canvas1OffsetX, 570 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tab1

    kruh5 = new Circle(7, 300 + canvas1OffsetX, 600 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tab2

    acko13 = new Circle(7, 220 + canvas1OffsetX, 600 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //A lave
    acko14 = new Circle(7, 255 + canvas1OffsetX, 600 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //A prave


    ////////////////////////////////////////////////

    udd_dole1=new CustomText("U", 285 + canvas1OffsetX, 380 + canvas1OffsetY, 18);
    udd_dole1.toItalic();
    udd_dole2=new CustomText("DD", 298 + canvas1OffsetX, 390 + canvas1OffsetY, 13);
    udd_dole2.toItalic();




    text = new CustomText("Tp", 320 + canvas1OffsetX, 465 + canvas1OffsetY, 15);
    text = new CustomText("Tn", 320 + canvas1OffsetX, 575 + canvas1OffsetY, 15);
    text = new CustomText("A", 195 + canvas1OffsetX, 590 + canvas1OffsetY, 15);

    ypsilon1_dole = new CustomText("Y=1", 380 + canvas1OffsetX, 520 + canvas1OffsetY, 15);
    ypsilon0_dole = new CustomText("Y=0", 380 + canvas1OffsetX, 520 + canvas1OffsetY, 15);
    ypsilon0_dole.hideText();


    tp2ramcek = new Rectangle(265 + canvas1OffsetX, 445 + canvas1OffsetY, 80, 60, "#32cd32");
    tp2ramcek.setOpacity(0.3);
    tn2ramcek = new Rectangle(265 + canvas1OffsetX, 555 + canvas1OffsetY, 80, 60, "#FF0000");
    tn2ramcek.setOpacity(0.3);

    ////////////////////////////////////////////////////////////////////////////Nacrt//////////////////////////////////////////////////////////

    nacrt = new Line(635 + canvas1OffsetX, 90 + canvas1OffsetY, 650 + canvas1OffsetX, 90 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 105 + canvas1OffsetY, 650 + canvas1OffsetX, 105 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);1
    nacrt = new Line(635 + canvas1OffsetX, 120 + canvas1OffsetY, 650 + canvas1OffsetX, 120 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 85 + canvas1OffsetY, 635 + canvas1OffsetX, 95 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 100 + canvas1OffsetY, 635 + canvas1OffsetX, 110 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 115 + canvas1OffsetY, 635 + canvas1OffsetX, 125 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(650 + canvas1OffsetX, 75 + canvas1OffsetY, 650 + canvas1OffsetX, 105 + canvas1OffsetY);<!--prave zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(650 + canvas1OffsetX, 120 + canvas1OffsetY, 650 + canvas1OffsetX, 135 + canvas1OffsetY);<!--prave zhora nadol 2-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(630 + canvas1OffsetX, 90 + canvas1OffsetY, 630 + canvas1OffsetX, 120 + canvas1OffsetY);<!--lave zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(620 + canvas1OffsetX, 90 + canvas1OffsetY, 630 + canvas1OffsetX, 90 + canvas1OffsetY);<!--lave zlava doprava-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Circle(7, 650 + canvas1OffsetX, 90 + canvas1OffsetY, 0.5, "#000000", "#000000"); //Pmosfet


    prvasuradnicax = 640 + canvas1OffsetX;
    prvasuradnicay = 110 + canvas1OffsetY;
    druhasuradnicax = 640 + canvas1OffsetX;
    druhasuradnicay = 100 + canvas1OffsetY;
    tretiasuradnicax = 650 + canvas1OffsetX;
    tretiasuradnicay = 105 + canvas1OffsetY;
    nacrttrojuholnik = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    nacrttrojuholnik.fill("#000000"); //tp trojuholnik

    text = new CustomText("E-PMOSFET", canvas1OffsetX + 670, 85 + canvas1OffsetY, 15);
    inducated_p_slovak = new CustomText("(s indukovaným p-kanálom)", canvas1OffsetX + 670, 105 + canvas1OffsetY, 15);
    inducated_p_english = new CustomText("(with inducated p channel)", canvas1OffsetX + 670, 105 + canvas1OffsetY, 15);
    inducated_p_english.hideText();



    //////////////////////////////////////////////////////////////////Nacrt 2//////////////////////////////////////////////////////////

    nacrt = new Line(635 + canvas1OffsetX, 160 + canvas1OffsetY, 650 + canvas1OffsetX, 160 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 175 + canvas1OffsetY, 650 + canvas1OffsetX, 175 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 190 + canvas1OffsetY, 650 + canvas1OffsetX, 190 + canvas1OffsetY);<!--Tap zlava doprava-->
    nacrt.setStroke("#000000", 2);

    nacrt = new Line(635 + canvas1OffsetX, 155 + canvas1OffsetY, 635 + canvas1OffsetX, 165 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 170 + canvas1OffsetY, 635 + canvas1OffsetX, 180 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(635 + canvas1OffsetX, 185 + canvas1OffsetY, 635 + canvas1OffsetX, 195 + canvas1OffsetY);<!--Tap zhora nadol-->
    nacrt.setStroke("#000000", 2);

    nacrt = new Line(650 + canvas1OffsetX, 145 + canvas1OffsetY, 650 + canvas1OffsetX, 160 + canvas1OffsetY);<!--prave zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(650 + canvas1OffsetX, 175 + canvas1OffsetY, 650 + canvas1OffsetX, 205 + canvas1OffsetY);<!--prave zhora nadol 2-->
    nacrt.setStroke("#000000", 2);

    nacrt = new Line(630 + canvas1OffsetX, 160 + canvas1OffsetY, 630 + canvas1OffsetX, 190 + canvas1OffsetY);<!--lave zhora nadol-->
    nacrt.setStroke("#000000", 2);
    nacrt = new Line(620 + canvas1OffsetX, 190 + canvas1OffsetY, 630 + canvas1OffsetX, 190 + canvas1OffsetY);<!--lave zlava doprava-->
    nacrt.setStroke("#000000", 2);


    prvasuradnicax = 635 + canvas1OffsetX;
    prvasuradnicay = 175 + canvas1OffsetY;
    druhasuradnicax = 645 + canvas1OffsetX;
    druhasuradnicay = 170 + canvas1OffsetY;
    tretiasuradnicax = 645 + canvas1OffsetX;
    tretiasuradnicay = 180 + canvas1OffsetY;
    trojuholniknmos = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniknmos.fill("#000000"); //trojuholnik Nmos


    nacrt = new Circle(7, 650 + canvas1OffsetX, 190 + canvas1OffsetY, 0.5, "#000000", "#000000"); //Nmosfet


    nacrt = new Line(620 + canvas1OffsetX, 190 + canvas1OffsetY, 630 + canvas1OffsetX, 190 + canvas1OffsetY);<!--lave zlava doprava-->
    nacrt.setStroke("#000000", 2);


    nacrtramcek = new Rectangle(600 + canvas1OffsetX, 60 + canvas1OffsetY, 270, 160, "#000000");
    nacrtramcek.setStroke("#000000", 2);
    nacrtramcek.changeFill(0);


    text = new CustomText("E-NMOSFET", canvas1OffsetX + 670, 155 + canvas1OffsetY, 15);
    inducated_n_slovak = new CustomText("(s indukovaným n-kanálom)", canvas1OffsetX + 670, 175 + canvas1OffsetY, 15);
    inducated_n_english = new CustomText("(with inducated n channel)", canvas1OffsetX + 670, 175 + canvas1OffsetY, 15);
    inducated_n_english.hideText();

//////////////////////////////////////////////////////////////////////Tabulka///////////////////////////////////////////////////////////////////////////////

    tabulka = new Rectangle(600 + canvas1OffsetX, 420 + canvas1OffsetY, 110, 120, "#000000"); //okraj tabulkz
    tabulka.setStroke("#000000", 2);
    tabulka.changeFill(0);

    prvyriadok = new Rectangle(600 + canvas1OffsetX, 420 + canvas1OffsetY, 110, 40, "#808080"); //1 riadok
    prvyriadok.setStroke("#000000", 1);
    prvyriadok.changeFill(0.4);

    druhyriadok = new Rectangle(600 + canvas1OffsetX, 460 + canvas1OffsetY, 110, 40, "#808080"); //2 riadok
    druhyriadok.setStroke("#000000", 1);
    druhyriadok.changeFill(0);

    tretiriadok = new Rectangle(600 + canvas1OffsetX, 500 + canvas1OffsetY, 110, 40, "#808080"); //3 riadok
    tretiriadok.setStroke("#000000", 1);
    tretiriadok.changeFill(0.4);

    pomocnaciara = new Line(655 + canvas1OffsetX, 420 + canvas1OffsetY, 655+ canvas1OffsetX, 540 + canvas1OffsetY);<!--lave zlava doprava-->
    pomocnaciara.setStroke("#000000", 1);


    new CustomText("A", canvas1OffsetX + 620, 422 + canvas1OffsetY, 25);
    new CustomText("Y", canvas1OffsetX + 672, 422 + canvas1OffsetY, 25).toBold();

    new CustomText("0", canvas1OffsetX + 620, 462 + canvas1OffsetY, 25);
    new CustomText("1", canvas1OffsetX + 672, 462 + canvas1OffsetY, 25).toBold();

    new CustomText("1", canvas1OffsetX + 620, 502 + canvas1OffsetY, 25);
    new CustomText("0", canvas1OffsetX + 672, 502 + canvas1OffsetY, 25).toBold();



    prvasuradnicax = 740 + canvas1OffsetX;
    prvasuradnicay = 495 + canvas1OffsetY;

    druhasuradnicax = 720 + canvas1OffsetX;
    druhasuradnicay = 480 + canvas1OffsetY;

    tretiasuradnicax = 740 + canvas1OffsetX;
    tretiasuradnicay = 465 + canvas1OffsetY;

    stvrtasuradnicax = 740 + canvas1OffsetX;
    stvrtasuradnicay = 475 + canvas1OffsetY;

    piatasuradnicax = 790 + canvas1OffsetX;
    piatasuradnicay = 475 + canvas1OffsetY;

    siestasuradnicax = 790 + canvas1OffsetX;
    siestasuradnicay = 485 + canvas1OffsetY;

    siedmasuradnicax = 740 + canvas1OffsetX;
    siedmasuradnicay = 485 + canvas1OffsetY;

    sipka_invertor = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_invertor.fill("#000000"); //sipka

    /*
        0,255,0-zelena
        255,0,0- cervena

        #ffffff-biela

        UTOROK  26.5.2020 - 14:00*/

    /*

         */

    zakrytie_pravej_strany= new Rectangle(590 + canvas1OffsetX, 50 + canvas1OffsetY, 300, 800, "#ffffff");
    zakrytie_pravej_strany.hideObj();

    zakrytie_schemy= new Rectangle(50 + canvas1OffsetX, 50 + canvas1OffsetY, 380, 300, "#ffffff");
    zakrytie_schemy.hideObj();

    zakrytie_obvodu= new Rectangle(50 + canvas1OffsetX, 350 + canvas1OffsetY, 380, 300, "#ffffff");
    zakrytie_obvodu.hideObj();

   // zakrytie_obvodu.hideObj();


}
function myFunction() {
        var x = document.getElementById("mySelect").value;


        if(x=='Anula'){

            zelenaY1.setStroke("#32cd32",2);
            zelenaY2.setStroke("#32cd32",2);
            zelenaY3.setStroke("#32cd32",2);
            zelenaY4.setStroke("#32cd32",2);
            zelenaY5.setStroke("#32cd32",0.5);
            zelenaY5.fillObj("#32cd32");
            zelenaY6.setStroke("#32cd32",0.5);
            zelenaY7.setStroke("#32cd32",2);
            zelenaY8.setStroke("#32cd32",2);

            zelenaY9.setStroke("#32cd32",0.5);
            zelenaY10.setStroke("#32cd32",0.5);
            zelenaY10.fillObj("#32cd32");
            zelenaY11.setStroke("#32cd32",0.5);
            zelenaY12.setStroke("#32cd32",0.5);

            zelenaktap1.setStroke("#32cd32",2);
            zelenaktap2.setStroke("#32cd32",2);
            zelenaktap3.setStroke("#32cd32",2);

            ciernakTanpotomcervena1.setStroke("#000000",2);
            ciernakTanpotomcervena2.setStroke("#000000",2);
            ciernakTanpotomcervena3.setStroke("#000000",2);

            acko1.setStroke("#FF0000",2);
            acko2.setStroke("#FF0000",2);
            acko3.setStroke("#FF0000",2);
            acko4.setStroke("#FF0000",2);
            acko5.setStroke("#FF0000",2);
            acko6.setStroke("#FF0000",2);
            acko6.fillObj("#FF0000");
            acko7.setStroke("#FF0000",0.5);
            acko8.setStroke("#FF0000",2);
            acko9.setStroke("#FF0000",2);
            acko10.setStroke("#FF0000",2);
            acko11.setStroke("#FF0000",2);
            acko12.setStroke("#FF0000",2);
            acko13.setStroke("#FF0000",0.5);
            acko14.setStroke("#FF0000",0.5);
            acko14.fillObj("#FF0000");

            klapka1cervena.hideObj();
            klapka1zelena.showObj();
            klapka2otvor.showObj();
            klapka2zatvor.hideObj();
            ackodoplnok.hideObj();
            ackodoplnok2.showObj();


            ypsilon0.hideText();
            ypsilon1.showText();
            ypsilon0_dole.hideText();
            ypsilon1_dole.showText();

            tp1ramcek.fillObj("#32cd32");
            tp2ramcek.fillObj("#32cd32");
            tn1ramcek.fillObj("#FF0000");
            tn2ramcek.fillObj("#FF0000");


            druhyriadok.changeFill(0);
            tretiriadok.changeFill(0.4);

            sipka_invertor.move(canvas1OffsetX+720,canvas1OffsetY+465);

            /*dlzka=document.getElementsByClassName("zelenaY");



            document.getElementById("Ynula").style.visibility = "hidden";
            document.getElementById("Yjedna").style.visibility = "visible";
            document.getElementById("Ynula2").style.visibility = "hidden";
            document.getElementById("Yjedna2").style.visibility = "visible";
            document.getElementById("klapka1cervena").style.visibility = "hidden";
            document.getElementById("klapka1zelena").style.visibility = "visible";
            document.getElementById("klapka2otvor").style.visibility = "visible";
            document.getElementById("klapka2zatvor").style.visibility = "hidden";

            document.getElementById("ackodoplnok").style.visibility = "hidden";
            document.getElementById("ackodoplnok2").style.visibility = "visible";


            document.getElementById("prvyriadok1").style.backgroundColor ='#ffffff';
            document.getElementById("prvyriadok2").style.backgroundColor ='#ffffff';
            document.getElementById("druhyriadok1").style.backgroundColor ='#abb5c2';
            document.getElementById("druhyriadok2").style.backgroundColor ='#abb5c2';
            document.getElementById("sipkahore").style.visibility = "visible";
            document.getElementById("sipkadole").style.visibility = "hidden";

            document.getElementById("ramcekTp1").style.fill='Lime';
            document.getElementById("ramcekTp2").style.fill='Lime';
            document.getElementById("ramcekTn1").style.fill='red';
            document.getElementById("ramcekTn2").style.fill='red';
    */
        }
        if(x=='Ajedna'){

            zelenaY1.setStroke("#FF0000",2);
            zelenaY2.setStroke("#FF0000",2);
            zelenaY3.setStroke("#FF0000",2);
            zelenaY4.setStroke("#FF0000",2);
            zelenaY5.setStroke("#FF0000",0.5);
            zelenaY5.fillObj("#FF0000");
            zelenaY6.setStroke("#FF0000",0.5);
            zelenaY7.setStroke("#FF0000",2);
            zelenaY8.setStroke("#FF0000",2);

            zelenaY9.setStroke("#FF0000",0.5);
            zelenaY10.setStroke("#FF0000",0.5);
            zelenaY10.fillObj("#FF0000");
            zelenaY11.setStroke("#FF0000",0.5);
            zelenaY12.setStroke("#FF0000",0.5);

            zelenaktap1.setStroke("#000000",2);
            zelenaktap2.setStroke("#000000",2);
            zelenaktap3.setStroke("#000000",2);


            ciernakTanpotomcervena1.setStroke("#FF0000",2);
            ciernakTanpotomcervena2.setStroke("#FF0000",2);
            ciernakTanpotomcervena3.setStroke("#FF0000",2);

            acko1.setStroke("#32cd32",2);
            acko2.setStroke("#32cd32",2);
            acko3.setStroke("#32cd32",2);
            acko4.setStroke("#32cd32",2);
            acko5.setStroke("#32cd32",2);
            acko6.setStroke("#32cd32",2);
            acko6.fillObj("#32cd32");
            acko7.setStroke("#32cd32",0.5);
            acko8.setStroke("#32cd32",2);
            acko9.setStroke("#32cd32",2);
            acko10.setStroke("#32cd32",2);
            acko11.setStroke("#32cd32",2);
            acko12.setStroke("#32cd32",2);
            acko13.setStroke("#32cd32",0.5);
            acko14.setStroke("#32cd32",0.5);
            acko14.fillObj("#32cd32");

            klapka1cervena.showObj();
            klapka1zelena.hideObj();
            klapka2otvor.hideObj();
            klapka2zatvor.showObj();
            ackodoplnok.showObj();
            ackodoplnok2.hideObj();

            ypsilon0.showText();
            ypsilon1.hideText();
            ypsilon0_dole.showText();
            ypsilon1_dole.hideText();

            tp1ramcek.fillObj("#FF0000");
            tp2ramcek.fillObj("#FF0000");
            tn1ramcek.fillObj("#32cd32");
            tn2ramcek.fillObj("#32cd32");


            druhyriadok.changeFill(0.4);
            tretiriadok.changeFill(0);

            sipka_invertor.move(canvas1OffsetX+720,canvas1OffsetY+505);

            /*








              document.getElementById("prvyriadok1").style.backgroundColor ='#abb5c2';
              document.getElementById("prvyriadok2").style.backgroundColor ='#abb5c2';
              document.getElementById("druhyriadok1").style.backgroundColor ='#ffffff';
              document.getElementById("druhyriadok2").style.backgroundColor ='#ffffff';
              document.getElementById("sipkahore").style.visibility = "hidden";
              document.getElementById("sipkadole").style.visibility = "visible";


              document.getElementById("ramcekTp1").style.fill='red';
              document.getElementById("ramcekTp2").style.fill='red';
              document.getElementById("ramcekTn1").style.fill='Lime';
              document.getElementById("ramcekTn2").style.fill='Lime';
      */
        }





}



