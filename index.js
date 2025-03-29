const Prompt = require('prompt-sync')()
// const age = Prompt('Enter Your age');

// if (age <18){
//     return console.log("You get a 20% discount")
// }
// else if (age >18 && age<=65){
//     return console.log("Normal ticket price applies")

// }
// else{
//     console.log("You get a 30% senior discount")
// }

// problem 2
const length = Prompt('Enter length of rectangle :')
const width = Prompt("Enter width : ")

var area = length * width;
console.log (`The area of rectangle is ${area}`)