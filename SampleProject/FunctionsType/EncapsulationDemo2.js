class Bank{
    #accountNumber
    #balance
 
    constructor(accountNumber, balance){
        this.#accountNumber=accountNumber
        this.#balance=balance
    }
 
    getAccountNumber(){
        return this.#accountNumber
    }
 
    getBalance(){
        return this.#balance
    }
}
 
let o=new Bank(10000111, 45000)
console.log(o.getAccountNumber())
console.log(o.getBalance())