function introduction(){
    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;
    /*canvas1OffsetX = padding + canvasWidth * magicCanvasXOffset-300;
    canvas1OffsetY = padding + canvasHeight * magicCanvasYOffset;*/
    canvas1OffsetX = (divWidth -1600)/2;
    canvas1OffsetY = (divHeight-500)/2;





////////////////////////////////////////////////////////////////CMOS pristroj//////////////////////////////////////////////////////////



    roztok = new Rectangle(370 + canvas1OffsetX, 450 + canvas1OffsetY, 830, 222, "#7f7fff");
    roztok.setStroke("#000000", 2);




    dolnacast_roztoku = new Rectangle(370 + canvas1OffsetX, 660 + canvas1OffsetY, 830, 15, "#000000");
    dolnacast_roztoku.setStroke("#000000", 2);

    vrchnacast_roztoku = new Rectangle(370 + canvas1OffsetX, 450 + canvas1OffsetY, 830, 10, "#bfbfbf");
    vrchnacast_roztoku.setStroke("#bfbfbf", 2);

    ciernacastnavrchuroztoku1 = new Rectangle(570 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#000000");
    ciernacastnavrchuroztoku1.setStroke("#000000", 2);

    ciernacastnavrchuroztoku1_pomocna= new Rectangle(570 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#ffff00");
    ciernacastnavrchuroztoku1_pomocna.setStroke("#ffff00",2);
    ciernacastnavrchuroztoku1_pomocna.setOpacity(0);



    ciernacastnavrchuroztoku2 = new Rectangle(890 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#000000");
    ciernacastnavrchuroztoku2.setStroke("#000000", 2);

    ciernacastnavrchuroztoku2_pomocna= new Rectangle(890 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#ffff00");
    ciernacastnavrchuroztoku2_pomocna.setStroke("#ffff00",2);
    ciernacastnavrchuroztoku2_pomocna.setOpacity(0);



    prvasuradnicax = 390 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 390 + canvas1OffsetX;
    druhasuradnicay = 437+canvas1OffsetY;

    tretiasuradnicax = 450 + canvas1OffsetX;
    tretiasuradnicay = 437 + canvas1OffsetY;

    stvrtasuradnicax = 450 + canvas1OffsetX;
    stvrtasuradnicay = 450 + canvas1OffsetY;

    piatasuradnicax = 440 + canvas1OffsetX;
    piatasuradnicay = 450 + canvas1OffsetY;

    siestasuradnicax = 440 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;
    castroztoku1 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku1.fill("#000000"); //3. cast roztoku zlava



    prvasuradnicax = 500 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 500 + canvas1OffsetX;
    druhasuradnicay = 450+canvas1OffsetY;

    tretiasuradnicax = 490 + canvas1OffsetX;
    tretiasuradnicay = 450 + canvas1OffsetY;

    stvrtasuradnicax = 490 + canvas1OffsetX;
    stvrtasuradnicay = 437 + canvas1OffsetY;

    piatasuradnicax = 550 + canvas1OffsetX;
    piatasuradnicay = 437 + canvas1OffsetY;

    siestasuradnicax = 550 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;

    castroztoku2 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku2.fill("#000000"); //2 cast roztoku zlava




    prvasuradnicax = 700 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 700 + canvas1OffsetX;
    druhasuradnicay = 437+canvas1OffsetY;

    tretiasuradnicax = 760 + canvas1OffsetX;
    tretiasuradnicay = 437 + canvas1OffsetY;

    stvrtasuradnicax = 760 + canvas1OffsetX;
    stvrtasuradnicay = 450 + canvas1OffsetY;

    piatasuradnicax = 750 + canvas1OffsetX;
    piatasuradnicay = 450 + canvas1OffsetY;

    siestasuradnicax = 750 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;

    castroztoku3 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku3.fill("#000000"); //2. cast roztoku zlava



    prvasuradnicax = 820 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 820 + canvas1OffsetX;
    druhasuradnicay = 450+canvas1OffsetY;

    tretiasuradnicax = 810 + canvas1OffsetX;
    tretiasuradnicay = 450 + canvas1OffsetY;

    stvrtasuradnicax = 810 + canvas1OffsetX;
    stvrtasuradnicay = 437 + canvas1OffsetY;

    piatasuradnicax = 870 + canvas1OffsetX;
    piatasuradnicay = 437 + canvas1OffsetY;

    siestasuradnicax = 870 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;

    castroztoku4 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku4.fill("#000000"); //3. cast roztoku zlava

    prvasuradnicax = 1020 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 1020 + canvas1OffsetX;
    druhasuradnicay = 437+canvas1OffsetY;

    tretiasuradnicax = 1080 + canvas1OffsetX;
    tretiasuradnicay = 437 + canvas1OffsetY;

    stvrtasuradnicax = 1080 + canvas1OffsetX;
    stvrtasuradnicay = 450 + canvas1OffsetY;

    piatasuradnicax = 1070 + canvas1OffsetX;
    piatasuradnicay = 450 + canvas1OffsetY;

    siestasuradnicax = 1070 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;

    castroztoku5 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku5.fill("#000000"); //4. cast roztoku zlava


    prvasuradnicax = 1130 + canvas1OffsetX;
    prvasuradnicay = 461 + canvas1OffsetY;

    druhasuradnicax = 1130 + canvas1OffsetX;
    druhasuradnicay = 450+canvas1OffsetY;

    tretiasuradnicax = 1120 + canvas1OffsetX;
    tretiasuradnicay = 450 + canvas1OffsetY;

    stvrtasuradnicax = 1120 + canvas1OffsetX;
    stvrtasuradnicay = 437 + canvas1OffsetY;

    piatasuradnicax = 1180 + canvas1OffsetX;
    piatasuradnicay = 437 + canvas1OffsetY;

    siestasuradnicax = 1180 + canvas1OffsetX;
    siestasuradnicay = 461 + canvas1OffsetY;

    castroztoku6 = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' '+stvrtasuradnicax+','+stvrtasuradnicay+' '+piatasuradnicax+','+piatasuradnicay+' '+siestasuradnicax+','+siestasuradnicay);
    castroztoku6.fill("#000000"); //5 cast roztoku zlava



    //////////////////////////////////////////////////////////////Bulk///////////////////////////////////////////////////


    uzemnenie_spodok = new Line(370 + canvas1OffsetX, 420 + canvas1OffsetY, 400 + canvas1OffsetX, 420 + canvas1OffsetY);
    uzemnenie_spodok.setStroke("#000000", 4);


    uzemnenie_spodok_nahor = new Line(385 + canvas1OffsetX, 420 + canvas1OffsetY, 385 + canvas1OffsetX, 400 + canvas1OffsetY);
    uzemnenie_spodok_nahor.setStroke("#000000", 2);

    ciara_od_bp_nahor = new Line(420 + canvas1OffsetX, 440 + canvas1OffsetY, 420 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_bp_nahor.setStroke("#000000", 2);

    ciara_od_bp_nahor_dolava = new Line(385 + canvas1OffsetX, 400 + canvas1OffsetY, 420 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_bp_nahor_dolava.setStroke("#000000", 2);

    new Circle(6, 420 + canvas1OffsetX, 400 + canvas1OffsetY, 0.5, "#000000", "#000000"); //  kruh bp sn


    ciara_od_bn_nahor = new Line(1150 + canvas1OffsetX, 440 + canvas1OffsetY, 1150 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_bn_nahor.setStroke("#000000", 2);

    ciara_od_bn_nahor_dolava = new Line(1150 + canvas1OffsetX, 400 + canvas1OffsetY, 1050 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_bn_nahor_dolava.setStroke("#000000", 2);




    ///////////////////////////////////////////////////////Nad roztokom//////////////////////////////////////////////////////////////
    ciara_od_gn= new Line(620 + canvas1OffsetX, 350 + canvas1OffsetY, 620 + canvas1OffsetX, 437 + canvas1OffsetY);
    ciara_od_gn.setStroke("#000000", 2);



    ciara_gn_gp= new Line(620 + canvas1OffsetX, 350 + canvas1OffsetY, 945 + canvas1OffsetX, 350 + canvas1OffsetY);
    ciara_gn_gp.setStroke("#000000", 2);
    ciara_gn_gp_nahor= new Line(620 + canvas1OffsetX, 350 + canvas1OffsetY, 620 + canvas1OffsetX, 320 + canvas1OffsetY);
    ciara_gn_gp_nahor.setStroke("#000000", 2);


    ciara_od_gp= new Line(945 + canvas1OffsetX, 350 + canvas1OffsetY, 945 + canvas1OffsetX, 437 + canvas1OffsetY);
    ciara_od_gp.setStroke("#000000", 2);

    new Circle(6, 620 + canvas1OffsetX, 350 + canvas1OffsetY, 0.5, "#000000", "#000000"); //  kruh gn gp spodok
    new Circle(8, 620 + canvas1OffsetX, 320 + canvas1OffsetY, 1, "#ffffff", "#000000"); //  kruh gn gp vrch



    //////////////////////////////////////
    ciara_od_dn= new Line(730 + canvas1OffsetX, 400 + canvas1OffsetY, 730 + canvas1OffsetX, 440 + canvas1OffsetY);
    ciara_od_dn.setStroke("#000000", 2);
    ciara_od_dp= new Line(840 + canvas1OffsetX, 400 + canvas1OffsetY, 840 + canvas1OffsetX, 440 + canvas1OffsetY);
    ciara_od_dp.setStroke("#000000", 2);
    ciara_dn_dp= new Line(730 + canvas1OffsetX, 400 + canvas1OffsetY, 840 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_dn_dp.setStroke("#000000", 2);
    ciara_dn_dp_nahor= new Line(780 + canvas1OffsetX, 400 + canvas1OffsetY, 780 + canvas1OffsetX, 370 + canvas1OffsetY);
    ciara_dn_dp_nahor.setStroke("#000000", 2);

    new Circle(6, 780 + canvas1OffsetX, 400 + canvas1OffsetY, 0.5, "#000000", "#000000"); //  kruh dn dp spodok
    new Circle(8, 780 + canvas1OffsetX, 370 + canvas1OffsetY, 1, "#ffffff", "#000000"); //  kruh dn dp vrch

//////////////////////////////////////////////////////////////////////////
    ciara_od_sp= new Line(1050+ canvas1OffsetX, 370 + canvas1OffsetY, 1050 + canvas1OffsetX, 440 + canvas1OffsetY);
    ciara_od_sp.setStroke("#000000", 2);

    new Circle(6, 1050 + canvas1OffsetX, 400 + canvas1OffsetY, 0.5, "#000000", "#000000"); //  kruh sp bn spodok
    new Circle(8, 1050 + canvas1OffsetX, 370 + canvas1OffsetY, 1, "#ffffff", "#000000"); //  kruh sp bn vrch


    ////////////////////////////////////////////////////////////////////////

    ciara_od_sn_nahor = new Line(520 + canvas1OffsetX, 440 + canvas1OffsetY, 520 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_sn_nahor.setStroke("#000000", 2);

    ciara_od_sn_nahor_dolava = new Line(520 + canvas1OffsetX, 400 + canvas1OffsetY, 420 + canvas1OffsetX, 400 + canvas1OffsetY);
    ciara_od_sn_nahor_dolava.setStroke("#000000", 2);





    /////////////////////////////////////////////////////////////////////
    new CustomText("S", 530 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("N", 543 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("G", 625 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("N", 638 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("D", 700 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("N", 713 + canvas1OffsetX, 425 + canvas1OffsetY, 12);


    new CustomText("výstup", 750 + canvas1OffsetX, 420 + canvas1OffsetY, 15);

    new CustomText("U", 800 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("o", 813 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("D", 850 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("P", 863 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("G", 950 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("P", 965 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("S", 1060 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("P", 1073 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("B", 425 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("P", 438 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

    new CustomText("B", 1155 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
    new CustomText("N", 1168 + canvas1OffsetX, 425 + canvas1OffsetY, 12);



    //////////////////////////////////////V roztoku////////////////////////////////////////////
    ////lava strana////

    n_full=draw.path("m356.29344,315.87044l48.25506,0l0,0c26.65054,0 48.25506,89.20172 48.25506,199.23765c0,110.0359 -21.60452,199.23762 -48.25506,199.23762l-48.25506,0l0,-398.47527z");
    n_full.fill("#ffc0cb");
    n_full.stroke("#000000");
    suradnica_x=canvas1OffsetX+773;
    suradnica_y=canvas1OffsetY+460;
    n_full.move(suradnica_x,suradnica_y);
    n_full.rotate(90,suradnica_x,suradnica_y);


    n_zeleny_roztok1=draw.path("m944.34466,452.2153l28.84829,0l0,0c15.93247,0 28.84828,20.22527 28.84828,45.17439c0,24.94913 -12.91581,45.17439 -28.84828,45.17439l-28.84829,0l0,-90.34879z");
    n_zeleny_roztok1.fill("#b2d8b2");
    n_zeleny_roztok1.stroke("#b2d8b2");
    suradnica_x=canvas1OffsetX+568;
    suradnica_y=canvas1OffsetY+460;
    n_zeleny_roztok1.move(suradnica_x,suradnica_y);
    n_zeleny_roztok1.rotate(90,suradnica_x,suradnica_y);

    n_zeleny_roztok2=draw.path("m944.34466,452.2153l28.84829,0l0,0c15.93247,0 28.84828,20.22527 28.84828,45.17439c0,24.94913 -12.91581,45.17439 -28.84828,45.17439l-28.84829,0l0,-90.34879z");
    n_zeleny_roztok2.fill("#b2d8b2");
    n_zeleny_roztok2.stroke("#b2d8b2");
    suradnica_x=canvas1OffsetX+770;
    suradnica_y=canvas1OffsetY+460;
    n_zeleny_roztok2.move(suradnica_x,suradnica_y);
    n_zeleny_roztok2.rotate(90,suradnica_x,suradnica_y);

    n_medzi=new Rectangle(568+ canvas1OffsetX, 459.5 + canvas1OffsetY, 120, 35, "#b2d8b2");





    n_roztok1=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    n_roztok1.fill("#0000ff");
    n_roztok1.stroke("#000000");
    suradnica_x=canvas1OffsetX+560;
    suradnica_y=canvas1OffsetY+460;
    n_roztok1.move(suradnica_x,suradnica_y);
    n_roztok1.rotate(90,suradnica_x,suradnica_y);
    new CustomText("n", 510 + canvas1OffsetX, 460 + canvas1OffsetY, 30);
    new CustomText("+", 525 + canvas1OffsetX, 455 + canvas1OffsetY, 25);


    n_roztok2=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    n_roztok2.fill("#0000ff");
    n_roztok2.stroke("#000000");
    suradnica_x=canvas1OffsetX+763;
    suradnica_y=canvas1OffsetY+460;
    n_roztok2.move(suradnica_x,suradnica_y);
    n_roztok2.rotate(90,suradnica_x,suradnica_y);


    n_roztok3=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    n_roztok3.fill("#0000ff");
    n_roztok3.stroke("#000000");
    suradnica_x=canvas1OffsetX+1190;
    suradnica_y=canvas1OffsetY+460;
    n_roztok3.move(suradnica_x,suradnica_y);
    n_roztok3.rotate(90,suradnica_x,suradnica_y);  //buld








    ////prava strana////



    p_zeleny_roztok1=draw.path("m944.34466,452.2153l28.84829,0l0,0c15.93247,0 28.84828,20.22527 28.84828,45.17439c0,24.94913 -12.91581,45.17439 -28.84828,45.17439l-28.84829,0l0,-90.34879z");
    p_zeleny_roztok1.fill("#b2d8b2");
    p_zeleny_roztok1.stroke("#b2d8b2");
    suradnica_x=canvas1OffsetX+888;
    suradnica_y=canvas1OffsetY+460;
    p_zeleny_roztok1.move(suradnica_x,suradnica_y);
    p_zeleny_roztok1.rotate(90,suradnica_x,suradnica_y);
    p_zeleny_roztok1.opacity(0);

    p_zeleny_roztok2=draw.path("m944.34466,452.2153l28.84829,0l0,0c15.93247,0 28.84828,20.22527 28.84828,45.17439c0,24.94913 -12.91581,45.17439 -28.84828,45.17439l-28.84829,0l0,-90.34879z");
    p_zeleny_roztok2.fill("#b2d8b2");
    p_zeleny_roztok2.stroke("#b2d8b2");
    suradnica_x=canvas1OffsetX+1092;
    suradnica_y=canvas1OffsetY+460;
    p_zeleny_roztok2.move(suradnica_x,suradnica_y);
    p_zeleny_roztok2.rotate(90,suradnica_x,suradnica_y);
    p_zeleny_roztok2.opacity(0);

    p_medzi=new Rectangle(870+ canvas1OffsetX, 459.5 + canvas1OffsetY, 140, 35, "#b2d8b2");
    p_medzi.setOpacity(0);



    p_roztok1=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    p_roztok1.fill("#ff6666");
    p_roztok1.stroke("#000000");
    suradnica_x=canvas1OffsetX+880;
    suradnica_y=canvas1OffsetY+460;
    p_roztok1.move(suradnica_x,suradnica_y);
    p_roztok1.rotate(90,suradnica_x,suradnica_y);


    p_roztok2=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    p_roztok2.fill("#ff6666");
    p_roztok2.stroke("#000000");
    suradnica_x=canvas1OffsetX+1085;
    suradnica_y=canvas1OffsetY+460;
    p_roztok2.move(suradnica_x,suradnica_y);
    p_roztok2.rotate(90,suradnica_x,suradnica_y);


    p_roztok3=draw.path("m632.15853,454.40277l25.41081,0l0,0c14.034,0 25.4108,16.86742 25.4108,37.67443c0,20.80701 -11.3768,37.67443 -25.4108,37.67443l-25.41081,0l0,-75.34886z");
    p_roztok3.fill("#ff6666");
    p_roztok3.stroke("#000000");
    suradnica_x=canvas1OffsetX+455;
    suradnica_y=canvas1OffsetY+460;
    p_roztok3.move(suradnica_x,suradnica_y);
    p_roztok3.rotate(90,suradnica_x,suradnica_y);  //buld





    new CustomText("p", 830 + canvas1OffsetX, 460 + canvas1OffsetY, 30);
    new CustomText("+", 845 + canvas1OffsetX, 455 + canvas1OffsetY, 25);

    new CustomText("Si", 1150 + canvas1OffsetX, 610 + canvas1OffsetY, 30);



  new Circle(15, 570 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    new Circle(15, 588 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    new Circle(15, 606 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
   new Circle(15, 624+ canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
     new Circle(15, 642 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
     new Circle(15, 660 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
     new Circle(15, 678 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke

    gulicka20 = new Circle(15, 520 + canvas1OffsetX, 535 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka21 = new Circle(15, 625 + canvas1OffsetX, 530 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka22 = new Circle(15, 678 + canvas1OffsetX, 525 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke




    new Circle(15, 862 + canvas1OffsetX, 554 + canvas1OffsetY, 0.5, "#ff1919", "#ff1ff1919919"); //gulicka v prevodovej tabulke
    new Circle(15, 890 + canvas1OffsetX, 524 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke
    new Circle(15, 919 + canvas1OffsetX, 554 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke
    new Circle(15, 980+ canvas1OffsetX, 560 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke
    new Circle(15, 945 + canvas1OffsetX, 529 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke
    new Circle(15, 991 + canvas1OffsetX, 515 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke
    new Circle(15, 1029 + canvas1OffsetX, 542 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //gulicka v prevodovej tabulke


    gulicka23 = new Circle(15, 870 + canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //5. poradie
    gulicka24 =new Circle(15, 945+ canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //6. poradie
    gulicka25 = new Circle(15, 1030 + canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //7. poradie









    new CustomText("p", 450 + canvas1OffsetX, 500 + canvas1OffsetY, 30);
    new CustomText("n", 400 + canvas1OffsetX, 620 + canvas1OffsetY, 30);


    c=new CustomText("C", 615 + canvas1OffsetX, 40 + canvas1OffsetY, 50);
    c.toBold();
    c.setOpacity(0);
    complementary_word= new CustomText("omplementary", 650 + canvas1OffsetX, 50 + canvas1OffsetY, 40);
    complementary_word.setOpacity(0);

    m=new CustomText("M", 615 + canvas1OffsetX, 90 + canvas1OffsetY, 50);
    m.toBold();
    m.setOpacity(0);
    metal_word= new CustomText("etal", 655 + canvas1OffsetX, 103 + canvas1OffsetY, 40);
    metal_word.setOpacity(0);

    o=new CustomText("O", 615 + canvas1OffsetX, 140 + canvas1OffsetY, 50);
    o.toBold();
    o.setOpacity(0);
    oxide_word= new CustomText("xide", 652 + canvas1OffsetX, 153 + canvas1OffsetY, 40);
    oxide_word.setOpacity(0);

    s=new CustomText("S", 615 + canvas1OffsetX, 190 + canvas1OffsetY, 50);
    s.toBold();
    s.setOpacity(0);
    semiconductor_word= new CustomText("emiconductor", 648 + canvas1OffsetX, 203 + canvas1OffsetY, 40);
    semiconductor_word.setOpacity(0);


    new CustomText("A = 'log 1'", 580 + canvas1OffsetX, 285 + canvas1OffsetY, 20);
    new CustomText("Y = 'log 0'", 680 + canvas1OffsetX, 360 + canvas1OffsetY, 20);
    new CustomText("U", 1060 + canvas1OffsetX, 360 + canvas1OffsetY, 20).toItalic();
    new CustomText("DD", 1075 + canvas1OffsetX, 375 + canvas1OffsetY, 13);





    nmos_ramcek=new Rectangle(530 + canvas1OffsetX, 375 + canvas1OffsetY, 80, 35, "#ffffff");
    nmos_ramcek.setStroke("#000000",2);

    nmos_ramcek_pomoc=new Rectangle(530 + canvas1OffsetX, 375 + canvas1OffsetY, 80, 35, "#ffffff");
    nmos_ramcek_pomoc.setStroke("#ffff00",2);
    nmos_ramcek_pomoc.setOpacity(0);

    nmos_text=new CustomText("NMOS", 540 + canvas1OffsetX, 380 + canvas1OffsetY, 20);





    pmos_ramcek=new Rectangle(960 + canvas1OffsetX, 375 + canvas1OffsetY, 80, 35, "#ffffff");
    pmos_ramcek.setStroke("#000000",2);

    pmos_ramcek_pomoc=new Rectangle(960 + canvas1OffsetX, 375 + canvas1OffsetY, 80, 35, "#ffffff");
    pmos_ramcek_pomoc.setStroke("#ffff00",2);
    pmos_ramcek_pomoc.setOpacity(0);

    pmos_text=new CustomText("PMOS", 970 + canvas1OffsetX, 380 + canvas1OffsetY, 20);






    nmos_pomocna = new Rectangle(370 + canvas1OffsetX, 280 + canvas1OffsetY, 415, 290, "#ffffff");
    nmos_pomocna.changeFill(0);
    nmos_pomocna.setStroke("#ffff00",5);
    nmos_pomocna.setOpacity(0);

    pmos_pomocna = new Rectangle(785 + canvas1OffsetX, 280 + canvas1OffsetY, 415, 290, "#ffffff");
    pmos_pomocna.changeFill(0);
    pmos_pomocna.setStroke("#ffff00",5);
    pmos_pomocna.setOpacity(0);



    oxid_lavy = new Rectangle(550 + canvas1OffsetX, 450 + canvas1OffsetY, 150, 10, "#ffff00");
    oxid_lavy.setOpacity(0);
    oxid_pravy = new Rectangle(870 + canvas1OffsetX, 450 + canvas1OffsetY, 150, 10, "#ffff00");
    oxid_pravy.setOpacity(0);


    roztok_pomocna = new Rectangle(370 + canvas1OffsetX, 460 + canvas1OffsetY, 830, 212, "#ffff00");
    roztok_pomocna.setOpacity(0);

    /////////////////////gulicky  pri Si-P+//////////////////////

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

    sipka_lava_metal = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_lava_metal.fill("#ffff00"); //sipka
    sipka_lava_metal.stroke("#000000"); //sipka
    sipka_lava_metal.move(canvas1OffsetX+650,canvas1OffsetY+430);
    sipka_lava_metal.rotate(-100,canvas1OffsetX+650,canvas1OffsetY+430);
    sipka_lava_metal.opacity(0);

    sipka_prava_metal = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_prava_metal.fill("#ffff00"); //sipka
    sipka_prava_metal.stroke("#000000"); //sipka
    sipka_prava_metal.move(canvas1OffsetX+890,canvas1OffsetY+430);
    sipka_prava_metal.rotate(-100,canvas1OffsetX+890,canvas1OffsetY+430);
    sipka_prava_metal.opacity(0);

    sipka_lava_oxide = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_lava_oxide.fill("#ffff00"); //sipka
    sipka_lava_oxide.stroke("#000000"); //sipka
    sipka_lava_oxide.move(canvas1OffsetX+650,canvas1OffsetY+450);
    sipka_lava_oxide.rotate(-100,canvas1OffsetX+650,canvas1OffsetY+450);
    sipka_lava_oxide.opacity(0);

    sipka_prava_oxide = draw.polygon(prvasuradnicax + ',' + prvasuradnicay + ' ' + druhasuradnicax + ',' + druhasuradnicay + ' ' + tretiasuradnicax + ',' + tretiasuradnicay+ ' ' + stvrtasuradnicax + ',' + stvrtasuradnicay+ ' ' + piatasuradnicax + ',' + piatasuradnicay+ ' ' + siestasuradnicax + ',' + siestasuradnicay+ ' ' + siedmasuradnicax + ',' + siedmasuradnicay);
    sipka_prava_oxide.fill("#ffff00"); //sipka
    sipka_prava_oxide.stroke("#000000"); //sipka
    sipka_prava_oxide.move(canvas1OffsetX+890,canvas1OffsetY+450);
    sipka_prava_oxide.rotate(-100,canvas1OffsetX+890,canvas1OffsetY+450);
    sipka_prava_oxide.opacity(0);





    /*
     suradnica_x=canvas1OffsetX+773;
        suradnica_y=canvas1OffsetY+460;
        n_full.move(suradnica_x,suradnica_y);
        n_full.rotate(90,suradnica_x,suradnica_y);
     */

    chvila();

    //complementary();

}
function chvila() {

    var pos = 0;
    var id = setInterval(frame, 20);

    var pocitadlo = 0;


    function frame() {
        pos += 0.08;
        if (pos > 2) {
            complementary();
            clearInterval(id);

        }
    }
}
function complementary(){

    var pos=0;
    var id = setInterval(frame, 20);

    var pocitadlo=1;
    function frame() {
        pos+=0.01;
        if (pos > 2) {
            metal();
            clearInterval(id);
        } else if(pos>1.5 && pos<2) {
            pocitadlo-=0.025;
            nmos_ramcek_pomoc.setOpacity(pocitadlo);
            pmos_ramcek_pomoc.setOpacity(pocitadlo);


            nmos_pomocna.setOpacity(pocitadlo);
            pmos_pomocna.setOpacity(pocitadlo);

            complementary_word.setOpacity(pos);
            c.setOpacity(pos);

        }
        else if(pos<1.5) {
            nmos_ramcek_pomoc.setOpacity(pos);
            pmos_ramcek_pomoc.setOpacity(pos);


            nmos_pomocna.setOpacity(pos);
            pmos_pomocna.setOpacity(pos);

            complementary_word.setOpacity(pos);
            c.setOpacity(pos);
        }

    }
}
function metal(){

    var pos=0;
    var id = setInterval(frame, 20);

    var pocitadlo=1;

    function frame() {
        pos+=0.01;
        if (pos >2) {
            oxide();
            clearInterval(id);

        } else if(pos>1.5 && pos<2) {
            pocitadlo-=0.025;
            ciernacastnavrchuroztoku1_pomocna.setOpacity(pocitadlo);
            ciernacastnavrchuroztoku2_pomocna.setOpacity(pocitadlo);
            sipka_lava_metal.opacity(pocitadlo);
            sipka_prava_metal.opacity(pocitadlo);
            metal_word.setOpacity(pos);
            m.setOpacity(pos);

        }
        else if(pos<1.5) {
            sipka_lava_metal.opacity(pos);
            sipka_prava_metal.opacity(pos);
            ciernacastnavrchuroztoku1_pomocna.setOpacity(pos);
            ciernacastnavrchuroztoku2_pomocna.setOpacity(pos);
            metal_word.setOpacity(pos);
            m.setOpacity(pos);

        }

    }

}
function oxide(){

    var pos=0;
    var id = setInterval(frame, 20);
    var pocitadlo=1;

    function frame() {
        pos+=0.01;
        if (pos >2) {
            semiconductor();
            clearInterval(id);

        } else if(pos>1.5 && pos<2) {
            pocitadlo-=0.025;
            sipka_prava_oxide.opacity(pocitadlo);
            sipka_lava_oxide.opacity(pocitadlo);
            oxid_lavy.setOpacity(pocitadlo);
            oxid_pravy.setOpacity(pocitadlo);
        }
        else if(pos<1.5) {
            sipka_lava_oxide.opacity(pos);
            sipka_prava_oxide.opacity(pos);

            oxide_word.setOpacity(pos);
            oxid_lavy.setOpacity(pos);
            oxid_pravy.setOpacity(pos);
            o.setOpacity(pos);

        }

    }

}
function semiconductor(){

    var pos=0;
    var id = setInterval(frame, 20);

    var pocitadlo=1;
    function frame() {
        pos+=0.01;

        if (pos >2) {

            clearInterval(id);

        } else if( pos > 1.5 && pos<2) {
            pocitadlo-=0.025;
            roztok_pomocna.setOpacity(pocitadlo);
            semiconductor_word.setOpacity(pos);
            s.setOpacity(pos);

        }
        else if(pos<1.5 ) {
            roztok+=0.025;
            roztok_pomocna.setOpacity(pos);
            semiconductor_word.setOpacity(pos);
            s.setOpacity(pos);

        }

    }
}


