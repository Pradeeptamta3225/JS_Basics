

const user = {
    username: 'pardeep',
    price: 199,

    welcomeMessage: function(){
                console.log(` ${this.username} , welcome to the code `);
                console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);