

// class Student {
//     firstName = "Mayuri"
//     lastName = "katwe"
//     age = 25
//     rollNo = 30
// }

// class Teacher extends Student {
//     skill = "Javascript"
// }

// let mayuriA = new Student()
// console.log(mayuriA)
// console.log(mayuriA.firstName)
// console.log(mayuriA.lastName)
// console.log(mayuriA.age)
// console.log(mayuriA.rollNo)

// let vaibhvK = new Teacher()
// console.log(vaibhvK)

//======================================================

// class Student{
//     constructor(firstName,lastName,age,rollNo){
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//         this.rollNumber=rollNo
//     }
//     displayFullName(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// class Teacher extends Student{
//     skills=["java","python","SQL"]
//     displaySkill(){
//         console.log(this.firstName)
//         console.log(this.skills)
//     }
// }

// let kartik=new Teacher("Kartik","Patil",34,12)
// console.log(kartik)
// kartik.displayFullName() //Kartikpatil
// kartik.displaySkill() //["java","python","SQL"]

//==============================================================

// class Student {
//     constructor(fn, ln, ag, rn) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNumber = rn
//     }
//     displayFullName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student{
//     constructor(fn,ln,ag,rn,skill,salary){
//         super(fn,ln,ag,rn)
//         this.skills=skill
//         this.salary=salary
//     }
//     displaySkillandSalary(){
//         console.log(this.age)
//         console.log(this.firstName+this.lastName)
//         console.log(this.skills+this.salary)
//         console.log(this.salary)
//     }
// }

// let jaya=new Teacher("Jaya","kumari",40,34,"SQL",40000)
// console.log(jaya)
// jaya.displaySkillandSalary()
// jaya.displayFullName()//jayakumari

// let maya=new Student("Mayuri","katwe",23,78)
// //maya.displaySkillandSalary() //not possible
// maya.displayFullName()

//==============================================================================


class Student {
    constructor(fullName, adharNo, DOB) {
        this.fullName = fullName
        this.adharNo = adharNo
        this.dateOfBirth = DOB
    }
    display(){
        console.log(this.fullName)
    }
}

class Teacher extends Student{
    constructor(fullName,adharNo,DOB,salary){
        super(fullName,adharNo,DOB)
        this.salary=salary
    }
    displySalary(){
        console.log(this.fullName)
        console.log(this.salary)
    }

}

class Professor extends Teacher{
    //4 property and 2 method
    constructor(fullName,adharNo,DOB,salary,skill){
        super(fullName,adharNo,DOB,salary)
        this.skill=skill
    }
    displaySkill(){
        console.log(this.skill)
    }
}


let mayuri=new Student("mayuri",123456,"05/02/1998")
console.log(mayuri.fullName)
console.log(mayuri.adharNo)
console.log(mayuri.dateOfBirth)
// console.log(mayuri.salary)//not possible
// console.log(mayuri.skill)//not possible
mayuri.display()
// mayuri.displaySkill() not possible
// mayuri.displySalary()not possible

let sathish=new Professor("sathishkumar",98765432,"04/02/1991",50000,"HTML")
console.log(sathish)
sathish.display()
sathish.displaySkill()
sathish.displySalary()

let amit=new Teacher("amitSharma",433672727,'04/07/1989',100000)
console.log(amit)
amit.display()
//amit.displaySkill() not
amit.displySalary()
