//array
//basic array
const arr = [0, 1, 2, 3, 4, 5, 6];
const myArray = ["Spider-Man", "Shaktiman"];
const myarr =new Array(1,2,3,4);

// console.log(arr[3]);

//array method's
// myarr.push(5);
// console.log(myarr);
// myarr.pop();

// myarr.unshift(9);
// myarr.shift();

// console.log(myarr.includes(9)); //tells the value is inside or not 
// console.log(myarr.indexOf(3)); //it shows the idx of num which is passed in it like 3

// const newarr = myarr.join() //puts myarr in  newarr but it converts its values in str 

// console.log(myarr);
// console.log(typeof newarr);

//slice and splice method
//interbiew question will be=>
console.log("A",arr);
const myn1 = arr.slice(1,3);
console.log("B", myn1);

const myn2 = arr.splice(1,3);
console.log("C",arr);
console.log(myn2);