

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



// function loginUserMessage(username){
//     if(!username) {
//           console.log("Please enter a user name");
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage());
// console.log(loginUserMessage("Pradeep"));


function cartPrice(...num1){
  return num1
}

console.log(cartPrice(200,300,500,1500));


const user = {
        username: "Pradeep",
        price: 199
}

function handleObject(anyobject) {
    console.log(`"username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Pradeep",
    price: 200
})


let myNewArr = [100, 200, 300, 400, 500]

function returnThirdValue(getValue){
    return getValue[2]
}

console.log(returnThirdValue(myNewArr));