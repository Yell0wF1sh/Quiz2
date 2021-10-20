

class BankAccount {
    constructor (balance) {
        this.balance = balance
    }

    withdraw (amount) {
        this.balance -= amount
    }

    deposit (amount) {
        this.balance += amount
    }

}

const transfer = (acc1, acc2, amount) => {
    acc1.withdraw(amount)
    acc2.deposit(amount)
}

export default BankAccount
export {transfer}