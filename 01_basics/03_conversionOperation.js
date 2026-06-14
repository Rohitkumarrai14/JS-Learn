let score="33"  //use value to check as 33abc ,null,undefined,true,a string 

console.log(typeof score)     //this tell the type according to the value of let 
console.log(typeof(score))

// if you are sure you have to perform the operation in Number use the below 
let valueInNumber=Number(score) //use number as =>capital Number
console.log(typeof valueInNumber)

// if score ="33abc"
 // and you use Number the JS will give the number type 
 //but when you will print the actual value it will give NaN(Not a Number)
 console.log(valueInNumber)


 // we can see that 
 //"33"=>33
 //33anc=>NaN
 //true=>1 /flas=>0
 
 let isLoggedIn=1 //use value to check 0,empty string 
 let booleanIsLoggedIn=Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
// 1=>true /0->false;
//""=>false;
//"hitesh"=>true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *******************************Operation****************************

let value=3
let negvalue= -value  // we just assigned the negative value 
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*8)
console.log(2**2)
console.log(2/2)
console.log(2%2)   //basic maths operation 

let str1="hello"
let str2=" rohit"

let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1 + "2")
console.log("1"+2+2)
console.log( 1+2+"2")

console.log(+true)
console.log(+"")

let gameCounter=100
gameCounter++;
console.log(gameCounter)