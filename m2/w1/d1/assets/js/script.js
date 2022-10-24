const arrayMesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
var data = new Date();

document.getElementById('data-attuale').innerHTML = `${data.getDate()} / ${arrayMesi[data.getMonth()]} / ${data.getFullYear()}`;
document.getElementById('data-completa').innerHTML = data;
document.getElementById('giorno').innerHTML += data.getDate();
document.getElementById('mese').innerHTML += arrayMesi[data.getMonth()];
document.getElementById('formatoEu').innerHTML += `${data.getDate()}-${Number(data.getMonth())+1}-${data.getFullYear()}`;
