
//slice()

//         -8  -7  -6  -5   -4 -3  -2  -1
// let num = [23, 56, 78, 11, 22, 33, 55, 99]
// //         0    1   2   3   4  5   6  7
// console.log(num.slice(4)) //[22,33,55,99]

// console.log(num.slice(-4,0)) //[]

// console.log(num.slice(2,6)) //[78,11,22,33]


//splice()
//return => removed element array
// let marks = [11, 22, 33, 44, 55, 66, 77, 88]
// //            0   1  2    3   4   5   6   7
// //arrayName.splice(startindex, no of delet element,replace1,replace2)

// // console.log(marks.splice(1, 2, 100, 200)) //
// // console.log(marks)

// let a=marks.splice(2,3)
// console.log(a)  //[33,44,55]
// console.log(marks) //[11,22,66,77,88]


//fill()
// let marks = [11, 22, 33, 44, 55, 66, 77, 88]
// //            0   1  2    3   4   5   6   7

// //arrayName.fill(replaceValue, startposition,endposition)

// // let y1=marks.fill(200,2)
// // console.log(y1) //[11,22,200,200,200,200,200,200]

// let y2 = marks.fill('mayuri', 3, 6) //[11,22,33,'mayuri',"mayuri","mayuri",77,88]
// console.log(y2)


//at()
// let marks = [11, 22, 33, 44, 55, 66, 77, 88]
// //            0   1  2    3   4   5   6   7

// let a = marks.at(5)
// console.log(a)

// let b = marks.at(7)
// console.log(b)

// let c = marks.at(10)
// console.log(c) //undefined


//concat()
let a = [2, 3, 4]
let b = [10, 20, 30]
let c=[99,90,98]
let d=[100,200,300]

// let result = a.concat(b)
// console.log(result)

// let res1 = b.concat(a)
// console.log(res1)

console.log(a.concat(b)) //[2,3,4,10,20,30]
console.log(b.concat(a)) //[10,20,30,2,3,4]

console.log(a.concat(b).concat(c).concat(d))





//slice()
//splice()
//fill()
//at()
//concat()