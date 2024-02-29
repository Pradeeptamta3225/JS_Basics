// Primitive

// 7 Primitive Data Type = String, Number, BigInt, Symbol, null, undefined, Boolean



let name = "Pradeep"   // String
let age = 23   //Number
let bigNumber = 9853894723797952395723967289n   //BigInt

//symbol
let id = Symbol('1234')
let anotherId = Symbol('1234')

// console.log(id === anotherId)

let todayTemp = null   //null != 0

let password;  //undefined

let result = true //boolean



// Non-Primitive(Refrence)

// Array, Object, Function

let student = ["ramesh", "suresh", "yogesh"];  //array


// object 
let obj1 = {
     name: "Pradeep",
     age: 22                         
}


// function

let myFunction = function(){
    console.log("Hello Pradeep")
}

// console.log(typeof student)




// Stack (Primitive)  and Heap(Non-Primitive)

let myYouTube = "Pradeeptamta"
let anotherYoutube = myYouTube

anotherYoutube = "abc@gmail"


console.log(myYouTube)
console.log(anotherYoutube)


let userOne = {
    email: "pradeeptamta1650@gmail.com",
    address: "xyz"
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)