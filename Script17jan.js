
//array  => index 
//             0         1         2         3      4      5      
// let student=["Mayuri","vaibhav","Sathish","Jaya","habib","Mayuri"]
// console.log(student.length)

// console.log(student[1])

// console.log(student[4])

// console.log(student[5])


//Javacsript ===> Object
//object
//property
//method

//method
//action
//return 

//length => property


//method

//1. push()
//add element at last
//new length

// let marks = [22, 44, 55, 66, 77, 88, 99, 66, 44]
// let a = marks.push(1000)
// console.log(a) //10
// console.log(marks)

//2. unshift()
//add element at first
//new length
let marks = [22, 44, 55, 66, 77, 88, 99, 66, 44]
console.log(marks.unshift(456)) //10
console.log(marks)

//3. pop()
//remove the last element
//removed ele

// let flower = ['lily', 'jasmine', 'rose', 'sunflower']
// let a1 = flower.pop()
// console.log(a1) //sunflower
// console.log(flower)

//4. shift()
//remove first elemet
//return removed elemenet
// let flower = ['lily', 'jasmine', 'rose', 'sunflower']
// console.log(flower.shift()) //lily
// console.log(flower.length) //3
// console.log(flower)


//5. indexOf()
//give the index of given element if found and if not foud then return -1
//number (index)

//            0    1   2   3   4   5  6   7
// let scores = [23, 65, 89, 99, 56, 45, 34, 65]
// console.log(scores.indexOf(65)) //1
// console.log(scores.indexOf(45)) //5

// console.log(scores.indexOf(100))

// let names= ["ram","sham","ram","sita"]
// console.log(names.indexOf('ram')) //0


//6. includes()
//check whether element present in array or not if present then true if not then false
//boolean
// let scores = [23, 65, 89, 99, 56, 45, 34, 65]
// console.log(scores.includes(678))//false

// console.log(scores.includes(99))//true


//7. flat()
// convert all element into single array
//new array
//             0        1      2
let numbers=[[1,2,3],[4,5,6],[7,8,9]]
console.log(numbers[0]) //[1,2,3]

console.log(numbers[0][1])//2

console.log(numbers.flat())

//8. join()
//to connect all element
//string
let student=["mayuri","jaya","krishna"]
let a2=student.join()// mayuri,jaya,krishna
console.log(typeof a2)

console.log(student.join('@'))














