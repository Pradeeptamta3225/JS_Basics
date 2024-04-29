

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`A user has USERNAME: ${this.username}`);
    }

    static createId(){
        return 123
    }
}

const chai = new User("Pradeep")
// console.log(chai.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}


const iphone = new Teacher("Pradeep","Pradeep@gmail.com");

iphone.logMe();

// console.log(iphone.createId());