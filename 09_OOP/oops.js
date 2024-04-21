

const user = {
    username: "Pradeep",
    email: "xyz@gmail.com",
    age: 20,

    getUserDetail: function(){
        console.log(this);
    }
}

console.log(this);
console.log(user.username);