// let aa=''
// let rn=[]


let mayuri = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 25,
    rollNo: 35,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(mayuri.firstName) //mayuri
console.log(mayuri['lastName'])//Katwe

console.log(mayuri.display) //function print
mayuri.display()


// let abc = mayuri.display //
// //function () {
// //     console.log(this.firstName + this.lastName)
// //unfedined+undefined ==> NaN
// // }
// // }
// console.log(abc) //function
// abc()


//call()
//bind()
//apply()

//1. bind()

// let a = mayuri.display.bind(mayuri)
// console.log(a)
// a()

// //2. call()
// mayuri.display.call(mayuri)

// //3. apply()
// mayuri.display.apply(mayuri)

//========================================


// let Mayurik = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Vaibhavk = {
//     firstName: "Vaibhav",
//     lastName: "Raut"
// }

// let y1 = Mayurik.display.bind(Vaibhavk)
// y1()

//=============================================

// let dinga = {
//     firstName: "Dinga"
// }

// let pinga = {
//     firstName: "Pinga"
// }

// let ranga = {
//     firstName: "Ranga"
// }

// let simga = {
//     firstName: "Simga"
// }

// let displayFirstName = function () {
//     console.log(this.firstName)
// }

// let s1=displayFirstName.bind(dinga)
// s1()

// displayFirstName.bind(simga)()

// displayFirstName.call(pinga)

// displayFirstName.apply(ranga)


//=========================================================

let dinga = {
    firstName: "Dinga"
}

let pinga = {
    firstName: "Pinga"
}

let ranga = {
    firstName: "Ranga"
}

let simga = {
    firstName: "Simga"
}

let displayFirstName = function (greet1, greet2) {
    console.log(`${greet1} ${this.firstName} ${greet2} !!!`)
}

//bind()
let y1=displayFirstName.bind(ranga,"GoodMorning","Have a nice day")
y1()

//call()
displayFirstName.call(dinga,"Good noon", "have a good day")

//apply()
displayFirstName.apply(simga,["Good night","Sweet Dream"])


//to set ref of this
//to use one method in multiple object





























// let add=function(){
//     console.log('hello')
// }
// console.log(add) //print
// add() //call



