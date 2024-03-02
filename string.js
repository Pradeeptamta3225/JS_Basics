let name = "pradeep"
let age = 23


// console.log(`Hi my name is ${name} and my age is ${age}`);
// console.log(`Hi my name is ${name.toUpperCase()} and my age is ${age}`);


let gameName = new String("Pradeep-Tamta")

// console.log(gameName[3])
// console.log(gameName.__proto__);
// console.log(gameName.length)

// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('p'));


let newString = gameName.substring(0, 3)
console.log(newString)

let anotherString = gameName.slice(-13,8)
console.log(anotherString)

let newStringOne = "  Pradeep  "
console.log(newStringOne)
console.log(newStringOne.trim());


let url = "www.pradeeptamta1650@gmail.com"
console.log(url.replace("@", ""))

console.log(url.includes("@"));    //search keyword availble is their 

console.log(url.split("@"))  //break the keyword grom their
