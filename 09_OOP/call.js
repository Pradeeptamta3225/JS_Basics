
function setUser(username){
  this.username = username;
}

function createUser(username, email, password){

    setUser.call(this,username)
    this.email = email;
    this.password = password;
}

const pradeep = new createUser("Pradeep", "xyz@fb.com", 234);

console.log(pradeep);