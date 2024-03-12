

let happenUser = {}

happenUser.Id = "234kndfbnd"
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


let obj3 = Object.assign(obj1,obj2)
console.log(obj3);