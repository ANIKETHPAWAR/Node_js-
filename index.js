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
// const length = Prompt('Enter length of rectangle :')
// const width = Prompt("Enter width : ")

// var area = length * width;
// console.log (`The area of rectangle is ${area}`)

const product ={
    name : "Basketball",
    price : 600,
    instock : true
}
const product2 ={
    name : "Football",
    price : 900,
    instock : true
}
const product3 ={
    name : "Cricketball",
    price : 50,
    instock : true
}

const products = [product,product2,product3];

console.log(products)


//problem 4
// const guestList = ["ani","rahul","sa","tra"];


// const guest = Prompt("Enter your name :")
//  function checking(){
//     if (guestList.includes(guest)){
// console.log(`welcome to the party ${guest}`)
//     }else{
//         console.log("Your not invited!!")
//     }
//  }
//  problem 5

const Weather = {
    date  : "29-3-2025",
    temp : 38,
    conditions: "summer",
    humidity: "humid"

}

console.log(Weather.date)

// Day-2


//p-1

function calculateCircleArea(r){
    const area = r*r*3.14159;
    return console.log("Area : "+area)
}

calculateCircleArea(20)

//p-2
function op(){
    
}

function performOperation(a,b,op){
return console.log(op(a,b))
}

function add (a,b){
return a + b
}
function multiply (a,b){
    return a * b
}
function subtract (a,b){
    return a - b
    }

    function divide (a,b){
        return a / b
        }

performOperation(5,6,multiply)