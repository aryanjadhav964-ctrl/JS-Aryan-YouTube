//singleton object eg,
// const tinderUser = new Object()
//non singleton object
const tinderUser = {}

tinderUser.name = "Nikhil"
tinderUser.email = "nikhiln@gmail.com"
tinderUser.isFollow = true
// console.log(tinderUser);

//object inside object eg.,

const instaUser = {
    email : "aryanj@gmail.com",
    age : 19,
    Name : {
        fullName : {
            firstName : "Aryan",
            lastName : "Jadhav"
        }    
    }
}

// console.log(instaUser.Name.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj1, obj2)// Object.assign(target,source)
const obj3 = {...obj1 , ...obj2}//spread operator use
// console.log(obj3);

//most of the time we get data from data base in the form of arrays of objects eg.,

const users = [
    {
        id : 1,
        email : "aryanj@gmail.com"
    },
    {
        id : 2,
        email : "anushkad@gmail.com"
    },
    {
        id : 3,
        email : "nikita@gmail.com"
    },
    {
        id : 4,
        email : "pranav@gmail.com"
    }
]


//1st object we defined
// console.log(Object.keys(tinderUser));//we gets keys in array
// console.log(Object.values(tinderUser));//we gets values of keys in array
// console.log(Object.entres(tinderUser));//we gets each key and value pair in array inside a array 