//javascript

//String

//Javascript => Object
//Property 
//Method

//Methods=>
//Action
//return 

//String => Object
//Property => length

let firstName = "Mayuri mahendra katwe"
console.log(typeof firstName) //String
console.log(firstName) //Mayuri

//string => value => index
//M  a  y  u  r  i
//0  1  2  3  4  5  => index
//1  2  3  4  5  6  => length

console.log(firstName[4]) //r
console.log(firstName[5]) //i

//to get total char of string
console.log(firstName.length) //6

//to get firstchar of string
console.log(firstName[0]) //M

//to get last char
// console.log(firstName.length) //21
// console.log(firstName[20]) //e

console.log(firstName[firstName.length - 1])

let state = "maharashtra asdfgh hdjdkk kkkakkaop"
console.log(state.length)
console.log(state[state.length - 1])

//string method
//1. toUpperCase() =>
//action => capital case 
//return => new string

// let city="nashik"
// let a=city.toUpperCase()
// console.log(a) //NASHIK

// console.log(city.toUpperCase()) //NASHIK

//2. toLowerCase()
//action => small case
//return => new string

// let city = "PUNE"
// console.log(city.toLowerCase()) //pune

//3. indexOf()
//action => find index of given char
//return  => number , -1

// let city1 = "pune"
// let a = city1.indexOf('n')
// console.log(a) //2

// let b = city1.indexOf('E')
// console.log(b) //-1


//4. includes()
//action => check the given char is present in string or not if present true if not false
//return => boolean
// let student = "Shree Ganesh"
// let s1 = student.includes('Shree')//substring
// console.log(s1)//true
// console.log(typeof s1)

// let s2 = student.includes('G')
// console.log(s2)

// let s3 = student.includes('s')
// console.log(s3)

// let s4=student.includes('E')
// console.log(s4)

//5. startsWith()
//action => check whether the string starts with given char or not
//return => boolean

// let fruit="Apple"
// let d1=fruit.startsWith("A")
// console.log(d1)

// let d2=fruit.startsWith(`App`)
// console.log(d2)

// let d3=fruit.startsWith('ppl')
// console.log(d3)

// let d4=fruit.startsWith('Ale')
// console.log(d4)

//6. endsWith()
//action => check whether the string end with given char or substring or not
//return => boolean(true false)

let flower = 'jasmin e'

console.log(flower.endsWith('e'))

let y1=flower.endsWith('min e')
console.log(y1)

let y2=flower.endsWith('sne')
console.log(y2)

console.log(flower.endsWith('ne'))


let name1="mmayyurim"
let a=name1.indexOf('m')
console.log(a) //0
















