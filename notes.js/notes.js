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




<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>LEARN's Amazing Apple Pie</title>
    <link rel="icon" type="image/x-icon" href="https://cdn.pixabay.com/photo/2018/08/31/14/33/apple-pie-3644790_1280.png">
  </head>
  <body>
    <h1 id="top">Apple Pie Recipe</h1>
    <a href="#recipe">
      <button>Take me to the recipe</button>
    </a>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufSX97M2dzXqF8u7e9s0oYh6dIV5oH1_L8w&usqp=CAU" alt="apple pie" height="100px"/>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    <h3 id="recipe">Ingredients</h3>
    <ul>
      <li>Granny Smith apples</li>
      <li>Sugar</li>
      <li>Cinnamon</li>
      <li>Nutmeg</li>
      <li>Flour</li>
    </ul>
    <table border=3>
      <tr>
        <td id="grannysmith" onclick="appleMaker('grannysmith')">Granny Smith</td>
        <td>Honeycrisp</td>
        <td>Golden Delicious</td>
      </tr>
      <tr>
        <td>Super tart and very firm</td>
        <td>Super crisp, tart, and sweet</td>
        <td>Little softer than the others</td>
      </tr>
      <tr>
        <td>Holds up the best</td>
        <td>Holds up great</td>
        <td>Holds up well</td>
      </tr>
    </table>
    <footer>
      &copy LEARN Instructors and TA's | Jumpstart |
      <a href="#top">Back to top |</a>
      <a href="https://littlespoonfarm.com/apple-pie-recipe/" target="_blank">A Similar Apple Pie Recipe</a>
    </footer>
    <script type="text/javascript" src="recipe.js"></script>
  </body>
</html>


alert("Find the apples")

// Create a function that will output different apple emojis when designated words are clicked.
// For example, Granny Smith will be replaced with 🍏
// For example, Honeycrisp will be replaced with 🍯
// For example, Golden Delicious will be replaced with 🍎

// Plan
// function named appleMaker
// use the variable apple to be a placeholder for my input
// use conditional statements to allow different responses for my input
// give a unique id to the html element that matches the id used in the comparison of the conditional statement
// document.getElementById() to edit the html element based on the unique id
// .innerHTML to change the html content
// add onclick attribute to the html element to allow the function to be triggered and respond based on the id related to the content that is clicked
// function call

const appleMaker = (apple) => {
  if(apple === "grannysmith") {
    document.getElementById("grannysmith").innerHTML = "🍏"
  }
}
console.log(appleMaker())


//StyleSheet.css

h1{
  color: green;
}
img{
  height: 100px
}
body{
  background-image: url('https://images.unsplash.com/photo-1622372738946-62e02505feb3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-color: beige;
  font-family: 'Twinkle Star', cursive;
  animation-duration: 5s;
  animation-name: slide-in;
}

@keyframes slide-in {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }
    
  to {
    margin-left: 0%;
    width: 100%;
  }
}

table{
  border-radius: 4px;
  /* border-width: 10px;
  border-style: groove;
  border-color: red; */
  border: 10px groove red;
  font-size: 40px;
  background-color: beige;
}
td{
  border:1px solid black;
}
p{
  background-color: beige;
}
h3{
  background-color: beige;
}
/* use id attributes as CSS selectors using # */
#first-paragraph{
  color: #B10DA3;
}

/* use class attributes as CSS selectors using . */

.purple{
  color: purple
}

.box{
  width: 30%;
  background-color: beige;
  /* using flex and justify here caused the image to center horizontally in its on box */
  display: flex;
  justify-content: center;
  /* margin-left: auto;
  margin-right: auto; */
  /* equivalent of saying margin-left, margin-right */
  margin: auto;
}

/* pseudo-class - keyword that is added to a selector that specifies the state of the element */

/* unvisited link */
a:link{
  color: green;
}

/* visited */
a:visited{
  color: purple;
}

button:hover{
  color: antiquewhite;
  background-color: green;
  font-size: 30px;
}

* {
  text-align: center;
}