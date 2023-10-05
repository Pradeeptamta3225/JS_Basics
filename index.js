
console.log('Ram Ram Bhai Saareyaane Pranaam');


// let a = 6;

// console.log(a);


// let lastName = ("Tamta");
// console.log(lastName);

// lastName = 3;
// console.log(lastName);


// console.log(3<4);


// let age = 19;

// let voteStatus = (age >= 18) ? 'Eligible For Vote' : 'Not Eligible For Vote';

// console.log(voteStatus)


// let marks = 75;

// if (marks >= 90){
//     console.log('A');
// }

// else if (marks >= 80){
//     console.log('B')
// }

// else if (marks >= 70){
//     console.log('C')
// }
// else if (marks >= 60){
//     console.log('D')
// }
// else{
//     console.log('E')
// }


// let num = 4;

// switch(num){
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     case 4: console.log('D');
//     break;
//     default: console.log('E');
// }

// for(let i =0; i< 5; i=i+1){
//     console.log(i);
// }

// let i=0;
// while(i < 10)
// {
//     console.log(i);
//     i++;
// }


// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<9);

// object create 
let rectangle = {
    length: 1,
    width: 2,


    draw: function(){
        console.log("Hello Baccho")
    }
};

// factory function  

// function createRectangle(lambai, choudai){
//     return rectangle = {
//         length: lambai,
//         width: choudai,
    
    
//         draw(){
//             console.log("Hello Baccho");
//         }
//     };

// }

// let createObj1 = createRectangle(5,6);
// let createObj2 = createRectangle(3,7);
// let createObj3 = createRectangle(1,9);

// constructor function -> pascal notation

 function Rectangle(len, bre) {
    this.length = len;
    this.width = bre;
    this.draw=function() {
        console.log("Kyaa haal chaal");
    }
 }

//  objext creation using constructor function 

 let rectangleObject = new Rectangle(4, 5);

  rectangleObject.color = 'red';
  console.log(rectangleObject);

  delete rectangleObject.color;
  console.log(rectangleObject);



// to know by default function 


//   let Rectangle1 = new Function(`length` , `breath`,
// ` this.length = len;
//   this.width = bre;
//   this.draw=function() {
//       console.log("Kyaa haal chaal");
//   }`);

//   let rect = new Rectangle1(2, 3);
//   console.log(rect)