

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