
// //String => object

// //Object
// //property  && method

// //methods
// //1. action
// //2. return 

// //=======================================================

// // let student = "gauri"
// // console.log(student)
// // console.log(typeof student) //string

// // console.log(typeof 'mayuri') //string

// // console.log(typeof `30`) //string

// //=======================================================

// //string store value index wise 

// let firstName="Mayuri"

// //length count ==> 1
// //index count==> 0

// // M  a  y  u  r  i
// // 0  1  2  3  4  5
// console.log(firstName[0]) //M
// console.log(firstName[5]) //i
// console.log(firstName[3]) //u

//property ==> length ==> total no of char
// console.log(firstName.length)  //6

// let student = "shree ganesh"
// console.log(student.length)

//method
//1. toUpperCase()
//action => convert all char into capital case
//return => new string

// let fruit = "Apple"
// let a = fruit.toUpperCase()
// console.log(a) //APPLE

//facebook => sign up

//mayuri katwe
//Mayuri Katwe
//MAYURI KATWE
//vaibhav KATWE

//2. toLowerCase()
//action => to convert all char into small case
//return  => new string

// let fruit = "APPLE"
// let b=fruit.toLowerCase()
// console.log(b) //apple
// console.log(typeof b)

//3. indexOf()
//action => give the index of given char /of index not found ==> -1
//return => number

// let student = "Mayurii"

// // M  a  y  u  r  i i 
// // 0  1  2  3  4  5 6

// let a = student.indexOf('r')
// console.log(a) //4

// let b = student.indexOf('m')
// console.log(b)//-1

// let c = student.indexOf('i')
// console.log(c) //5

//4. includes()

//action=> find char or substring present in given string or not if found => true else false
//return => boolean

// let name1 = "Shree Ganesh"
// let s1 = name1.includes('Shree')
// console.log(s1)

// let s2 = name1.includes('ganesh')
// console.log(s2)

// let s3 = name1.includes('a')
// console.log(s3)

//5. trim()
// action => remove the space from start and end 
// return => new string

// let fullName = "  Mayuri  "
// console.log(fullName)
// console.log(fullName.length) //10
// let d1 = fullName.trim()
// console.log(d1)
// console.log(d1.length)


//6. trimStart()
// action => remove the space from start
// return => new string

// let fullName = "  Mayuri  "
// console.log(fullName)
// console.log(fullName.length) //10
// let d2 = fullName.trimStart()
// console.log(d2)
// console.log(d2.length) //8


//7. trimEnd()
// action => remove the space from end
// return => new string

let fullName = "  Mayuri  "
console.log(fullName)
console.log(fullName.length) //10
let d3 = fullName.trimEnd()
console.log(d3)
console.log(d3.length)






