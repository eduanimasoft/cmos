function zoom_funkcia() {

    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;

    //canvas1OffsetX = padding + canvasWidth * magicCanvasXOffset;
    canvas1OffsetX = (divWidth -800)/2;
    canvas1OffsetY = (divHeight-500)/2;
    //canvas1OffsetY = (canvasHeight -1000)/2;


    //////////////////////////////////////////////////////PRVA SCHEMA///////////////////////////////////////////////////////////////

    zelena1 = new Line(300 + canvas1OffsetX, 110 + canvas1OffsetY, 300 + canvas1OffsetX, 170 + canvas1OffsetY); //udd zhora nadol
    zelena1.setStroke("#32cd32", 2);
    zelenaktap1 = new Line(280 + canvas1OffsetX, 150 + canvas1OffsetY, 280 + canvas1OffsetX, 160 + canvas1OffsetY); //udd zhora nadol
    zelenaktap1.setStroke("#32cd32", 2);
    zelenaktap2 = new Line(280 + canvas1OffsetX, 165 + canvas1OffsetY, 280 + canvas1OffsetX, 175 + canvas1OffsetY); //udd zhora nadol
    zelenaktap2.setStroke("#32cd32", 2);
    zelenaktap3 = new Line(280 + canvas1OffsetX, 180 + canvas1OffsetY, 280 + canvas1OffsetX, 190 + canvas1OffsetY); //udd zhora nadol
    zelenaktap3.setStroke("#32cd32", 2);
    zelena2 = new Line(280 + canvas1OffsetX, 155 + canvas1OffsetY, 300 + canvas1OffsetX, 155 + canvas1OffsetY); //Tap
    zelena2.setStroke("#32cd32", 2);
    zelena3 = new Line(280 + canvas1OffsetX, 170 + canvas1OffsetY, 300 + canvas1OffsetX, 170 + canvas1OffsetY); //Tap
    zelena3.setStroke("#32cd32", 2);
    zelenaY1 = new Line(280 + canvas1OffsetX, 185 + canvas1OffsetY, 300 + canvas1OffsetX, 185 + canvas1OffsetY); //Tap
    zelenaY1.setStroke("#32cd32", 2);
    zelenaY2 = new Line(300 + canvas1OffsetX, 185 + canvas1OffsetY, 300 + canvas1OffsetX, 255 + canvas1OffsetY); //Ypsilon pomocna ciara
    zelenaY2.setStroke("#32cd32", 2);
    zelenaY3 = new Line(300 + canvas1OffsetX, 220 + canvas1OffsetY, 360 + canvas1OffsetX, 220 + canvas1OffsetY); //Ypsilon
    zelenaY3.setStroke("#32cd32", 2);
    zelenaY4 = new Line(280 + canvas1OffsetX, 255 + canvas1OffsetY, 300 + canvas1OffsetX, 255 + canvas1OffsetY); //Ypsilon pomocna ciara dole Tab
    zelenaY4.setStroke("#32cd32", 2);
    ciernakTanpotomcervena1 = new Line(280 + canvas1OffsetX, 250 + canvas1OffsetY, 280 + canvas1OffsetX, 260 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena1.setStroke("#000000", 2);
    ciernakTanpotomcervena2 = new Line(280 + canvas1OffsetX, 265 + canvas1OffsetY, 280 + canvas1OffsetX, 275 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena2.setStroke("#000000", 2);
    ciernakTanpotomcervena3 = new Line(280 + canvas1OffsetX, 280 + canvas1OffsetY, 280 + canvas1OffsetX, 290 + canvas1OffsetY); //Cierna k Tab
    ciernakTanpotomcervena3.setStroke("#000000", 2);
    cervena1 = new Line(280 + canvas1OffsetX, 270 + canvas1OffsetY, 300 + canvas1OffsetX, 270 + canvas1OffsetY); //Tab
    cervena1.setStroke("#FF0000", 2);
    cervena2 = new Line(280 + canvas1OffsetX, 285 + canvas1OffsetY, 300 + canvas1OffsetX, 285 + canvas1OffsetY); //Tab
    cervena2.setStroke("#FF0000", 2);
    cervena3 = new Line(300 + canvas1OffsetX, 270 + canvas1OffsetY, 300 + canvas1OffsetX, 310 + canvas1OffsetY); //Tab zhora nadol
    cervena3.setStroke("#FF0000", 2);
    cervena4 = new Line(285 + canvas1OffsetX, 310 + canvas1OffsetY, 315 + canvas1OffsetX, 310 + canvas1OffsetY); //Spodok Tab
    cervena4.setStroke("#FF0000", 2);
    acko1 = new Line(220 + canvas1OffsetX, 285 + canvas1OffsetY, 275 + canvas1OffsetX, 285 + canvas1OffsetY); //Acko
    acko1.setStroke("#FF0000", 2);
    acko2 = new Line(255 + canvas1OffsetX, 285 + canvas1OffsetY, 255 + canvas1OffsetX, 155 + canvas1OffsetY); //Acko zdola nahor
    acko2.setStroke("#FF0000", 2);
    acko3 = new Line(255 + canvas1OffsetX, 155 + canvas1OffsetY, 275 + canvas1OffsetX, 155 + canvas1OffsetY); //Acko hore zlava doprava
    acko3.setStroke("#FF0000", 2);
    acko4 = new Line(275 + canvas1OffsetX, 155 + canvas1OffsetY, 275 + canvas1OffsetX, 185 + canvas1OffsetY); //Acko hore zhora nadol
    acko4.setStroke("#FF0000", 2);
    acko5 = new Line(275 + canvas1OffsetX, 255 + canvas1OffsetY, 275 + canvas1OffsetX, 285 + canvas1OffsetY); //Acko dole zdola nahor
    acko5.setStroke("#FF0000", 2);


    kruh1 = new Circle(7, 300 + canvas1OffsetX, 110 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //UDD
    kruh1 = new Circle(6, 300 + canvas1OffsetX, 155 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Tp
    zelenaY5 = new Circle(6, 300 + canvas1OffsetX, 220 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y lave
    zelenaY6 = new Circle(7, 360 + canvas1OffsetX, 220 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y prave
    kruh2 = new Circle(6, 300 + canvas1OffsetX, 285 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tn
    acko6 = new Circle(6, 255 + canvas1OffsetX, 285 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prave
    acko7 = new Circle(7, 220 + canvas1OffsetX, 285 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko lave




    new CustomText("U", 285 + canvas1OffsetX, 80 + canvas1OffsetY, 18).toItalic();
    new CustomText("DD", 298 + canvas1OffsetX, 90 + canvas1OffsetY, 13);



    text = new CustomText("Tp", 315 + canvas1OffsetX, 160 + canvas1OffsetY, 15);
    text = new CustomText("Tn", 315 + canvas1OffsetX, 260 + canvas1OffsetY, 15);
    text = new CustomText("A", 195 + canvas1OffsetX, 278 + canvas1OffsetY, 15);
    ypsilon1 = new CustomText("Y=1", 370 + canvas1OffsetX, 210 + canvas1OffsetY, 15);
    ypsilon0 = new CustomText("Y=0", 380 + canvas1OffsetX, 210 + canvas1OffsetY, 15);
    ypsilon0.hideText();


    tp1ramcek = new Rectangle(265 + canvas1OffsetX, 140 + canvas1OffsetY, 80, 60, "#32cd32");
    tp1ramcek.setOpacity(0.3);
    tn1ramcek = new Rectangle(265 + canvas1OffsetX, 240 + canvas1OffsetY, 80, 60, "#FF0000");
    tn1ramcek.setOpacity(0.3);


    prvasuradnicax = 285 + canvas1OffsetX;
    prvasuradnicay = 175 + canvas1OffsetY;
    druhasuradnicax = 285 + canvas1OffsetX;
    druhasuradnicay = 165 + canvas1OffsetY;
    tretiasuradnicax = 295 + canvas1OffsetX;
    tretiasuradnicay = 170 + canvas1OffsetY;

    trojuholniktp = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#32cd32"); //tp trojuholnik

    prvasuradnicax = 280 + canvas1OffsetX;
    prvasuradnicay = 270 + canvas1OffsetY;
    druhasuradnicax = 290 + canvas1OffsetX;
    druhasuradnicay = 265 + canvas1OffsetY;
    tretiasuradnicax = 290 + canvas1OffsetX;
    tretiasuradnicay = 275 + canvas1OffsetY;

    trojuholniktn = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktn.fill("#FF0000");





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

    mala_krabica_vysnapatie  = new Rectangle(360 + canvas1OffsetX, 143 + canvas1OffsetY, 65, 50, "#ffffff");
    mala_krabica_vysnapatie .setStroke("#000000", 1);

    new CustomText("G", canvas1OffsetX+256, 145 + canvas1OffsetY, 10);
    new CustomText("S", canvas1OffsetX+285, 145 + canvas1OffsetY, 10);
    new CustomText("B", canvas1OffsetX+290, 160 + canvas1OffsetY, 10);
    new CustomText("D", canvas1OffsetX+285, 190 + canvas1OffsetY, 10);







    new CustomText("D", canvas1OffsetX+285, 245 + canvas1OffsetY, 10);
    new CustomText("B", canvas1OffsetX+290, 260 + canvas1OffsetY, 10);
    new CustomText("S", canvas1OffsetX+285, 290 + canvas1OffsetY, 10);
    new CustomText("G", canvas1OffsetX+256, 290 + canvas1OffsetY, 10);


    new CustomText("S - Source", canvas1OffsetX+370, 150 + canvas1OffsetY, 10);
    new CustomText("D - Drain", canvas1OffsetX+370, 160 + canvas1OffsetY, 10);
    new CustomText("G - Gate", canvas1OffsetX+370, 170 + canvas1OffsetY, 10);
    new CustomText("B - Bulk", canvas1OffsetX+370, 180 + canvas1OffsetY, 10);



}
