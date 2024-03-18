

function myName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");

}

// myName()

// function plus(num1, num2){
//     console.log(num1 + num2);
// }

// // plus(2," pradeep")
// plus(2,7)


// function plus(num1, num2){
//     let result = num1 + num2
//     return result
// }

// let result = plus(4,9);
// console.log("Result:", result);



function loginUserMessage(username){
    if(!username) {
          console.log("Please enter a user name");
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
console.log(loginUserMessage("Pradeep"));


