

// let newDate = new Date

// console.log(newDate)
// console.log(newDate.toLocaleString())
// console.log(newDate.toDateString())
// console.log(newDate.toISOString())
// console.log(newDate.toJSON())
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleTimeString())
// console.log(newDate.toString())




// let newDate = Date.now()
// console.log(Math.floor(newDate /1000))


let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())


let yearDate = newDate.toLocaleString('default', {
                 year: "numeric"})


console.log(yearDate)