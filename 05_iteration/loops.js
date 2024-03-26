

for (let i = 1; i <=5; i++) {
    const element = i;
    // console.log(element);
    
}


for (let i = 0; i <=5; i++) {
    const element = i;
    for (let j = 0; j <=5; j++) {
        const element = j;
        // console.log(`Inner loop J =  ${element}]`);
    }
    // console.log(`Outer Loop I = ${element}`);
    
}


for (let i = 4; i <= 4 ; i++) {
    const element = i;
    // console.log(`Outer Loop : ${i}`);

    for (let J = 1; J <= 10; J++) {
        const element = J;
        // console.log(i + '*' + J + ' = ' + i*J );
    }
    

}



let myArray = ["Shaktiman", "Aryaman", "IronMan"]

console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

    console.log(element);
}


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log( "Value is 5");
        break
    }
    console.log(`Value of ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log( "Value is 5");
        continue
    }
    console.log(`Value of ${i}`);
    
}



