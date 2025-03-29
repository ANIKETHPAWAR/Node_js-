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
const guestList = ["ani","rahul","sa","tra"];


const guest = Prompt("Enter your name :")
 function checking(){
    if (guestList.includes(guest)){
console.log(`welcome to the party ${guest}`)
    }else{
        console.log("Your not invited!!")
    }
 }
