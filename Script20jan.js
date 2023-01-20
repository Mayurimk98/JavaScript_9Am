
//array
// let rollNumber = [20, 10, 56, 78, 34, 89, 98, 78]
// //+5
// //[25,15..]
// let newRollNo = []
// for (let i = 0; i < rollNumber.length; i++) {
//     let newRN = rollNumber[i] + 5
//     newRollNo.push(newRN)
// }
// console.log(newRollNo)

//map()
//action => perform operator with each and every element of array
//return => new array

// let rollNumber = [20, 10, 56, 78, 34, 89, 98, 78]
// let newRollNo = rollNumber.map(function (element, index, array) {
//     return element + 5
// })
// console.log(newRollNo)


// let birthYear=[1995,1998,1890,2003,2000]
// //current age
// let age=birthYear.map(function(el){
//     return 2023-el
// })
// console.log(age)

// let scores = [23, 12, 78, 90, 45, 67, 09, 11, 65]

// //score greater than 50[78,90,67]

// // let greater50 = []
// // for (let i = 0; i < scores.length; i++) {
// //     if (scores[i] > 50) {
// //         greater50.push(scores[i])
// //     }
// // }
// // console.log(greater50)

// //filter()
// //action => filter out the element based on condition
// //return  => new array

// let greater50 = scores.filter(function (element, index, array) {
//     return element > 50
// })
// console.log(greater50)


// let marks = [12, 45, 67, 10]
// let val = 0 //12 //57 //124 //134

// for (let i = 0; i < marks.length; i++) {
//     val = val + marks[i]
// }
// console.log(val)

// 0+12 => 12
// 12+45=> 57
// 57+67=>124
// 124+10=>134

//reduce()
// let sum = marks.reduce(function (accumulator, element, index, array) {
//     return accumulator + element
// }, 0)
// console.log(sum)

// let sum = marks.reduce(function (accumulator, element, index, array) {
//     return accumulator + element
// }, 10)
// console.log(sum)


let marks = [12, 45, 67, 10]
//reduce()
let a1=marks.reduce(function (accumulator, element, index, array) {
    return accumulator + element
}, 0)

console.log(a1)









