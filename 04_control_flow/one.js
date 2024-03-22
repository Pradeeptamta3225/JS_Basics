

// if (2 == "2") {                                  // only check value
//     console.log('Execute');
// }

// if (2 === "2") {                                     // strict check value and data type are same
//     console.log('Execute');
// }


// let temp = 35

// if (temp > 36) {
//     console.log("Temp hotter");
// } else {
//     console.log('Normal');
// }


// let score = 200

// if (score < 100) {
//     let power = "fly"
//     console.log(`user is: ${power}`);
// } else {
//     console.log("Chill");
// }

let score = 1000

if (score < 300) {
    console.log('less the 300');
} else if (score < 500) {
    console.log('Less than 500');
}else if (score < 700) {
    console.log("less then 700");
}else{
    console.log("less then 1200");
}


let userLoggedIn = true
let userDebitCard = true


if (userDebitCard && userLoggedIn) {
    
    console.log("allow access");
}

let signInGoogle = false
let signInEmail = true

if (signInEmail || signInGoogle) {
    console.log("allow entry");
}