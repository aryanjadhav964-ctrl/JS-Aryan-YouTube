let a = 10;
const b = 20;
var c = 30;
//Above Variables written in global scope

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let d = 40;
    const e = 50;
    var f = 60;
}
// if (condition) {...block of scope...}

// console.log(d);//it will give error 
// console.log(e);//it will give error
// console.log(f);


//we cannot access the scope variables in global scope axcept var 


//nested level scope
//for function
function one() {
    let name  = "Aryan";

    function two() {
        const website = "Youtube"
        console.log(name);
    }
    // console.log(website);
    // two();
}
// one();



//for conditional statement


if (true) {
    const name = "Aryan";
    if(name === "Aryan") {
        const website = "YouTube"
        console.log(name + " " + website);
    }
    // console.log(website);
}
// console.log(name);


//================
function addOne(num) {
    return num + 1;
}

addOne(5);

//===> also called as expression to the below code
const addTwo = function (num) {
    return num + 2;
}
addTwo(5);