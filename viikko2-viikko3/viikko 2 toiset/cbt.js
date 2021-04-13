//______________________________________________________________________
//------------------------------tehtävä 1-------------------------------
function posNegativ() {
    var nro;
    nro = parseInt(document.getElementById('numero').value);
    if (nro >= 0){
        if (nro == 69) {
            alert('Hahah seks number. Nice')
            window.location.reload();
        }
        alert('Numero on positiivinen')
        window.location.reload();
    }
    else {
        alert('Numero on negatiivinen')
        window.location.reload();
    }
}
//______________________________________________________________________
//------------------------------tehtävä 2-------------------------------
function viikkoPaiv() {
    var n;
    n = parseInt(document.getElementById('day').value);
    if (n == 1) {
        alert('Maanantai');
        window.location.reload();
    }
    else if (n == 2) {
        alert('Tiistai');
        window.location.reload();
    }
    else if (n == 3) {
        alert('Keskiviikko');
        window.location.reload();
    }
    else if (n == 4) {
        alert('Torstai');
        window.location.reload();
    }
    else if (n == 5) {
        alert('Perjantai');
        window.location.reload();
    }
    else if (n == 6) {
        alert('Lauantai');
        window.location.reload();
    }
    else {
        alert('sunnuntai')
        window.location.reload();
    }
}
//______________________________________________________________________
//------------------------------tehtävä 3-------------------------------
function karkausVuo() {
    var year;
    year= parseInt(document.getElementById('year').value);
    if (( year%400 == 0)|| (( year%4 == 0 ) &&( year%100 != 0))) {
        alert(year +' on karkausvuosi')
        window.location.reload();
    }  
    else {
        alert(year+ ' vuosi ei ole karkausvuosi');
        window.location.reload();
    }
}
//______________________________________________________________________
//------------------------------tehtävä 4-------------------------------
function keskiArvo(n1, n2, n3, n4 , n5) {
    n1= parseInt(document.getElementById('summa1').value);
    n2= parseInt(document.getElementById('summa2').value);
    n3= parseInt(document.getElementById('summa3').value);
    n4= parseInt(document.getElementById('summa4').value);
    n5= parseInt(document.getElementById('summa5').value);
    var summa;
    summa =  (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5));
    var keskiarvo;
    keskiarvo =  summa / 5;
    alert("lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo)
    window.location.reload();
}
//______________________________________________________________________
//------------------------------tehtävä 5-------------------------------
function lauseMuuttuja(){
    var luku;
    luku = parseInt(document.getElementById('number').value)
    var lause;
    lause += luku + "x 1 = " + luku * 1;
    lause += luku + "x 2 = " + luku * 2;
    lause += luku + "x 3 = " + luku * 3;
    lause += luku + "x 4 = " + luku * 4;
    lause += luku + "x 5 = " + luku * 5;
    lause += luku + "x 6 = " + luku * 6;
    lause += luku + "x 7 = " + luku * 7;
    lause += luku + "x 8 = " + luku * 8;
    lause += luku + "x 9 = " + luku * 9;
    lause += luku + "x 10 = " + luku * 10;
    alert(lause)
    window.location.reload();
}
//______________________________________________________________________
//______________________________________________________________________