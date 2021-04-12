var vastaus = Math.floor(Math.random()*10)+1;
//random numero kymmenestä
var kerrat = 0;
var score = 0;
var guess = 0;
//buttonit
window.onload=function main() {
    var alustus = '';
    console.log(vastaus);
    for(var i = 1; i <=10; i++) {
        for(var j = 0; j < 3; j++ ) {
            //css tyylittelyyn buttonin nimi ".nappi {}"
            alustus += '<button class= "nappi" type="button" name="' + i +'" onclick="arvaa(this)" value = '+i+'>'+i+' </button>';
            if(i < 10 && j !=2) {
                i++;
            }
            else {
                j=3;
            }
        }
        alustus+= '<br>';
    }
    document.getElementById('gameBoard').innerHTML = alustus;
    //tähän mikä lie sinulla ^^^^^^^^^ on html:ssä divin nimenä
}
//arvaus kerrat ja arvaus itsessään
function arvaa(arpa) {
    kerrat++;
    var arvaus = arpa.value;

    //jos kerrat on pienempi tai yhtäsuurikun 10 (eli 10 arvauskertaa) 
    if(kerrat <= 10) {
        //silloin nämä alla olevat alkaa pyörimään.
        
        //jos arvaus on pienempi kuin vastaus: alert + 1 arvaus
        if(arvaus < vastaus) {
            guess += 1;
            document.getElementById('guess').innerHTML = guess;
            alert('Liian pieni numero');
        }
        //Jos arvaus on isompi kuin vastaus: alert + 1 arvaus
        else if(arvaus > vastaus) {
            guess += 1;
            document.getElementById('guess').innerHTML = guess;
            alert('Liian suuri numero');
        }
        //Jos arvaus on = vastaus niin alert kuinka monta arvausta käytit ja sitten refresh page + 1 arvaus ja + 1 piste. Ja siirtää vastausta randomiin sijaintiin
        else if (arvaus == vastaus) {
            // arvaus
            guess += 1;
            document.getElementById('guess').innerHTML = guess;
            // piste
            score += 1;
            document.getElementById('score').innerHTML = score;
            alert('Oikein, käytit ' + kerrat + ' kertaa');
            //siirtää vastausta
            newVastaus();
        }
        // jos score = 3 =VICTORY
        if(score == 3) {
            timeMsg();
        }
    }
    // Muulloin game over. ja refresh page
    else {
        alert('Käytit kaikki 10 yritystä GAME OVER');
        location.reload();
    }
}
//kun vastaat oikein niin oikea vastaus liikkuu. functio sille
function newVastaus(){
    vastaus = Math.floor(Math.random()*10)+1;
    console.log(vastaus);
}
//voiti pelin alert ja reload
function alertMsg()
{
        alert('voitit pelin ONNITTELUT, pisteesi: '+ score + ' arvauksesi: ' + guess);
        location.reload();
}
//viivettä että piste ja arvaus ehtii tulemaan ennen voitto alerttia
function timeMsg()
{
    setTimeout("alertMsg()",500);
}