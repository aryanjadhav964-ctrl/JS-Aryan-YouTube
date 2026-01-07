//examples of functions



function printName() {
    console.log("Aryan Jadhav");
}

// printName()          //function referance

function addTwoNums(number1,number2) {
    console.log(number1 + number2);
    
}
// addTwoNums(5, 4)
// addTwoNums(5, "4")
// addTwoNums(5, "b")

// let result = addTwoNums(5,6);
// console.log("Result : ", result );


//=============================


function loggedinMessage(userName) {
    if (!userName) {
        console.log("Please enter you'r username.");
        return;
    } 
    
    // "Why are we comparing with a string if we want to check a number?"
    // Because JavaScript describes data types using strings.
    /*

    typeof 23        // "number"
    typeof "Aryan"  // "string"
    typeof true      // "boolean"
    typeof {}        // "object"
    typeof undefined // "undefined"
    
    */
   
    if (typeof userName === "number") {
        console.log("Please enter you'r username.");
        return;
    }
    return `${userName} is just logged in.`
}

// console.log(loggedinMessage(23));

//====================================

//use of rest operator 
function calculateCartPrice (...num1) {
    return num1;
}

// console.log(calculateCartPrice(200,300,400));

//================= another example with object

const user = {
    name : "Aryan",
    price : 399
}

function objectHandler (anyobject) {
    console.log(`The user is ${anyobject.name} and the budget is ${anyobject.price}.`);
}

// objectHandler(user)

// objectHandler({
//     name : "Nikhil",
//     price : 399
// })

//===================== example with array

let myNewArray = [200,300,400,500]

function returnSecondValue (getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 1200]));
