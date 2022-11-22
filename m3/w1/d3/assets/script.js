var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(_codRedd, _reddAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.reddAnnuoLordo = _reddAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    Lavoratori.prototype.getUtileTasse = function () {
        var utile = ((this.reddAnnuoLordo * this.codRedd) / 100);
        return utile;
    };
    Lavoratori.prototype.getTasseInps = function () {
        var tasseInps = ((this.getUtileTasse() * this.tasseInps) / 100);
        return tasseInps;
    };
    Lavoratori.prototype.getTasseIrpef = function () {
        var tasseIrpef = ((this.getUtileTasse() * this.tasseIrpef) / 100);
        return tasseIrpef;
    };
    Lavoratori.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = (this.reddAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    };
    return Lavoratori;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_codRedd, _reddAnnuoLordo) {
        return _super.call(this, _codRedd, _reddAnnuoLordo, 7.8, 3) || this;
    }
    return Professionista;
}(Lavoratori));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_codRedd, _reddAnnuoLordo) {
        return _super.call(this, _codRedd, _reddAnnuoLordo, 6.7, 2) || this;
    }
    return Artigiano;
}(Lavoratori));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_codRedd, _reddAnnuoLordo) {
        return _super.call(this, _codRedd, _reddAnnuoLordo, 4, 1) || this;
    }
    return Commerciante;
}(Lavoratori));
var newProfessionista = new Professionista(78, 7800);
var newArtigiano = new Artigiano(67, 6700);
var newCommerciante = new Commerciante(40, 4000);
console.log("Utile tasse professionista: ".concat(newProfessionista.getUtileTasse(), " \u20AC"));
console.log("Tasse INPS professionista: ".concat(newProfessionista.getTasseInps(), " \u20AC"));
console.log("Tasse IRPEF professionista: ".concat(newProfessionista.getTasseIrpef(), " \u20AC"));
console.log("Reddito annuo netto professionista: ".concat(newProfessionista.getRedditoAnnuoNetto(), " \u20AC"));
console.log('-----------------------------------------------');
console.log("Utile tasse artigiano: ".concat(newArtigiano.getUtileTasse(), " \u20AC"));
console.log("Tasse INPS artigiano: ".concat(newArtigiano.getTasseInps(), " \u20AC"));
console.log("Tasse IRPEF artigiano: ".concat(newArtigiano.getTasseIrpef(), " \u20AC"));
console.log("Reddito annuo netto artigiano: ".concat(newArtigiano.getRedditoAnnuoNetto(), " \u20AC"));
console.log('-----------------------------------------------');
console.log("Utile tasse commerciante: ".concat(newCommerciante.getUtileTasse(), " \u20AC"));
console.log("Tasse INPS commerciante: ".concat(newCommerciante.getTasseInps(), " \u20AC"));
console.log("Tasse IRPEF commerciante: ".concat(newCommerciante.getTasseIrpef(), " \u20AC"));
console.log("Reddito annuo netto commerciante: ".concat(newCommerciante.getRedditoAnnuoNetto(), " \u20AC"));
