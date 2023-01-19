// //length            1    2   3  4
// // index           0    1   2   3
// let rollNumber = [12, 45, 67, 90]
// console.log(rollNumber)

// console.log(typeof rollNumber) //object

// console.log(rollNumber[1])//45

// //firstvalue
// console.log(rollNumber[0])//12

// //lastvalue print
// console.log(rollNumber[3])//90

// console.log(rollNumber.length) //4


// console.log(rollNumber[rollNumber.length-1]) //rollNumber[3] //90


// let numbers=[2,4,5,6,7,8,9,7,6,45,435,789,678,65,67,89,54,34,12]
// console.log(numbers[numbers.length-1])

//1-5
// for (let i = 1; i < 6; i++) {
//     console.log(i)
// }
//                0         1      2       3             4
// let students = ["mayuri", "ram", "sham", "vaibhav", "shubham"]
// console.log(students[0])
// console.log(students[1])
// console.log(students[3])

// for(let i=0;i<students.length;i++){
//     //console.log(i)
//     console.log(students[i])
// }


//problem 1

// let birthYear = [1995, 1998, 1990, 1890, 2003]
// //current year-birthyear => age //2023-1995, 2023-1998
// //age = [28,25,30,34,20]

// let age = []
// for (let i = 0; i < birthYear.length; i++) {
//     //console.log(birthYear[i])
// //     //console.log(2023-birthYear[i])
// //     let ag = 2023 - birthYear[i]
// //     age.push(ag)
// // }
// // console.log(age)


// //===============================================================
// let scores=[23,45,67,89,65,34] //+2

// //newScore=[25,47,69,91,67,36]

// let newScore=[]

// for(let i=0;i<scores.length;i++){
//     //console.log(scores[i]+2)
//     let ns=scores[i]+2
//     newScore.push(ns)
// }
// console.log(newScore)

//===============================================================

// let numbers = [20, 12, 34, 67, 11, 09, 78, 99, 5, 2]
// //greter than 50 
// //[67,78,99]
// let greater50 = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 50) {
//         greater50.push(numbers[i])
//     }
// }

// console.log(greater50)

//==================================================

let marks = [23, 50, 10]
//sum=23+50+10 =>83
let sum = 0 //23 //73 //83
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i] //0+23 = 23 //  23+50 =>73 // 73+10 =>83
}
console.log(sum)


