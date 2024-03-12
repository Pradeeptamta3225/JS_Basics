
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
myobj.email = "tamta1650@gmail.com"
// console.log(myobj);
// Object.freeze(myobj)
myobj.name = "tamta"
// console.log(myobj);

myobj.gift = function(){
    console.log("Kya Haal Hai");
}

myobj.giftTwo = function(){
    console.log(`Kya Haal Hai,  ${this.name}`);
}


console.log(myobj.gift());
console.log(myobj.giftTwo());