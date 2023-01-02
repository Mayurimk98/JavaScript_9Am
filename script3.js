
//let const

// let firstName = "Mayuri"
// console.log(firstName)//Mayuri
// firstName = "jyoti" //update
// console.log(firstName) //jyoti

// let x = 20
// x = 100
// console.log(x) //100

// const rollNumber = 31
// rollNumber = 41
// console.log(rollNumber) //error

//arithmatic operator(+ - * / %)
// let a = 20
// let b = 2
// console.log(a + b) //22
// console.log(a - b) //18
// console.log(a * b) //40
// console.log(a / b) //10
// console.log(a % b) //0

// let x = 500
// let y = 100
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)

//function
// function operation(x,y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x / y)
//     console.log(x % y)
// }
// operation(5,10)
// console.log('================')
// operation(500,50)

//1. function without parameter and without return type

// function add() {
//     console.log(10 + 5)
// }
// add() //15
// add() //15
// add()//15

//output always same , output value cant be reused

//2. function with parameter and without return type
// function add1(p, q) {
//     console.log(p + q)
// }
// add1(50,20) //70

// add1(60,10) //70

// add1(55,90) //145

// add1(10,2) //12

//200 => show

//3. function with parameter and with return type

// function add3(a, b) {
//     return (a + b)
// // }
// // // let sum = add3(20, 5) // let sum =25
// // // console.log(sum)

// // // console.log(add3(2,4)) //6
// // // console.log(add3(10,20)) //30

// // let a = add3(2, 2)
// // console.log(a) //4

// // console.log(add2(2,2))

// //===========================================================

// //type of function in javascript => structure

// //1. function declaration
// function addition(x, y) {
//     return (x + y)
// }
// let result = addition(2, 4)
// console.log(result) //6

// //2. function expression
// let addition1 = function (x, y) {
//     return (x + y)
// }
// let res = addition1(5, 5)
// console.log(res) //10

// //3. arrow function(Es6 Javascript)
// let addition3 = (a, b) => {
//     return a + b
// }
// let res2 = addition3(10, 2)
// console.log(res2)


//function expression
let mul = function () {
    console.log('mayuri')
}
mul()

//function declaration
function mul1(x, y) {
    return (x, y)
}
let a = mul1(2, 3)
console.log(a)

//arrow function
let sum = (a, b) => {
    console.log(a + b)
}
sum()



























