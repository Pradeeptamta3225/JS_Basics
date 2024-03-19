
// var c = 500

let a = 50;

if (true) {
    
let a = 10;
const b = 20;
var c = 30;

// console.log("Scope:", a);
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = 'Pradeep'

    function two(){
        const account = ' Facebook';
        console.log(username + account)
    }

    two()
}

one()



if (true) {
    const username = 'pradeep'

    if (username === 'pradeep') {
        const website = ' instagram'
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);



//Hoisting Overview
console.log(addone(3));
function addone(num){
    return num + 1
}


console.log(addTwo(5));              // Hoisting is not allow in stored variable
const addTwo = function(num) {
    return num + 2
}

