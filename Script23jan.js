
//array => methods

// let marks = [12, 45, 67, 90, 34, 25]
// console.log(typeof marks)

//+5
//[17,50....]
//for loop
// let plus5 = []
// for (let i = 0; i < marks.length; i++) {
//     //console.log(i)
//     //console.log(marks[i] + 5)

//     let newresult = marks[i] + 5
//     plus5.push(newresult)

// }
// console.log(plus5)

//map()
// let plus5 = marks.map(function (ele) {
//     return ele + 5
// })
// console.log(plus5)

//
// let marks = [12, 45, 67, 90, 34, 25, 12, 9, 5, 8]
//above 25
//[45,67,90,34]

//for loop
// let newArr = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 25) {
//         newArr.push(marks[i])
//     }
// }
// console.log(newArr)


// let even = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] % 2 == 0) {
//         even.push(marks[i])
//     }
// }
// console.log(even)

//filter
// let greater25 = marks.filter(function (el, index, arr) {
//     return el > 25
// })
// console.log(greater25)


// let evenNo = marks.filter((el, index, arr) => {
//     return el % 2 == 0

// })
// console.log(evenNo)

//JFYI// let evenNo = marks.filter((el, index, arr) =>  el % 2 == 0)
// console.log(evenNo)

let marks = [12, 45, 67, 90, 34, 25, 12, 9, 5, 8]
// let sum = 0

// for (let i = 0; i < marks.length; i++) {
//     sum = sum + marks[i]
// }
// console.log(sum)

// //avarage= sum /no of element

// let avg = sum / marks.length
// console.log(avg)

// let sum = marks.reduce(function (acc, ele, index, arr) {
//     return acc + ele
// },0)
// console.log(sum)

let student = ["mayuri", "vaibhav", "raj", "radhe"]
//welcome mayuri
//welcome vaibhav

// for (let i = 0; i < student.length; i++) {
//     console.log("welcome " + student[i])
// }

//forEach()
student.forEach(function(el,index,arr){
    console.log("welcome " + el)
})

//map()
//filter()
//reduce()
//forEach()











// let a = function () {
//     console.log('hello')
// }

// let a1=()=>{
//     console.log('hello 1')
// }










