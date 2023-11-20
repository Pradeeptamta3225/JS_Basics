
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

// let numbers = [1,2,3,4,5];

// numbers.length= 0;
// console.log(numbers);


// combining & slicing array 
//  let first = [ 1,2,3,4];
//  let second = [5,6,7,8];

//  let combined = first.concat(second);
//  console.log(combined);

//  let sliced = combined.slice(2,4);
//  console.log(sliced);


//  let arr1 = [{name : "childs", value: '5'},
//  {name: "lang", value: "German"}];
                
            

//  let arr2 = [{name: "lang", value: "English"},
//  {name: "age", value: "18"} ];

//     let arr3 = arr1.concat(arr2);
//     console.log(arr3);     


// spread operator

// let fisrt = [1,2,3]
// let second = [4,5,6]

// let combined = [...fisrt,'a',...second,'b']

// console.log(combined);


// Iterating an Array 

// let arr = [10,20,30,"Kese Ho",40,50];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(element => console.log(element));


// Joining Array 
// let arr = [10,20,30,40,50];

// let joined = arr.join(',');
// console.log(joined);

// Split Array 

// let message = "This is my first message";

// let parts = message.split(' ');
// console.log(parts);


// let joined = parts.join(' / ');
// console.log(joined);

// Sorting Array 

// let number = [50,30,40,35,20];
// number.sort();
// console.log(number);

// // Reverse 
// number.reverse();
// console.log(number);

// filering Array

// let number = [1,2,3,6,7,8,9]

// let filterd = number.filter(value =>value >= 4);

// console.log(filterd);


// Map Array 

// let numbers = [5,6,7,8,9]

// let items = numbers.map(value =>'Student_No' + value);

// console.log(items);


// Map with Object 

// let numbers = [1,2,-3,-6]

// let filterd = numbers.filter(value => value >= 0);

// let items = filterd.map(function(num){
//     return {value:num};
// });

// console.log(items); 


// Function 

// function Declartion

// function run(){
//     console.log("Running");
// }

// run ();

// Named function assignment 

// let stand = function walt(){
//     console.log("walking");
// }

// stand();


// Anonymous function assignment 

// let stand2 = function(){
//     console.log("hehehe");
// }

// stand2();



// Argunment function

// function sum(){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
// return total;
// }


// Rest Operator 

// function sum(num,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5);


// Default Parameter

// function intrest (p, r=5, y=10){
//     return p*r*y/100;
// }

// console.log(intrest(1000,4,3));



// Getter & Setter

// let person ={
//     fName: "Pradeep",
//     lname: "Tamta",


//     get fullName(){
//         return `${person.fName} ${person.lname}`;
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];

//     }


// };

// person.fullName = ('Yogesh Sharma');
// console.log(person.fullName)


// console.log(`${person.fName} ${person.lname}`);

// try {
//     personalbar.fullName = 1;
// }

// catch(e){
//     alert (e);
// }


// Reducing an array 

// let arr = [1,2,3,4,5];
//  let totalSum = arr.reduce((accumulator,currentValue) => accumulator + currentValue);

//  console.log("Total of array")
//  console.log(totalSum)


// function mast(){

//     var a = 1;
//     let b = 1;
//     {
//         var a = 2;
//         let b = 2;
//     }

//     console.log(a,b);
// }

// mast();
// let ans = sum(1,2,3,4);
// console.log(ans);
// to know by default function 


//   let Rectangle1 = new Function(`length` , `breath`,
// ` this.length = len;
//   this.width = bre;
//   this.draw=function() {
//       console.log("Kyaa haal chaal");
//   }`);

//   let rect = new Rectangle1(2, 3);
//   console.log(rect)



// BMI Calculator

// let markMass = 90;
// let heighMark = 1.78;

// let johnMass = 80;
// let heightJohn = 1.45


// let BMIMark = markMass / heighMark ** 2;
// let BMIjohn = johnMass / (heightJohn* heightJohn);

// console.log(BMIMark,BMIjohn);


// console.log(BMIMark < BMIjohn);

// const arr = [1,2,3,4,5];
// arr.length = 2;
// console.log(arr);

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(()=> console.log("C"));
// console.log('D');



// IF ELSE 

// let age = 13;

// if(age >= 18) {
//     console.log("You are eligible for vote");
// }else {
//     let yearLeft = 18 - age;
//     console.log(`You are just  ${yearLeft} :Year`)
// }


const birthYear = 1998;

if(birthYear <= 2000){
 console.log(`You are 20th Born`)
}else {
    console.log(`You are 21st Born`)
}
