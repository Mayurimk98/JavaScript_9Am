//string

//1. toUppercase()
//2. toLowercase()
//3. indexOf() //-1
//4. includes()
//5. trim()
//6. trimStart()
//7. trimEnd()

// let flower = "jasmin"

// j  a  s  m  i  n
// 0  1  2  3  4  5
// console.log(flower)
// console.log(typeof flower)
// console.log(flower[2]) //s

// console.log(flower.length)


//8. startWith()
//action => check whether string starts with given char /substring
//return ==> boolean

// let flower = "jasmin"
// let a = flower.startsWith('j')
// console.log(a)

// let b = flower.startsWith('jas')
// console.log(b)

// let c = flower.startsWith('Ja')
// console.log(c)

// let d=flower.startsWith('min')
// console.log(d)

//8. endsWith()
//action => check whether string end with given char /substring
//return ==> boolean

// let firstName="Shree Ganesh"
// let s1=firstName.endsWith('ganesh')
// console.log(s1)

// let s2=firstName.endsWith('Ganesh')
// console.log(s2)

// console.log(firstName.endsWith('h'))

//9. slice()
//action  ==> break string as per start and end index
//return  => string

// let firstName = "Shree Ganesh"

//-12  -11 -10  -9 -8  -7   -6  -5 -4  -3  -2  -1
// S    h   r   e   e       G   a   n   e   s   h
// 0    1   2   3   4   5   6   7   8   9   10  11
// left ==> right
//right ==> left ==> blank string
//string.slice(startPosition, endposition)
//endposition optional
//endposition number is always less that 1

// let a1 = firstName.slice(6)
// console.log(a1) //Ganesh

// let a2 = firstName.slice(4, 10)
// console.log(a2) //e  Gane

// let a3 = firstName.slice(-3)
// console.log(a3) //esh

// let a4 = firstName.slice(9, 4)
// console.log(a4)

// let a5=firstName.slice(-9,-3)
// console.log(a5)

// let a6=firstName.slice(2,-4)
// console.log(a6)


//10. split()
//return => array

// let firstName="mayuri k"
// let d1=firstName.split('y')
// console.log(d1) //['ma', ' uri k]

// let d2=firstName.split(' ')
// console.log(d2) //['mayuri','k']

// let d3=firstName.split('')
// console.log(d3)


//11. charAt()
// if index not found ==> blank string
let firstName = "mayuri"
// m  a  y  u  r i
// 0  1  2  3  4  5
let s1 = firstName.charAt(1)
console.log(s1)

let s2 = firstName.charAt(7)
console.log(s2)

console.log(firstName.charAt(5))

//12. charCodeAt()
//ASCII value return 

console.log(firstName.charCodeAt(2))//y
console.log(firstName.charCodeAt(8)) //NAN

console.log(undefined+undefined)









//array ==> join() => string
//string => split() => array








