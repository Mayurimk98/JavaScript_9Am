// //Javascript

// console.log('Mayuri')
// console.log(100)

// //info store
// //let
// //const

// let fruit="apple" //decalare
// //keyword varibaleName = value
// console.log(fruit) //apple

// fruit="Banana" //update
// console.log(fruit) //Banana

// const money=200
// console.log(money) //200 //print

// money=1500 //update
// console.log(money) //error


//arithmatic operator(+, - , *, /, %)
// let a = 500
// let b = 20

// // console.log(12 % 7) //5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// console.log('=============================')

// let c=20
// let d=5
// console.log(c+d)
// console.log(c-d)
// console.log(c*d)
// console.log(c/d)
// console.log(c%d)

//1 pair => 5 line
//100 pair => 500 line

//functions

// function arithmaticOperation (para1, para2){
//     //statements
// }
// arithmaticOperation(arg1, arg2) //call


// function calculator(a, b) {
//     console.log(a + b)
//     console.log(a - b)
//     console.log(a * b)
//     console.log(a / b)
//     console.log(a % b)
// }
// calculator(20,5) //call

// calculator(500,10)

// calculator(1500,700)

//1. function without parameter and without return type
function add() {
    console.log(10 + 5)
    console.log(2 * 4)
}
// add() //15
// add()
// add()
// add()
//output same, output value cant reused

//2. function with parameter and without return type

function add1(x, y) {
    console.log(x + y)
}

// add1(10,2)//12

// add1(20,5)//25

// add1(100,50) //150

//output change , output value cant be reused

//100 rs  => 100 show

//3. function with parameter and with return type

function add2(a1, a2) {
    return (a1 + a2)
}
let sum = add2(20, 10)
console.log(sum) //30

let x = add2(2, 5)
console.log(x) //7

console.log(x+x) //14

console.log(x-2) //5
