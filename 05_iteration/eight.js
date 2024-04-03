

const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//             return acc + currval
// },0)

const myTotal = myNum.reduce( (acc,curr) => acc + curr,0)


// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS Course",
        itemPrice: 4999
    },
    {
        itemName: "Java Course",
        itemPrice: 5999
    },
    {
        itemName: "Python Course",
        itemPrice: 2999
    },
    {
        itemName: "DS Course",
        itemPrice: 14999
    },
]

const totalShopping = shoppingCart.reduce( (acc,item) => acc + item.itemPrice,0)

console.log(totalShopping);