var data = new Date ();

if (data.getHours() < 6) {
    document.getElementById('saluto').innerHTML = 'Buon notte!';
} else if (data.getHours() < 13) {
    document.getElementById('saluto').innerHTML = 'Buon giorno!';
} else if (data.getHours() < 19) {
    document.getElementById('saluto').innerHTML = 'Buona pomeriggio!';
} else {
    document.getElementById('saluto').innerHTML = 'Buona sera!';
}