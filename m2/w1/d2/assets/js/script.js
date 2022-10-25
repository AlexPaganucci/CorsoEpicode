var btn = document.getElementById('crea');

btn.addEventListener('click', function(){
    clear();
})

function clear(){
    if(Boolean(document.getElementById('spese').value) == false){
        document.getElementById('spese').innerHTML=' ';
    }
    controllo();
}

function controllo(){
    let budget = document.getElementById('budget').value;
    if(budget < 100){
        alert('Metti una cifra superiore a 100')
        return;
    }
    spesa(budget);
}

function spesa(spesaIniziale){
    let costo = Math.floor(Math.random()*100+1);
    let storno = spesaIniziale - costo;
    document.getElementById('spese').innerHTML+=`<li>Hai speso ${costo}</li>`;
    document.getElementById('spese').innerHTML+=`<li>Ti rimane ${storno}</li>`;
    while(storno>100){
        let costo = Math.floor(Math.random()*100+1);
        storno = storno - costo;
        document.getElementById('spese').innerHTML+=`<li>Hai speso ${costo}</li>`;
        document.getElementById('spese').innerHTML+=`<li>Ti rimane ${storno}</li>`;
    }
    document.getElementById('spese').innerHTML+='Hai speso troppo!';
}

var btn2 = document.getElementById('pulisci');

btn2.addEventListener('click', function(){
    pulisci();
})

function pulisci(){
    document.getElementById('spese').innerHTML = ' ';
}