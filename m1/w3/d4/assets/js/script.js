// ESERCIZIO 1
const stringa = 'Sto imparando JavaScript';
const sigla = ' JS';
document.getElementById('maiuscola').innerHTML = stringa.toUpperCase();
document.getElementById('minuscola').innerHTML = stringa.toLowerCase();
document.getElementById('strArray').innerHTML = stringa.split('');
document.getElementById('estraiCaratteri').innerHTML = stringa.charAt(2)+
    stringa.charAt(1)+stringa.charAt(14)+stringa.charAt(18);
document.getElementById('concatena').innerHTML = stringa.concat(sigla); 
document.getElementById('estraiStringa').innerHTML = stringa.slice(5, 9);

//ESERCIZIO 2
const nomiArray = ['Giovanni','Carla','Piero','Mirtilla'];
document.getElementById('array').innerHTML = nomiArray;
document.getElementById('lunghezza').innerHTML = nomiArray.length;
document.getElementById('elemento').innerHTML = nomiArray[2];
document.getElementById('ultimo').innerHTML = nomiArray[3];
nomiArray.splice(2, 1, 'Massimo');
document.getElementById('modificato').innerHTML = nomiArray;

//ESERCIZIO 3
const annoArray = [2001, 1990, 1987, 2018, 2010];
const annoCorrente = 2022;
function calcolaEta(annoInCorso, annoNascita){
    return annoInCorso - annoNascita;
}
var etaArray = [calcolaEta(annoCorrente, annoArray[0]),
    calcolaEta(annoCorrente, annoArray[1]),
    calcolaEta(annoCorrente, annoArray[2]),
    calcolaEta(annoCorrente, annoArray[3]),
    calcolaEta(annoCorrente, annoArray[4])];
document.getElementById('eta1').innerHTML += `${etaArray[0]} anni`;
document.getElementById('eta2').innerHTML += `${etaArray[1]} anni`;
document.getElementById('eta3').innerHTML += `${etaArray[2]} anni`;
document.getElementById('eta4').innerHTML += `${etaArray[3]} anni`;
document.getElementById('eta5').innerHTML += `${etaArray[4]} anni`;
document.getElementById('arrayEta').innerHTML += etaArray;


//ESERCIZIO 4
const animaliArray = ['coniglio', 'cane', 'gatto', 'criceto'];
document.getElementById('intero').innerHTML = animaliArray;
animaliArray.push('leone');
document.getElementById('aggiunto').innerHTML = animaliArray;
animaliArray.pop();
document.getElementById('estratto').innerHTML = animaliArray;
document.getElementById('verifica1').innerHTML = animaliArray.includes('coniglio');
document.getElementById('verifica2').innerHTML = animaliArray.includes('leone');


