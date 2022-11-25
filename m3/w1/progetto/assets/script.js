var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (ricarica) {
        this.carica += ricarica;
    };
    User.prototype.chiamata = function (minuti) {
        this.carica -= (minuti * 0.20);
        this.numeroChiamate++;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var firstUser = new User(10, 2);
var secondUser = new User(20, 5);
var thirdUser = new User(30, 4);
console.log('Primo Utente:');
console.log('--------------------');
firstUser.ricarica(65);
console.log(firstUser.numero404());
firstUser.chiamata(12);
console.log(firstUser.getNumeroChiamate());
firstUser.azzeraChiamate();
console.log(firstUser.getNumeroChiamate());
console.log('Secondo Utente:');
console.log('--------------------');
secondUser.ricarica(30);
console.log(secondUser.numero404());
secondUser.chiamata(50);
console.log(secondUser.getNumeroChiamate());
secondUser.azzeraChiamate();
console.log(secondUser.getNumeroChiamate());
console.log('Terzo Utente:');
console.log('--------------------');
thirdUser.ricarica(30);
console.log(thirdUser.numero404());
thirdUser.chiamata(3);
console.log(thirdUser.getNumeroChiamate());
thirdUser.azzeraChiamate();
console.log(thirdUser.getNumeroChiamate());
var newUser = new User(60, 25);
var credito = document.getElementById('credito');
credito.innerHTML = "Il suo credito attuale \u00E8 di ".concat(newUser.carica, " \u20AC");
var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var ricarica = document.getElementById('ricarica');
    newUser.ricarica(Number(ricarica.value));
    credito.innerHTML = "Il suo credito attuale \u00E8 di ".concat(newUser.numero404(), " \u20AC");
});
