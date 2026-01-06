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

console.log(loggedinMessage(23));

//====================================

