
// Qus:- Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}


// const helloWorldFunction = createHelloWorld();
// console.log(helloWorldFunction()); 



// Qus:- Given an integer n, return a counter function. This counter function initially 
// returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
    return function() {
        return n++;
    };
}

const counter = createCounter(1);
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 


