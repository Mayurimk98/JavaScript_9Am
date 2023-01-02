//let and const

// let x = 10
// x = 20
// console.log(x) //20
// x = 100
// console.log(x) //100

// const y = 33
// console.log(y) //33
// y = 60 //update
// console.log(y) //error

//Arithmatic operator (+ - * / %)

// let x1 = 20
// let y1 = 2
// console.log(x1 + y1) //22
// console.log(x1 - y1) //18
// console.log(x1 * y1) //40
// console.log(x1 / y1) //10
// console.log(x1 % y1) //0

// let p1 = 50
// let q1 = 5
// console.log(p1 + q1)
// console.log(p1 - q1)
// console.log(p1 * q1)
// console.log(p1 / q1)
// console.log(p1 % q1)

//functions
// function calculator(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// calculator(20,5)

// calculator(100,2)

//1. function without parameter and without return type
// function add() {
//     console.log(10 + 5)
// }
// add() //15
// add() //15
// add()

// //2. function with parameter and without return type
// function add1(a, b) {
//     console.log(a + b)
// }
// add1(20, 3)
// add1(19, 5)
// add1(100, 3)

//3. function with parameter and with return type
// function add2(x, y) {
//     return x + y
// }
// let s1 = add2(50, 5)
// console.log(s1)
// console.log(s1 + s1) //110
// console.log(s1 * 2) //110
// console.log(s1 + 50) //55+50


//Type of function in javascript
//1. function declaration

// function addition(c, d) {
//     return c + d
// }
// let sum = addition(2, 5)
// console.log(sum) //7

// //2. function expression

// let addition2 = function (x, y) {
//     return x + y
// }
// let sum1 = addition2(5, 10)
// console.log(sum1) //15

// //3. arrow function //ES6
// let addition3 = (x, y) => {
//     return x + y
// }
// let sum2 = addition2(5, 10)
// console.log(sum1) //15


//function expression
let sum = function (x,y) {
    console.log(x + y)
}
sum(3, 5)

//arrow function
let studentInfo = () => {
    console.log('shree Ganesh')
}
studentInfo()

//function declaration
function mul(){
    console.log(5*10)
}
mul() //50































// let w1
// console.log(w1)
// console.log(undefined+undefined)