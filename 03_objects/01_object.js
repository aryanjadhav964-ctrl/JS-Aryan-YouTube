//singleton object
//Object.create

//object litrals 

let mySym = Symbol("key1")

const jsUser = {
    name : "Aryan",
    age : 19,
    [mySym] : "myKey1",
    "full name " : "Aryan Jadhav",
    isLoggedIn : false,
    email : "aryan@google.com",
    lastLoggedInDays : ["Monday", "Tuesday", "Satarday"]
}

//the way's of accessing the object 

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name "]);
// console.log(jsUser[mySym])

jsUser.email = "aryan@chatgpt.com"
//Object.freeze(jsUser)//after this we cannot change object's
jsUser.email = "aryan@microsoft.com"

// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello Js User!");
}
// console.log(jsUser.greeting);//tooks refarance

// console.log(jsUser.greeting());//prints function

jsUser.welcome = function() {
    console.log(`Hello JSUser, ${jsUser.name}`);
}
// console.log(jsUser.welcome());