
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
// let rectangle = {
//     length: 1,
//     width: 2,


//     draw: function(){
//         console.log("Hello Baccho")
//     }
// };

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

//  function Rectangle(len, bre) {
//     this.length = len;
//     this.width = bre;
//     this.draw=function() {
//         console.log("Kyaa haal chaal");
//     }
//  }

//  objext creation using constructor function 

//  let rectangleObject = new Rectangle(4, 5);

//   rectangleObject.color = 'red';
//   console.log(rectangleObject);

//   delete rectangleObject.color;
//   console.log(rectangleObject);



// types of JS 

// let a= 10,b=a;
// a++;
// console.log(a);
// console.log(b);


// let a= {value :10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);



// let a=10;

// function inc(a){
//     a++;
// }

// inc(a);
// console.log(a);


// let a= {value : 10};
// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);


// for- in loop

// let rectangle ={
//     length:5,
//     width:10
// };

// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// if('car' in rectangle){
//     console.log("Present");
// }
// else{
//     console.log("absent");
// }


// object clonning
// let src ={
//     a:2,
//     b:3,
//     c:4
// };

// let dest ={};
// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);


// let src ={
//     a:2,
//     b:3,
//     c:4
// };

// let src2 = {value :10};

// let dest = Object.assign({}, src, src2);
// console.log(dest);

// src.a++;
// console.log(dest);


// let src ={
//     a:5,
//     b:3,
//     c:4
// };
// let dest={...src};
// console.log(dest);

// src.a++;
// console.log(dest);



// objects & arrays
// let lastName = "Tamta";

// let firstName = new String("Pradeep");

// let message =  
// `Hello ${lastName};

// Thanks for the opportunity

// Regards,
// Pradeep`;



// // let words = message.split(" ");

// console.log(message);



// // date & time object 

// let date = new Date();

// let date2 = new Date('Aug 27 1996 21:30');

// let date3 = new Date(1996 , 7 ,27 ,21)

// date3.setFullYear(1947)
// console.log(date3);



// Arrays

// let number = [1,2,3,4,8,5];

// console.log(number);

// // end -push 
// // start - unshift 
// // middle - splice 

// // searching
// console.log(number.indexOf(9));

// console.log(number.includes(2));

// console.log(number.indexOf(4, 2));


// let courses = [
//     {No:1, Name:"Pradeep"},
//     {No:2, Name:"Tamta"}
// ];

// call back-function 

// let course = courses.find(function(course)
//     {return course.Name === "Pradeep";
// });

// Arrow Function 
// let course = courses.find(course => course.Name === "Pradeep");

// console.log(course);


// Removing elements 

// let number = [1,3,5,7,8,9];

// // number.pop();
// // number.shift();
// number.splice(3, 2);
// console.log(number);

// empting an array 

let numbers = [1,2,3,4,5];

numbers.length= 0;
console.log(numbers);
// to know by default function 


//   let Rectangle1 = new Function(`length` , `breath`,
// ` this.length = len;
//   this.width = bre;
//   this.draw=function() {
//       console.log("Kyaa haal chaal");
//   }`);

//   let rect = new Rectangle1(2, 3);
//   console.log(rect)