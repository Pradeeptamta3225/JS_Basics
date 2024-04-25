
class User {
    constructor(username, email, password){
        this.username = username
    }

    logMe(){
        console.log(`User Name is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A course is ${this.username}`);
    }
}

const chai = new Teacher("pradeep", "pradeep@gmail.com", 123);

chai.addCourse();

chai.logMe();

console.log(chai === Teacher);
console.log(chai instanceof Teacher);