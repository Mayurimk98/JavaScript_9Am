
// String
// Array

//Object

// let names = ["Mayuri", "Rahul", "Dinesh", "Rohan", "navi"]
// //1. add ==> "Shantanu"

// // names.push('Shantanu')
// // names.unshift('yogesh')
// console.log(names)

// //2. retrive
// console.log(names[1])
// console.log(names.length) //5

// console.log(names[names.length-1]) //

// //3.update
// names[1]="vaibhav"
// console.log(names)

// //4. delete
// names.pop()
// names.shift()
// console.log(names)


let student = ["mayuri", "kumari", 32, 25]
//array ==> index

//Object
//key : value  => property
let studentOne = {
    firstName: "Mayuri",
    lastName: "Kumari",
    age: 32,
    rollNumber: 25
}

//add/create ,  retrive  . update, delete

//1. retrive (bracket notation, dot notation)
//dot notation
console.log(studentOne.firstName) //Mayuri
console.log(studentOne.age) //32
console.log(studentOne.lastName)//Kumari
console.log(studentOne.rollNumber) //25

//braket notation
console.log(studentOne['firstName']) //mayuri
console.log(studentOne["age"])//32


//add(braket notation, dot notation)
//dot
studentOne.skill = "Javascript"
console.log(studentOne)

studentOne["language"] = "Marathi"
console.log(studentOne)

//update (braket notation, dot notation)
studentOne.firstName = "Vaibhav"
console.log(studentOne)

studentOne["age"] = 12
console.log(studentOne)

//delete
delete studentOne.firstName
console.log(studentOne)

delete studentOne['skill']
console.log(studentOne)

//CRUD
//Create/ add
//retrive
//Update
//Delete











