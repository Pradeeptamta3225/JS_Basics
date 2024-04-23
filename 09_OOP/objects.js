function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function creatUser(username,score){
    this.username = username;
    this.score = score;
}

creatUser.prototype.increment = function(){
    this.score++;
}

creatUser.prototype.printMe = function(){
    console.log(`Price to ${this.score}`);
}


const milk = new creatUser("Milk", 66);
const butterMilk = new creatUser("ButterMilk", 40);

milk.printMe();
butterMilk.printMe();