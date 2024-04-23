

const myHero = ["Ironman", "Thor", "Hulk"];

const heroPower = {
    Ironman: "Science",
    Thor: "Hammer",
    Hulk: "Power"

}


Object.prototype.pradeep = function(){
    console.log(`Pradeep is present in all object`);
}

heroPower.pradeep();

Array.prototype.heyPradeep = function(){
    console.log(`Hey pradeep`);
}


myHero.heyPradeep();
// heroPower.heyPradeep();

myHero.pradeep();


//inheritance 


const user = {
    name: " ",
    login: true
}

const teacher = {
    fulltime: true

}

const teacingAssistance = {
        course: "JS",
        assignment: true,
        __proto__: teacher
}


teacher.__proto__ = user
console.log(user);
// modern syntax

Object.setPrototypeOf(teacher, user)
