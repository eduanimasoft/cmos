
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
function invertorPreklad() {
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


            document.querySelector("#radiobuttonspat").textContent= 'Back';
            document.querySelector("#radiobuttondalej").textContent= 'Next';

            document.getElementById("radiobuttonhelp_svk").style.display = 'none';
            document.getElementById("radiobuttonhelp_eng").style.display = 'block';

            document.getElementById("radiobuttoncmos_svk").style.display = 'none';
            document.getElementById("radiobuttoncmos_eng").style.display = 'block';

            document.getElementById("radiobuttonlogobv_svk").style.display = 'none';
            document.getElementById("radiobuttonlogobv_eng").style.display = 'block';



            ///////////////Objekty zo schemy////////////////
            equivalent_english1.showText();
             equivalent_english2.showText();
             equivalent_slovak1.hideText();
             equivalent_slovak2.hideText();

            inducated_n_english.showText();
            inducated_p_english.showText();

            inducated_n_slovak.hideText();
            inducated_p_slovak.hideText();

           scheme_english.showText();
          scheme_slovak.hideText();


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



            document.querySelector("#radiobuttonspat").textContent= 'Späť';
            document.querySelector("#radiobuttondalej").textContent= 'Ďalej';


            document.getElementById("radiobuttonhelp_svk").style.display = 'block';
            document.getElementById("radiobuttonhelp_eng").style.display = 'none';

            document.getElementById("radiobuttoncmos_svk").style.display = 'block';
            document.getElementById("radiobuttoncmos_eng").style.display = 'none';

            document.getElementById("radiobuttonlogobv_svk").style.display = 'block';
            document.getElementById("radiobuttonlogobv_eng").style.display = 'none';



            ///////////////Objekty zo schemy////////////////
            equivalent_english1.hideText();
             equivalent_english2.hideText();
            equivalent_slovak1.showText();
             equivalent_slovak2.showText();
            inducated_n_english.hideText();
            inducated_p_english.hideText();

            inducated_n_slovak.showText();
            inducated_p_slovak.showText();

           scheme_english.hideText();
           scheme_slovak.showText();


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


            document.querySelector("#radiobuttonspat").textContent= 'Back';
            document.querySelector("#radiobuttondalej").textContent= 'Next';

            document.getElementById("radiobuttonhelp_svk").style.display = 'none';
            document.getElementById("radiobuttonhelp_eng").style.display = 'block';

            document.getElementById("radiobuttoncmos_svk").style.display = 'none';
            document.getElementById("radiobuttoncmos_eng").style.display = 'block';

            document.getElementById("radiobuttonlogobv_svk").style.display = 'none';
            document.getElementById("radiobuttonlogobv_eng").style.display = 'block';



            ///////////////Objekty zo schemy////////////////
            equivalent_english1.showText();
            equivalent_english2.showText();

            equivalent_slovak1.hideText();
            equivalent_slovak2.hideText();

            inducated_n_english.showText();
            inducated_p_english.showText();

            inducated_n_slovak.hideText();
            inducated_p_slovak.hideText();

            scheme_english.showText();
            scheme_slovak.hideText();

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


            document.querySelector("#radiobuttonspat").textContent= 'Späť';
            document.querySelector("#radiobuttondalej").textContent= 'Ďalej';


            document.getElementById("radiobuttonhelp_svk").style.display = 'block';
            document.getElementById("radiobuttonhelp_eng").style.display = 'none';

            document.getElementById("radiobuttoncmos_svk").style.display = 'block';
            document.getElementById("radiobuttoncmos_eng").style.display = 'none';

            document.getElementById("radiobuttonlogobv_svk").style.display = 'block';
            document.getElementById("radiobuttonlogobv_eng").style.display = 'none';



            ///////////////Objekty zo schemy////////////////
            equivalent_english1.hideText();
            equivalent_english2.hideText();
            equivalent_slovak1.showText();
            equivalent_slovak2.showText();

            scheme_english.hideText();
            scheme_slovak.showText();

            inducated_n_english.hideText();
            inducated_p_english.hideText();

            inducated_n_slovak.showText();
            inducated_p_slovak.showText();


            ///////////////////////////


            localStorage.clear();
            localStorage.setItem("textvalue", "slovak");

        }
    }
}
