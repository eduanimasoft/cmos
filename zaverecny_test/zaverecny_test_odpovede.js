/*function getRadioValue(n) {
    var i, r = document.getElementsByName(n);
    for (i = 0; i < r.length; i++) {
        if (r[i].checked) return r[i].value;
    }
    return '';
}
function getValues() {
    var g = getRadioValue('gender');
    var a = getRadioValue('ageGroup');


    if(g=='Male' && a =='5 - 15'){
        console.log("Spravna odpoved");
    }

    console.log(g);
    console.log(a);
}*/

function check() {
    if ((document.getElementById("3").checked == true ||document.getElementById("7").checked == true) &&
        (document.getElementById("10").checked == true ||document.getElementById("13").checked == true) &&
        (document.getElementById("15").checked == true ||document.getElementById("17").checked == true) &&
        (document.getElementById("20").checked == true ||document.getElementById("23").checked == true) &&
        (document.getElementById("26").checked == true ||document.getElementById("30").checked == true)){
        document.getElementById('buttondalej').disabled=false;
        document.getElementById('buttonspat').disabled=false;

        if(localStorage.getItem("textvalue")== ''){

            alert("Vsetky odpovede sú správne, môžeš sa posunúť na posledný snímok");

        }
        if(localStorage.getItem("textvalue") =='slovak'){

            alert("Vsetky odpovede sú správne, môžeš sa posunúť na posledný snímok");

        }
        if(localStorage.getItem("textvalue") =='english'){

            alert("All anwers are right, you can continue at the end");
        }


    }
    else {
        document.getElementById('buttondalej').disabled=true;
        document.getElementById('buttonspat').disabled=false;


        if(localStorage.getItem("textvalue")== ''){

            alert("Nie vsetky odpovede sú správne, skús nad niektorymi odpoveďami popremýšľať..");

        }
        if(localStorage.getItem("textvalue") =='slovak'){

            alert("Nie vsetky odpovede sú správne, skús nad niektorymi odpoveďami popremýšľať..");

        }
        if(localStorage.getItem("textvalue") =='english'){

            alert("Not all answers are right, try to think about answers..");
        }

    }
}