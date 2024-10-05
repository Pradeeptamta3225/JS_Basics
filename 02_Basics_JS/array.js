

// **************** Array ****************

// let number = [1, 2, 3, 4, 5]
// console.log(number)
// console.log(number[2])


// ***********Array Method************

// let myArr = [1, 2, 3, 4, 5, 6]
// myArr.push(6)
// myArr.push(9)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

// console.log("A ", myArr)

// let myArr1 = myArr.slice(1, 3)

// console.log(myArr1)
// console.log("B ", myArr)

// let myArr2 = myArr.splice(1, 3)
// console.log("C ", myArr)
// console.log(myArr2)



// let indianHeros = ["shaktiman", "arymaan", "Gunior G"]
// let marvalHeros = ["Ironman", "thor", "Thanos"]

// indianHeros.push(marvalHeros)
// console.log(indianHeros.length)   
// console.log(indianHeros)


// Concatinate 
// let allHero = indianHeros.concat(marvalHeros)      //Concatinate
// console.log(allHero)

// let newAllHero = [...indianHeros,...marvalHeros]
// console.log(newAllHero)



// let myArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 1, 3, [5, 3, 6]]]
// let realArr = myArr.flat(2)
// console.log(realArr)


let myArr = "Pradeep"
console.log(Array.isArray(myArr))
console.log(Array.from(myArr))
console.log(Array.from({name: "Pradeep"}))   //Return always empty array


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 500

console.log(Array.of(score1, score2, score3, score4))

console.log(score1);

console.log("Pradeep Tamta");








