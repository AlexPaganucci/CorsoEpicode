var contatore = document.getElementById("timer");

var secondi = 0;
var minuti = 0;
var lastTimeSec = sessionStorage.getItem("secondi");
var lastTimeMin = sessionStorage.getItem("minuti");
var interval = setInterval (timer, 1000)

if (lastTimeSec || lastTimeMin) {
    secondi = Number(lastTimeSec);
    minuti = Number(lastTimeMin);
}
function timer() {
        contatore.innerHTML = `Tempo: ${minuti} minuti ${secondi} secondi`;    
        secondi++;
        if (secondi == 60) {
        minuti++;
        secondi = 0;
        }
        sessionStorage.setItem("secondi", secondi);
        sessionStorage.setItem("minuti", minuti);      
}

document.addEventListener("DOMContentLoaded", timer);