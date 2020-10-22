function check() {
    if (document.getElementById('3').checked == true || document.getElementById('7').checked == true){
        document.getElementById('buttondalej').disabled=false;
        document.getElementById('buttonspat').disabled=false;


        if(localStorage.getItem("textvalue")== ''){

            alert("Správna odpoveď, môžeš sa posunúť tlačítkom ďalej.");

        }
        if(localStorage.getItem("textvalue") =='slovak'){

            alert("Správna odpoveď, môžeš sa posunúť tlačítkom ďalej");

        }
        if(localStorage.getItem("textvalue") =='english'){

            alert("Right anwer, you can continue through the animation, click button next!");
        }



    }
    else{
        document.getElementById('buttondalej').disabled=true;
        document.getElementById('buttonspat').disabled=false;
        document.getElementById('check').disabled=true;

        if(localStorage.getItem("textvalue")== ''){

            alert("Nesprávna odpoveď, musíš sa vrátiť tlačítkom späť a naštudovať si otázku ešte raz..");

        }
        if(localStorage.getItem("textvalue") =='slovak'){

            alert("Nesprávna odpoveď, musíš sa vrátiť tlačítkom späť a naštudovať si otázku ešte raz..");

        }
        if(localStorage.getItem("textvalue") =='english'){

            alert("Wrong answer, you have to come back and learn information once again, press the button back!");
        }



    }
}