var array;
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(_id, _codProd, _collezione, _capo, _modello, _quantita, _colore, _prezzoIvaEsclusa, _prezzoIvaInclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codProd = _codProd;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
        this.prezzoIvaInclusa = _prezzoIvaInclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    Abbigliamento.prototype.getSaldoCapo = function () {
        return (this.prezzoIvaInclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return this.prezzoIvaInclusa - this.getSaldoCapo();
    };
    return Abbigliamento;
}());
var capo1 = new Abbigliamento(1, 2121, 'primavera', 'cardigan', 1231, 5, 'nero', 18.50, 22.57, 'negozio', 45);
var capo2 = new Abbigliamento(2, 4111, 'estate', 't-shirt', 1251, 6, 'rosso', 5.50, 6.71, 'magazzino', 30);
var capo3 = new Abbigliamento(3, 1181, 'inverno', 'felpa', 1229, 8, 'beige', 17.50, 21.35, 'negozio', 50);
var capo4 = new Abbigliamento(4, 1111, 'estate', 'maglione', 1221, 4, 'verde', 20, 24.40, 'negozio', 50);
var capo5 = new Abbigliamento(5, 6111, 'primavera', 'maglia', 1021, 5, 'blu', 11, 13.42, 'magazzino', 60);
console.log(capo1);
console.log(capo1.getAcquistoCapo());
console.log(capo2);
console.log(capo2.getAcquistoCapo());
console.log(capo3);
console.log(capo3.getAcquistoCapo());
console.log(capo4);
console.log(capo4.getAcquistoCapo());
console.log(capo5);
console.log(capo5.getAcquistoCapo());
function getDati() {
    fetch('http://localhost:3000/abbigliamento').then(function (res) {
        return res.json();
    }).then(function (data) {
        array = data;
        data.map(function (e) {
            var capo = new Abbigliamento(e.id, e.codprod, e.collezione, e.capo, e.modello, e.quantita, e.colore, e.prezzoivaesclusa, e.prezzoivainclusa, e.disponibile, e.saldo);
            console.log(capo);
            console.log(capo.getAcquistoCapo());
        });
    });
}
getDati();
