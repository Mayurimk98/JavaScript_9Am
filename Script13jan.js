
//1-5 random number

// Math.floor(Math.random()*5)+1  //0.0-0.9 =>0.0-4.9 =>0-4

// // Math.floor(12.5) //12

// //1-10 
// Math.floor(Math.random()*10)+1


//guess game(1 chance)
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// let userInput = Number(prompt('Enter number between 1-5'))

// if (userInput === randomNumber) {
//     console.log('guess is correct')
// }
// else {
//     console.log('guess is incorrect')
// }

//user 3 chance => known the duration

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 1; i <= 3; i++) {
//     let userInput = Number(prompt('Enter number between 1-5'))
//     if (userInput === randomNumber) {
//         console.log('guess is correct')
//         break;
//     }
//     else {
//         console.log('guess is incorrect')
//     }
// }

//do not know duration =>while
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userInput
// while (userInput != randomNumber) {
//     userInput = Number(prompt('Enter number between 1-5'))
//     if (userInput === randomNumber) {
//         console.log('guess is correct')
//         break;
//     }
//     else {
//         console.log('guess is incorrect')
//     }
// }


// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) //4
// let userInput = Number(prompt('Enter number between 1-5')) //4
// while (userInput != randomNumber) {
//     userInput = Number(prompt('Enter number between 1-5'))
//     if (userInput === randomNumber) {
//         console.log('guess is correct')
//         break;
//     }
//     else {
//         console.log('guess is incorrect')
//     }
// }

//do while

// let i = 1
// do {
//     console.log(i) //1 //2 //3
//     i++ //2  3 4
// }
// while (i <= 3) //2<=3 3<=3 4<=3




//do while

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)
let userInput

do {
    userInput = Number(prompt('Enter number between 1-5'))
    if (userInput === randomNumber) {
        console.log('guess is correc!!!')
    }
    else {
        console.log('guess is incorrect!!')
    }
}
while (userInput != randomNumber)





