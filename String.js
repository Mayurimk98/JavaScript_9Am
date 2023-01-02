

let rollNumber=[2,3,4] //array
console.log(typeof rollNumber)

let a=20 //number
console.log(typeof a)

let firstName="mayuri"
console.log(typeof firstName)


//Javacsript
//Object
//Property
//methods

//Person => Object
//property => height, weight, color, age, name
//method => walk(), talk(), sleep(), study()

//vehical => object
//property => color, model name, type, number
//method=> start(), stop()

//method study()
//action=> learn something
//return => marks, job

//String => Object

//property
//methods

// let fruit="Apple"
// console.log(fruit)//Apple

// console.log(typeof fruit) //String

// //string store value with index => 0
// // A    p   p   l   e
// // 0    1   2   3   4

// console.log(fruit[1]) //p
// console.log(fruit[0]) //A
// console.log(fruit[4]) //e

// //console.log(fruit[-1])

// //Property
// //length => total number of char
// console.log(fruit.length)

//methods
//1. toUpperCase()
//action => to conver all char of string into uppercase
//return => new string
// let a1=fruit.toUpperCase()
// console.log(a1) //APPLE
// console.log(typeof a1)

//2. toLowerCase()
//action => to convert all char into lowercase small case
//return => new string
// let a2=fruit.toLowerCase()
// console.log(a2) //apple
// console.log(typeof a2)

//3. indexOf()
//action => find the index of given char
//return => number if char not found (-1)

let fruit="Apple"
let x1=fruit.indexOf('p')
console.log(x1)

let x2=fruit.indexOf('e')
console.log(x2) //4

let x3=fruit.indexOf('L')
console.log(x3) //-1

//4. includes()
//action => find whether given char, substring present or not
//return => boolean

// let student="Shree ganesh"
// let y1=student.includes('h')
// console.log(y1)

// let y2=student.includes('ganesh')
// console.log(y2)

// let y3=student.includes('shree')
// console.log(y3)

// console.log(typeof y3)

//5. startsWith()
//action check if string starts with given char or substring
//return => boolean

let flower="lily"
let w1=flower.startsWith('l')
console.log(w1)
console.log(typeof w1)

let w2=flower.startsWith('li')  
console.log(w2)

let w3=flower.startsWith('L')
console.log(w3)

let w4=flower.startsWith('lly')
console.log(w4)




