//______________________________________________________________________
//------------------------------tehtävä 1-------------------------------
function jarjesta() {
    var luku1, luku2, luku3;
    luku1 = parseInt(document.getElementById('eka').value)
    luku2 = parseInt(document.getElementById('toka').value)
    luku3 = parseInt(document.getElementById('kolmas').value)
    alert("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 );
    if(luku1 < luku2 && luku1 < luku3) {
        if(luku2 < luku3) {
            alert("Lukujen Järjestys " + luku1 + ' ' + luku2 + ' ' + luku3);
        }
        else {
            alert("Lukujen Järjestys " + luku1 + ' ' + luku3 + ' ' + luku2);
        }
    }
    else if(luku2 < luku1 && luku2 < luku3) {
        if(luku1<luku3) {
            alert("lukujen järjestys " + luku2 + ' ' + luku1 + ' ' + luku3);
        }
        else {
            alert("lukujen järjestys " + luku2 + ' ' + luku3 + ' ' + luku1);
        }
    }
    else if(luku3 < luku1 && luku3 < luku2) {
        if(luku1 < luku2) {
            alert("lukujen järjestys " + luku3 + ' ' + luku1 + ' ' + luku2);
        }
        else {
            alert("lukujen järjestys " + luku3 + ' ' + luku2 + ' ' + luku1);
        }
    }
}
//____________________________________________________________________
//-----------------------------tehtävä 2------------------------------
function etsiSuurin() {
    //n = numero
    var n1, n2, n3, n4, n5, suurin;
    n1 = parseInt(document.getElementById('luku1').value);
    n2 = parseInt(document.getElementById('luku2').value);
    n3 = parseInt(document.getElementById('luku3').value);
    n4 = parseInt(document.getElementById('luku4').value);
    n5 = parseInt(document.getElementById('luku5').value);
    if(n1 < n2 && n3 < n2 && n4 < n2 && n5 <n2) {
        suurin = n2;
    }
    else if(n1 < n3 && n4 < n3 && n5 < n3) {
        suurin = n3;
    }
    else if(n1 < n4 && n5 < n4 ) {
        suurin = n4;
    }
    else if(n1 < n5 ) {
        suurin = n5;
    }
    else {
        suurin = n1;
    }
    alert("annoit luvut " + n1 + ' ' + n2 + ' ' + n3 + ' ' + n4 + ' ' + n5);
    alert("suurin näistä on: " + suurin)
}
//________________________________________________________________________
//-----------------------------tehtävä3-----------------------------------
function paritonParillinen() {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    alert("antamasi luku: " + arvo);
    if(arvo%2 == 0) {
        alert("antamasi luku on parillinen ");
    }
    else {
        alert("antamasi luku on pariton ");
    }
}
//________________________________________________________________________
//-----------------------------tehtävä4-----------------------------------
function ajoneuvo() {
    var zoomer = parseInt(document.getElementById('ika').value);
    if(zoomer < 16) {
        alert("voit ajaa polkupyörää ");
    }
    else if(zoomer < 18) {
        alert("voit ajaa mopoa ")
    }
    else {
        alert("voit ajaa autoa ")
    }
}
//________________________________________________________________________
//-----------------------------tehtävä5-----------------------------------
function kaanna() {
    var lang = document.getElementById('kieli').value;
    if(lang == 'eng') {
        alert("hello world");
    }
    else if(lang == 'swe') {
        alert("Hej världen");
    }
    else {
        alert("Hola Mundo")
    }
}
//________________________________________________________________________
//________________________________________________________________________
