

const user = {
    username: 'pardeep',
    price: 199,

    welcomeMessage: function(){
                // console.log(` ${this.username} , welcome to the code `);
                // console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);

function one() {
    let username = 'pradeep'
    // console.log(this.username);
}

one()


const two = function (){
    let username = 'pradeep'
    // console.log(this.username);
}

two()




const Two = () => {
    let username = 'pradeep'
    // console.log(this.username);
}

Two()



//+++++++++++++++++  Function   ++++++++++++++++


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,5));


const addthree = (num1, num2, num3) => num1 + num2 + num3                //implicit

console.log(addthree(2,5,7));



const naam = () => ({username: 'Pradeep'})

console.log(naam());







