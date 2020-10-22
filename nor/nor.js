function nor(){
    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;
    canvas1OffsetX = (divWidth -1000)/2;
    canvas1OffsetY = (divHeight-540)/2;


    scheme_slovak = new CustomText("Schéma", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    equivalent_slovak = new CustomText("Ekvivalentný obvod", canvas1OffsetX+130, 370 + canvas1OffsetY, 20);

    scheme_english = new CustomText("Scheme", canvas1OffsetX+130, 60 + canvas1OffsetY, 20);
    scheme_english.hideText();
    equivalent_english = new CustomText("Equivalent circuit", canvas1OffsetX+130, 370 + canvas1OffsetY, 20);
    equivalent_english.hideText();
    //////////////////////////////////////////////////////PRVA SCHEMA///////////////////////////////////////////////////////////////


    /*
      scheme_slovak = new CustomText("Schéma", canvas1OffsetX+130, 80 + canvas1OffsetY, 20);
    equivalent_slovak1 = new CustomText("Ekvivalentný", canvas1OffsetX+130, 400 + canvas1OffsetY, 20);
    equivalent_slovak2= new CustomText(" obvod", canvas1OffsetX+155, 430 + canvas1OffsetY, 20);

    scheme_english = new CustomText("Scheme", canvas1OffsetX+130, 80 + canvas1OffsetY, 20);
    scheme_english.hideText();
    equivalent_english1 = new CustomText("Equivalent", canvas1OffsetX+130, 400 + canvas1OffsetY, 20);
    equivalent_english1.hideText();
    equivalent_english2 = new CustomText("circuit", canvas1OffsetX+155, 430 + canvas1OffsetY, 20);
    equivalent_english2.hideText();
     */
    prvasuradnicax=360+canvas1OffsetX;
    prvasuradnicay=125+canvas1OffsetY;
    druhasuradnicax=360+canvas1OffsetX;
    druhasuradnicay=115+canvas1OffsetY;
    tretiasuradnicax=370+canvas1OffsetX;
    tretiasuradnicay=120+canvas1OffsetY;

    trojuholniktap=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktap.fill("#32cd32"); //tap trojuholnik

    prvasuradnicax=360+canvas1OffsetX;
    prvasuradnicay=195+canvas1OffsetY;
    druhasuradnicax=360+canvas1OffsetX;
    druhasuradnicay=185+canvas1OffsetY;
    tretiasuradnicax=370+canvas1OffsetX;
    tretiasuradnicay=190+canvas1OffsetY;

    trojuholniktbp=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktbp.fill("#32cd32"); //tbp trojuholnik

    prvasuradnicax=355+canvas1OffsetX;
    prvasuradnicay=280+canvas1OffsetY;
    druhasuradnicax=365+canvas1OffsetX;
    druhasuradnicay=275+canvas1OffsetY;
    tretiasuradnicax=365+canvas1OffsetX;
    tretiasuradnicay=285+canvas1OffsetY;

    trojuholniktbn=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktbn.fill("#FF0000"); //tbn trojuholnik

    prvasuradnicax=260+canvas1OffsetX;
    prvasuradnicay=280+canvas1OffsetY;
    druhasuradnicax=270+canvas1OffsetX;
    druhasuradnicay=275+canvas1OffsetY;
    tretiasuradnicax=270+canvas1OffsetX;
    tretiasuradnicay=285+canvas1OffsetY;

    trojuholniktbn=draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax+ ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay);
    trojuholniktbn.fill("#FF0000"); //tan trojuholnik


    ramcekTap1 = new Rectangle(345 + canvas1OffsetX, 85 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTap1.setOpacity(0.2);
    ramcekTbp1 = new Rectangle(345 + canvas1OffsetX, 160 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTbp1.setOpacity(0.2);
    ramcekTan1 = new Rectangle(245 + canvas1OffsetX, 250 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTan1.setOpacity(0.2);
    ramcekTbn1 = new Rectangle(345 + canvas1OffsetX, 250 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTbn1.setOpacity(0.2);


    acko1 = new Line(200 + canvas1OffsetX, 105 + canvas1OffsetY, 350 + canvas1OffsetX, 105 + canvas1OffsetY); //Acko zlava doprava
    acko1.setStroke("#FF0000", 2);
    acko2 = new Line(350 + canvas1OffsetX, 105 + canvas1OffsetY, 350 + canvas1OffsetX, 135 + canvas1OffsetY); //Acko kratko-zhora nadol-
    acko2.setStroke("#FF0000", 2);
    acko3 = new Line(255 + canvas1OffsetX, 265 + canvas1OffsetY, 255 + canvas1OffsetX, 295 + canvas1OffsetY); //Acko dolne zhora nadol
    acko3.setStroke("#FF0000", 2);
    acko4 = new Line(235 + canvas1OffsetX, 295 + canvas1OffsetY, 255 + canvas1OffsetX, 295 + canvas1OffsetY); //Acko zlava doprava dolne
    acko4.setStroke("#FF0000", 2);
    acko5 = new Line(235 + canvas1OffsetX, 105 + canvas1OffsetY, 235 + canvas1OffsetX, 295 + canvas1OffsetY); //Acko zhora nadol
    acko5.setStroke("#FF0000", 2);


    bcko1 = new Line(200 + canvas1OffsetX, 175 + canvas1OffsetY, 350 + canvas1OffsetX, 175 + canvas1OffsetY); //Bcko zlava doprava
    bcko1.setStroke("#FF0000", 2);
    bcko2 = new Line(350 + canvas1OffsetX, 175 + canvas1OffsetY, 350 + canvas1OffsetX, 205 + canvas1OffsetY); //Bcko kratko-zhora nadol
    bcko2.setStroke("#FF0000", 2);
    bcko3 = new Line(330 + canvas1OffsetX, 175 + canvas1OffsetY, 330 + canvas1OffsetX, 295 + canvas1OffsetY); //Bcko zhora nadol
    bcko3.setStroke("#FF0000", 2);
    bcko4 = new Line(330 + canvas1OffsetX, 295 + canvas1OffsetY, 350 + canvas1OffsetX, 295 + canvas1OffsetY); //Bcko zlava doprava dolne
    bcko4.setStroke("#FF0000", 2);
    bcko5 = new Line(350 + canvas1OffsetX, 265 + canvas1OffsetY, 350 + canvas1OffsetX, 295 + canvas1OffsetY); //Bcko dolne zhora nadol
    bcko5.setStroke("#FF0000", 2);


    zelena1 = new Line(355 + canvas1OffsetX, 105 + canvas1OffsetY, 390 + canvas1OffsetX, 105 + canvas1OffsetY); //Tap zlava doprava
    zelena1.setStroke("#32cd32", 2);
    zelena2 = new Line(355 + canvas1OffsetX, 120 + canvas1OffsetY, 390 + canvas1OffsetX, 120 + canvas1OffsetY); //Tap zlava doprava
    zelena2.setStroke("#32cd32", 2);


    TapTbpciary1= new Line(355 + canvas1OffsetX, 135 + canvas1OffsetY, 370 + canvas1OffsetX, 135 + canvas1OffsetY); //Tap zlava doprava
    TapTbpciary1.setStroke("#32cd32", 2);
    TapTbpciary2= new Line(370 + canvas1OffsetX, 135 + canvas1OffsetY, 370 + canvas1OffsetX, 175 + canvas1OffsetY); //Ciara medzi Tap a Tbp-
    TapTbpciary2.setStroke("#32cd32", 2);
    TapTbpciary3= new Line(355 + canvas1OffsetX, 175 + canvas1OffsetY, 370 + canvas1OffsetX, 175 + canvas1OffsetY); //Tbp
    TapTbpciary3.setStroke("#32cd32", 2);

    Tapkratkazhoranadol1 = new Line(355 + canvas1OffsetX, 100 + canvas1OffsetY, 355 + canvas1OffsetX, 110 + canvas1OffsetY); //Tap zhoda nadol
    Tapkratkazhoranadol1.setStroke("#32cd32", 2);
    Tapkratkazhoranadol2 = new Line(355 + canvas1OffsetX, 115 + canvas1OffsetY, 355 + canvas1OffsetX, 125 + canvas1OffsetY); //Tap zhoda nadol
    Tapkratkazhoranadol2.setStroke("#32cd32", 2);
    Tapkratkazhoranadol3 = new Line(355 + canvas1OffsetX, 130 + canvas1OffsetY, 355 + canvas1OffsetX, 140 + canvas1OffsetY); //Tap zhoda nadol
    Tapkratkazhoranadol3.setStroke("#32cd32", 2);

    zelena3 = new Line(390 + canvas1OffsetX, 75 + canvas1OffsetY, 440 + canvas1OffsetX, 75 + canvas1OffsetY); //Udd
    zelena3.setStroke("#32cd32", 2);
    zelena4 = new Line(390 + canvas1OffsetX, 75 + canvas1OffsetY, 390 + canvas1OffsetX, 190 + canvas1OffsetY); //Udd
    zelena4.setStroke("#32cd32", 2);

    zelena5 = new Line(355 + canvas1OffsetX, 190 + canvas1OffsetY, 390 + canvas1OffsetX, 190 + canvas1OffsetY); //Tbp
    zelena5.setStroke("#32cd32", 2);
    TbpTbnzelenadocervenej1= new Line(355 + canvas1OffsetX, 205 + canvas1OffsetY, 370 + canvas1OffsetX, 205 + canvas1OffsetY); //Tbp
    TbpTbnzelenadocervenej1.setStroke("#32cd32", 2);
    TbpTbnzelenadocervenej2= new Line(370 + canvas1OffsetX, 205 + canvas1OffsetY, 370 + canvas1OffsetX, 265 + canvas1OffsetY); //Ciara medzi Tbp a Tbn-
    TbpTbnzelenadocervenej2.setStroke("#32cd32", 2);

    Tbpkratkazhoranadol1= new Line(355 + canvas1OffsetX, 170 + canvas1OffsetY, 355 + canvas1OffsetX, 180 + canvas1OffsetY); //Tbp zhoda nadol
    Tbpkratkazhoranadol1.setStroke("#32cd32", 2);
    Tbpkratkazhoranadol2= new Line(355 + canvas1OffsetX, 185 + canvas1OffsetY, 355 + canvas1OffsetX, 195 + canvas1OffsetY); //Tbp zhoda nadol
    Tbpkratkazhoranadol2.setStroke("#32cd32", 2);
    Tbpkratkazhoranadol3= new Line(355 + canvas1OffsetX, 200 + canvas1OffsetY, 355 + canvas1OffsetX, 210 + canvas1OffsetY); //Tbp zhoda nadol
    Tbpkratkazhoranadol3.setStroke("#32cd32", 2);

    Y1= new Line(275 + canvas1OffsetX, 235 + canvas1OffsetY, 440 + canvas1OffsetX, 235 + canvas1OffsetY); //Y
    Y1.setStroke("#32cd32", 2);
    Y2= new Line(275 + canvas1OffsetX, 235 + canvas1OffsetY, 275 + canvas1OffsetX, 265 + canvas1OffsetY); //Y zhora nadol
    Y2.setStroke("#32cd32", 2);

    Tankratkazhoranadol1= new Line(260 + canvas1OffsetX, 260 + canvas1OffsetY, 260 + canvas1OffsetX, 270 + canvas1OffsetY); //Tan kratko zhoda nadol cierne
    Tankratkazhoranadol1.setStroke("#000000", 2);
    Tankratkazhoranadol2= new Line(260 + canvas1OffsetX, 275 + canvas1OffsetY, 260 + canvas1OffsetX, 285 + canvas1OffsetY); //Tan kratko zhoda nadol cierne
    Tankratkazhoranadol2.setStroke("#000000", 2);
    Tankratkazhoranadol3= new Line(260 + canvas1OffsetX, 290 + canvas1OffsetY, 260 + canvas1OffsetX, 300 + canvas1OffsetY); //Tan kratko zhoda nadol cierne
    Tankratkazhoranadol3.setStroke("#000000", 2);

    Y3= new Line(260 + canvas1OffsetX, 265 + canvas1OffsetY, 275 + canvas1OffsetX, 265 + canvas1OffsetY); //Tan zlava doprava
    Y3.setStroke("#32cd32", 2);

    zelena6 = new Line(260 + canvas1OffsetX, 280 + canvas1OffsetY, 275 + canvas1OffsetX, 280 + canvas1OffsetY); //Tan zlava doprava
    zelena6.setStroke("#FF0000", 2);
    zelena7 = new Line(260 + canvas1OffsetX, 295 + canvas1OffsetY, 275 + canvas1OffsetX, 295 + canvas1OffsetY); //Tan zlava doprava
    zelena7.setStroke("#FF0000", 2);
    ciara = new Line(275 + canvas1OffsetX, 280 + canvas1OffsetY, 275 + canvas1OffsetX, 325 + canvas1OffsetY); //Tan zhoda nadol
    ciara.setStroke("#FF0000", 2);
    ciara = new Line(265 + canvas1OffsetX, 325 + canvas1OffsetY, 285 + canvas1OffsetX, 325 + canvas1OffsetY); //Tan dolne zlava doprava uzemnenie
    ciara.setStroke("#FF0000", 2);


    Tbnkratkazhoranadol1= new Line(355 + canvas1OffsetX, 260 + canvas1OffsetY, 355 + canvas1OffsetX, 270 + canvas1OffsetY); //Tbn kratko zhoda nadol cierne
    Tbnkratkazhoranadol1.setStroke("#000000", 2);
    Tbnkratkazhoranadol2= new Line(355 + canvas1OffsetX, 275 + canvas1OffsetY, 355 + canvas1OffsetX, 285 + canvas1OffsetY); //Tbn kratko zhoda nadol cierne
    Tbnkratkazhoranadol2.setStroke("#000000", 2);
    Tbnkratkazhoranadol3= new Line(355 + canvas1OffsetX, 290 + canvas1OffsetY, 355 + canvas1OffsetX, 300 + canvas1OffsetY); //Tbn kratko zhoda nadol cierne
    Tbnkratkazhoranadol3.setStroke("#000000", 2);

    TbpTbnzelenadocervenej3= new Line(355 + canvas1OffsetX, 265 + canvas1OffsetY, 370 + canvas1OffsetX, 265 + canvas1OffsetY); //Tbn zlava doprava-
    TbpTbnzelenadocervenej3.setStroke("#32cd32", 2);

    zelena10 = new Line(355 + canvas1OffsetX, 280 + canvas1OffsetY, 370 + canvas1OffsetX, 280 + canvas1OffsetY); //Tbn zlava doprava
    zelena10.setStroke("#FF0000", 2);
    zelena11 = new Line(355 + canvas1OffsetX, 295 + canvas1OffsetY, 370+ canvas1OffsetX, 295 + canvas1OffsetY); //Tbn zlava doprava
    zelena11.setStroke("#FF0000", 2);
    zelena12 = new Line(370 + canvas1OffsetX, 280 + canvas1OffsetY, 370 + canvas1OffsetX, 325 + canvas1OffsetY); //-Tbn zhoda nadol na uzemnenie
    zelena12.setStroke("#FF0000", 2);
    zelena13 = new Line(360 + canvas1OffsetX, 325 + canvas1OffsetY, 380 + canvas1OffsetX, 324 + canvas1OffsetY); //Tbn dolne zlava doprava.. uzemnenie
    zelena13.setStroke("#FF0000", 2);

    kruh1 = new Circle(7, 440 + canvas1OffsetX, 75 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //UDD
    kruh1 = new Circle(7, 390 + canvas1OffsetX, 105 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //UDD dole
    kruh1 = new Circle(7, 390 + canvas1OffsetX, 120 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //UDD dole

    Y4 = new Circle(7, 440 + canvas1OffsetX, 235 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y pravo
    Y5 = new Circle(7, 370 + canvas1OffsetX, 235 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y lave


    acko6 = new Circle(7, 200 + canvas1OffsetX, 105 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko
    acko7 = new Circle(7, 235 + canvas1OffsetX, 105 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prienik

    bcko6= new Circle(7, 200 + canvas1OffsetX, 175 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Bcko
    bcko7 = new Circle(7, 330 + canvas1OffsetX, 175 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Bcko prienik


    kruh1 = new Circle(7, 370 + canvas1OffsetX, 295 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tbn
    kruh1 = new Circle(7, 275 + canvas1OffsetX, 295 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Tan

    new CustomText("U", 450 + canvas1OffsetX, 68 + canvas1OffsetY, 18).toItalic(); // 410 povodne
    new CustomText("DD", 463 + canvas1OffsetX, 78 + canvas1OffsetY, 13);


    yjednahore = new CustomText("Y=1", 450 + canvas1OffsetX, 230 + canvas1OffsetY, 15);
    ynulahore = new CustomText("Y=0", 450 + canvas1OffsetX, 230+ canvas1OffsetY, 15);
    ynulahore.hideText();
    text = new CustomText("A", 170 + canvas1OffsetX, 94 + canvas1OffsetY, 15);
    text = new CustomText("B", 170 + canvas1OffsetX, 170 + canvas1OffsetY, 15);

    text = new CustomText("T", 400 + canvas1OffsetX, 103 + canvas1OffsetY, 15);
    text = new CustomText("Ap", 408 + canvas1OffsetX, 113 + canvas1OffsetY, 10);

    text = new CustomText("T", 400 + canvas1OffsetX, 168 + canvas1OffsetY, 15);
    text = new CustomText("Bp", 408 + canvas1OffsetX, 178 + canvas1OffsetY, 10);

    text = new CustomText("T", 285 + canvas1OffsetX, 270 + canvas1OffsetY, 15);
    text = new CustomText("An", 293 + canvas1OffsetX, 280 + canvas1OffsetY, 10);

    text = new CustomText("T", 380 + canvas1OffsetX, 270 + canvas1OffsetY, 15);
    text = new CustomText("Bn", 388 + canvas1OffsetX, 280 + canvas1OffsetY, 10);


    //////////////////////////////////////////////////////DRUHA SCHEMA///////////////////////////////////////////////////////////////
    ramcekTap2 = new Rectangle(355 + canvas1OffsetX, 385 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTap2.setOpacity(0.2);
    ramcekTbp2 = new Rectangle(355 + canvas1OffsetX, 455 + canvas1OffsetY, 80, 60, "#32cd32");
    ramcekTbp2.setOpacity(0.2);
    ramcekTan2 = new Rectangle(245 + canvas1OffsetX, 580 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTan2.setOpacity(0.2);
    ramcekTbn2 = new Rectangle(355 + canvas1OffsetX, 580 + canvas1OffsetY, 80, 60, "#FF0000");
    ramcekTbn2.setOpacity(0.2);




    zbytokkuTap=new Line(395 + canvas1OffsetX, 410 + canvas1OffsetY, 400 + canvas1OffsetX, 410 + canvas1OffsetY); //Zbytok ku Tap
    zbytokkuTap.setStroke("#FF0000", 2);
    zbytokkuTap.hideObj();
    zbytokkuTbp=new Line(395 + canvas1OffsetX, 480 + canvas1OffsetY, 400 + canvas1OffsetX, 480 + canvas1OffsetY); //Zbytok ku Tbp
    zbytokkuTbp.setStroke("#FF0000", 2);
    zbytokkuTbp.hideObj();
    zbytokkuTan=new Line(280 + canvas1OffsetX, 610 + canvas1OffsetY, 285 + canvas1OffsetX, 610 + canvas1OffsetY); //Zbytok ku Tan
    zbytokkuTan.setStroke("#FF0000", 2);

    zbytokkuTbn=new Line(375 + canvas1OffsetX, 610 + canvas1OffsetY, 380 + canvas1OffsetX, 610 + canvas1OffsetY); //Zbytok ku Tbn
    zbytokkuTbn.setStroke("#FF0000", 2);

    klapkatap1=new Line(395 + canvas1OffsetX, 395 + canvas1OffsetY, 395 + canvas1OffsetX, 425 + canvas1OffsetY); //Klapka pri Tap
    klapkatap1.setStroke("#32cd32", 2);
    klapkatap2=new Line(405 + canvas1OffsetX, 395 + canvas1OffsetY, 395 + canvas1OffsetX, 425 + canvas1OffsetY); //Klapka pri Tap
    klapkatap2.setStroke("#FF0000", 2);
    klapkatap2.hideObj();

    klapkatbp1=new Line(395 + canvas1OffsetX, 465 + canvas1OffsetY, 395 + canvas1OffsetX, 495 + canvas1OffsetY); //Klapka pri Tbp
    klapkatbp1.setStroke("#32cd32", 2);
    klapkatbp2=new Line(405 + canvas1OffsetX, 465 + canvas1OffsetY, 395 + canvas1OffsetX, 495 + canvas1OffsetY); //Klapka pri Tbp
    klapkatbp2.setStroke("#FF0000", 2);
    klapkatbp2.hideObj();

    klapkatbn1=new Line(375 + canvas1OffsetX, 595 + canvas1OffsetY, 375 + canvas1OffsetX, 625 + canvas1OffsetY); //Klapka pri Tbn
    klapkatbn1.setStroke("#32cd32", 2);
    klapkatbn1.hideObj();
    klapkatbn2=new Line(385 + canvas1OffsetX, 595 + canvas1OffsetY, 375 + canvas1OffsetX, 625 + canvas1OffsetY); //Klapka pri Tbn
    klapkatbn2.setStroke("#FF0000", 2);

    klapkatan1=new Line(280 + canvas1OffsetX, 595 + canvas1OffsetY, 280 + canvas1OffsetX, 625 + canvas1OffsetY); //Klapka pri Tan
    klapkatan1.setStroke("#32cd32", 2);
    klapkatan1.hideObj();
    klapkatan2=new Line(290 + canvas1OffsetX, 595 + canvas1OffsetY, 280 + canvas1OffsetX, 625 + canvas1OffsetY); //Klapka pri Tan
    klapkatan2.setStroke("#FF0000", 2);



    zelena14 = new Line(390 + canvas1OffsetX, 375 + canvas1OffsetY, 390 + canvas1OffsetX, 395 + canvas1OffsetY); //Udd zhora nadol
    zelena14.setStroke("#32cd32", 2);
    zelena15 = new Line(390 + canvas1OffsetX, 375 + canvas1OffsetY, 440 + canvas1OffsetX, 375 + canvas1OffsetY); //Udd
    zelena15.setStroke("#32cd32", 2);
    zelena16 = new Line(390 + canvas1OffsetX, 425 + canvas1OffsetY, 390 + canvas1OffsetX, 465 + canvas1OffsetY); //Medzi Tap a Tbp
    zelena16.setStroke("#32cd32", 2);

    Y6=new Line(390 + canvas1OffsetX, 495 + canvas1OffsetY, 390 + canvas1OffsetX, 525 + canvas1OffsetY); //od Tbp dole
    Y6.setStroke("#32cd32", 2);
    Y7=new Line(370 + canvas1OffsetX, 525 + canvas1OffsetY, 390 + canvas1OffsetX, 525 + canvas1OffsetY); //od Tbp dole dolava
    Y7.setStroke("#32cd32", 2);
    Y8=new Line(370 + canvas1OffsetX, 525 + canvas1OffsetY, 370 + canvas1OffsetX, 595 + canvas1OffsetY); //od Tbp dole dolava a dole
    Y8.setStroke("#32cd32", 2);
    Y9=new Line(275 + canvas1OffsetX, 545 + canvas1OffsetY, 440 + canvas1OffsetX, 545 + canvas1OffsetY); //Y
    Y9.setStroke("#32cd32", 2);
    Y10=new Line(275 + canvas1OffsetX, 545 + canvas1OffsetY, 275 + canvas1OffsetX, 595 + canvas1OffsetY); //ku Tab
    Y10.setStroke("#32cd32", 2);

    acko8=new Line(200 + canvas1OffsetX, 410 + canvas1OffsetY, 395 + canvas1OffsetX, 410 + canvas1OffsetY); //Acko zlava doprava
    acko8.setStroke("#FF0000", 2);
    acko9=new Line(235 + canvas1OffsetX, 410 + canvas1OffsetY, 235 + canvas1OffsetX, 610 + canvas1OffsetY); //Acko zhora nadol
    acko9.setStroke("#FF0000", 2);
    acko10=new Line(235 + canvas1OffsetX, 610 + canvas1OffsetY, 280 + canvas1OffsetX, 610 + canvas1OffsetY); //Acko dole zlava doprava
    acko10.setStroke("#FF0000", 2);

    bcko8=new Line(200 + canvas1OffsetX, 480 + canvas1OffsetY, 395 + canvas1OffsetX, 480 + canvas1OffsetY); //Bcko zlava doprava
    bcko8.setStroke("#FF0000", 2);
    bcko9=new Line(330 + canvas1OffsetX, 480 + canvas1OffsetY, 330 + canvas1OffsetX, 610 + canvas1OffsetY); //Bcko zhora nadol
    bcko9.setStroke("#FF0000", 2);
    bcko10=new Line(330 + canvas1OffsetX, 610 + canvas1OffsetY, 375 + canvas1OffsetX, 610 + canvas1OffsetY); //Bcko dole zlava doprava
    bcko10.setStroke("#FF0000", 2);


    ciara = new Line(265 + canvas1OffsetX, 650 + canvas1OffsetY, 285 + canvas1OffsetX, 650 + canvas1OffsetY); //Tan dolne zlava doprava
    ciara.setStroke("#FF0000", 2);
    ciara = new Line(360 + canvas1OffsetX, 650 + canvas1OffsetY, 380 + canvas1OffsetX, 650 + canvas1OffsetY); //Tbn dolne zlava doprava
    ciara.setStroke("#FF0000", 2);
    ciara = new Line(370 + canvas1OffsetX, 625 + canvas1OffsetY, 370 + canvas1OffsetX, 650 + canvas1OffsetY); //Tbn zhoda nadol ku uzemneniu
    ciara.setStroke("#FF0000", 2);
    ciara = new Line(275 + canvas1OffsetX, 625 + canvas1OffsetY, 275 + canvas1OffsetX, 650 + canvas1OffsetY); //Tan zhoda nadol ku uzemneniu
    ciara.setStroke("#FF0000", 2);

    kruh1 = new Circle(7, 440 + canvas1OffsetX, 375 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Udd
    kruh1 = new Circle(7, 390 + canvas1OffsetX, 395 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap1
    kruh1 = new Circle(7, 390 + canvas1OffsetX, 425 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tap2
    kruh1 = new Circle(7, 390 + canvas1OffsetX, 465 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbp1

    Y11 = new Circle(7, 390 + canvas1OffsetX, 495 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbp2
    Y12 = new Circle(7, 370 + canvas1OffsetX, 595 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tbn1
    Y13 = new Circle(7, 275 + canvas1OffsetX, 595 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Tan1

    acko11 = new Circle(7, 200 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Acko
    bcko11 = new Circle(7, 200 + canvas1OffsetX, 480 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Bcko

    kruh1 = new Circle(7, 370 + canvas1OffsetX, 625 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tbn2
    kruh1 = new Circle(7, 275 + canvas1OffsetX, 625 + canvas1OffsetY, 0.5, "#ffffff", "#FF0000"); //Tan2

    acko12 = new Circle(7, 235 + canvas1OffsetX, 410 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Acko prienik
    bcko12 = new Circle(7, 330 + canvas1OffsetX, 480 + canvas1OffsetY, 0.5, "#FF0000", "#FF0000"); //Bcko prienik

    Y14 = new Circle(7, 440 + canvas1OffsetX, 545 + canvas1OffsetY, 0.5, "#ffffff", "#32cd32"); //Y
    Y15 = new Circle(7, 370 + canvas1OffsetX, 545 + canvas1OffsetY, 0.5, "#32cd32", "#32cd32"); //Y lave


    new CustomText("U", 450 + canvas1OffsetX, 370 + canvas1OffsetY, 18).toItalic();
    new CustomText("DD", 463 + canvas1OffsetX, 380 + canvas1OffsetY, 13);

    /*

       new CustomText("U", 460 + canvas1OffsetX, 108 + canvas1OffsetY, 18).toItalic(); // 410 povodne
    new CustomText("DD", 473 + canvas1OffsetX, 118 + canvas1OffsetY, 13);
     */
    yjednadole = new CustomText("Y=1", 450 + canvas1OffsetX, 540 + canvas1OffsetY, 15);
    ynuladole = new CustomText("Y=0", 450 + canvas1OffsetX, 540 + canvas1OffsetY, 15);
    ynuladole.hideText();
    text = new CustomText("A", 170 + canvas1OffsetX, 402 + canvas1OffsetY, 15);
    text = new CustomText("B", 170 + canvas1OffsetX, 472 + canvas1OffsetY, 15);

    text = new CustomText("T", 410 + canvas1OffsetX, 405 + canvas1OffsetY, 15);
    text = new CustomText("Ap", 418 + canvas1OffsetX, 415 + canvas1OffsetY, 10);

    text = new CustomText("T", 410 + canvas1OffsetX, 470 + canvas1OffsetY, 15);
    text = new CustomText("Bp", 418 + canvas1OffsetX, 480 + canvas1OffsetY, 10);

    text = new CustomText("T", 295 + canvas1OffsetX, 600 + canvas1OffsetY, 15);
    text = new CustomText("An", 303 + canvas1OffsetX, 610 + canvas1OffsetY, 10);

    text = new CustomText("T", 390 + canvas1OffsetX, 600 + canvas1OffsetY, 15);
    text = new CustomText("Bn", 398 + canvas1OffsetX, 610 + canvas1OffsetY, 10);

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
    new CustomText("0", canvas1OffsetX + 726, 402 + canvas1OffsetY, 25).toBold();

    new CustomText("1", canvas1OffsetX + 618, 442 + canvas1OffsetY, 25);
    new CustomText("0", canvas1OffsetX + 672, 442 + canvas1OffsetY, 25);
    new CustomText("0", canvas1OffsetX + 726, 442 + canvas1OffsetY, 25).toBold();

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
        ramcekTap1.fillObj("#32cd32");
        ramcekTbp1.fillObj("#32cd32");
        ramcekTan1.fillObj("#FF0000");
        ramcekTbn1.fillObj("#FF0000");

        ramcekTap2.fillObj("#32cd32");
        ramcekTbp2.fillObj("#32cd32");
        ramcekTan2.fillObj("#FF0000");
        ramcekTbn2.fillObj("#FF0000");

        bcko1.setStroke("#FF0000",2);
        bcko2.setStroke("#FF0000",2);
        bcko3.setStroke("#FF0000",2);
        bcko4.setStroke("#FF0000",2);
        bcko5.setStroke("#FF0000",2);
        bcko6.setStroke("#FF0000",0.5);
        bcko7.setStroke("#FF0000",0.5);
        bcko7.fillObj("#FF0000");
        bcko8.setStroke("#FF0000",2);
        bcko9.setStroke("#FF0000",2);
        bcko10.setStroke("#FF0000",2);
        bcko11.setStroke("#FF0000",0.5);
        bcko12.setStroke("#FF0000",0.5);
        bcko12.fillObj("#FF0000");


        Y1.setStroke("#32cd32",2);
        Y2.setStroke("#32cd32",2);
        Y3.setStroke("#32cd32",2);
        Y4.setStroke("#32cd32",0.5);
        Y5.setStroke("#32cd32",0.5);
        Y5.fillObj("#32cd32");
        Y6.setStroke("#32cd32",2);
        Y7.setStroke("#32cd32",2);
        Y8.setStroke("#32cd32",2);
        Y9.setStroke("#32cd32",2);
        Y10.setStroke("#32cd32",2);
        Y11.setStroke("#32cd32",0.5);
        Y12.setStroke("#32cd32",0.5);
        Y13.setStroke("#32cd32",0.5);
        Y14.setStroke("#32cd32",0.5);
        Y15.setStroke("#32cd32",0.5);
        Y15.fillObj("#32cd32");

        TbpTbnzelenadocervenej1.setStroke("#32cd32",2);
        TbpTbnzelenadocervenej2.setStroke("#32cd32",2);
        TbpTbnzelenadocervenej3.setStroke("#32cd32",2);

        Tbpkratkazhoranadol1.setStroke("#32cd32",2);
        Tbpkratkazhoranadol2.setStroke("#32cd32",2);
        Tbpkratkazhoranadol3.setStroke("#32cd32",2);

        Tankratkazhoranadol1.setStroke("#000000",2);
        Tankratkazhoranadol2.setStroke("#000000",2);
        Tankratkazhoranadol3.setStroke("#000000",2);


        acko1.setStroke("#FF0000",2);
        acko2.setStroke("#FF0000",2);
        acko3.setStroke("#FF0000",2);
        acko4.setStroke("#FF0000",2);
        acko5.setStroke("#FF0000",2);
        acko6.setStroke("#FF0000",0.5);
        acko7.setStroke("#FF0000",0.5);
        acko7.fillObj("#FF0000");
        acko8.setStroke("#FF0000",2);
        acko9.setStroke("#FF0000",2);
        acko10.setStroke("#FF0000",2);
        acko11.setStroke("#FF0000",0.5);
        acko12.setStroke("#FF0000",0.5);
        acko12.fillObj("#FF0000");


        Tapkratkazhoranadol1.setStroke("#32cd32",2);
        Tapkratkazhoranadol2.setStroke("#32cd32",2);
        Tapkratkazhoranadol3.setStroke("#32cd32",2);

        TapTbpciary1.setStroke("#32cd32",2);
        TapTbpciary2.setStroke("#32cd32",2);
        TapTbpciary3.setStroke("#32cd32",2);

        Tbnkratkazhoranadol1.setStroke("#000000",2);
        Tbnkratkazhoranadol2.setStroke("#000000",2);
        Tbnkratkazhoranadol3.setStroke("#000000",2);

        ynulahore.hideText();
        yjednahore.showText();
        ynuladole.hideText();
        yjednadole.showText();

        klapkatap1.showObj();
        klapkatap2.hideObj();
        klapkatbp1.showObj();
        klapkatbp2.hideObj();
        klapkatbn1.hideObj();
        klapkatbn2.showObj();
        klapkatan1.hideObj();
        klapkatan2.showObj();

        klapkatbp1.setStroke("#32cd32",2);
        klapkatap1.setStroke("#32cd32",2);
        klapkatbn2.setStroke("#FF0000",2);
        klapkatan2.setStroke("#FF0000",2);

        zbytokkuTan.showObj();
        zbytokkuTbn.showObj();
        zbytokkuTap.hideObj();
        zbytokkuTbp.hideObj();


        druhyriadok.changeFill(0);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0.4);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+365);

        /*



         */

    }
    if (x == 'Anula' && y == 'Bjedna') {
        ramcekTap1.fillObj("#32cd32");
        ramcekTbp1.fillObj("#FF0000");
        ramcekTan1.fillObj("#FF0000");
        ramcekTbn1.fillObj("#32cd32");

        ramcekTap2.fillObj("#32cd32");
        ramcekTbp2.fillObj("#FF0000");
        ramcekTan2.fillObj("#FF0000");
        ramcekTbn2.fillObj("#32cd32");

        acko1.setStroke("#FF0000",2);
        acko2.setStroke("#FF0000",2);
        acko3.setStroke("#FF0000",2);
        acko4.setStroke("#FF0000",2);
        acko5.setStroke("#FF0000",2);
        acko6.setStroke("#FF0000",0.5);
        acko7.setStroke("#FF0000",0.5);
        acko7.fillObj("#FF0000");
        acko8.setStroke("#FF0000",2);
        acko9.setStroke("#FF0000",2);
        acko10.setStroke("#FF0000",2);
        acko11.setStroke("#FF0000",0.5);
        acko12.setStroke("#FF0000",0.5);
        acko12.fillObj("#FF0000");

        bcko1.setStroke("#32cd32",2);
        bcko2.setStroke("#32cd32",2);
        bcko3.setStroke("#32cd32",2);
        bcko4.setStroke("#32cd32",2);
        bcko5.setStroke("#32cd32",2);
        bcko6.setStroke("#32cd32",0.5);
        bcko7.setStroke("#32cd32",0.5);
        bcko7.fillObj("#32cd32");
        bcko8.setStroke("#32cd32",2);
        bcko9.setStroke("#32cd32",2);
        bcko10.setStroke("#32cd32",2);
        bcko11.setStroke("#32cd32",0.5);
        bcko12.setStroke("#32cd32",0.5);
        bcko12.fillObj("#32cd32");

        Y1.setStroke("#FF0000",2);
        Y2.setStroke("#FF0000",2);
        Y3.setStroke("#FF0000",2);
        Y4.setStroke("#FF0000",0.5);
        Y5.setStroke("#FF0000",0.5);
        Y5.fillObj("#FF0000");
        Y6.setStroke("#FF0000",2);
        Y7.setStroke("#FF0000",2);
        Y8.setStroke("#FF0000",2);
        Y9.setStroke("#FF0000",2);
        Y10.setStroke("#FF0000",2);
        Y11.setStroke("#FF0000",0.5);
        Y12.setStroke("#FF0000",0.5);
        Y13.setStroke("#FF0000",0.5);
        Y14.setStroke("#FF0000",0.5);
        Y15.setStroke("#FF0000",0.5);
        Y15.fillObj("#FF0000");

        TbpTbnzelenadocervenej1.setStroke("#FF0000",2);
        TbpTbnzelenadocervenej2.setStroke("#FF0000",2);
        TbpTbnzelenadocervenej3.setStroke("#FF0000",2);


        Tbpkratkazhoranadol1.setStroke("#000000",2);
        Tbpkratkazhoranadol2.setStroke("#000000",2);
        Tbpkratkazhoranadol3.setStroke("#000000",2);

        Tankratkazhoranadol1.setStroke("#FF0000",2);
        Tankratkazhoranadol2.setStroke("#FF0000",2);
        Tankratkazhoranadol3.setStroke("#FF0000",2);

        Tapkratkazhoranadol1.setStroke("#32cd32",2);
        Tapkratkazhoranadol2.setStroke("#32cd32",2);
        Tapkratkazhoranadol3.setStroke("#32cd32",2);

        TapTbpciary1.setStroke("#32cd32",2);
        TapTbpciary2.setStroke("#32cd32",2);
        TapTbpciary3.setStroke("#32cd32",2);


        Tbnkratkazhoranadol1.setStroke("#000000",2);
        Tbnkratkazhoranadol2.setStroke("#000000",2);
        Tbnkratkazhoranadol3.setStroke("#000000",2);

        ynulahore.showText();
        yjednahore.hideText();
        ynuladole.showText();
        yjednadole.hideText();

        klapkatap1.showObj();
        klapkatap2.hideObj();
        klapkatbp1.hideObj();
        klapkatbp2.showObj();
        klapkatbn1.showObj();
        klapkatbn2.hideObj();
        klapkatan1.hideObj();
        klapkatan2.showObj();

        klapkatbn1.setStroke("#FF0000",2);

        zbytokkuTan.showObj();
        zbytokkuTbn.hideObj();
        zbytokkuTap.hideObj();
        zbytokkuTbp.showObj();
        zbytokkuTbp.setStroke("#32cd32",2);



        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0);
        piatyriadok.changeFill(0.4);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+445);

        /*





         */
    }
    if (x == 'Ajedna' && y == 'Bnula') {
        ramcekTap1.fillObj("#FF0000");
        ramcekTbp1.fillObj("#32cd32");
        ramcekTan1.fillObj("#32cd32");
        ramcekTbn1.fillObj("#FF0000");

        ramcekTap2.fillObj("#FF0000");
        ramcekTbp2.fillObj("#32cd32");
        ramcekTan2.fillObj("#32cd32");
        ramcekTbn2.fillObj("#FF0000");


        acko1.setStroke("#32cd32",2);
        acko2.setStroke("#32cd32",2);
        acko3.setStroke("#32cd32",2);
        acko4.setStroke("#32cd32",2);
        acko5.setStroke("#32cd32",2);
        acko6.setStroke("#32cd32",0.5);
        acko7.setStroke("#32cd32",0.5);
        acko7.fillObj("#32cd32");
        acko8.setStroke("#32cd32",2);
        acko9.setStroke("#32cd32",2);
        acko10.setStroke("#32cd32",2);
        acko11.setStroke("#32cd32",0.5);
        acko12.setStroke("#32cd32",0.5);
        acko12.fillObj("#32cd32");

        bcko1.setStroke("#FF0000",2);
        bcko2.setStroke("#FF0000",2);
        bcko3.setStroke("#FF0000",2);
        bcko4.setStroke("#FF0000",2);
        bcko5.setStroke("#FF0000",2);
        bcko6.setStroke("#FF0000",0.5);
        bcko7.setStroke("#FF0000",0.5);
        bcko7.fillObj("#FF0000");
        bcko8.setStroke("#FF0000",2);
        bcko9.setStroke("#FF0000",2);
        bcko10.setStroke("#FF0000",2);
        bcko11.setStroke("#FF0000",0.5);
        bcko12.setStroke("#FF0000",0.5);
        bcko12.fillObj("#FF0000");

        Tankratkazhoranadol1.setStroke("#FF0000",2);
        Tankratkazhoranadol2.setStroke("#FF0000",2);
        Tankratkazhoranadol3.setStroke("#FF0000",2);


        Tapkratkazhoranadol1.setStroke("#000000",2);
        Tapkratkazhoranadol2.setStroke("#000000",2);
        Tapkratkazhoranadol3.setStroke("#000000",2);

        Y1.setStroke("#FF0000",2);
        Y2.setStroke("#FF0000",2);
        Y3.setStroke("#FF0000",2);
        Y4.setStroke("#FF0000",0.5);
        Y5.setStroke("#FF0000",0.5);
        Y5.fillObj("#FF0000");
        Y6.setStroke("#FF0000",2);
        Y7.setStroke("#FF0000",2);
        Y8.setStroke("#FF0000",2);
        Y9.setStroke("#FF0000",2);
        Y10.setStroke("#FF0000",2);
        Y11.setStroke("#FF0000",0.5);
        Y12.setStroke("#FF0000",0.5);
        Y13.setStroke("#FF0000",0.5);
        Y14.setStroke("#FF0000",0.5);
        Y15.setStroke("#FF0000",0.5);
        Y15.fillObj("#FF0000");

        TbpTbnzelenadocervenej1.setStroke("#FF0000",2);
        TbpTbnzelenadocervenej2.setStroke("#FF0000",2);
        TbpTbnzelenadocervenej3.setStroke("#FF0000",2);

        Tbpkratkazhoranadol1.setStroke("#FF0000",2);
        Tbpkratkazhoranadol2.setStroke("#FF0000",2);
        Tbpkratkazhoranadol3.setStroke("#FF0000",2);

        TapTbpciary1.setStroke("#FF0000",2);
        TapTbpciary2.setStroke("#FF0000",2);
        TapTbpciary3.setStroke("#FF0000",2);

        Tbnkratkazhoranadol1.setStroke("#FF0000",2);
        Tbnkratkazhoranadol2.setStroke("#FF0000",2);
        Tbnkratkazhoranadol3.setStroke("#FF0000",2);

        ynulahore.showText();
        yjednahore.hideText();
        ynuladole.showText();
        yjednadole.hideText();

        klapkatap1.hideObj();
        klapkatap2.showObj();
        klapkatbp1.showObj();
        klapkatbp2.hideObj();
        klapkatbn1.hideObj();
        klapkatbn2.showObj();
        klapkatan1.showObj();
        klapkatan2.hideObj();

        klapkatap2.setStroke("#32cd32",2);
        klapkatbp1.setStroke("#FF0000",2);
        klapkatan1.setStroke("#32cd32",2);
        zbytokkuTap.setStroke("#32cd32",2);

        zbytokkuTap.showObj();
        zbytokkuTan.hideObj();
        zbytokkuTbn.showObj();
        zbytokkuTbp.hideObj();


        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0.4);

        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+405);

        /*




         */

    }
    if (x == 'Ajedna' && y == 'Bjedna') {
        ramcekTap1.fillObj("#FF0000");
        ramcekTbp1.fillObj("#FF0000");
        ramcekTan1.fillObj("#32cd32");
        ramcekTbn1.fillObj("#32cd32");

        ramcekTap2.fillObj("#FF0000");
        ramcekTbp2.fillObj("#FF0000");
        ramcekTan2.fillObj("#32cd32");
        ramcekTbn2.fillObj("#32cd32");

        acko1.setStroke("#32cd32",2);
        acko2.setStroke("#32cd32",2);
        acko3.setStroke("#32cd32",2);
        acko4.setStroke("#32cd32",2);
        acko5.setStroke("#32cd32",2);
        acko6.setStroke("#32cd32",0.5);
        acko7.setStroke("#32cd32",0.5);
        acko7.fillObj("#32cd32");
        acko8.setStroke("#32cd32",2);
        acko9.setStroke("#32cd32",2);
        acko10.setStroke("#32cd32",2);
        acko11.setStroke("#32cd32",0.5);
        acko12.setStroke("#32cd32",0.5);
        acko12.fillObj("#32cd32");

        bcko1.setStroke("#32cd32",2);
        bcko2.setStroke("#32cd32",2);
        bcko3.setStroke("#32cd32",2);
        bcko4.setStroke("#32cd32",2);
        bcko5.setStroke("#32cd32",2);
        bcko6.setStroke("#32cd32",0.5);
        bcko7.setStroke("#32cd32",0.5);
        bcko7.fillObj("#32cd32");
        bcko8.setStroke("#32cd32",2);
        bcko9.setStroke("#32cd32",2);
        bcko10.setStroke("#32cd32",2);
        bcko11.setStroke("#32cd32",0.5);
        bcko12.setStroke("#32cd32",0.5);
        bcko12.fillObj("#32cd32");

        TapTbpciary1.setStroke("#ffa500",2);
        TapTbpciary2.setStroke("#ffa500",2);
        TapTbpciary3.setStroke("#ffa500",2);

        Tbpkratkazhoranadol1.setStroke("#000000",2);
        Tbpkratkazhoranadol2.setStroke("#000000",2);
        Tbpkratkazhoranadol3.setStroke("#000000",2);

        Tbnkratkazhoranadol1.setStroke("#FF0000",2);
        Tbnkratkazhoranadol2.setStroke("#FF0000",2);
        Tbnkratkazhoranadol3.setStroke("#FF0000",2);

        Tapkratkazhoranadol1.setStroke("#000000",2);
        Tapkratkazhoranadol2.setStroke("#000000",2);
        Tapkratkazhoranadol3.setStroke("#000000",2);

        ynulahore.showText();
       yjednahore.hideText();
       ynuladole.showText();
       yjednadole.hideText();

        klapkatap1.hideObj();
        klapkatap2.showObj();
        klapkatbp1.hideObj();
        klapkatbp2.showObj();
        klapkatbn1.showObj();
        klapkatbn2.hideObj();
        klapkatan1.showObj();
        klapkatan2.hideObj();

        klapkatap2.setStroke("#FF0000",2);
        klapkatbn1.setStroke("#FF0000",2);
        klapkatan1.setStroke("#FF0000",2);
        zbytokkuTap.setStroke("#32cd32",2);
        zbytokkuTbp.setStroke("#32cd32",2);

        zbytokkuTan.hideObj();
        zbytokkuTbn.hideObj();
        zbytokkuTap.showObj();
        zbytokkuTbp.showObj();


        druhyriadok.changeFill(0.4);
        tretiriadok.changeFill(0.4);
        stvrtyriadok.changeFill(0.4);
        piatyriadok.changeFill(0);
        sipka_invertor.move(canvas1OffsetX+775,canvas1OffsetY+485);



    }
}
