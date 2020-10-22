
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
function koniecPreklad() {
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



            document.querySelector("#buttonspat").textContent= 'Späť';
            document.querySelector("#buttondalej").textContent= 'Ďalej';

            document.getElementById("buttonhelp_svk").style.display = 'block';
            document.getElementById("buttonhelp_eng").style.display = 'none';

            document.getElementById("buttoncmos_svk").style.display = 'block';
            document.getElementById("buttoncmos_eng").style.display = 'none';

            document.getElementById("buttonlogobv_svk").style.display = 'block';
            document.getElementById("buttonlogobv_eng").style.display = 'none';


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


            document.querySelector("#buttonspat").textContent= 'Späť';
            document.querySelector("#buttondalej").textContent= 'Ďalej';

            document.getElementById("buttonhelp_svk").style.display = 'block';
            document.getElementById("buttonhelp_eng").style.display = 'none';

            document.getElementById("buttoncmos_svk").style.display = 'block';
            document.getElementById("buttoncmos_eng").style.display = 'none';

            document.getElementById("buttonlogobv_svk").style.display = 'block';
            document.getElementById("buttonlogobv_eng").style.display = 'none';



            localStorage.clear();
            localStorage.setItem("textvalue", "slovak");

        }
    }
}
