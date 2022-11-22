abstract class Lavoratori {
    codRedd: number;
    reddAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(_codRedd: number, _reddAnnuoLordo: number, _tasseInps: number, _tasseIrpef: number ){
        this.codRedd = _codRedd;
        this.reddAnnuoLordo = _reddAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef
    }

    getUtileTasse():number{
        let utile = ((this.reddAnnuoLordo*this.codRedd)/100);
        return utile;
    }

    getTasseInps():number{
        let tasseInps = ((this.getUtileTasse()*this.tasseInps)/100);
        return tasseInps;
    }

    getTasseIrpef():number{
        let tasseIrpef = ((this.getUtileTasse()*this.tasseIrpef)/100);
        return tasseIrpef;
    }

    getRedditoAnnuoNetto():number{
        let redditoAnnuoNetto = (this.reddAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    }
}

class Professionista extends Lavoratori {
    constructor(_codRedd: number, _reddAnnuoLordo: number){
        super(_codRedd, _reddAnnuoLordo, 7.8, 3)
    }
}

class Artigiano extends Lavoratori {
    constructor(_codRedd: number, _reddAnnuoLordo: number){
        super(_codRedd, _reddAnnuoLordo, 6.7, 2)
    }
}

class Commerciante extends Lavoratori {
    constructor(_codRedd: number, _reddAnnuoLordo: number){
        super(_codRedd, _reddAnnuoLordo, 4, 1)
    }
}

let newProfessionista = new Professionista (78, 7800)
let newArtigiano = new Artigiano (67, 6700)
let newCommerciante = new Commerciante (40, 4000)

console.log(`Utile tasse professionista: ${newProfessionista.getUtileTasse()} €`);
console.log(`Tasse INPS professionista: ${newProfessionista.getTasseInps()} €`);
console.log(`Tasse IRPEF professionista: ${newProfessionista.getTasseIrpef()} €`);
console.log(`Reddito annuo netto professionista: ${newProfessionista.getRedditoAnnuoNetto()} €`);
console.log('-----------------------------------------------')
console.log(`Utile tasse artigiano: ${newArtigiano.getUtileTasse()} €`);
console.log(`Tasse INPS artigiano: ${newArtigiano.getTasseInps()} €`);
console.log(`Tasse IRPEF artigiano: ${newArtigiano.getTasseIrpef()} €`);
console.log(`Reddito annuo netto artigiano: ${newArtigiano.getRedditoAnnuoNetto()} €`);
console.log('-----------------------------------------------')
console.log(`Utile tasse commerciante: ${newCommerciante.getUtileTasse()} €`);
console.log(`Tasse INPS commerciante: ${newCommerciante.getTasseInps()} €`);
console.log(`Tasse IRPEF commerciante: ${newCommerciante.getTasseIrpef()} €`);
console.log(`Reddito annuo netto commerciante: ${newCommerciante.getRedditoAnnuoNetto()} €`);
