

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNum
.map( (num) => num + 2)
.map( (num) => num * 2)
.filter( (num) => num >=12)



console.log(newNums);