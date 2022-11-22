class SonAccount{
    balance: number;
    constructor(_balanceInit:number = 0){
        this.balance = _balanceInit;
    }
    deposit(amount:number) {
        this.balance += amount;
        return this.balance;
    }
    withDraw(amount:number) {
        this.balance -= amount;
        return this.balance;
    }
}

class MotherAccount extends SonAccount{
    balance: number;
    constructor(_balanceInit:number = 0){
        super(_balanceInit)
    }
    private addInterest(){
        this.balance = this.balance+((this.balance*10)/100);
        return this.balance;
    }
}

var newSonAccount = new SonAccount(100);
var newMotherAccount = new MotherAccount(80);