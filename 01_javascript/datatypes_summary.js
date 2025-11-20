//primitive

//types : 7 => string, number, boolean, null, undefined, symbol, bigint


let num = 100
let newNum = 100.30

const isLoggedIn = true
const outSideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNum = 1234567n
// console.log(id === anotherId);


//Referance (Non primitive) => Array, Objects, Functions

let arr = ["Aryan", "Viraj", "Raj", "Nikhil"];

const student = {
    name : "Aryan",
    age : 18,
    isPass : true,
    score : 80.61
}

const myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof arr);
