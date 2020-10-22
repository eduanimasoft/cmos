function nand(){

    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;
    canvas1OffsetX = (divWidth -1000)/2;
    canvas1OffsetY = (divHeight-540)/2;



    //////////////////////////////////////////////////////PRVA SCHEMA///////////////////////////////////////////////////////////////
    scheme_slovak = new CustomText("Schéma", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    equivalent_slovak1 = new CustomText("Ekvivalentný", canvas1OffsetX+130, 380 + canvas1OffsetY, 20);
    equivalent_slovak2= new CustomText(" obvod", canvas1OffsetX+155, 410 + canvas1OffsetY, 20);

    scheme_english = new CustomText("Scheme", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    scheme_english.hideText();
    equivalent_english1 = new CustomText("Equivalent", canvas1OffsetX+130, 380 + canvas1OffsetY, 20);
    equivalent_english1.hideText();
    equivalent_english2 = new CustomText("circuit", canvas1OffsetX+155, 410 + canvas1OffsetY, 20);
    equivalent_english2.hideText();

    prvasuradnicax=285+canvas1OffsetX;
    prvasuradnicay=115+canvas1OffsetY;
    druhasuradnicax=285+canvas1OffsetX;
    druhasuradnicay=105+canvas1OffsetY;
    tretiasuradnicax=295+canvas1OffsetX;
    tretiasuradnicay=110+canvas1OffsetY;

    trojuholniktp=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#32cd32"); //tap trojuholnik

    prvasuradnicax=385+canvas1OffsetX;
    prvasuradnicay=115+canvas1OffsetY;
    druhasuradnicax=385+canvas1OffsetX;
    druhasuradnicay=105+canvas1OffsetY;
    tretiasuradnicax=395+canvas1OffsetX;
    tretiasuradnicay=110+canvas1OffsetY;

    trojuholniktp=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#32cd32"); //tbp trojuholnik

    prvasuradnicax=380+canvas1OffsetX;
    prvasuradnicay=210+canvas1OffsetY;
    druhasuradnicax=390+canvas1OffsetX;
    druhasuradnicay=205+canvas1OffsetY;
    tretiasuradnicax=390+canvas1OffsetX;
    tretiasuradnicay=215+canvas1OffsetY;

    trojuholniktp=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#FF0000"); //tan trojuholnik


    prvasuradnicax=380+canvas1OffsetX;
    prvasuradnicay=290+canvas1OffsetY;
    druhasuradnicax=390+canvas1OffsetX;
    druhasuradnicay=285+canvas1OffsetY;
    tretiasuradnicax=390+canvas1OffsetX;
    tretiasuradnicay=295+canvas1OffsetY;

    trojuholniktp=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktp.fill("#FF0000"); //tbn trojuholnik


    zelena1 = new Line(300+canvas1OffsetX, 60+canvas1OffsetY, 300+canvas1OffsetX, 110+canvas1OffsetY); //UDD
    zelena1.setStroke("#32cd32",2);
    zelena2 = new Line(300+canvas1OffsetX, 60+canvas1OffsetY, 500+canvas1OffsetX, 60+canvas1OffsetY); //UDD
    zelena2.setStroke("#32cd32",2);
    zelena3 = new Line(400+canvas1OffsetX, 60+canvas1OffsetY, 400+canvas1OffsetX, 110+canvas1OffsetY); //UDD
    zelena3.setStroke("#32cd32",2);

    zelena4 = new Line(280+canvas1OffsetX, 90+canvas1OffsetY, 300+canvas1OffsetX, 90+canvas1OffsetY); //Tap
    zelena4.setStroke("#32cd32",2);
    zelena5 = new Line(280+canvas1OffsetX, 110+canvas1OffsetY, 300+canvas1OffsetX, 110+canvas1OffsetY); //Tap
    zelena5.setStroke("#32cd32",2);
    zelena6 = new Line(280+canvas1OffsetX, 130+canvas1OffsetY, 300+canvas1OffsetX, 130+canvas1OffsetY); //Tap
    zelena6.setStroke("#32cd32",2);

    zelenaktap1 = new Line(280+canvas1OffsetX, 85+canvas1OffsetY, 280+canvas1OffsetX, 95+canvas1OffsetY); //ciara k Tap
    zelenaktap1.setStroke("#32cd32",2); //ciara k Tap
    zelenaktap2 = new Line(280+canvas1OffsetX, 105+canvas1OffsetY, 280+canvas1OffsetX, 115+canvas1OffsetY); //ciara k Tap
    zelenaktap2.setStroke("#32cd32",2); //ciara k Tap
    zelenaktap3 = new Line(280+canvas1OffsetX, 125+canvas1OffsetY, 280+canvas1OffsetX, 135+canvas1OffsetY); //ciara k Tap
    zelenaktap3.setStroke("#32cd32",2); //ciara k Tap



    zelena7 = new Line(380+canvas1OffsetX, 90+canvas1OffsetY, 400+canvas1OffsetX, 90+canvas1OffsetY); //Tbp
    zelena7.setStroke("#32cd32",2);
    zelena8 = new Line(380+canvas1OffsetX, 110+canvas1OffsetY, 400+canvas1OffsetX, 110+canvas1OffsetY); //Tbp
    zelena8.setStroke("#32cd32",2);
    zelenakTbp1 = new Line(380+canvas1OffsetX, 130+canvas1OffsetY, 400+canvas1OffsetX, 130+canvas1OffsetY); //Tbp
    zelenakTbp1.setStroke("#32cd32",2);

    zelenakTbp2 = new Line(380+canvas1OffsetX, 85+canvas1OffsetY, 380+canvas1OffsetX, 95+canvas1OffsetY); //ciara k Tbp
    zelenakTbp2.setStroke("#32cd32",2);
    zelenakTbp3 = new Line(380+canvas1OffsetX, 105+canvas1OffsetY, 380+canvas1OffsetX, 115+canvas1OffsetY); //ciara k Tbp
    zelenakTbp3.setStroke("#32cd32",2);
    zelenakTbp4 = new Line(380+canvas1OffsetX, 125+canvas1OffsetY, 380+canvas1OffsetX, 135+canvas1OffsetY); //ciara k Tbp
    zelenakTbp4.setStroke("#32cd32",2);



    zelena9 = new Line(300+canvas1OffsetX, 130+canvas1OffsetY, 300+canvas1OffsetX, 160+canvas1OffsetY); //Y
    zelena9.setStroke("#32cd32",2);
    zelenaypsilon1 = new Line(300+canvas1OffsetX, 160+canvas1OffsetY, 500+canvas1OffsetX, 160+canvas1OffsetY); //Y
    zelenaypsilon1.setStroke("#32cd32",2);
    zelenaypsilon2 = new Line(400+canvas1OffsetX, 130+canvas1OffsetY, 400+canvas1OffsetX, 190+canvas1OffsetY); //Ciara dole od Tbp
    zelenaypsilon2.setStroke("#32cd32",2);
    zelenaypsilon3 = new Line(400+canvas1OffsetX, 190+canvas1OffsetY, 380+canvas1OffsetX, 190+canvas1OffsetY); //
    zelenaypsilon3.setStroke("#32cd32",2);


    cerveneacko1 = new Line(275+canvas1OffsetX, 130+canvas1OffsetY, 275+canvas1OffsetX, 90+canvas1OffsetY); //Pomocna ciara ku Acku, zdola nahor
    cerveneacko1.setStroke("#FF0000",2);
    cerveneacko2 = new Line(275+canvas1OffsetX, 90+canvas1OffsetY, 255+canvas1OffsetX, 90+canvas1OffsetY); //Zprava dolava
    cerveneacko2.setStroke("#FF0000",2);
    cerveneacko3 = new Line(255+canvas1OffsetX, 90+canvas1OffsetY, 255+canvas1OffsetX, 230+canvas1OffsetY); //Acko zhora nadol
    cerveneacko3.setStroke("#FF0000",2);
    cerveneacko4 = new Line(210+canvas1OffsetX, 230+canvas1OffsetY, 375+canvas1OffsetX, 230+canvas1OffsetY); //Velke ciary/Acko
    cerveneacko4.setStroke("#FF0000",2);
    cerveneacko5 = new Line(375+canvas1OffsetX, 230+canvas1OffsetY, 375+canvas1OffsetX, 195+canvas1OffsetY); //Acko pomocne zdola nahor
    cerveneacko5.setStroke("#FF0000",2);


    ciernakTan1 = new Line(380+canvas1OffsetX, 185+canvas1OffsetY, 380+canvas1OffsetX, 195+canvas1OffsetY); //Ciara k Tan
    ciernakTan1.setStroke("#000000",2);
    ciernakTan2 = new Line(380+canvas1OffsetX, 205+canvas1OffsetY, 380+canvas1OffsetX, 215+canvas1OffsetY); //Ciara k Tan
    ciernakTan2.setStroke("#000000",2);
    ciernakTan3 = new Line(380+canvas1OffsetX, 225+canvas1OffsetY, 380+canvas1OffsetX, 235+canvas1OffsetY); //Ciara k Tan
    ciernakTan3.setStroke("#000000",2);


    cervena1 = new Line(380+canvas1OffsetX, 210+canvas1OffsetY, 415+canvas1OffsetX, 210+canvas1OffsetY); //Tan2 dlhsia
    cervena1.setStroke("#FF0000",2);
    oranzova1 = new Line(380+canvas1OffsetX, 230+canvas1OffsetY, 400+canvas1OffsetX, 230+canvas1OffsetY); //Tan3
    oranzova1.setStroke("#ffa500",2);


    cervenabcko1= new Line(210+canvas1OffsetX, 310+canvas1OffsetY, 375+canvas1OffsetX, 310+canvas1OffsetY); //Bcko Zdola dohora po Tbn
    cervenabcko1.setStroke("#FF0000",2);
    cervenabcko2= new Line(355+canvas1OffsetX, 310+canvas1OffsetY, 355+canvas1OffsetX, 90+canvas1OffsetY); //Zdola nahor full
    cervenabcko2.setStroke("#FF0000",2);
    cervenabcko3= new Line(355+canvas1OffsetX, 90+canvas1OffsetY, 375+canvas1OffsetX, 90+canvas1OffsetY); //Zlava doprava
    cervenabcko3.setStroke("#FF0000",2);
    cervenabcko4= new Line(375+canvas1OffsetX, 90+canvas1OffsetY, 375+canvas1OffsetX, 130+canvas1OffsetY); //Zhora nadol ku Tbp
    cervenabcko4.setStroke("#FF0000",2);
    cervenabcko5= new Line(375+canvas1OffsetX, 310+canvas1OffsetY, 375+canvas1OffsetX, 270+canvas1OffsetY); //
    cervenabcko5.setStroke("#FF0000",2);



    oranzova2 = new Line(380+canvas1OffsetX, 270+canvas1OffsetY, 400+canvas1OffsetX, 270+canvas1OffsetY); //Tbn1
    oranzova2.setStroke("#ffa500",2);
    oranzova3 = new Line(400+canvas1OffsetX, 230+canvas1OffsetY, 400+canvas1OffsetX, 270+canvas1OffsetY); //zhora nadol Orange
    oranzova3.setStroke("#ffa500",2);


    cervena2 = new Line(380+canvas1OffsetX, 290+canvas1OffsetY, 415+canvas1OffsetX, 290+canvas1OffsetY); //Tbn2
    cervena2.setStroke("#FF0000",2);
    cervena3 = new Line(380+canvas1OffsetX, 310+canvas1OffsetY, 400+canvas1OffsetX, 310+canvas1OffsetY); //Tbn3
    cervena3.setStroke("#FF0000",2);



    ciernakTbn1 = new Line(380+canvas1OffsetX, 265+canvas1OffsetY, 380+canvas1OffsetX, 275+canvas1OffsetY); //Ciara k Tbn
    ciernakTbn1.setStroke("#000000",2);
    ciernakTbn2 = new Line(380+canvas1OffsetX, 285+canvas1OffsetY, 380+canvas1OffsetX, 295+canvas1OffsetY); //Ciara k Tbn
    ciernakTbn2.setStroke("#000000",2);
    ciernakTbn3 = new Line(380+canvas1OffsetX, 305+canvas1OffsetY, 380+canvas1OffsetX, 315+canvas1OffsetY); //Ciara k Tbn
    ciernakTbn3.setStroke("#000000",2);



    ciara = new Line(415+canvas1OffsetX, 210+canvas1OffsetY, 415+canvas1OffsetX, 290+canvas1OffsetY); //Tan a Tbn spojene
    ciara.setStroke("#FF0000",2);
    uzemnenie1 = new Line(400+canvas1OffsetX, 290+canvas1OffsetY, 400+canvas1OffsetX, 340+canvas1OffsetY); //Od Tbn dole
    uzemnenie1.setStroke("#FF0000",2);
    uzemnenie2 = new Line(390+canvas1OffsetX, 340+canvas1OffsetY, 410+canvas1OffsetX, 340+canvas1OffsetY); //Uzemnenie
    uzemnenie2.setStroke("#FF0000",2);


    cerveneacko6= new Circle(7, 210 + canvas1OffsetX, 230 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko lave
    cerveneacko7= new Circle(7, 255 + canvas1OffsetX, 230 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prienik
    cervenabcko6= new Circle(7, 355 + canvas1OffsetX, 310 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Becko prienik
    cervenabcko7= new Circle(7, 210 + canvas1OffsetX, 310 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Bcko lave


    kruh= new Circle(7, 300 + canvas1OffsetX, 90 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Tap
    kruh= new Circle(7, 400 + canvas1OffsetX, 90 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Tbp

    kruh_ypsilon_prienik=new Circle(7, 400 + canvas1OffsetX, 160 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y prienik
    kruh_ypsilon=new Circle(7, 500 + canvas1OffsetX, 160 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y


    kruh= new Circle(7, 500 + canvas1OffsetX, 60 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Udd
    kruh= new Circle(7, 400 + canvas1OffsetX, 60 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Udd prienik
    kruh= new Circle(7, 400 + canvas1OffsetX, 310 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tbn prienik 1
    kruh= new Circle(7, 400 + canvas1OffsetX, 290 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tbn prienik 2


    new CustomText("U", 510 + canvas1OffsetX, 53 + canvas1OffsetY, 18).toItalic();
    new CustomText("DD", 523 + canvas1OffsetX, 63 + canvas1OffsetY, 13);

    yjednahore = new CustomText("Y=1", 510 + canvas1OffsetX, 152 + canvas1OffsetY, 15);
    ynulahore = new CustomText("Y=0", 510 + canvas1OffsetX, 152 + canvas1OffsetY, 15);
    ynulahore.hideText();
    text = new CustomText("A", 190 + canvas1OffsetX, 222 + canvas1OffsetY, 15);
    text = new CustomText("B", 190 + canvas1OffsetX, 300 + canvas1OffsetY, 15);

    text = new CustomText("T", 310 + canvas1OffsetX, 100 + canvas1OffsetY, 15);
    text = new CustomText("Ap", 318 + canvas1OffsetX, 110 + canvas1OffsetY, 10);

    text = new CustomText("T", 410 + canvas1OffsetX, 100 + canvas1OffsetY, 15);
    text = new CustomText("Bp", 418 + canvas1OffsetX, 110 + canvas1OffsetY, 10);

    text = new CustomText("T", 420 + canvas1OffsetX, 200 + canvas1OffsetY, 15);
    text = new CustomText("An", 428 + canvas1OffsetX, 210 + canvas1OffsetY, 10);

    text = new CustomText("T", 420 + canvas1OffsetX, 280 + canvas1OffsetY, 15);
    text = new CustomText("Bn", 428 + canvas1OffsetX, 290 + canvas1OffsetY, 10);


    ramcekTap1 = new Rectangle(265 + canvas1OffsetX, 70 + canvas1OffsetY, 80, 70, "#32cd32");
    ramcekTap1.setOpacity(0.2);
    ramcekTbp1 = new Rectangle(365 + canvas1OffsetX, 70 + canvas1OffsetY, 80, 70, "#32cd32");
    ramcekTbp1.setOpacity(0.2);
    ramcekTan1 = new Rectangle(365 + canvas1OffsetX, 175 + canvas1OffsetY, 80, 70, "#FF0000");
    ramcekTan1.setOpacity(0.2);
    ramcekTbn1 = new Rectangle(365 + canvas1OffsetX, 255 + canvas1OffsetY, 80, 70, "#FF0000");
    ramcekTbn1.setOpacity(0.2);

    /////////////////////////////////////////////////////////Druha schema//////////////////////////////////////////////////////////////////////////

   zelena10 = new Line(300+canvas1OffsetX, 380+canvas1OffsetY, 500+canvas1OffsetX, 380+canvas1OffsetY); //UDD zlava doprava
    zelena10.setStroke("#32cd32",2);
    zelena11 = new Line(300+canvas1OffsetX, 380+canvas1OffsetY, 300+canvas1OffsetX, 410+canvas1OffsetY); //UDD ku Tap
    zelena11.setStroke("#32cd32",2);
    zelena12 = new Line(400+canvas1OffsetX, 380+canvas1OffsetY, 400+canvas1OffsetX, 410+canvas1OffsetY); //UDD ku Tbp
    zelena12.setStroke("#32cd32",2);

    zelenaypsilon4 = new Line(300+canvas1OffsetX, 440+canvas1OffsetY, 300+canvas1OffsetX, 480+canvas1OffsetY); //od Tap dole
    zelenaypsilon4.setStroke("#32cd32",2);
    zelenaypsilon5 = new Line(400+canvas1OffsetX, 440+canvas1OffsetY, 400+canvas1OffsetX, 510+canvas1OffsetY); //od Tbp dole
    zelenaypsilon5.setStroke("#32cd32",2);
    zelenaypsilon6 = new Line(300+canvas1OffsetX, 480+canvas1OffsetY, 500+canvas1OffsetX, 480+canvas1OffsetY); //Y
    zelenaypsilon6.setStroke("#32cd32",2);

    klapkatap1 = new Line(305+canvas1OffsetX, 410+canvas1OffsetY, 305+canvas1OffsetX, 440+canvas1OffsetY); //Klapka pri Tap
    klapkatap1.setStroke("#32cd32",2);
    klapkatap2 = new Line(315+canvas1OffsetX, 410+canvas1OffsetY, 305+canvas1OffsetX, 440+canvas1OffsetY); //Klapka pri Tap
    klapkatap2.setStroke("#FF0000",2);
    klapkatap2.hideObj();


    klapkatbp1 = new Line(405+canvas1OffsetX, 410+canvas1OffsetY, 405+canvas1OffsetX, 440+canvas1OffsetY); //Klapka pri Tbp
    klapkatbp1.setStroke("#32cd32",2);
    klapkatbp2 = new Line(415+canvas1OffsetX, 410+canvas1OffsetY, 405+canvas1OffsetX, 440+canvas1OffsetY); //Klapka pri Tbp
    klapkatbp2.setStroke("#FF0000",2);
    klapkatbp2.hideObj();

    klapkatan1 = new Line(405+canvas1OffsetX, 510+canvas1OffsetY, 405+canvas1OffsetX, 540+canvas1OffsetY); //Klapka pri Tan
    klapkatan1.setStroke("#32cd32",2);
    klapkatan1.hideObj();
    klapkatan2 = new Line(415+canvas1OffsetX, 510+canvas1OffsetY, 405+canvas1OffsetX, 540+canvas1OffsetY); //Klapka pri Tan
    klapkatan2.setStroke("#FF0000",2);

    klapkatbn1 = new Line(405+canvas1OffsetX, 580+canvas1OffsetY, 405+canvas1OffsetX, 610+canvas1OffsetY); //Klapka pri Tbp
    klapkatbn1.setStroke("#32cd32",2);
    klapkatbn1.hideObj();
    klapkatbn2 = new Line(415+canvas1OffsetX, 580+canvas1OffsetY, 405+canvas1OffsetX, 610+canvas1OffsetY); //Klapka pri Tbp
    klapkatbn2.setStroke("#FF0000",2);

    zbytokkuTap = new Line(305+canvas1OffsetX, 425+canvas1OffsetY, 310+canvas1OffsetX, 425+canvas1OffsetY); //
    zbytokkuTap.setStroke("#FF0000",2);
    zbytokkuTap.hideObj();
    zbytokkuTbp = new Line(405+canvas1OffsetX, 425+canvas1OffsetY, 410+canvas1OffsetX, 425+canvas1OffsetY); //
    zbytokkuTbp.setStroke("#FF0000",2);
    zbytokkuTbp.hideObj();
    zbytokkuTan = new Line(405+canvas1OffsetX, 525+canvas1OffsetY, 410+canvas1OffsetX, 525+canvas1OffsetY); //
    zbytokkuTan.setStroke("#FF0000",2);
    zbytokkuTbn = new Line(405+canvas1OffsetX, 595+canvas1OffsetY, 410+canvas1OffsetX, 595+canvas1OffsetY); //
    zbytokkuTbn.setStroke("#FF0000",2);

    cerveneacko8 = new Line(210+canvas1OffsetX, 525+canvas1OffsetY, 405+canvas1OffsetX, 525+canvas1OffsetY); //Acko zlava doprava
    cerveneacko8.setStroke("#FF0000",2);
    cerveneacko9 = new Line(255+canvas1OffsetX, 425+canvas1OffsetY, 305+canvas1OffsetX, 425+canvas1OffsetY); //Acko hore Zprava dolava
    cerveneacko9.setStroke("#FF0000",2);
    cerveneacko10 = new Line(255+canvas1OffsetX, 425+canvas1OffsetY, 255+canvas1OffsetX, 525+canvas1OffsetY); //Acko zhora nadol
    cerveneacko10.setStroke("#FF0000",2);

    cervenabcko8 = new Line(210+canvas1OffsetX, 595+canvas1OffsetY, 405+canvas1OffsetX, 595+canvas1OffsetY); //Bcko zlava doprava
    cervenabcko8.setStroke("#FF0000",2);
    cervenabcko9 = new Line(355+canvas1OffsetX, 425+canvas1OffsetY, 355+canvas1OffsetX, 595+canvas1OffsetY); //Bcko Zdola nahor full
    cervenabcko9.setStroke("#FF0000",2);
    cervenabcko10 = new Line(355+canvas1OffsetX, 425+canvas1OffsetY, 405+canvas1OffsetX, 425+canvas1OffsetY); //Bcko hore Zprava dolava
    cervenabcko10.setStroke("#FF0000",2);

    cervena4 = new Line(400+canvas1OffsetX, 540+canvas1OffsetY, 400+canvas1OffsetX, 580+canvas1OffsetY); //od Tan dole
    cervena4.setStroke("#FF0000",2);




    ciara = new Line(400+canvas1OffsetX, 610+canvas1OffsetY, 400+canvas1OffsetX, 640+canvas1OffsetY); //od Tbn dole
    ciara.setStroke("#FF0000",2);
    ciara = new Line(390+canvas1OffsetX, 640+canvas1OffsetY, 410+canvas1OffsetX, 640+canvas1OffsetY); //Uzemnenie
    ciara.setStroke("#FF0000",2);


    zelena13=new Circle(7, 500 + canvas1OffsetX, 380 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Udd prave
    kruh=new Circle(7, 400 + canvas1OffsetX, 380 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Udd prienik
    zelena14=new Circle(7, 400 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbp1
    zelena15=new Circle(7, 300 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap1

    zelenaypsilon7=new Circle(7, 400 + canvas1OffsetX, 440 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbp2
    zelenaypsilon8=new Circle(7, 300 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbp2
    zelenaypsilon9=new Circle(7, 500 + canvas1OffsetX, 480 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y
    y_prienik=new Circle(7, 400 + canvas1OffsetX, 480 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y prienik
    zelenaypsilon10=new Circle(7, 400 + canvas1OffsetX, 510 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tan1
    zelenaypsilon11=new Circle(7, 300 + canvas1OffsetX, 440 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap2


    cervena5=new Circle(7, 400 + canvas1OffsetX, 540 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tan2
    cervena6=new Circle(7, 400 + canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tbn1
    cervena7=new Circle(7, 400 + canvas1OffsetX, 610+ canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tbn2

    cerveneacko11 =new Circle(7, 210 + canvas1OffsetX, 525 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko
    cerveneacko12 =new Circle(7, 255 + canvas1OffsetX, 525 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prienik
    cervenabcko11 =new Circle(7, 210 + canvas1OffsetX, 595 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Bcko
    cervenabcko12 =new Circle(7, 355 + canvas1OffsetX, 595 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Bcko prienik


    udd_dole1=new CustomText("U", 510 + canvas1OffsetX, 370 + canvas1OffsetY, 18);
    udd_dole1.toItalic();
    udd_dole2=new CustomText("DD", 523 + canvas1OffsetX, 380 + canvas1OffsetY, 13);
    udd_dole2.toItalic();


    /*
     new CustomText("U", 510 + canvas1OffsetX, 93 + canvas1OffsetY, 18).toItalic();
    new CustomText("DD", 523 + canvas1OffsetX, 103 + canvas1OffsetY, 13);

     */
    yjednadole = new CustomText("Y=1", 510 + canvas1OffsetX, 470 + canvas1OffsetY, 15);
    ynuladole = new CustomText("Y=0", 510 + canvas1OffsetX, 470 + canvas1OffsetY, 15);
    ynuladole.hideText();
    text = new CustomText("A", 190 + canvas1OffsetX, 518 + canvas1OffsetY, 15);
    text = new CustomText("B", 190 + canvas1OffsetX, 585 + canvas1OffsetY, 15);

    text = new CustomText("T", 315 + canvas1OffsetX, 417 + canvas1OffsetY, 15);
    text = new CustomText("Ap", 323 + canvas1OffsetX, 427 + canvas1OffsetY, 10);

    text = new CustomText("T", 420 + canvas1OffsetX, 417 + canvas1OffsetY, 15);
    text = new CustomText("Bp", 428 + canvas1OffsetX, 427 + canvas1OffsetY, 10);

    text = new CustomText("T", 420 + canvas1OffsetX, 517 + canvas1OffsetY, 15);
    text = new CustomText("An", 428 + canvas1OffsetX, 527 + canvas1OffsetY, 10);

    text = new CustomText("T", 420 + canvas1OffsetX, 585 + canvas1OffsetY, 15);
    text = new CustomText("Bn", 428 + canvas1OffsetX, 595 + canvas1OffsetY, 10);

    ramcekTap2 = new Rectangle(265 + canvas1OffsetX, 395 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTap2.setOpacity(0.2);
    ramcekTbp2 = new Rectangle(365 + canvas1OffsetX, 395 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTbp2.setOpacity(0.2);
    ramcekTan2 = new Rectangle(365 + canvas1OffsetX, 495 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTan2.setOpacity(0.2);
    ramcekTbn2 = new Rectangle(365 + canvas1OffsetX, 565 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTbn2.setOpacity(0.2);
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

    tabulka = new Rectangle(600 + canvas1OffsetX, 320 + canvas1OffsetY, 165, 200, "#000000"); //okraj tabulkz
    tabulka.setStroke("#000000", 2);
    tabulka.changeFill(0);

    prvyriadok = new Rectangle(600 + canvas1OffsetX, 320 + canvas1OffsetY, 165, 40, "#808080"); //1 riadok
    prvyriadok.setStroke("#000000", 1);
    prvyriadok.changeFill(0.4);

    druhyriadok = new Rectangle(600 + canvas1OffsetX, 360 + canvas1OffsetY, 165, 40, "#808080"); //2 riadok
    druhyriadok.setStroke("#000000", 1);
    druhyriadok.changeFill(0);

    tretiriadok = new Rectangle(600 + canvas1OffsetX, 400 + canvas1OffsetY, 165, 40, "#808080"); //3 riadok
    tretiriadok.setStroke("#000000", 1);
    tretiriadok.changeFill(0.4);

    stvrtyriadok = new Rectangle(600 + canvas1OffsetX, 440 + canvas1OffsetY, 165, 40, "#808080"); //4 riadok
    stvrtyriadok.setStroke("#000000", 1);
    stvrtyriadok.changeFill(0.4);

    piatyriadok = new Rectangle(600 + canvas1OffsetX, 480 + canvas1OffsetY, 165, 40, "#808080"); //5 riadok
    piatyriadok.setStroke("#000000", 1);
    piatyriadok.changeFill(0.4);

    pomocnaciara = new Line(655 + canvas1OffsetX, 320 + canvas1OffsetY, 655 + canvas1OffsetX, 520 + canvas1OffsetY); //stlpec 1
    pomocnaciara.setStroke("#000000", 1);

    pomocnaciara = new Line(710 + canvas1OffsetX, 320 + canvas1OffsetY, 710 + canvas1OffsetX, 520 + canvas1OffsetY);//stlpec 2
    pomocnaciara.setStroke("#000000", 1);




     new CustomText("B", canvas1OffsetX + 618, 322 + canvas1OffsetY, 25);
     new CustomText("A", canvas1OffsetX + 672, 322 + canvas1OffsetY, 25);
     new CustomText("Y", canvas1OffsetX + 726, 322 + canvas1OffsetY, 25).toBold();

     new CustomText("0", canvas1OffsetX + 618, 362 + canvas1OffsetY, 25);
     new CustomText("0", canvas1OffsetX + 672, 362 + canvas1OffsetY, 25);
     new CustomText("1", canvas1OffsetX + 726, 362 + canvas1OffsetY, 25).toBold();


     new CustomText("0", canvas1OffsetX + 618, 402 + canvas1OffsetY, 25);
     new CustomText("1", canvas1OffsetX + 672, 402 + canvas1OffsetY, 25);
     new CustomText("1", canvas1OffsetX + 726, 402 + canvas1OffsetY, 25).toBold();

     new CustomText("1", canvas1OffsetX + 618, 442 + canvas1OffsetY, 25);
     new CustomText("0", canvas1OffsetX + 672, 442 + canvas1OffsetY, 25);
     new CustomText("1", canvas1OffsetX + 726, 442 + canvas1OffsetY, 25).toBold();

     new CustomText("1", canvas1OffsetX + 618, 482 + canvas1OffsetY, 25);
     new CustomText("1", canvas1OffsetX + 672, 482 + canvas1OffsetY, 25);
     new CustomText("0", canvas1OffsetX + 726, 482 + canvas1OffsetY, 25).toBold();


    prvasuradnicax = 800 + canvas1OffsetX;
    prvasuradnicay = 395 + canvas1OffsetY;

    druhasuradnicax = 780 + canvas1OffsetX;
    druhasuradnicay = 380 + canvas1OffsetY;

    tretiasuradnicax = 800 + canvas1OffsetX;
    tretiasuradnicay = 365 + canvas1OffsetY;

    stvrtasuradnicax = 800 + canvas1OffsetX;
    stvrtasuradnicay = 375 + canvas1OffsetY;

    piatasuradnicax = 850 + canvas1OffsetX;
    piatasuradnicay = 375 + canvas1OffsetY;

    siestasuradnicax = 850 + canvas1OffsetX;
    siestasuradnicay = 385 + canvas1OffsetY;

    siedmasuradnicax = 800 + canvas1OffsetX;
    siedmasuradnicay = 385 + canvas1OffsetY;

    sipka_invertor = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_invertor.fill("#000000"); //sipka
    sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+365);

    zakrytie_pravej_strany= new Rectangle(590 + canvas1OffsetX, 50 + canvas1OffsetY, 300, 800, "#ffffff");
    zakrytie_pravej_strany.hideObj();

    zakrytie_schemy= new Rectangle(50 + canvas1OffsetX, 50 + canvas1OffsetY, 500, 320, "#ffffff");
    zakrytie_schemy.hideObj();

    zakrytie_obvodu= new Rectangle(50 + canvas1OffsetX, 370 + canvas1OffsetY, 500, 300, "#ffffff");
    zakrytie_obvodu.hideObj();

}

function myFunction() {
    var x = document.getElementById("mySelect").value;
    var y = document.getElementById("mySelect2").value;


    if (x == 'Anula' && y == 'Bnula') {
        zelena1.setStroke("#32cd32",2);
        zelena2.setStroke("#32cd32",2);
        zelena3.setStroke("#32cd32",2);
        zelena4.setStroke("#32cd32",2);
        zelena5.setStroke("#32cd32",2);
        zelena6.setStroke("#32cd32",2);
        zelena7.setStroke("#32cd32",2);
        zelena8.setStroke("#32cd32",2);
        zelena9.setStroke("#32cd32",2);
        zelena10.setStroke("#32cd32",2);
        zelena11.setStroke("#32cd32",2);
        zelena12.setStroke("#32cd32",2);
        zelena13.setStroke("#32cd32",0.5);
        zelena14.setStroke("#32cd32",0.5);
        zelena15.setStroke("#32cd32",0.5);

        cervena1.setStroke("#FF0000",2);
        cervena2.setStroke("#FF0000",2);
        cervena3.setStroke("#FF0000",2);
        cervena4.setStroke("#FF0000",2);
        cervena5.setStroke("#FF0000",0.5);
        cervena6.setStroke("#FF0000",0.5);
        cervena7.setStroke("#FF0000",0.5);

        oranzova1.setStroke("#ffa500",2);
        oranzova2.setStroke("#ffa500",2);
        oranzova3.setStroke("#ffa500",2);

        cervenabcko1.setStroke("#FF0000",2);
        cervenabcko2.setStroke("#FF0000",2);
        cervenabcko3.setStroke("#FF0000",2);
        cervenabcko4.setStroke("#FF0000",2);
        cervenabcko5.setStroke("#FF0000",2);
        cervenabcko6.setStroke("#FF0000",2);
        cervenabcko6.fillObj("#FF0000");
        cervenabcko7.setStroke("#FF0000",0.5);
        cervenabcko8.setStroke("#FF0000",2);
        cervenabcko9.setStroke("#FF0000",2);
        cervenabcko10.setStroke("#FF0000",2);
        cervenabcko11.setStroke("#FF0000",0.5);
        cervenabcko12.setStroke("#FF0000",0.5);
        cervenabcko12.fillObj("#FF0000");


        ciernakTbn1.setStroke("#000000",2);
        ciernakTbn2.setStroke("#000000",2);
        ciernakTbn3.setStroke("#000000",2);

        zelenakTbp1.setStroke("#32cd32",2);
        zelenakTbp2.setStroke("#32cd32",2);
        zelenakTbp3.setStroke("#32cd32",2);
        zelenakTbp4.setStroke("#32cd32",2);

        ciernakTan1.setStroke("#000000",2);
        ciernakTan2.setStroke("#000000",2);
        ciernakTan3.setStroke("#000000",2);

        cerveneacko1.setStroke("#FF0000",2);
        cerveneacko2.setStroke("#FF0000",2);
        cerveneacko3.setStroke("#FF0000",2);
        cerveneacko4.setStroke("#FF0000",2);
        cerveneacko5.setStroke("#FF0000",2);
        cerveneacko6.setStroke("#FF0000",0.5);
        cerveneacko7.setStroke("#FF0000",0.5);
        cerveneacko7.fillObj("#FF0000");
        cerveneacko8.setStroke("#FF0000",2);
        cerveneacko9.setStroke("#FF0000",2);
        cerveneacko10.setStroke("#FF0000",2);
        cerveneacko11.setStroke("#FF0000",0.5);
        cerveneacko12.setStroke("#FF0000",2);
        cerveneacko12.fillObj("#FF0000");

        zelenaypsilon1.setStroke("#32cd32",2);
        zelenaypsilon2.setStroke("#32cd32",2);
        zelenaypsilon3.setStroke("#32cd32",2);
        zelenaypsilon4.setStroke("#32cd32",2);
        zelenaypsilon4.fillObj("#32cd32");
        zelenaypsilon5.setStroke("#32cd32",2);
        zelenaypsilon6.setStroke("#32cd32",2);
        zelenaypsilon7.setStroke("#32cd32",0.5);
        zelenaypsilon8.setStroke("#32cd32",0.5);
        zelenaypsilon9.setStroke("#32cd32",0.5);
        zelenaypsilon10.setStroke("#32cd32",0.5);
        zelenaypsilon11.setStroke("#32cd32",0.5);


        zelenaktap1.setStroke("#32cd32",2);
        zelenaktap2.setStroke("#32cd32",2);
        zelenaktap3.setStroke("#32cd32",2);

        kruh_ypsilon_prienik.fillObj("#32cd32");
        kruh_ypsilon_prienik.setStroke("#32cd32",2);
        kruh_ypsilon.setStroke("#32cd32",0.5);
        y_prienik.setStroke("#32cd32",2);
        y_prienik.fillObj("#32cd32");

        ynulahore.hideText();
        yjednahore.showText();
        ynuladole.hideText();
        yjednadole.showText();

        klapkatap1.showObj();
        klapkatap2.hideObj();
        klapkatbp1.showObj();
        klapkatbp2.hideObj();
        klapkatan1.hideObj();
        klapkatan2.showObj();
        klapkatbn1.hideObj();
        klapkatbn2.showObj();

        zbytokkuTap.hideObj();
        zbytokkuTbp.hideObj();
        zbytokkuTan.showObj();
        zbytokkuTbn.showObj();


        ramcekTap1.fillObj("#32cd32");
        ramcekTbp1.fillObj("#32cd32");
        ramcekTan1.fillObj("#FF0000");
        ramcekTbn1.fillObj("#FF0000");

        ramcekTap2.fillObj("#32cd32");
        ramcekTbp2.fillObj("#32cd32");
        ramcekTan2.fillObj("#FF0000");
        ramcekTbn2.fillObj("#FF0000");

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+365);

        druhyriadok.changeFill(0);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0.4);

      /*


         document.getElementById("prvyriadok1").style.backgroundColor ='#ffffff';
         document.getElementById("prvyriadok2").style.backgroundColor ='#ffffff';
         document.getElementById("prvyriadok3").style.backgroundColor ='#ffffff';
         document.getElementById("druhyriadok1").style.backgroundColor ='#abb5c2';
         document.getElementById("druhyriadok2").style.backgroundColor ='#abb5c2';
         document.getElementById("druhyriadok3").style.backgroundColor ='#abb5c2';
         document.getElementById("tretiriadok1").style.backgroundColor ='#abb5c2';
         document.getElementById("tretiriadok2").style.backgroundColor ='#abb5c2';
         document.getElementById("tretiriadok3").style.backgroundColor ='#abb5c2';
         document.getElementById("stvrtyriadok1").style.backgroundColor ='#abb5c2';
         document.getElementById("stvrtyriadok2").style.backgroundColor ='#abb5c2';
         document.getElementById("stvrtyriadok3").style.backgroundColor ='#abb5c2';


  */

    }
    if (x == 'Anula' && y == 'Bjedna') {
        zelena1.setStroke("#32cd32",2);
        zelena2.setStroke("#32cd32",2);
        zelena3.setStroke("#32cd32",2);
        zelena4.setStroke("#32cd32",2);
        zelena5.setStroke("#32cd32",2);
        zelena6.setStroke("#32cd32",2);
        zelena7.setStroke("#32cd32",2);
        zelena8.setStroke("#32cd32",2);
        zelena9.setStroke("#32cd32",2);
        zelena10.setStroke("#32cd32",2);
        zelena11.setStroke("#32cd32",2);
        zelena12.setStroke("#32cd32",2);
        zelena13.setStroke("#32cd32",0.5);
        zelena14.setStroke("#32cd32",0.5);
        zelena15.setStroke("#32cd32",0.5);


        cervena1.setStroke("#FF0000",2);
        cervena2.setStroke("#FF0000",2);
        cervena3.setStroke("#FF0000",2);
        cervena4.setStroke("#FF0000",2);
        cervena5.setStroke("#FF0000",0.5);
        cervena6.setStroke("#FF0000",0.5);
        cervena7.setStroke("#FF0000",0.5);

        oranzova1.setStroke("#FF0000",2);
        oranzova2.setStroke("#FF0000",2);
        oranzova3.setStroke("#FF0000",2);

        cervenabcko1.setStroke("#32cd32",2);
        cervenabcko2.setStroke("#32cd32",2);
        cervenabcko3.setStroke("#32cd32",2);
        cervenabcko4.setStroke("#32cd32",2);
        cervenabcko5.setStroke("#32cd32",2);
        cervenabcko6.setStroke("#32cd32",2);
        cervenabcko6.fillObj("#32cd32");
        cervenabcko7.setStroke("#32cd32",0.5);
        cervenabcko8.setStroke("#32cd32",2);
        cervenabcko9.setStroke("#32cd32",2);
        cervenabcko10.setStroke("#32cd32",2);
        cervenabcko11.setStroke("#32cd32",0.5);
        cervenabcko12.setStroke("#32cd32",0.5);
        cervenabcko12.fillObj("#32cd32");

        ciernakTbn1.setStroke("#FF0000",2);
        ciernakTbn2.setStroke("#FF0000",2);
        ciernakTbn3.setStroke("#FF0000",2);

        zelenakTbp1.setStroke("#32cd32",2);
        zelenakTbp2.setStroke("#000000",2);
        zelenakTbp3.setStroke("#000000",2);
        zelenakTbp4.setStroke("#000000",2);

        ciernakTan1.setStroke("#000000",2);
        ciernakTan2.setStroke("#000000",2);
        ciernakTan3.setStroke("#000000",2);

        cerveneacko1.setStroke("#FF0000",2);
        cerveneacko2.setStroke("#FF0000",2);
        cerveneacko3.setStroke("#FF0000",2);
        cerveneacko4.setStroke("#FF0000",2);
        cerveneacko5.setStroke("#FF0000",2);
        cerveneacko6.setStroke("#FF0000",0.5);
        cerveneacko7.setStroke("#FF0000",0.5);
        cerveneacko7.fillObj("#FF0000");
        cerveneacko8.setStroke("#FF0000",2);
        cerveneacko9.setStroke("#FF0000",2);
        cerveneacko10.setStroke("#FF0000",2);
        cerveneacko11.setStroke("#FF0000",0.5);
        cerveneacko12.setStroke("#FF0000",2);
        cerveneacko12.fillObj("#FF0000");


        zelenaypsilon1.setStroke("#32cd32",2);
        zelenaypsilon2.setStroke("#32cd32",2);
        zelenaypsilon3.setStroke("#32cd32",2);
        zelenaypsilon4.setStroke("#32cd32",2);
        zelenaypsilon4.fillObj("#32cd32");
        zelenaypsilon5.setStroke("#32cd32",2);
        zelenaypsilon6.setStroke("#32cd32",2);
        zelenaypsilon7.setStroke("#32cd32",0.5);
        zelenaypsilon8.setStroke("#32cd32",0.5);
        zelenaypsilon9.setStroke("#32cd32",0.5);
        zelenaypsilon10.setStroke("#32cd32",0.5);
        zelenaypsilon11.setStroke("#32cd32",0.5);

        zelenaktap1.setStroke("#32cd32",2);
        zelenaktap2.setStroke("#32cd32",2);
        zelenaktap3.setStroke("#32cd32",2);

        kruh_ypsilon_prienik.fillObj("#32cd32");
        kruh_ypsilon_prienik.setStroke("#32cd32",2);
        kruh_ypsilon.setStroke("#32cd32",0.5);
        y_prienik.fillObj("#32cd32");
        y_prienik.setStroke("#32cd32",2);

        ynulahore.hideText();
        yjednahore.showText();
        ynuladole.hideText();
        yjednadole.showText();

        klapkatap1.showObj();
        klapkatap2.hideObj();
        klapkatbp1.hideObj();
        klapkatbp2.showObj();
        klapkatan1.hideObj();
        klapkatan2.showObj();
        klapkatbn1.showObj();
        klapkatbn2.hideObj();


        klapkatbp2.setStroke("#32cd32",2);
        klapkatan2.setStroke("#FF0000",2);
        klapkatbn1.setStroke("#FF0000",2);


        zbytokkuTap.hideObj();
        zbytokkuTbp.showObj();
        zbytokkuTan.showObj();
        zbytokkuTbn.hideObj();

        zbytokkuTbp.setStroke("#32cd32",2);
        zbytokkuTan.setStroke("#FF0000",2);


        ramcekTap1.fillObj("#32cd32");
        ramcekTbp1.fillObj("#FF0000");
        ramcekTan1.fillObj("#FF0000");
        ramcekTbn1.fillObj("#32cd32");
        ramcekTap2.fillObj("#32cd32");
        ramcekTbp2.fillObj("#FF0000");
        ramcekTan2.fillObj("#FF0000");
        ramcekTbn2.fillObj("#32cd32");



        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0);
        piatyriadok.changeFill(0.4);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+445);
        /*

        document.getElementById("prvyriadok1").style.backgroundColor ='#abb5c2';
        document.getElementById("prvyriadok2").style.backgroundColor ='#abb5c2';
        document.getElementById("prvyriadok3").style.backgroundColor ='#abb5c2';
        document.getElementById("druhyriadok1").style.backgroundColor ='#abb5c2';
        document.getElementById("druhyriadok2").style.backgroundColor ='#abb5c2';
        document.getElementById("druhyriadok3").style.backgroundColor ='#abb5c2';
        document.getElementById("tretiriadok1").style.backgroundColor ='#ffffff';
        document.getElementById("tretiriadok2").style.backgroundColor ='#ffffff';
        document.getElementById("tretiriadok3").style.backgroundColor ='#ffffff';
        document.getElementById("stvrtyriadok1").style.backgroundColor ='#abb5c2';
        document.getElementById("stvrtyriadok2").style.backgroundColor ='#abb5c2';
        document.getElementById("stvrtyriadok3").style.backgroundColor ='#abb5c2';


*/
    }
    if (x == 'Ajedna' && y == 'Bnula') {
        oranzova1.setStroke("#32cd32",2);
        oranzova2.setStroke("#32cd32",2);
        oranzova3.setStroke("#32cd32",2);

        zelena1.setStroke("#32cd32",2);
        zelena2.setStroke("#32cd32",2);
        zelena3.setStroke("#32cd32",2);
        zelena4.setStroke("#32cd32",2);
        zelena5.setStroke("#32cd32",2);
        zelena6.setStroke("#32cd32",2);
        zelena7.setStroke("#32cd32",2);
        zelena8.setStroke("#32cd32",2);
        zelena9.setStroke("#32cd32",2);
        zelena10.setStroke("#32cd32",2);
        zelena11.setStroke("#32cd32",2);
        zelena12.setStroke("#32cd32",2);
        zelena13.setStroke("#32cd32",0.5);
        zelena14.setStroke("#32cd32",0.5);
        zelena15.setStroke("#32cd32",0.5);

        ciernakTan1.setStroke("#32cd32",2);
        ciernakTan2.setStroke("#32cd32",2);
        ciernakTan3.setStroke("#32cd32",2);

        cerveneacko1.setStroke("#32cd32",2);
        cerveneacko2.setStroke("#32cd32",2);
        cerveneacko3.setStroke("#32cd32",2);
        cerveneacko4.setStroke("#32cd32",2);
        cerveneacko5.setStroke("#32cd32",2);
        cerveneacko6.setStroke("#32cd32",0.5);
        cerveneacko7.setStroke("#32cd32",0.5);
        cerveneacko7.fillObj("#32cd32");
        cerveneacko8.setStroke("#32cd32",2);
        cerveneacko9.setStroke("#32cd32",2);
        cerveneacko10.setStroke("#32cd32",2);
        cerveneacko11.setStroke("#32cd32",0.5);
        cerveneacko12.setStroke("#32cd32",2);
        cerveneacko12.fillObj("#32cd32");



        zelenaypsilon1.setStroke("#32cd32",2);
        zelenaypsilon2.setStroke("#32cd32",2);
        zelenaypsilon3.setStroke("#32cd32",2);
        zelenaypsilon4.setStroke("#32cd32",2);
        zelenaypsilon4.fillObj("#32cd32");
        zelenaypsilon5.setStroke("#32cd32",2);
        zelenaypsilon6.setStroke("#32cd32",2);
        zelenaypsilon7.setStroke("#32cd32",0.5);
        zelenaypsilon8.setStroke("#32cd32",0.5);
        zelenaypsilon9.setStroke("#32cd32",0.5);
        zelenaypsilon10.setStroke("#32cd32",0.5);
        zelenaypsilon11.setStroke("#32cd32",0.5);


        zelenakTbp1.setStroke("#32cd32",2);
        zelenakTbp2.setStroke("#32cd32",2);
        zelenakTbp3.setStroke("#32cd32",2);
        zelenakTbp4.setStroke("#32cd32",2);

        cervenabcko1.setStroke("#FF0000",2);
        cervenabcko2.setStroke("#FF0000",2);
        cervenabcko3.setStroke("#FF0000",2);
        cervenabcko4.setStroke("#FF0000",2);
        cervenabcko5.setStroke("#FF0000",2);
        cervenabcko6.setStroke("#FF0000",2);
        cervenabcko6.fillObj("#FF0000");
        cervenabcko7.setStroke("#FF0000",0.5);
        cervenabcko8.setStroke("#FF0000",2);
        cervenabcko9.setStroke("#FF0000",2);
        cervenabcko10.setStroke("#FF0000",2);
        cervenabcko11.setStroke("#FF0000",0.5);
        cervenabcko12.setStroke("#FF0000",0.5);
        cervenabcko12.fillObj("#FF0000");

        zelenaktap1.setStroke("#000000",2);
        zelenaktap2.setStroke("#000000",2);
        zelenaktap3.setStroke("#000000",2);

        kruh_ypsilon_prienik.fillObj("#32cd32");
        kruh_ypsilon_prienik.setStroke("#32cd32",2);
        kruh_ypsilon.setStroke("#32cd32",0.5);
        y_prienik.setStroke("#32cd32",2);
        y_prienik.fillObj("#32cd32");

        ynulahore.hideText();
        yjednahore.showText();
        ynuladole.hideText();
        yjednadole.showText();

        klapkatap1.hideObj();
        klapkatap2.showObj();
        klapkatbp1.showObj();
        klapkatbp2.hideObj();
        klapkatan1.showObj();
        klapkatan2.hideObj();
        klapkatbn1.hideObj();
        klapkatbn2.showObj();

        klapkatan1.setStroke("#32cd32",2);

        zbytokkuTap.showObj();
        zbytokkuTbp.hideObj();
        zbytokkuTan.hideObj();
        zbytokkuTbn.showObj();

        zbytokkuTap.setStroke("#32cd32",2);
        zbytokkuTbn.setStroke("#FF0000",2);


        ramcekTap1.fillObj("#FF0000");
        ramcekTbp1.fillObj("#32cd32");
        ramcekTan1.fillObj("#32cd32");
        ramcekTbn1.fillObj("#FF0000");
        ramcekTap2.fillObj("#FF0000");
        ramcekTbp2.fillObj("#32cd32");
        ramcekTan2.fillObj("#32cd32");
        ramcekTbn2.fillObj("#FF0000");



        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0.4);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+405);



        /*



*/

    }
    if (x == 'Ajedna' && y == 'Bjedna') {

        zelena1.setStroke("#32cd32",2);
        zelena2.setStroke("#32cd32",2);
        zelena3.setStroke("#32cd32",2);
        zelena4.setStroke("#32cd32",2);
        zelena5.setStroke("#32cd32",2);
        zelena6.setStroke("#FF0000",2);
        zelena7.setStroke("#32cd32",2);
        zelena8.setStroke("#32cd32",2);
        zelena9.setStroke("#FF0000",2);

        zelena15.setStroke("#32cd32",2);


        oranzova1.setStroke("#FF0000",2);
        oranzova2.setStroke("#FF0000",2);
        oranzova3.setStroke("#FF0000",2);

        ciernakTan1.setStroke("#FF0000",2);
        ciernakTan2.setStroke("#FF0000",2);
        ciernakTan3.setStroke("#FF0000",2);

        zelenakTbp1.setStroke("#FF0000",2);
        zelenakTbp2.setStroke("#FF0000",2);
        zelenakTbp3.setStroke("#FF0000",2);
        zelenakTbp4.setStroke("#FF0000",2);

        cerveneacko1.setStroke("#32cd32",2);
        cerveneacko2.setStroke("#32cd32",2);
        cerveneacko3.setStroke("#32cd32",2);
        cerveneacko4.setStroke("#32cd32",2);
        cerveneacko5.setStroke("#32cd32",2);
        cerveneacko6.setStroke("#32cd32",0.5);
        cerveneacko7.setStroke("#32cd32",0.5);
        cerveneacko7.fillObj("#32cd32");
        cerveneacko8.setStroke("#32cd32",2);
        cerveneacko9.setStroke("#32cd32",2);
        cerveneacko10.setStroke("#32cd32",2);
        cerveneacko11.setStroke("#32cd32",0.5);
        cerveneacko12.setStroke("#32cd32",2);
        cerveneacko12.fillObj("#32cd32");

        cervenabcko1.setStroke("#32cd32",2);
        cervenabcko2.setStroke("#32cd32",2);
        cervenabcko3.setStroke("#32cd32",2);
        cervenabcko4.setStroke("#32cd32",2);
        cervenabcko5.setStroke("#32cd32",2);
        cervenabcko6.setStroke("#32cd32",2);
        cervenabcko6.fillObj("#32cd32");
        cervenabcko7.setStroke("#32cd32",0.5);
        cervenabcko8.setStroke("#32cd32",2);
        cervenabcko9.setStroke("#32cd32",2);
        cervenabcko10.setStroke("#32cd32",2);
        cervenabcko11.setStroke("#32cd32",0.5);
        cervenabcko12.setStroke("#32cd32",0.5);
        cervenabcko12.fillObj("#32cd32");

        ciernakTbn1.setStroke("#FF0000",2);
        ciernakTbn2.setStroke("#FF0000",2);
        ciernakTbn3.setStroke("#FF0000",2);


        zelenakTbp2.setStroke("#000000",2);
        zelenakTbp3.setStroke("#000000",2);
        zelenakTbp4.setStroke("#000000",2);




        zelenaypsilon1.setStroke("#FF0000",2);
        zelenaypsilon2.setStroke("#FF0000",2);
        zelenaypsilon3.setStroke("#FF0000",2);
        zelenaypsilon4.setStroke("#FF0000",2);
        zelenaypsilon4.fillObj("#FF0000");
        zelenaypsilon5.setStroke("#FF0000",2);
        zelenaypsilon6.setStroke("#FF0000",2);
        zelenaypsilon7.setStroke("#FF0000",0.5);
        zelenaypsilon8.setStroke("#FF0000",0.5);
        zelenaypsilon9.setStroke("#FF0000",0.5);
        zelenaypsilon10.setStroke("#FF0000",0.5);
        zelenaypsilon11.setStroke("#FF0000",0.5);

        zelenaktap1.setStroke("#000000",2);
        zelenaktap2.setStroke("#000000",2);
        zelenaktap3.setStroke("#000000",2);

        kruh_ypsilon_prienik.fillObj("#FF0000");
        kruh_ypsilon_prienik.setStroke("#FF0000",2);
        kruh_ypsilon.setStroke("#FF0000",0.5);
        y_prienik.fillObj("#FF0000");
        y_prienik.setStroke("#FF0000",2);


        ynulahore.showText();
        yjednahore.hideText();
        ynuladole.showText();
        yjednadole.hideText();

        klapkatap1.hideObj();
        klapkatap2.showObj();
        klapkatbp1.hideObj();
        klapkatbp2.showObj();
        klapkatan1.showObj();
        klapkatan2.hideObj();
        klapkatbn1.showObj();
        klapkatbn2.hideObj();

        klapkatan1.setStroke("#FF0000",2);
        klapkatbp2.setStroke("#FF0000",2);
        klapkatbn1.setStroke("#FF0000",2);

        zbytokkuTap.showObj();
        zbytokkuTbp.showObj();
        zbytokkuTan.hideObj();
        zbytokkuTbn.hideObj();

        zbytokkuTap.setStroke("#32cd32",2);
        zbytokkuTbp.setStroke("#32cd32",2);


        ramcekTap1.fillObj("#FF0000");
        ramcekTbp1.fillObj("#FF0000");
        ramcekTan1.fillObj("#32cd32");
        ramcekTbn1.fillObj("#32cd32");
        ramcekTap2.fillObj("#FF0000");
        ramcekTbp2.fillObj("#FF0000");
        ramcekTan2.fillObj("#32cd32");
        ramcekTbn2.fillObj("#32cd32");


        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+485);
        /*

    }
*/


    }
}

