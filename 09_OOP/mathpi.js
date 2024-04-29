

const descript = Object.getOwnPropertyDescriptor(Math, "PI");


// Math.PI = 5
// console.log(descript);
// console.log(Math.PI);


const chai = {
        name: "adrak",
        price: 30,
        isAvilible: true,


        handle: function() {
            console.log(`Chai nahi bani`);
        }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
})


console.log(Object.getOwnPropertyDescriptor(chai, "name"));



for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
   
}