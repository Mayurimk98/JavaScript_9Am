//actual diff for loop /while loop

//1-5 random

//guessing game

// let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
// console.log(randomNumber)

// let userInput = Number(prompt('Enter any number between 1-5')) //'8'

// if (userInput === randomNumber) {
//     console.log('Guess correct')
// }
// else {
//     console.log('Guess incorrect')
// }

//ternary operator
//userInput === randomNumber ? console.log('Guess correct') : console.log('Guess incorrect')

//===========================================================================================

//loop => for loop
//duration  => 3 chance

// let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
// console.log(randomNumber)

// for (let i = 1; i <= 3; i++) {
//     let userInput = Number(prompt('Enter any number between 1-5')) 

//     if (userInput === randomNumber) {
//         console.log('Guess correct')
//     }
//     else {
//         console.log('Guess incorrect')
//     }
// }

//=============================================================================

//for loop with break

// let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
// console.log(randomNumber)

// for (let i = 1; i <= 3; i++) {
//     let userInput = Number(prompt('Enter any number between 1-5'))

//     if (userInput === randomNumber) {
//         console.log('Guess correct')
//         break;
//     }
//     else {
//         console.log('Guess incorrect')
//     }
// }

//=================================================================================

//u dont know duration => while loop


// let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
// console.log(randomNumber) //3

// let userInput //undefined
// while (userInput != randomNumber) { //2!=3  //3!=3
//     userInput = Number(prompt('Enter any number between 1-5')) //2 //3
//     if (userInput === randomNumber) { //2===3 //3===3
//         console.log('Guess correct')
//     }
//     else {
//         console.log('Guess incorrect')
//     }
// }


// let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
// console.log(randomNumber) //3

// let userInput //undefined
// while (userInput != randomNumber) { //2!=3  //3!=3
//     userInput = Number(prompt('Enter any number between 1-5')) //2 //3
//     if (userInput === randomNumber) { //2===3 //3===3
//         console.log('Guess correct')
//         break;
//     }
//     else {
//         console.log('Guess incorrect')
//     }
// }





// let a
// console.log(a)


//for loop
//while loop
//do -- while

//==========================================================================

let randomNumber = Math.floor(Math.random() * 5) + 1 //0.0-0.99 => 0.0-4.9 =>0-4 =>1-5
console.log(randomNumber) //4

let userInput = Number(prompt('Enter any number between 1-5')) //4
while (userInput != randomNumber) {  //4 !=4
    userInput = Number(prompt('Enter any number between 1-5'))
    if (userInput === randomNumber) {
        console.log('Guess correct')
        break;
    }
    else {
        console.log('Guess incorrect')
    }
}

//do -- while



