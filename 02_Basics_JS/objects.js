
let mySym = Symbol("key1")
let myobj = {
            name: "Pradeep",
            class: "12th",
            age: 19,
            email: "pradeeptamta1650@gmail.com",
            [mySym]: "mysym1"
}


console.log(typeof myobj[mySym]);
console.log(myobj["age"]);