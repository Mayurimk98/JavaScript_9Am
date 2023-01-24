//array

//push()
//unshift()
//pop()
//shift()
//reverese()
//includes()
//indexOf()
//join()
//flat()
//map()
//filter()
//reduce()
//forEach()

let student = ["Mayuri", "vaibhav", "ganesh", "shreeRam", "sathish"]
//good morning mayuri
//forEach => perform operation with each element
//return nothing

// student.forEach(function (el, index, arr) {
//     console.log("good morning " + el)
// })

student.forEach(function (el, index, arr) {
    if (index == 0) {
        console.log("good morning " + el)
    }
})



// //Some()
// //action
// //return //boolean
// // let numbers=[12,45,67,89,46,34,16,90]

// // let result=numbers.some(function(el,index,arr){
// //     return el>25
// // })
// // console.log(result)

// //every()
// // let numbers = [12, 45, 67, 89, 46, 34, 16, 90]
// // let res=numbers.every(function (el, index, arr) {
// //     return el > 10
// // })
// // console.log(res)


// //find()
// // let marks = [12, 45, 78, 90, 30, 35, 67, 89, 99]
// // //element >30
// // let aaa = marks.find(function (el, index, arr) {
// //     return el > 30
// // })
// // console.log(aaa)

findIndex()
let marks = [12, 45, 78, 90, 30, 35, 67, 89, 99]
let result=marks.findIndex(function(el){
    return el>30
})
console.log(result)


// //slice()
// // -         -9  -8  -7  -6  -5  -4  -3  -2  -1
// let marks = [12, 45, 78, 90, 30, 35, 67, 89, 99]
// //+           0   1   2   3   4   5   6   7   8

// //left to right

// //arrayName.slice(startposition,endposition)
// //endposition optional
// //endposition is always less than 1

// let a = marks.slice(1)
// console.log(a)

// let bb = marks.slice(5, 2) //right -left
// console.log(bb)

// let a1 = marks.slice(5, 8) //[35,67,89]
// console.log(a1)

// let a2 = marks.slice(-2, -7)
// console.log(a2)

// let a3 = marks.slice(-6, -2) //[90,30,35,67]
// console.log(a3)

// let a4 = marks.slice(2, -3) //[78,90,30,35]
// console.log(a4)







