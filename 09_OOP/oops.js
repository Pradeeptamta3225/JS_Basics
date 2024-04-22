

const userData = {
    username: "Pradeep",
    email: "xyz@gmail.com",
    age: 20,

    getUserDetail: function(){
        console.log(this);
    }
}

// console.log(this);
// console.log(userData.username);



function User(username, email,age){
    this.username = username;
    this.email = email;
    this.age = age;

    const greeting = function(){
        console.log(`welcome : ${this.username}`);
    }

}

const userOne = new User("Pradeep", "xyz@gmail.com",23);
const userTwo = new User("Tamta", "abc@gmail.com", 20);

console.log(userOne);
console.log(userTwo);