

let userEmail = "pradeeptamta@gmail.com"

if (userEmail) {
    // console.log(`useremail is here`);
}

let userName = []

if (userName) {
    // console.log(`username is empty`);
} else {
    // console.log(`username is fill`);
}


// falsy value --- false, 0, -0, "", undefine, NaN, BigInt 0n, Null

// Truthy value --- "0", {}, " ",'false',[], function(){}


if (userName.length === 0) {
    // console.log(`array is empty`);
}


let emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}