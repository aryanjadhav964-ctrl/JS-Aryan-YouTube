//syntax of object de-structuring
const course = {
    courseName :  "aryan js ",
    price : 499,
    courseInstructor : "Aryan"
}

// console.log(course.courseInstructor);

//another way we do our these work 
const {courseInstructor : name} = course ;
// console.log(name);

//example of Json = java script object notation
// {
//     "name" : "Aryan",
//     "price" : "499",
//     "courseName" : "aryan js"
// }

//nested json example
// {
//   "id": 101,
//   "username": "aryan_j",
//   "email": "aryan@example.com",
//   "address": {
//     "city": "Navi Mumbai",
//     "state": "Maharashtra",
//     "country": "India"
//   },
//   "skills": ["Git", "GitHub", "JavaScript"]
// }