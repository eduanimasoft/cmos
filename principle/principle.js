function principle(){
    const magicCanvasWidth = 0.8;
    const magicCanvasHeight = 2.0;
    // TODO rename these...
    const canvas1Width = canvasWidth * magicCanvasWidth;
    const canvas1Height = canvasHeight * magicCanvasHeight;


    const magicCanvasXOffset = 0.2;
    const magicCanvasYOffset = 0.02;



    canvas1OffsetX = (divWidth -1570)/2;
    canvas1OffsetY = (divHeight-500)/2;




    //////////////////////////////////////////////////////PRVA SCHEMA///////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////CMOS pristroj//////////////////////////////////////////////////////////



    roztok = new Rectangle(370 + canvas1OffsetX, 450 + canvas1OffsetY, 830, 200, "#7f7fff");
    roztok.setStroke("#000000", 2);


    dolnacast_roztoku = new Rectangle(370 + canvas1OffsetX, 640 + canvas1OffsetY, 830, 15, "#000000");
    dolnacast_roztoku.setStroke("#000000", 2);

    vrchnacast_roztoku = new Rectangle(370 + canvas1OffsetX, 450 + canvas1OffsetY, 830, 10, "#bfbfbf");
    vrchnacast_roztoku.setStroke("#bfbfbf", 2);

    ciernacastnavrchuroztoku1 = new Rectangle(570 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#000000");
    ciernacastnavrchuroztoku1.setStroke("#000000", 2);

    ciernacastnavrchuroztoku2 = new Rectangle(890 + canvas1OffsetX, 438 + canvas1OffsetY, 110, 10, "#000000");
    ciernacastnavrchuroztoku2.setStroke("#000000", 2);

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
    //castroztoku1.size();



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






    tabulka_napajacie_napatie = new Rectangle(390 + canvas1OffsetX, 70 + canvas1OffsetY, 250, 70, "#bfbfbf");
    tabulka_napajacie_napatie.setStroke("#000000", 2);
    vnutro_napajacia_tabulka = new Rectangle(405 + canvas1OffsetX, 80 + canvas1OffsetY, 220, 30, "#e5e5ff");
    vnutro_napajacia_tabulka.setStroke("#000000", 2);
     new CustomText("U", 475 + canvas1OffsetX, 83 + canvas1OffsetY, 20).toItalic();
    new CustomText("DD", 488 + canvas1OffsetX, 93 + canvas1OffsetY, 15)

    new CustomText("= 5V", 515 + canvas1OffsetX, 83 + canvas1OffsetY, 20);
    napajacie_napatie_svk = new CustomText("Napájacie napätie", 430 + canvas1OffsetX, 115 + canvas1OffsetY, 20);
    napajacie_napatie_eng = new CustomText("Supply voltage", 450 + canvas1OffsetX, 115 + canvas1OffsetY, 20);
    napajacie_napatie_eng.hideText();


    /*


     */



    tabulka_vstupne_napatie = new Rectangle(390 + canvas1OffsetX, 150 + canvas1OffsetY, 250, 70, "#bfbfbf");
    tabulka_vstupne_napatie.setStroke("#000000", 2);
    vnutro_vstupna_tabulka = new Rectangle(405 + canvas1OffsetX, 160 + canvas1OffsetY, 220, 30, "#e5e5ff");
    vnutro_vstupna_tabulka.setStroke("#000000", 2);

    vstup_5V_prepnutie = new CustomText("5V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_4V_prepnutie = new CustomText("4V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_4V_prepnutie.setOpacity(0);
    vstup_3V_prepnutie = new CustomText("3V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_3V_prepnutie.setOpacity(0);
    vstup_2V_prepnutie = new CustomText("2V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_2V_prepnutie.setOpacity(0);
    vstup_1V_prepnutie = new CustomText("1V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_1V_prepnutie.setOpacity(0);
    vstup_0V_prepnutie = new CustomText("0V", 420 + canvas1OffsetX, 163 + canvas1OffsetY, 20);
    vstup_0V_prepnutie.setOpacity(0);


    vstup_log1 = new CustomText("log 1", 570 + canvas1OffsetX, 163 + canvas1OffsetY, 20);


    vstup_log0 = new CustomText("log 0", 570 + canvas1OffsetX, 163 + canvas1OffsetY, 20);

    vstup_log0.setOpacity(0);

    vstupne_napatie_svk = new CustomText("Vstupné napätie", 440 + canvas1OffsetX, 195 + canvas1OffsetY, 20);
    vstupne_napatie_eng = new CustomText("Input voltage", 460 + canvas1OffsetX, 195 + canvas1OffsetY, 20);
    vstupne_napatie_eng.hideText();


    tabulka_vystupne_napatie = new Rectangle(390 + canvas1OffsetX, 230 + canvas1OffsetY, 250, 130, "#bfbfbf");
    tabulka_vystupne_napatie.setStroke("#000000", 2);
    vnutro_vystupna_tabulka1 = new Rectangle(405 + canvas1OffsetX, 240 + canvas1OffsetY, 220, 30, "#e5e5ff");
    vnutro_vystupna_tabulka1.setStroke("#000000", 2);
    vnutro_vystupna_tabulka2 = new Rectangle(405 + canvas1OffsetX, 275 + canvas1OffsetY, 220, 50, "#e5e5ff");
    vnutro_vystupna_tabulka2.setStroke("#000000", 2);


    modra_plocha_vystupna_tabulka2 = new Rectangle(405 + canvas1OffsetX, 290 + canvas1OffsetY, 110, 15, "#0000ff");

    new CustomText("+", 605 + canvas1OffsetX, 270 + canvas1OffsetY, 20);
    new CustomText("-", 415 + canvas1OffsetX, 270 + canvas1OffsetY, 20);


    cervena_plocha_vystupna_tabulka2 = new Rectangle(515 + canvas1OffsetX, 290 + canvas1OffsetY, 110, 15, "#FF0000");

    vystup_0V_prepnutie = new CustomText("0V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_1V_prepnutie = new CustomText("1V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_1V_prepnutie.setOpacity(0);
    vystup_2V_prepnutie = new CustomText("2V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_2V_prepnutie.setOpacity(0);
    vystup_3V_prepnutie = new CustomText("3V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_3V_prepnutie.setOpacity(0);
    vystup_4V_prepnutie = new CustomText("4V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_4V_prepnutie.setOpacity(0);
    vystup_5V_prepnutie = new CustomText("5V", 420 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_5V_prepnutie.setOpacity(0);


    vystup_log0 = new CustomText("log 0", 570 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_log1 = new CustomText("log 1", 570 + canvas1OffsetX, 243 + canvas1OffsetY, 20);
    vystup_log1.setOpacity(0);

    vystupne_napatie_svk = new CustomText("Výstupné napätie", 440 + canvas1OffsetX, 330 + canvas1OffsetY, 20);
    vystupne_napatie_eng = new CustomText("Output voltage", 450 + canvas1OffsetX, 330 + canvas1OffsetY, 20);
    vystupne_napatie_eng.hideText();



    ////////////////////////////////////////////////////Prevodova charakteristika////////////////////////////////////////////



    prevodova_charakteristika = new Rectangle(800 + canvas1OffsetX, 40 + canvas1OffsetY, 370, 290, "#e5f2e5");
    prevodova_charakteristika.setStroke("#000000", 1);
    prev_odb_charakteristika_svk = new CustomText("Prevodová a odberová charakteristika", 835 + canvas1OffsetX, 57 + canvas1OffsetY, 18);
    prev_odb_charakteristika_eng = new CustomText("Transfer and consumption characteristics", 820 + canvas1OffsetX, 57 + canvas1OffsetY, 18);
    prev_odb_charakteristika_eng.hideText();




    y_suradnica = new Line(860 + canvas1OffsetX, 90 + canvas1OffsetY, 860 + canvas1OffsetX, 310 + canvas1OffsetY); //y suradnica
    y_suradnica.setStroke("#000000", 2);

    x_suradnica = new Line(840 + canvas1OffsetX, 295 + canvas1OffsetY, 1110 + canvas1OffsetX, 295 + canvas1OffsetY); //x suradnica
    x_suradnica.setStroke("#000000", 2);

    zakazana_oblast1 = new Rectangle(860 + canvas1OffsetX, 155 + canvas1OffsetY, 85, 140, "#bfbfbf");
    zakazana_oblast1.setStroke("#000000", 1);
    zakazana_oblast2 = new Rectangle(1020 + canvas1OffsetX, 130 + canvas1OffsetY, 85, 140, "#bfbfbf");
    zakazana_oblast2.setStroke("#000000", 1);

    zak_oblast_1_slovak=new CustomText("Zakázaná", 865 + canvas1OffsetX, 200 + canvas1OffsetY, 17);
    zak_oblast_2_slovak=new CustomText("oblasť", 875 + canvas1OffsetX, 225 + canvas1OffsetY, 17);
    zak_oblast_3_slovak=new CustomText("Zakázaná", 1025 + canvas1OffsetX, 170 + canvas1OffsetY, 17);
    zak_oblast_4_slovak=new CustomText("oblasť", 1035 + canvas1OffsetX, 195 + canvas1OffsetY, 17);


    zak_oblast_1_english=new CustomText("Forbidden", 865 + canvas1OffsetX, 200 + canvas1OffsetY, 17);
    zak_oblast_2_english=new CustomText("zone", 875 + canvas1OffsetX, 225 + canvas1OffsetY, 17);
    zak_oblast_3_english=new CustomText("Forbidden", 1025 + canvas1OffsetX, 170 + canvas1OffsetY, 17);
    zak_oblast_4_english=new CustomText("zone", 1035 + canvas1OffsetX, 195 + canvas1OffsetY, 17);

    zak_oblast_1_english.hideText();
    zak_oblast_2_english.hideText();
    zak_oblast_3_english.hideText();
    zak_oblast_4_english.hideText();


    pomlcky1=new CustomText("---------------------------", 860 + canvas1OffsetX, 257 + canvas1OffsetY, 18);
    pomlcky1.setOpacity(0.5);
    pomlcky2=new CustomText("----", 1032 + canvas1OffsetX, 270 + canvas1OffsetY, 18);
    pomlcky2.setOpacity(0.5);
    pomlcky2.setRotation(90,pomlcky2.posX, pomlcky2.posY);

    ////sipky////
    hornasipka_lava = new Line(850 + canvas1OffsetX, 105 + canvas1OffsetY, 860 + canvas1OffsetX, 90 + canvas1OffsetY); //y suradnica
    hornasipka_lava.setStroke("#000000",2);
    hornasipka_prava = new Line(860 + canvas1OffsetX, 90 + canvas1OffsetY, 870 + canvas1OffsetX, 105 + canvas1OffsetY); //y suradnica
    hornasipka_prava.setStroke("#000000",2);

    dolnasipka_vrch = new Line(1100 + canvas1OffsetX, 285 + canvas1OffsetY, 1110 + canvas1OffsetX, 295 + canvas1OffsetY); //y suradnica
    dolnasipka_vrch.setStroke("#000000",2);
    dolnasipka_spodok = new Line(1110 + canvas1OffsetX, 295 + canvas1OffsetY, 1100 + canvas1OffsetX, 305 + canvas1OffsetY); //y suradnica
    dolnasipka_spodok.setStroke("#000000",2);






    /////////////////////////////////////////////////////////////////////////////////////
    Uo= new CustomText("U", 802 + canvas1OffsetX, 80 + canvas1OffsetY, 20);
   Uo.fillText('#800080');
    Uo.toItalic();

    Uo=new CustomText("o", 815 + canvas1OffsetX, 92 + canvas1OffsetY, 12);
    Uo.fillText('#800080');
    ciarka=new CustomText(",", 823 + canvas1OffsetX, 88 + canvas1OffsetY, 15);


    Icc=new CustomText("I", 828 + canvas1OffsetX, 80 + canvas1OffsetY, 20);
    Icc.fillText('#008000');
    Icc.toItalic();
    Icc=new CustomText("cc", 833 + canvas1OffsetX, 92 + canvas1OffsetY, 12);
    Icc.fillText('#008000');


     new CustomText("U", 820 + canvas1OffsetX, 140 + canvas1OffsetY, 20).toItalic();
     new CustomText("o", 833 + canvas1OffsetX, 152 + canvas1OffsetY, 12);
     new CustomText("H", 840 + canvas1OffsetX, 148 + canvas1OffsetY, 13);

     new CustomText("U", 820 + canvas1OffsetX, 255 + canvas1OffsetY, 20).toItalic();
     new CustomText("o", 833 + canvas1OffsetX, 267 + canvas1OffsetY, 12);
     new CustomText("L", 840 + canvas1OffsetX, 263 + canvas1OffsetY, 13);


     new CustomText("U", 940 + canvas1OffsetX, 300 + canvas1OffsetY, 20).toItalic();
     new CustomText("i", 955 + canvas1OffsetX, 312 + canvas1OffsetY, 12);
     new CustomText("L", 960 + canvas1OffsetX, 311 + canvas1OffsetY, 13);

     new CustomText("U", 1010 + canvas1OffsetX, 300 + canvas1OffsetY, 20).toItalic();
     new CustomText("i", 1025 + canvas1OffsetX, 312 + canvas1OffsetY, 12);
     new CustomText("H", 1030 + canvas1OffsetX, 311 + canvas1OffsetY, 13);

     new CustomText("U", 1095 + canvas1OffsetX, 302 + canvas1OffsetY, 20).toItalic();
     new CustomText("i", 1110 + canvas1OffsetX, 314 + canvas1OffsetY, 12);




    //////////////////////////////////////////////////////////////Bulk///////////////////////////////////////////////////


    uzemnenie_spodok = new Line(340 + canvas1OffsetX, 440 + canvas1OffsetY, 370 + canvas1OffsetX, 440 + canvas1OffsetY);
    uzemnenie_spodok.setStroke("#000000", 4);


    uzemnenie_spodok_nahor = new Line(355 + canvas1OffsetX, 440 + canvas1OffsetY, 355 + canvas1OffsetX, 410 + canvas1OffsetY);
    uzemnenie_spodok_nahor.setStroke("#000000", 2);

    ciara_od_bp_nahor = new Line(415 + canvas1OffsetX, 440 + canvas1OffsetY, 415 + canvas1OffsetX, 425 + canvas1OffsetY);
    ciara_od_bp_nahor.setStroke("#000000", 2);

    ciara_od_bp_nahor_dolava = new Line(355 + canvas1OffsetX, 425 + canvas1OffsetY, 415 + canvas1OffsetX, 425 + canvas1OffsetY);
    ciara_od_bp_nahor_dolava.setStroke("#000000", 2);


    ciara_od_bn_nahor = new Line(1150 + canvas1OffsetX, 440 + canvas1OffsetY, 1150 + canvas1OffsetX, 355 + canvas1OffsetY);
    ciara_od_bn_nahor.setStroke("#000000", 2);

    ciara_od_bn_nahor_dolava = new Line(1150 + canvas1OffsetX, 355 + canvas1OffsetY, 1050 + canvas1OffsetX, 355 + canvas1OffsetY);
    ciara_od_bn_nahor_dolava.setStroke("#000000", 2);



    ///////////////////////////////////////////////////////Nad roztokom//////////////////////////////////////////////////////////////
    ciara_od_gn= new Line(620 + canvas1OffsetX, 390 + canvas1OffsetY, 620 + canvas1OffsetX, 440 + canvas1OffsetY);
    ciara_od_gn.setStroke("#000000", 2);
    new Circle(7, 620 + canvas1OffsetX, 390 + canvas1OffsetY, 0.5, "#000000", "#000000"); //

    ciara_gn_gp= new Line(370 + canvas1OffsetX, 390 + canvas1OffsetY, 945 + canvas1OffsetX, 390 + canvas1OffsetY);
    ciara_gn_gp.setStroke("#000000", 2);
    ciara_gn_gp_nahor= new Line(370 + canvas1OffsetX, 390 + canvas1OffsetY, 370 + canvas1OffsetX, 200 + canvas1OffsetY);
    ciara_gn_gp_nahor.setStroke("#000000", 2);

    ciara_gn_gp_nahor_doprava= new Line(370 + canvas1OffsetX, 200 + canvas1OffsetY, 380 + canvas1OffsetX, 200 + canvas1OffsetY);
    ciara_gn_gp_nahor_doprava.setStroke("#000000", 2);
    mala_krabica_vstupnapatie = new Rectangle(380 + canvas1OffsetX, 195 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_vstupnapatie.setStroke("#000000", 1);
    mala_krabica_vstupnapatie = new Rectangle(380 + canvas1OffsetX, 165 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_vstupnapatie.setStroke("#000000", 1);

    mala_krabica_napnapatie = new Rectangle(640 + canvas1OffsetX, 85 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_napnapatie.setStroke("#000000", 1);
    mala_krabica_napnapatie  = new Rectangle(640 + canvas1OffsetX, 115 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_napnapatie .setStroke("#000000", 1);

    mala_krabica_vysnapatie = new Rectangle(640 + canvas1OffsetX, 310 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_vysnapatie.setStroke("#000000", 1);
    mala_krabica_vysnapatie  = new Rectangle(640 + canvas1OffsetX, 340 + canvas1OffsetY, 10, 10, "#bfbfbf");
    mala_krabica_vysnapatie .setStroke("#000000", 1);

    spolu_vystupne_napajacie_nap=new Line(665 + canvas1OffsetX, 315 + canvas1OffsetY, 665 + canvas1OffsetX, 90 + canvas1OffsetY);
    spolu_vystupne_napajacie_nap.setStroke("#000000", 2);
    spolu_vystupne_napajacie_nap_malacast=new Line(650 + canvas1OffsetX, 315 + canvas1OffsetY, 665 + canvas1OffsetX, 315 + canvas1OffsetY);
    spolu_vystupne_napajacie_nap_malacast.setStroke("#000000", 2);
    napajacie_napatie_doprava=new Line(650 + canvas1OffsetX, 90 + canvas1OffsetY, 685 + canvas1OffsetX, 90 + canvas1OffsetY);
    napajacie_napatie_doprava.setStroke("#000000", 2);
    napajacie_napatie_doprava_nadol=new Line(685 + canvas1OffsetX, 90 + canvas1OffsetY, 685 + canvas1OffsetX, 100 + canvas1OffsetY);
    napajacie_napatie_doprava_nadol.setStroke("#000000", 2);
    uzemnenie_vrch = new Line(675 + canvas1OffsetX, 100 + canvas1OffsetY, 695 + canvas1OffsetX, 100 + canvas1OffsetY);
    uzemnenie_vrch.setStroke("#000000", 4);

    ciara_od_gp= new Line(945 + canvas1OffsetX, 390 + canvas1OffsetY, 945 + canvas1OffsetX, 440 + canvas1OffsetY);
    ciara_od_gp.setStroke("#000000", 2);


     new CustomText("S", 530 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
     new CustomText("N", 543 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

     new CustomText("G", 625 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
     new CustomText("N", 638 + canvas1OffsetX, 425 + canvas1OffsetY, 12);

     new CustomText("D", 700 + canvas1OffsetX, 415 + canvas1OffsetY, 18);
     new CustomText("N", 713 + canvas1OffsetX, 425 + canvas1OffsetY, 12);


     vystup_svk= new CustomText("výstup", 750 + canvas1OffsetX, 420 + canvas1OffsetY, 15);
     vystup_eng= new CustomText("output", 750 + canvas1OffsetX, 420 + canvas1OffsetY, 15);
     vystup_eng.hideText();

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
    //


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



    new CustomText("n", 515 + canvas1OffsetX, 465 + canvas1OffsetY, 25);
    new CustomText("+", 525 + canvas1OffsetX, 460 + canvas1OffsetY, 20);


    new CustomText("p", 835 + canvas1OffsetX, 465 + canvas1OffsetY, 25);
    new CustomText("+", 845 + canvas1OffsetX, 460 + canvas1OffsetY, 20);

    new CustomText("Si", 1150 + canvas1OffsetX, 580 + canvas1OffsetY, 30);





    zelena_od_sn= new Rectangle(510+ canvas1OffsetX, 400 + canvas1OffsetY, 10, 37, "#228B22");
    zelena_od_sn_dolava= new Rectangle(350+ canvas1OffsetX, 400 + canvas1OffsetY, 160, 10, "#228B22");
    zelena_od_sn_dolava_nahor= new Rectangle(350+ canvas1OffsetX, 165 + canvas1OffsetY, 10, 240, "#228B22");
    zelena_od_sn_dolava_nahor_doprava= new Rectangle(350+ canvas1OffsetX, 165 + canvas1OffsetY, 30, 10, "#228B22");


    zelena_od_sp= new Rectangle(1045+ canvas1OffsetX, 350 + canvas1OffsetY, 10, 87, "#228B22");
    zelena_od_sp_dolava= new Rectangle(710+ canvas1OffsetX, 350 + canvas1OffsetY, 345, 10, "#228B22");
    zelena_od_sp_dolava_nahor= new Rectangle(710+ canvas1OffsetX, 120 + canvas1OffsetY, 10, 240, "#228B22");
    zelena_od_sp_dolava_nahor_dolava= new Rectangle(650+ canvas1OffsetX, 115 + canvas1OffsetY, 70, 10, "#228B22");



    zelena_od_dn= new Rectangle(730+ canvas1OffsetX, 405 + canvas1OffsetY, 10, 32, "#228B22");
    zelena_od_dn_dostredu= new Rectangle(730+ canvas1OffsetX, 405 + canvas1OffsetY, 55, 10, "#228B22");
    zelena_dn_dp_nahor= new Rectangle(780+ canvas1OffsetX, 370 + canvas1OffsetY, 10, 36, "#228B22");
    zelena_dn_dp_nahor_dolava= new Rectangle(670+ canvas1OffsetX, 370 + canvas1OffsetY, 115, 10, "#228B22");
    zelena_dn_dp_nahor_dolava_nahor= new Rectangle(670+ canvas1OffsetX, 340 + canvas1OffsetY, 10, 35, "#228B22");
    zelena_dn_dp_nahor_dolava_nahor_doprava= new Rectangle(650+ canvas1OffsetX, 340 + canvas1OffsetY, 30, 10, "#228B22");

    cervena_dp= new Rectangle(830+ canvas1OffsetX, 405 + canvas1OffsetY, 10, 32, "#ff1919");
    cervena_dp_dolava= new Rectangle(785+ canvas1OffsetX, 405 + canvas1OffsetY, 50, 10, "#ff1919");



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
    ////rura od Sn

    sn_hore_1 = new Line(520 + canvas1OffsetX, 440 + canvas1OffsetY, 520 + canvas1OffsetX, 400 + canvas1OffsetY); //y suradnica
    sn_hore_1.setStroke("#000000",1);
    sn_hore_2 = new Line(510 + canvas1OffsetX, 440 + canvas1OffsetY, 510 + canvas1OffsetX, 410+ canvas1OffsetY);
    sn_hore_2.setStroke("#000000",1);

    sn_hore_1_dolava = new Line(520 + canvas1OffsetX, 400 + canvas1OffsetY, 360 + canvas1OffsetX, 400 + canvas1OffsetY); //y suradnica
    sn_hore_1_dolava.setStroke("#000000",1);
    sn_hore_2_dolava = new Line(510 + canvas1OffsetX, 410 + canvas1OffsetY, 350 + canvas1OffsetX, 410 + canvas1OffsetY); //y suradnica
    sn_hore_2_dolava.setStroke("#000000",1);

    sn_hore_1_dolava_nahor = new Line(360 + canvas1OffsetX, 400 + canvas1OffsetY, 360 + canvas1OffsetX, 175 + canvas1OffsetY);
    sn_hore_1_dolava_nahor.setStroke("#000000",1);
    sn_hore_2_dolava_nahor = new Line(350 + canvas1OffsetX, 410 + canvas1OffsetY, 350 + canvas1OffsetX, 165 + canvas1OffsetY);
    sn_hore_2_dolava_nahor.setStroke("#000000",1);

    sn_hore_1_dolava_nahor_doprava = new Line(360 + canvas1OffsetX, 175 + canvas1OffsetY, 380 + canvas1OffsetX, 175 + canvas1OffsetY); //y suradnica
    sn_hore_1_dolava_nahor_doprava.setStroke("#000000",1);
    sn_hore_2_dolava_nahor_doprava = new Line(350 + canvas1OffsetX, 165 + canvas1OffsetY, 380 + canvas1OffsetX, 165 + canvas1OffsetY); //y suradnica
    sn_hore_2_dolava_nahor_doprava.setStroke("#000000",1);


    ///rura od SP
    sp_hore_1 = new Line(1055 + canvas1OffsetX, 440 + canvas1OffsetY, 1055 + canvas1OffsetX, 350 + canvas1OffsetY); //y suradnica
    sp_hore_1.setStroke("#000000",1);
    sp_hore_2 = new Line(1045 + canvas1OffsetX, 440 + canvas1OffsetY, 1045 + canvas1OffsetX, 360+ canvas1OffsetY);
    sp_hore_2.setStroke("#000000",1);

    sp_hore_1_dolava = new Line(720 + canvas1OffsetX, 350 + canvas1OffsetY, 1055 + canvas1OffsetX, 350 + canvas1OffsetY); //y suradnica
    sp_hore_1_dolava.setStroke("#000000",1);
    sp_hore_2_dolava = new Line(710 + canvas1OffsetX, 360 + canvas1OffsetY, 1045 + canvas1OffsetX, 360 + canvas1OffsetY); //y suradnica
    sp_hore_2_dolava.setStroke("#000000",1);

    sp_hore_1_dolava_nahor = new Line(720 + canvas1OffsetX, 350 + canvas1OffsetY, 720 + canvas1OffsetX, 115 + canvas1OffsetY);
    sp_hore_1_dolava_nahor.setStroke("#000000",1);
    sp_hore_2_dolava_nahor = new Line(710 + canvas1OffsetX, 360 + canvas1OffsetY, 710 + canvas1OffsetX, 125 + canvas1OffsetY);
    sp_hore_2_dolava_nahor.setStroke("#000000",1);

    sp_hore_1_dolava_nahor_dolava = new Line(650 + canvas1OffsetX, 115 + canvas1OffsetY, 720 + canvas1OffsetX, 115 + canvas1OffsetY); //y suradnica
    sp_hore_1_dolava_nahor_dolava.setStroke("#000000",1);
    sp_hore_2_dolava_nahor_dolava = new Line(650 + canvas1OffsetX, 125 + canvas1OffsetY, 710 + canvas1OffsetX, 125 + canvas1OffsetY); //y suradnica
    sp_hore_2_dolava_nahor_dolava.setStroke("#000000",1);


    dn_hore_1 = new Line(730 + canvas1OffsetX, 440 + canvas1OffsetY, 730 + canvas1OffsetX, 405 + canvas1OffsetY); //y suradnica
    dn_hore_1.setStroke("#000000",1);
    dn_hore_2 = new Line(740 + canvas1OffsetX, 440 + canvas1OffsetY, 740 + canvas1OffsetX, 415+ canvas1OffsetY);
    dn_hore_2.setStroke("#000000",1);

    dn_hore_1_doprava = new Line(730 + canvas1OffsetX, 405 + canvas1OffsetY, 780 + canvas1OffsetX, 405 + canvas1OffsetY); //y suradnica
    dn_hore_1_doprava.setStroke("#000000",1);
    dn_hore_2_doprava = new Line(740 + canvas1OffsetX, 415 + canvas1OffsetY, 830 + canvas1OffsetX, 415 + canvas1OffsetY); //y suradnica
    dn_hore_2_doprava.setStroke("#000000",1);


    dp_hore_1 = new Line(840 + canvas1OffsetX, 440 + canvas1OffsetY, 840 + canvas1OffsetX, 405 + canvas1OffsetY); //y suradnica
    dp_hore_1.setStroke("#000000",1);
    dp_hore_2 = new Line(830 + canvas1OffsetX, 440 + canvas1OffsetY, 830 + canvas1OffsetX, 415+ canvas1OffsetY);
    dp_hore_2.setStroke("#000000",1);
    dp_hore_1_dolava = new Line(790 + canvas1OffsetX, 405 + canvas1OffsetY, 840 + canvas1OffsetX, 405 + canvas1OffsetY); //y suradnica
    dp_hore_1_dolava.setStroke("#000000",1);

    dp_dn_dohora_1=new Line(780 + canvas1OffsetX, 405 + canvas1OffsetY, 780 + canvas1OffsetX, 380 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_1.setStroke("#000000",1);
    dp_dn_dohora_2=new Line(790 + canvas1OffsetX, 405 + canvas1OffsetY, 790 + canvas1OffsetX, 370 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_2.setStroke("#000000",1);

    dp_dn_dohora_1_dolava=new Line(670 + canvas1OffsetX, 380 + canvas1OffsetY, 780 + canvas1OffsetX, 380 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_1_dolava.setStroke("#000000",1);
    dp_dn_dohora_2_dolava=new Line(680 + canvas1OffsetX, 370 + canvas1OffsetY, 790 + canvas1OffsetX, 370 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_2_dolava.setStroke("#000000",1);

    dp_dn_dohora_1_dolava_nahor=new Line(670 + canvas1OffsetX, 380 + canvas1OffsetY, 670 + canvas1OffsetX, 350 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_1_dolava_nahor.setStroke("#000000",1);
    dp_dn_dohora_2_dolava_nahor=new Line(680 + canvas1OffsetX, 370 + canvas1OffsetY, 680 + canvas1OffsetX, 340 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_2_dolava_nahor.setStroke("#000000",1);


    dp_dn_dohora_1_dolava_nahor_dolava=new Line(640 + canvas1OffsetX, 350 + canvas1OffsetY, 670 + canvas1OffsetX, 350 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_1_dolava_nahor_dolava.setStroke("#000000",1);
    dp_dn_dohora_2_dolava_nahor_dolava=new Line(640 + canvas1OffsetX, 340 + canvas1OffsetY, 680 + canvas1OffsetX, 340 + canvas1OffsetY); //y suradnica
    dp_dn_dohora_2_dolava_nahor_dolava.setStroke("#000000",1);





    /////////////////////gulicky  pri Si-N+//////////////////////
    gulicka1 = new Circle(15, 570 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka2 = new Circle(15, 588 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka3 = new Circle(15, 606 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka4 = new Circle(15, 624+ canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka5 = new Circle(15, 642 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka6 = new Circle(15, 660 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka7 = new Circle(15, 678 + canvas1OffsetX, 468 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke

    gulicka20 = new Circle(15, 570 + canvas1OffsetX, 530 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka21 = new Circle(15, 625 + canvas1OffsetX, 520 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke
    gulicka22 = new Circle(15, 655 + canvas1OffsetX, 520 + canvas1OffsetY, 0.5, "#1919ff", "#1919ff"); //gulicka v prevodovej tabulke





    /////////////////////gulicky  pri Si-P+//////////////////////




    gulicka9 =new Circle(15, 890 + canvas1OffsetX, 537 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //1. poradie
    gulicka8 =  new Circle(15, 861 + canvas1OffsetX, 554 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //2. poradie
    gulicka12 = new Circle(15, 945 + canvas1OffsetX, 527 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //3. poradie
    gulicka10 =new Circle(15, 924 + canvas1OffsetX, 551 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //4. poradie
    gulicka13 = new Circle(15, 993 + canvas1OffsetX, 515 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //5. poradie
    gulicka11 =new Circle(15, 980+ canvas1OffsetX, 558 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //6. poradie
   gulicka14 = new Circle(15, 1030 + canvas1OffsetX, 542 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //7. poradie


    gulicka23 = new Circle(15, 870 + canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //5. poradie
    gulicka24 =new Circle(15, 945+ canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //6. poradie
    gulicka25 = new Circle(15, 1030 + canvas1OffsetX, 580 + canvas1OffsetY, 0.5, "#ff1919", "#ff1919"); //7. poradie





    ////////////////////////////////////////////
    odberova_path=draw.path("m849.06239,339.51051c0,0 -85.96458,0 -89.21721,-0.77204c-3.25263,-0.77204 -13.20146,-132.78039 -16.05816,-157.30913c-2.8567,-24.52874 -9.81722,-28.92361 -12.816,0.28239c-2.99878,29.206 -14.61088,155.68983 -14.93862,157.02676c-0.32774,1.33693 -78.21597,-0.16942 -95.11373,0.56489");
    odberova_path.fill("#008000");
    odberova_path.stroke("#008000");
    odberova_path.attr({'fill-opacity':0});
    odberova_path.attr({'stroke-dasharray':3});
    odberova_path.attr({'stroke-width':3});
    suradnica_x=canvas1OffsetX+863;
    suradnica_y=canvas1OffsetY+116;
    odberova_path.move(suradnica_x,suradnica_y);

    prevodova_path=draw.path("m860.79369,339.61815c-16.67806,0 -83.80456,0.5372 -99.80426,0c-15.99972,-0.5372 -21.5654,-157.93701 -45.57495,-157.93701c-24.00954,0 -39.272,-0.00001 -97.45275,-0.00001");
    prevodova_path.fill("#800080");
    prevodova_path.stroke("#800080");
    prevodova_path.attr({'fill-opacity':0});
    prevodova_path.attr({'stroke-width':3});
    suradnica_x=canvas1OffsetX+860;
    suradnica_y=canvas1OffsetY+137;
    prevodova_path.move(suradnica_x,suradnica_y);

    gulicka = new Circle(15, 1095 + canvas1OffsetX, 295 + canvas1OffsetY, 0.5, "#800080", "#800080"); //gulicka v prevodovej tabulke
    gulicka_odberova= new Circle(15, 1095 + canvas1OffsetX, 295 + canvas1OffsetY, 0.5, "#008000", "#008000"); //gulicka odberova charakteristika



    new CustomText("p", 450 + canvas1OffsetX, 505 + canvas1OffsetY, 25);
    new CustomText("n", 400 + canvas1OffsetX, 590 + canvas1OffsetY, 25);




    biely_ramcek_dole= new Rectangle(500+ canvas1OffsetX, 330 + canvas1OffsetY, 720, 220, "#ffffff");
    biely_ramcek_dole.setOpacity(0);
    biely_ramcek_zlava= new Rectangle(500+ canvas1OffsetX, 50 + canvas1OffsetY, 250, 480, "#ffffff");
     biely_ramcek_zlava.setOpacity(0);





    rucicka_1 = new Line(515 + canvas1OffsetX, 325 + canvas1OffsetY, 515 + canvas1OffsetX, 285 + canvas1OffsetY);
    rucicka_1.setStroke("#000000",5);

    rucicka_2 = new Line(515 + canvas1OffsetX, 325 + canvas1OffsetY, 535 + canvas1OffsetX, 289 + canvas1OffsetY);
    rucicka_2.setStroke("#000000",5);
    rucicka_2.hideObj();

}

function myFunction() {
    var x = document.getElementById("mySelect").value;


    if (x == 'log1') {


        gulicka_prevodova_secondmove();
        gulicka_odberova_secondmove();




        gulicka1_second_move();
        gulicka2_second_move();
        gulicka3_second_move();
        gulicka4_second_move();
        gulicka5_second_move();
        gulicka6_second_move();
        gulicka7_second_move();

////////////////////////////////////
        gulicka8_second_move();
        gulicka9_second_move();
        gulicka10_second_move();
        gulicka12_second_move();
        gulicka13_second_move();
        gulicka14_second_move();

        gulicka11_second_move();

        gulicka20_second_move();
        gulicka21_second_move();
        gulicka22_second_move();
        gulicka23_second_move()
        gulicka24_second_move();
        gulicka25_second_move();

        vstupne_napatie_zvysovanie();
        vystupne_napatie_znizovanie();

        zvysovanie_log_0_vstupne();
        znizovanie_log_1_vystupne();
        opn_p_second();

        zmena_prudu();

        zmena_dn_dp_second();
       rucicka_second();

    }
        if (x == 'log0') {


            gulicka_prevodova_firstmove();
            gulicka_odberova_firstmove();


            // gulicka1_pohyb();



            gulicka1_first_move();
            gulicka2_first_move();
            gulicka3_first_move();
            gulicka4_first_move();
            gulicka5_first_move();
            gulicka6_first_move();
            gulicka7_first_move();


            //////////////////
            gulicka8_first_move();
            gulicka9_first_move();
            gulicka10_first_move();
            gulicka11_first_move();
            gulicka12_first_move();
            gulicka13_first_move();
            gulicka14_first_move();


            gulicka20_first_move();
            gulicka21_first_move();
            gulicka22_first_move();
            gulicka23_first_move();
            gulicka24_first_move();
            gulicka25_first_move();

            vstupne_napatie_znizovanie();
            vystupne_napatie_zvysovanie();
            znizovanie_log_1_vstupne();
            zvysovanie_log_0_vystupne();


            opn_n_first();

            zmena_prudu();
            zmena_dn_dp_first();
            rucicka_first();


            /*





      */
        }


    }



/*



*/

