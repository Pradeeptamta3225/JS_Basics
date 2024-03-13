
let happenUser = {}

happenUser.Id = "234kndfbnd"
happenUser.name = "Pradeep"
happenUser.LoggedIn = true

// console.log(happenUser);


let realUser = {
    fullname:{
        firstname:{
           firstname: "pradeep",
           lastname: "tamta"
        }
    }
}

// console.log(realUser.fullname.firstname.lastname);

let obj1 = {1:'a', 3:'c'}
let obj2 = {2:'b', 4:'d'}

// let obj3 = {obj1 ,obj2}


// let obj3 = Object.assign(obj1,obj2)
let obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(happenUser);
// console.log(Object.values(happenUser));
// console.log(Object.keys(happenUser));
// console.log(Object.entries(happenUser));

// console.log(happenUser.hasOwnProperty("name"));


let course = {
    name: "100 Days of Job",
    price: 999,
    courseTeacher: "pradeep"
}

let {courseTeacher} = course          // Destructuring
let {courseTeacher: guru} = course  
console.log(guru);


[
    {},            //API Formate
    {},
    {}
]