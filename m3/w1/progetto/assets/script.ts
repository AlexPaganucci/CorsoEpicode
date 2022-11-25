interface Utente {
    carica:number;
    numeroChiamate:number;
    ricarica(ricarica:number):void;

    chiamata(minuti:number):void;

    numero404():number;

    getNumeroChiamate():number;

    azzeraChiamate():void;
}

class User implements Utente {
    carica:number;
    numeroChiamate:number;
    constructor(_carica:number, _numeroChiamate:number){
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ricarica:number):void{
        this.carica += ricarica;
    }

    chiamata(minuti:number):void{
        this.carica -= (minuti * 0.20);
        this.numeroChiamate++;
    }

    numero404():number{
        return this.carica;
    }

    getNumeroChiamate():number{
        return this.numeroChiamate;
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0;
    }
}


let firstUser = new User(10, 2);
let secondUser = new User(20, 5);
let thirdUser = new User(30, 4);

console.log('Primo Utente:');
console.log('--------------------');
firstUser.ricarica(65);
console.log(firstUser.numero404());
firstUser.chiamata(12);
console.log(firstUser.getNumeroChiamate())
firstUser.azzeraChiamate()
console.log(firstUser.getNumeroChiamate())
console.log('Secondo Utente:');
console.log('--------------------');
secondUser.ricarica(30);
console.log(secondUser.numero404());
secondUser.chiamata(50);
console.log(secondUser.getNumeroChiamate())
secondUser.azzeraChiamate()
console.log(secondUser.getNumeroChiamate())
console.log('Terzo Utente:');
console.log('--------------------');
thirdUser.ricarica(30);
console.log(thirdUser.numero404());
thirdUser.chiamata(3);
console.log(thirdUser.getNumeroChiamate())
thirdUser.azzeraChiamate()
console.log(thirdUser.getNumeroChiamate())

var newUser = new User(60, 25)
var credito:HTMLElement = document.getElementById('credito') as HTMLElement; 
credito.innerHTML = `Il suo credito attuale è di ${newUser.carica} €`;
var btn:HTMLButtonElement = document.getElementById('btn') as HTMLButtonElement;
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let ricarica:HTMLInputElement = document.getElementById('ricarica') as HTMLInputElement;
    newUser.ricarica(Number(ricarica.value));
    credito.innerHTML = `Il suo credito attuale è di ${newUser.numero404()} €`;
})