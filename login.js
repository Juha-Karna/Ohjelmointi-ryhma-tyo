//tarkastaa lomakkeen:
function tarkasta(form) {
    var käyttäjänimi = form.username.value;
    //käyttäjänimi alle 4 niin valittaa "vähintään 4 merkkiä":
    if(käyttäjänimi.length < 4) {
        alert("vähintään 4 merkkinen käyttäjänimi");
        form.username.focus(); //focusaa usernameen:
        return false;
    }
    //kun taas käyttäjänimi on 4 tai yli
    else {
        alert("kiitos lomakkeen täytöstä")
    }
}