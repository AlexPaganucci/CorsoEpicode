let numeroCasuale:number = Math.floor(Math.random() * 101);
let numeroGiocatore1:number = Math.floor(Math.random() * 101);
let numeroGiocatore2:number = Math.floor(Math.random() * 101);

console.log(`Il giocatore 1 ha scelto il numero ${numeroGiocatore1}`);
console.log(`Il giocatore 2 ha scelto il numero ${numeroGiocatore2}`);
console.log(`Il numero estratto è il ${numeroCasuale}`);

if(numeroCasuale == numeroGiocatore1){
    console.log('Il giocatore 1 ha indovinato')
} else if (numeroCasuale == numeroGiocatore2){
    console.log('Il giocatore 2 ha indovinato')
} else if ((Math.abs(numeroCasuale - numeroGiocatore1)) < (Math.abs(numeroCasuale - numeroGiocatore2))){
    console.log('nessuno ha indovinato, ma il giocatore 1 si è avvicinato di più')
} else {
    console.log('nessuno ha indovinato, ma il giocatore 2 si è avvicinato di più')
};