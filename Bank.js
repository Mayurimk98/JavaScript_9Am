//Bank account

//mayuri => 
//accName,accNumber,branch,bal
//deposit(), withdrawl(),transaction(),totalDeposite(),totalWithdrawl()

class Bank {
    constructor(accName, accNo, branch, bal) {
        this.accName = accName
        this.accNo = accNo
        this.branch = branch
        this.bal = bal
        this.transaction = []
    }
    deposite(amount) {
        this.bal = this.bal + amount
        this.transaction.push(amount)
        return this.bal
    }

    withdrawl(amount) {
        if (this.bal >= amount) {
            this.bal = this.bal - amount
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('Insufficient Balance')
        }
    }
    lastFiveTranscation() {
        return this.transaction.slice(-5)
    }

    totalDepositeA() {
        return this.transaction.filter((el) => {
            return el > 0
        }).reduce((acc, el) => {
            return acc + el
        }, 0)
    }

    totalWithdrawlA() {
        return this.transaction.filter(function (el) {
            return el < 0
        }).reduce(function (acc, el) {
            return acc + el
        }, 0)

    }
}

let mayuri = new Bank("MayuriK", 1234567, "Sinnar", 2000)
console.log(mayuri)
mayuri.deposite(200)
mayuri.withdrawl(500)
mayuri.deposite(400)
mayuri.withdrawl(50)
mayuri.deposite(220)
mayuri.withdrawl(300)
mayuri.withdrawl(900)
mayuri.deposite(200)
mayuri.deposite(400)
console.log(mayuri.transaction)
let tran = mayuri.lastFiveTranscation()
console.log(tran)

console.log(mayuri.totalDepositeA())
console.log(mayuri.totalWithdrawlA())








//       -9    -8   -7  -6   -5   -4   -3    -2   -1
// let t = [200, -500, 400,-50, 220, -300,-900, 200, 400]
// //        0     1     2   3   4     5    6     7    8

// t.slice(-8,-2)

















//2000 +200