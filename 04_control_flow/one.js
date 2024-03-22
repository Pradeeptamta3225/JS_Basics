

if (2 == "2") {                                  // only check value
    console.log('Execute');
}

if (2 === "2") {                                     // strict check value and data type are same
    console.log('Execute');
}


let temp = 35

if (temp > 36) {
    console.log("Temp hotter");
} else {
    console.log('Normal');
}


let score = 200

if (score < 100) {
    let power = "fly"
    console.log(`user is: ${power}`);
} else {
    console.log("Chill");
}

