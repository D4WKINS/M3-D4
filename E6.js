// function(){
//   var x
// }

// function(){ // function scope
//   var x
// }

// if(){ // block scope
//   let x // let and const are visible only inside the block scope
//   var y // var is visible outside the block scope
// }

// var x = 10
// console.log(x) // 10

// if (true) {
//   var x = 2
//   console.log(x) // 2
// }

// console.log(x) // 2

// var x = 10
// console.log(x) // 10

// if (true) {
//   let x = 2
//   console.log(x) // 2
// }

// console.log(x) // 10

// ******************************* FUNCTIONS

// default parameters
// const multiply = (a, b = 2) => a * b // b is a default parameter

// console.log(multiply(5, 5))

// const multiply = (a, b) => {
//   if (!b) b = 2
//   return a * b
// }

// rest parameters

// const multiply = (a, b = 2) => a * b

// multiply(1, 2, 3, 4, 5, 6, 7)

// const withRestParams = (param1, ...rest) => {
//   console.log(param1)
//   console.log("REST: ", rest)
// }

// withRestParams(1, 2, 3, 4, 5, 6, 7)

// arrow functions

// this

// const myObject = {
//   name: "John",
//   myMethod: function () {
//     console.log(this)
//     return this.name
//   },
// }

// console.log(myObject.myMethod())

// const myObject = {
//   name: "John",
//   myMethod: () => {
//     console.log("THIS --> ", this)
//     return this.name
//   },
// }

// console.log(myObject.myMethod())

// const myObject = {
//   name: "John",
//   jobs: ["Student", "War Veteran"],
//   myMethod: function () {
//     console.log("FIRST THIS --> ", this)
//     this.jobs.forEach(function (job) {
//       console.log("SECOND THIS --> ", this)
//       console.log(`${this.name} is a ${job}`)
//     })
//     return this.jobs
//   },
// }
// console.log(myObject.myMethod())

// const myObject = {
//   name: "John",
//   jobs: ["Student", "War Veteran"],
//   myMethod: function () {
//     console.log("FIRST THIS --> ", this)
//     this.jobs.forEach(job => {
//       console.log("SECOND THIS --> ", this)
//       console.log(`${this.name} is a ${job}`)
//     })
//     return this.jobs
//   },
// }
// console.log(myObject.myMethod())

// button.addEventListener('click', function(){
//   console.log('Clicked')
//   this.classList.remove() // this represents the button itself
// })

// button.addEventListener('click', () => {
//   console.log('Clicked')
//   this.classList.remove() // this DOES NOT represent the button, this is inherited from the outer scope (global variable objects --> window object)
// })

// *********************************** OBJECTS

// function myFunction(name, surname) {
//   // OLD WAY
//   return {
//     name: name,
//     surname: surname,
//   }
// }

// function myFunction(name, surname) {
//   // NEW WAY - SHORTHAND SYNTAX
//   return {
//     name,
//     surname,
//   }
// }

// console.log(myFunction("John", "Rambo"))

// DESTRUCTURING

// const student = {
//   name: "John",
//   surname: "Rambo",
// }

// // OLD WAY
// // const name = student.name
// // const surname = student.surname
// // const age = student.age ? student.age : 18

// const { name, surname, age = 18 } = student

// console.log(name)
// console.log(surname)
// console.log(age)

// const letters = ["a", "b", "c", "d", "e"]

// const [, , thirdLetter, , , sixthLetter = "f"] = letters

// console.log(thirdLetter)
// console.log(sixthLetter)

// rest items

// const [, , thirdLetter, ...rest] = letters

// console.log(rest)

// destructuring function parameters

// const myFunction = (value, { name, lastName, age = 19 } = {}) => {
//   console.log(name)
//   console.log(lastName)
//   console.log(age)
//   console.log(value)
// }

// myFunction( { name: "John", lastName: "Rambo", age: 20 })

// SPREAD OPERATOR

// const student = {
//   name: "John",
//   surname: "Rambo",
// }

// const anotherStudent = {...student}

// const student2 = {
//   firstName: "Arnold",
//   surname: "Schwarzenegger",
//   planet: "Mars",
// }

// const student3 = { ...student, planet: "Earth", ...student2 }

// console.log(student3)

// const sentence = ["This", "is", "a", "sentence"]

// console.log(...sentence)

// const aString = "Strive is great!"
// console.log("...aString")
// console.log([...aString])

// const arr1 = [1, 2, 3]
// const arr2 = [1, 5, 6]

// const arr3 = [...arr1, 123, 345345, ...arr2]
// console.log(arr3)

// const arr4 = [...arr3]
// console.log(arr3)

// *********************************************** ARRAY METHODS

// const letters = ["a", "b", "c", "d", "e"]
// console.log(letters.some(letter => letter === "f"))

// console.log(letters.every(letter => letter === "a"))

// const anArrayOfArrays = [[1, 2], 3, [4, 5, 6]]

// console.log(anArrayOfArrays.flat())
// console.log(anArrayOfArrays)

// const anArrayOfNumbers = [1, 2, 7, 4, 5, 6, 7, 8, 9]

// console.log(anArrayOfNumbers.find(number => number > 10))
// console.log(anArrayOfNumbers.findIndex(number => number > 6))

// anArrayOfNumbers.fill({}, 4, 6)

// console.log(anArrayOfNumbers)

// console.log(anArrayOfNumbers.includes(10))

// console.log(anArrayOfNumbers.slice(4,7))

// console.log(anArrayOfNumbers)

// anArrayOfNumbers.splice(4, 3)

// console.log(anArrayOfNumbers)