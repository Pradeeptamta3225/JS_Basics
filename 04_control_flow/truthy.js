

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
    // console.log(`Object is empty`);
}



// Nullish coalescing Operator (??)

let val1;
//  val1 = 5 ?? 10;
// val1 = null ?? 5;
val1 = undefined ?? 10;

//  console.log(val1);

// Terniary Operator

// condition ? true : false

let icePrice = 100

icePrice <= 110 ? console.log("less then 80") : console.log("more then 80");