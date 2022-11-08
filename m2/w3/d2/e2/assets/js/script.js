class Paginazione {
    constructor (_items = [], _size = 10) {
        this.items = _items;
        this.size = _size;
        this.page = 1;
    }

    visualizza(){
        // creare un riga per this.size elementi in base alla pagina 
        let indiceFinale = this.size * this.page -1;
        let indiceIniziale = indiceFinale - this.size;
        users.splice(indiceIniziale, indiceFinale);
        // let riga1 = document.createElement('tr');
        // let riga2 = document.createElement('tr');
        // riga1.innerHTML = `<td>${users.splice[indiceIniziale.number]}</td><td>${users.splice[indiceIniziale.nome]}</td><td>${indiceIniziale.cognome}</td><td>${indiceIniziale.classe}</td>`;
        // riga2.innerHTML = `<td>${users.splice[indiceFinale.number]}</td><td>${users.splice[indiceFinale.nome]}</td><td>${indiceFinale.cognome}</td><td>${indiceFinale.classe}</td>`;
    }

    avanti(){
        this.page++;
        this.visualizza();
    }

    indietro(){
        this.page--;
        this.visualizza();
    }
}

const users = [
    {number: 1, nome: "Carlo", cognome: "Verdi", classe: "A"},
    {number: 2, nome: "Franco", cognome: "Bianchi", classe: "B"},
    {number: 3, nome: "Piero", cognome: "Rossi", classe: "B"},
    {number: 4, nome: "Dario", cognome: "Neri", classe: "C"},
    {number: 5, nome: "Marco", cognome: "Verdi", classe: "A"},
    {number: 6, nome: "Bruno", cognome: "Bianchi", classe: "A"},
    {number: 7, nome: "Mario", cognome: "Rossi", classe: "C"},
    {number: 8, nome: "Paolo", cognome: "Neri", classe: "B"},
]

var p = new Paginazione(users, 2);

p.visualizza();

p.avanti();

p.indietro();