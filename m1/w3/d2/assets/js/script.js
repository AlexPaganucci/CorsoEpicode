 //PRIMA PARTE
 {   
    var nome1 = 'Aldo';
    let ruolo = 'cliente';
    const piGreco = '3.14';

    var stampa = nome1 + ", " + ruolo + ", " + piGreco;

    document.getElementById('concatena').innerHTML = `${nome1}, ${ruolo}, ${piGreco}`;
    document.getElementById('concatena2').innerHTML = stampa
}

//SECONDA PARTE
{
    var nome2 = 'Mario';
    document.getElementById('var').innerHTML = nome2;
    document.getElementById('let2').innerHTML = nome2
    {
        let nome2 = 'Carla';
        document.getElementById('let').innerHTML = nome2;
        document.getElementById('let3').innerHTML = nome2
        document.getElementById('final2').innerHTML = nome2
    }
    document.getElementById('final').innerHTML = nome2
}
//TERZA PARTE
{
    var num = 15;
    document.getElementById('iniziale').innerHTML += num;
    var num2 = num + num;
    document.getElementById('valore1').innerHTML += ` ${num2}, ${++num2}`;
    var num3 = num - 10;
    document.getElementById('valore2').innerHTML += ` ${num3}, ${--num3}`;
    var num4 = num * 3;
    document.getElementById('valore3').innerHTML += num4;
    var num5 = num / 3;
    document.getElementById('valore4').innerHTML += num5;
    document.getElementById('valore5').innerHTML += num + ' è un numero';
}


