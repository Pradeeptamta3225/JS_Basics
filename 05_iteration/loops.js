

for (let i = 1; i <=5; i++) {
    const element = i;
    // console.log(element);
    
}


for (let i = 0; i <=5; i++) {
    const element = i;
    for (let j = 0; j <=5; j++) {
        const element = j;
        console.log(`Inner loop J =  ${element}]`);
    }
    console.log(`Outer Loop I = ${element}`);
    
}


for (let i = 4; i <= 4 ; i++) {
    const element = i;
    console.log(`Outer Loop : ${i}`);

    for (let J = 1; J <= 10; J++) {
        const element = J;
        console.log(i + '*' + J + ' = ' + i*J );
    }
    

}