
if(localStorage.getItem("textvalue")== ''){
    document.getElementById('select').value='slovak';
    preklad2('slovak');
    // console.log("som tu slovak");

}
if(localStorage.getItem("textvalue") =='slovak'){
    document.getElementById('select').value='slovak';
    preklad2('slovak');
    // console.log("som tu slovak");
}
if(localStorage.getItem("textvalue") =='english'){
    document.getElementById('select').value='english';
    //console.log("som tu english");
    preklad2('english');
}
function principlePreklad() {
    var selectedLanguage = document.getElementById("select").value;

    if ((selectedLanguage == 'english') || (selectedLanguage == 'slovak')) {
        if (selectedLanguage == 'english') {

            var english = document.getElementsByClassName("legendaTextenglish");
            var slovak = document.getElementsByClassName("legendaTextslovak");
            var i;
            for (i = 0; i < english.length; i++) {
                english[i].style.display = 'block';
                slovak[i].style.display = 'none';
            }

            document.getElementById("legendaSVK").style.display = 'none';
            document.getElementById("legendaENG").style.display = 'block';

            document.querySelector("#buttonspat").textContent= 'Back';
            document.querySelector("#buttondalej").textContent= 'Next';

            document.getElementById("buttonhelp_svk").style.display = 'none';
            document.getElementById("buttonhelp_eng").style.display = 'block';

            document.getElementById("buttoncmos_svk").style.display = 'none';
            document.getElementById("buttoncmos_eng").style.display = 'block';

            document.getElementById("buttonlogobv_svk").style.display = 'none';
            document.getElementById("buttonlogobv_eng").style.display = 'block';

            document.querySelector("#buttonzoom").textContent= 'Parts';


            ///////////////Objekty zo schemy////////////////




            zak_oblast_1_english.showText();
            zak_oblast_2_english.showText();
            zak_oblast_3_english.showText();
            zak_oblast_4_english.showText();

            zak_oblast_1_slovak.hideText();
            zak_oblast_2_slovak.hideText();
            zak_oblast_3_slovak.hideText();
            zak_oblast_4_slovak.hideText();

            vystup_eng.showText();
            vystup_svk.hideText();

            vystupne_napatie_eng.showText();
            vystupne_napatie_svk.hideText();

            vstupne_napatie_eng.showText();
            vstupne_napatie_svk.hideText();

            napajacie_napatie_eng.showText();
            napajacie_napatie_svk.hideText();

            prev_odb_charakteristika_eng.showText();
            prev_odb_charakteristika_svk.hideText();


            ///////////////////////////





            localStorage.clear();
            localStorage.setItem("textvalue", "english");




        } else if (selectedLanguage == 'slovak') {

            var english = document.getElementsByClassName("legendaTextenglish");
            var slovak = document.getElementsByClassName("legendaTextslovak");
            var i;
            for (i = 0; i < english.length; i++) {
                english[i].style.display = 'none';
                slovak[i].style.display = 'block';

            }

            document.getElementById("legendaSVK").style.display = 'block';
            document.getElementById("legendaENG").style.display = 'none';


            document.getElementById("buttonhelp_svk").style.display = 'block';
            document.getElementById("buttonhelp_eng").style.display = 'none';

            document.getElementById("buttoncmos_svk").style.display = 'block';
            document.getElementById("buttoncmos_eng").style.display = 'none';

            document.getElementById("buttonlogobv_svk").style.display = 'block';
            document.getElementById("buttonlogobv_eng").style.display = 'none';

            document.querySelector("#buttonzoom").textContent= 'Časti';


            ///////////////Objekty zo schemy////////////////




            zak_oblast_1_english.hideText();
            zak_oblast_2_english.hideText();
            zak_oblast_3_english.hideText();
            zak_oblast_4_english.hideText();

            zak_oblast_1_slovak.showText();
            zak_oblast_2_slovak.showText();
            zak_oblast_3_slovak.showText();
            zak_oblast_4_slovak.showText();

            vystup_eng.hideText();
            vystup_svk.showText();

            vystupne_napatie_eng.hideText();
            vystupne_napatie_svk.showText();

            vstupne_napatie_eng.hideText();
            vstupne_napatie_svk.showText();

            napajacie_napatie_eng.hideText();
            napajacie_napatie_svk.showText();

            prev_odb_charakteristika_eng.hideText();
            prev_odb_charakteristika_svk.showText();

            ///////////////////////////


            localStorage.clear();
            localStorage.setItem("textvalue", "slovak");

        }
    }
}
function preklad2(selectedLanguage2) {
    // var selectedLanguage = document.getElementById("select").value;

    if ((selectedLanguage2 == 'english') || (selectedLanguage2 == 'slovak')) {
        if (selectedLanguage2 == 'english') {

            var english = document.getElementsByClassName("legendaTextenglish");
            var slovak = document.getElementsByClassName("legendaTextslovak");
            var i;
            for (i = 0; i < english.length; i++) {
                english[i].style.display = 'block';
                slovak[i].style.display = 'none';
            }

            document.getElementById("legendaSVK").style.display = 'none';
            document.getElementById("legendaENG").style.display = 'block';

            document.querySelector("#buttonspat").textContent= 'Back';
            document.querySelector("#buttondalej").textContent= 'Next';

            document.getElementById("buttonhelp_svk").style.display = 'none';
            document.getElementById("buttonhelp_eng").style.display = 'block';

            document.getElementById("buttoncmos_svk").style.display = 'none';
            document.getElementById("buttoncmos_eng").style.display = 'block';

            document.getElementById("buttonlogobv_svk").style.display = 'none';
            document.getElementById("buttonlogobv_eng").style.display = 'block';

            document.querySelector("#buttonzoom").textContent= 'Parts';


            ///////////////Objekty zo schemy////////////////



            zak_oblast_1_english.showText();
            zak_oblast_2_english.showText();
            zak_oblast_3_english.showText();
            zak_oblast_4_english.showText();

            zak_oblast_1_slovak.hideText();
            zak_oblast_2_slovak.hideText();
            zak_oblast_3_slovak.hideText();
            zak_oblast_4_slovak.hideText();

            vystup_eng.showText();
            vystup_svk.hideText();

            vystupne_napatie_eng.showText();
            vystupne_napatie_svk.hideText();

            vstupne_napatie_eng.showText();
            vstupne_napatie_svk.hideText();

            napajacie_napatie_eng.showText();
            napajacie_napatie_svk.hideText();

            prev_odb_charakteristika_eng.showText();
            prev_odb_charakteristika_svk.hideText();


            ///////////////////////////


            localStorage.clear();
            localStorage.setItem("textvalue", "english");


        } else if (selectedLanguage2 == 'slovak') {

            var english = document.getElementsByClassName("legendaTextenglish");
            var slovak = document.getElementsByClassName("legendaTextslovak");
            var i;
            for (i = 0; i < english.length; i++) {
                english[i].style.display = 'none';
                slovak[i].style.display = 'block';

            }

            document.getElementById("legendaSVK").style.display = 'block';
            document.getElementById("legendaENG").style.display = 'none';


            document.getElementById("buttonhelp_svk").style.display = 'block';
            document.getElementById("buttonhelp_eng").style.display = 'none';

            document.getElementById("buttoncmos_svk").style.display = 'block';
            document.getElementById("buttoncmos_eng").style.display = 'none';

            document.getElementById("buttonlogobv_svk").style.display = 'block';
            document.getElementById("buttonlogobv_eng").style.display = 'none';

            document.querySelector("#buttonzoom").textContent= 'Časti';


            ///////////////Objekty zo schemy////////////////





            zak_oblast_1_english.hideText();
            zak_oblast_2_english.hideText();
            zak_oblast_3_english.hideText();
            zak_oblast_4_english.hideText();

            zak_oblast_1_slovak.showText();
            zak_oblast_2_slovak.showText();
            zak_oblast_3_slovak.showText();
            zak_oblast_4_slovak.showText();

            vystup_eng.hideText();
            vystup_svk.showText();

            vystupne_napatie_eng.hideText();
            vystupne_napatie_svk.showText();

            vstupne_napatie_eng.hideText();
            vstupne_napatie_svk.showText();

            napajacie_napatie_eng.hideText();
            napajacie_napatie_svk.showText();

            prev_odb_charakteristika_eng.hideText();
            prev_odb_charakteristika_svk.showText();

            ///////////////////////////


            localStorage.clear();
            localStorage.setItem("textvalue", "slovak");

        }
    }
}
