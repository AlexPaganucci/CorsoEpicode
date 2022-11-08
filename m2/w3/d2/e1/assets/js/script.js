class Person {
    constructor(_nome, _eta){
        this.nome = _nome;
        this.eta = _eta;
    }
    
    confronto(persona){
        if(this.eta > persona.eta){
        console.log(`${this.nome} è più vecchio di ${persona.nome}`);
        } else {
            console.log(`${this.nome} è più giovane di ${persona.nome}`);
        }
    }
}

var p1 = new Person('Luca', 30);
var p2 = new Person('Mario', 40);
var p3 = new Person('luigi', 25);
p1.confronto(p2);
p2.confronto(p3);
p3.confronto(p1);