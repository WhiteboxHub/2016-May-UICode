function accountModule(an) {
    
    var accountBalance = 0.0;
    var accountNumber = an;
    
    var withdrawFunction = function(amount) {
        accountBalance -= amount;
    }
    
    var depositFunction = function(amount) {
        accountBalance += amount;
    }
    
    var getAccountBalance = function() {
        return accountBalance;
    }
    
    return {
        acctNumber: accountNumber,
        withdraw: withdrawFunction,
        deposit: depositFunction,
        balance: getAccountBalance
    }
    
}

var a1 = accountModule(101);
a1.deposit(1000);
a1.withdraw(20);
a1.deposit(200);
console.log(a1.balance());