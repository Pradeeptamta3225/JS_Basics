

// for of

const arr = [1, 3, 5, 7, 9];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello World!"

for (const greet of greeting) {
    // console.log(`Value of Each Greeting ${greet}`);
}


//Map 

const map = new Map();

map.set('IN',"India")
map.set('FR',"France")
map.set('SN',"Singapour")

// console.log(map);

for (const [key , value] of map) {
    // console.log(key,":-", value);
}



const myObject = {
    game1 : "NFS",
    game2 : "Taken3"
}

for (const [key, value] of myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
}