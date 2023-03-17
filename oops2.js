
//object literal
// let mayuri = {
//     firstName: "Mayuri",
//     skill: "javascript",
//     display: function () {
//         console.log('hello')
//     }
// }

// let jaya = {
//     firstName: "Jaya",
//     skill: "python",
//     display: function () {
//         console.log('bye')
//     }
// }
// //CRUD
// mayuri.display()//hello

//string,array


//100 member

//pattent

//function constructor
//Es6 class
//object.create()

//==================================================

//ES6 class

//1. without constructor

// class Human {
//     firstName = "mayuri"
//     skill = "java"
//     display() {
//         console.log(this.firstName)
//     }
// }

// let habib = new Human()
// console.log(habib)
// habib.display() //mayuri

// let amol=new Human()
// console.log(amol)


//setting object property outside of class

// class Human {
//     firstName = undefined
//     skill = undefined
//     display() {
//         console.log(this.firstName)
//     }
// }

// let dinga = new Human()
// console.log(dinga)
// dinga.firstName = "dinga"
// dinga.skill = "SQL"
// console.log(dinga)

// let pinga = new Human()
// console.log(pinga)
// pinga.firstName = "pinga"
// pinga.skill = "HTML"
// console.log(pinga)
// pinga.display()

//==============================================================================
//2. with constructor

class HumanA{
   constructor(firstName,skill) {
    this.firstName=firstName
    this.skill=skill
   }
   display(){
    console.log(this.firstName)
   }
}
let ranga=new HumanA("Ranga","React")
console.log(ranga)

















//3. by using function/method
//4. set get keyword



