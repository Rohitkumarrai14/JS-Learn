//The way data kept in memory or the way its access ,on this basis the data type is divided in two way 
// 1. Primative Datatype
// 7 types: String ,Number,Boolen,Null,Undefined,Symbol,BigInt

// javascript is dynamically typed language not static *******NOTE
const score=100;
const lscore=100.33
const isLoggedIn=false;
const outsideTemp=null
let userEmail;

//symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)  //these two id are different due to using the symbol

//BigInt
const bigNumber=7463774687326474684n




// 2.ReferenceType/Nonprimative type
// Array ,Objects, Function

const hero=["shatiman","ironman","Captain America"];  //Array

//Object
let myObj={
    name:"rohit",
    age:22,
}

//Function
 const myFunction=function(){
    console.log("Hello")
 }

 console.log(typeof myFunction)   //it return function but called object function
 //the non primetive type are mainly object type 
 //null is also the obejct type 
 
