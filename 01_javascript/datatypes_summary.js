//primitive

//types : 7 => string, number, boolean, null, undefined, symbol, bigint


let num = 100 //dataType number
let newNum = 100.30 //dataType number

const isLoggedIn = true //dataType boolean
const outSideTemp = null //dataType object

const id = Symbol('123')  //dataType object
const anotherId = Symbol('123') //dataType object

const bigNum = 1234567n //dataType bigInt
// console.log(id === anotherId);


//Referance (Non primitive) => Array, Objects, Functions

let arr = ["Aryan", "Viraj", "Raj", "Nikhil"]; //dataType object

const student = {
    name : "Aryan",
    age : 18,
    isPass : true,
    score : 80.61
} //dataType object

const myFunction = function () {
    console.log("Hello World!");
}  //dataType Function

// console.log(typeof newNum);

//===========================================================
//stack (Primitive) & heap (Non-primitive)

let myName = "Aryan Jadhav"
let newName = myName
newName = "Atharv Jadhav"
// console.log(myName);
// console.log(newName);
let userOne = {
    email : "userone@gnail.com",
    upi : "upi@pay"
}

let userTwo = userOne
userTwo.email = "aryan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
