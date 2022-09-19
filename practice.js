alert("Once Upon a time there were some intrepid explorers who wandered into the amazon")
prompt("Hello, what's your name?")
var yourName = "Francisco"
`Hello ${yourName} Lets go exploring!`
var adjective = "funny"
var noun = "man"
var liquid = "hennesy"
var bodyPart = "elbow"
var verb = "smell"
var noun1 = "jar"
var place = "la la land" 
`Once Upon a time there were some intrepid explorers who wandered into the amazon. They found some amazing things! Piranhas are more ${adjective} during the day, so make sure you cross the ${noun} at night. Piranhas are attracted to fresh ${liquid} and will most likely take a bite out of your ${bodyPart} if you ${verb}. Whatever you do, if you have an open ${noun1} try and find another way to get back to ${place}. Good luck!`

// strict equality operators ===
// asking the questions are these things the same?
3 === 4
// output: false
15 === 15
// output: true

//boolean value is true or false

// relation operators < >
//asking the question is this thing greater than the other thing?

3 > 4
// output: false
3 < 4
// output: true


// conditional statement - a tool that can evaluate a condition and return a response
// aka if/else statements
// if - first keyword in a conditional statment
// if(condition is true) {
//   do this action
// } 
// ELSE IF - allows for additional conditional statemnets
//else if(condition is true) {
//    do this action
// }
// else - catch all, default response that covers
// else {
// do this action
// }


// age checker conditional statement

va myAge = 21 

if(myAge > 21) {
    alert("you can drink, vote, and learn how to code!")
} else if(myAge > 17) {
    alert("go vote and code but no drinking alchohol")
} else {
    alert("woohoo, you can still learn how to code but you're too young tp drink and vote!")
}

// console.log() - great for bug fixing, displays things 

console.log(myAge)

var myName = prompt("Hi, what's your name?")

var myResponse = prompt("Do you know how to write code?")

if(myResponse === "yes") {
    alert(`you will rule the world,  ${myName}`) 
} else if(myResponse === "no") {
    alert("well good luck with that.")
}

// FUNCTION - little coding machines, reusable blocks of code

// Process
// const - variable declaration
// function name with assignment operator
// () - pass data through the function
// => arrow syntax, replaces the keyword function
// {} code block, this area we write our code
// return - tells the function where to end, what to give as output
// function call - function name with ()

// example
// const myFunction = () => {
//    return this code block
// }
// myFunction()

//As a group – write a function that asks the user a question and returns an answer
//As a user, I see a prompt where I can ask a question
//As a user, I see an alert that tells me a random Magic 8 Ball answer
//Better not tell you now
//  It is decidedly so
//  Don’t count on it
//  Signs point to yes
//  Outlook not so good

//create a function
//const magic8 = () => {return}

// math.random() - generates a random number betwwen 0 and 0.9

Math.random()
// output : 0.3729987987
Math.random()
// output : .04987987928374

// multiply by a whole number
Math.random() * 5
// output: 4.2265787369

// use a method to round  the result to a whole number
// math.floor() rounds down to the nearest whole number
Math.floor(4.2265787369) 
// output: 4
Math.floor(4.988888)
//output: 4 

//const magic8 = () => {
//  return Math.floor(math.random() * 5)
// }
// magic8 = () 

//use a variable to store the random number
// const magic8 = () => {
 //   var randomNum = Math.floor(math.random() * 5 )
//    return randomNum
// }
// magic8()

// use conditional statments to output the different response
const magic8 = () => {
    var randomNum = Math.floor(math.random() * 5 )
//    return randomNum
if(random.Num === 0) { return "better not tell you now"
 } else if (randomNum === 1) {
     return "it is decidely so."
 } else if (randomNum === 2) { return "dont count on it"
 } else if (randomNum === 3) { return "signs point yes" 
} else if (randomNum === 4) {
    return "outlook not so good"
}
}
magic8()

var myName = prompt("Hi, what's your name?")

var myResponse = prompt("Do you know how to write code?")

if(myResponse === "yes") {
    alert(`you will rule the world,  ${myName}`) 
} else if(myResponse === "no") {
    alert("well good luck with that.")
} 
myName()

// JavaScript -- Jumpstart May 2022

// Created in 1995 Brenden Eich and Netscape.
// Java and JavaScript are different languages

// JavaScript has become the international standard for scripting languges and is included in almost every HTML website.

// ECMAScripting language 6

// A scripting languge that is dynamically typed, and interperted

// JavaScript can accept inputs and give us outputs.

// WHAT of JavaScript
// JavasScript Data Types

  // Numbers
  1234

  // addition +
    1 + 1
    5023 + 1234
    // --> output 6257

  // subtraction -
    5023 - 1234
    //  --> output 3789

  // multiplcation *
    5023 * 1234
    //  --> output 6198382

  //division /
    5023 / 1234
    //  --> output 4.070502431118315

  // Exponents **
    5023 ** 3
    //  --> output   126732947167

  // Modulo %
    5023 % 3
    //  --> output  1
    7 % 3
    //  --> output  1

  // JS follows PEMDAS as it orders it's operations
    7 * (8 + 9) - 10
    // output --> 109

// Strings - a "string" (bunch) of characters put together
// Strings are pieces of information that are shown as text
// String symbol is - ""

  "Austin"
  "my name"
  " " // spaces are characters
  "Hello how are y'all doing?"
  "This + that"

// Boolean
  // Bool was a mathematician that invented a kind of algrebra that utelized only 1's and 0's as true and false values.
  true
  false

//HOW of JavaScript
// Variable - a placeholder for some data

// variable declaration - var
  // "hey javascript I am gioving you a new variable to work with"
    // var

// variable name
  // a custom name that we as the developers come up with for this variable
  // names must always use the casing concention called camelCase
  // var dogName
  // var mayJumpstartTewentyTwentyTwo
  // var number

// the assignment operator =
  // var dogName =

// the data itself
  var dogName = "Sheldon"
  // ---> output "Sheldon"

// String Interpolation
// uses back tic's as the wrapper for the String
// uses $ and curly brackets { }
`Hey get out of the trash ${dogName}`

var userName = "purple_Alligator"

`Welcome back, ${userName}`
  // --> output 'Welcome back, purple_Alligator'

userName = "rickSanchez95"

`Welcome back, ${userName}`
// --> output 'Welcome back, rickSanchez95'

// Built-in Methods
alert()
prompt()

// built in methods can take data as arguments.
alert("Hello World")
prompt("How are you?")

var promptResponse = prompt("How are you?")

`Austin said ${promptResponse}`

// STRICT EQUALITY OPERATORS ===
// Asking the question are these things the same?
3 === 4
// Output: false
15 === 15
// Output: true

// Boolean value is true or false

// RELATIONAL OPERATORS < >
// Asking the question is this thing greater than the other thing?
3 > 4
// Output: false
3 < 4
// Output: true

// CONDITIONAL STATEMENTS - a tool that evaluate a condition and return a response
// aka if/else statements
// IF - first keyword in a conditional statement
// if(condition is true) {
//   do this action
// }
// ELSE IF - allows for additional conditional statements
// else if(condition is true) {
//     do this action
//   }
// ELSE - catch all, default response that covers every other possible condition
// else {
//   do this action
// }

// age checker conditional statement

var myAge = 21

if(myAge > 20) {
  alert("You can drink, vote, and learn how to code!")
} else if(myAge > 17) {
  alert("Go vote and code but no drinking alcohol!")
} else {
  alert("Woohoo, you can still learn how to code but you're too young to drink and vote!")
}
// Output: "You can drink, vote, and learn how to code!"

// Indentation is meant for readability.
// if(myAge > 20){alert("You can drink, vote, and learn how to code!")} else if(myAge > 17){alert("Go vote and code but no drinking alcohol!")}else{alert("Woohoo, you can still learn how to code but you're too young to drink and vote!")
// }

// console.log() - great for bug fixing, displays things
var myAge = 16
console.log(myAge)
// Output: 16

// FUNCTIONS - little coding machines, reusable blocks of code

// Process
// const - variable declaration
// function name with assignment operator
// () - pass data through the function
// => arrow syntax, replaces the keyword function
// {} code block, this area we write our code
// return - tells the function where to end, what to give as an output
// function call - function name with ()

// Example
// const myFunction = () => {
//   return this code block
// }
// myFunction()

// Magic 8 ball function
// As a group – write a function that asks the user a question and returns an answer
// As a user, I see a prompt where I can ask a question
// As a user, I see an alert that tells me a random Magic 8 Ball answer
//    Better not tell you now
//    It is decidedly so
//    Don't count on it
//    Signs point to yes
//    Outlook not so good

// Create a function
// const magic8 = () => {return }

// Use of Math.random()
// Math.random() - generates a random number between 0 and 0.9
Math.random()
// Output: 0.3737220387287852
Math.random()
// Output: 0.4958474102345065

// Multiply by a whole number
Math.random() * 5
// Output: 4.226587873691752

// Use a method to round the results to a whole number
// Math.floor() rounds down to the nearest whole number
Math.floor(4.226587873691752)
// Output: 4
Math.floor(4.988888)
// Output: 4

// const magic8 = () => {
//   return Math.floor(Math.random() * 5)
// }
// magic8()

// use a variable to store the random numbers
// const magic8 = () => {
//   var randomNum = Math.floor(Math.random() * 5)
//   return randomNum
// }
// magic8()

// use conditional statements to output the different responses
// const magic8 = () => {
//   var randomNum = Math.floor(Math.random() * 5)
//   // return randomNum
//   if(randomNum === 0) {
//     return "Better not tell you now"
//   } else if(randomNum === 1) {
//     return "It is decidedly so"
//   } else if(randomNum === 2) {
//     return "Don't count on it"
//   } else if(randomNum === 3) {
//     return "Signs point to yes"
//   } else if(randomNum === 4) {
//     return "Outlook not so good"
//   }
// }
// magic8()

// use console.log to see the randomNum passed to the function
const magic8 = () => {
  var randomNum = Math.floor(Math.random() * 5)
  console.log(randomNum)
  if(randomNum === 0) {
    return "Better not tell you now"
  } else if(randomNum === 1) {
    return "It is decidedly so"
  } else if(randomNum === 2) {
    return "Don't count on it"
  } else if(randomNum === 3) {
    return "Signs point to yes"
  } else if(randomNum === 4) {
    return "Outlook not so good"
  }
}
console.log(magic8())
var myName = prompt("Hi, what's your name?")

var myResponse = prompt("Do you know how to write code?")

if(myResponse === "yes") {
    alert(`you will rule the world,  ${myName}`) 
} else if(myResponse === "no") {
    alert("well good luck with that.")

const myName = (worldDomination) => {
    if(randomNum === 0) {
      return "Better not tell you now"
    } else if(randomNum === 1) {
      return "It is decidedly so"
    } else if(randomNum === 2) {
      return "Don't count on it"
    } else if(randomNum === 3) {
      return "Signs point to yes"
    } else if(randomNum === 4) {
      return "Outlook not so good"
    }
  }
  console.log(magic8())

