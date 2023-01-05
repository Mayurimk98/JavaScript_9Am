
//1-10

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

//for loop 1-10 addition

// let sum = 0 //1 //3 //6
// for (let i = 1; i <= 10; i++) {
//     //console.log(i)
//     sum = sum + i

// }
// console.log(sum)

// //sum+i => 0+1
// //sum+i => 1+2
// //sum+i=> 3+3

//======================================================
//for loop => duration 
//while => dont duration

//syntax(while loop)

// initialization
// while(condition){
//     statements

//     increment/decrement
// }

//1-5 print (forward loop)
// let i = 1  
// while (i <= 5) {  //1<=5 2<=5 3<=5 4<=5 5<=5 6<=5
//     console.log(i) //1 2 3 4 5
//     i++  //2 3 4 5 6
// }

//2 table 
// let i = 2
// while (i <= 20) {
//     console.log(i)
//     i = i + 2
// }

//8 table
// let j = 8
// while (j <= 80) {
//     console.log(j)
//     j = j + 8
// }

//reverse
//10-1
// let i = 10
// while (i > 0) {
//     console.log(i)
//     i--
// }

//break
//continue

//1- 5  after 3 break
// let i = 1 
// while (i < 6) { //1<6  2<6  3<6
//     if (i == 3) { //1==3 2==3 3==3
//         break
//     }
//     console.log(i)  //1 2
//     i++ //2 3
// }

// let j = 1
// while (j <= 5) { //1<=5 2<=5 3<=5
//     console.log(j) //1 2 3
//     if (j == 3) {  //1==3 2==3 3==3
//         break
//     }
//     j++ //2 3
// }

//1-5
let i = 1
while (i <= 5) { //1<=5 2<=5 3<=5 3
    if (i == 3) { //1==3  2==3 3==3
        i++
        continue
    }
    console.log(i) //1 2
    i++ //2 3
}
