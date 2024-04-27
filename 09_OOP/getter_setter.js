
class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }


    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
        console.log(this._email);
    }

    get password(){
        return this._password
    }

    set password(value){
        this._password = value
    }
}


const pradeep = new User("xyz.com", "just")

console.log(pradeep.password);

console.log(pradeep.email);